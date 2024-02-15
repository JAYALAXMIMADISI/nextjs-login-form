import DynamicForm from "@/components/dynamicForm";
import { fields, isFieldsValidate, loginFormInitialValues, loginFormValidationSchema, mandatoryFields } from "@/helpers/login";
import useReactHookForm from "@/hooks/useReactHookForm";
import { IToken } from "@/interfaces/login";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ArrowImg from "../assests/arrow.svg"
import { users } from "@/utils/dummyData";
import SnackbarMessage from "@/components/snackbar/alert";
// import useStyles from "@/styles";

const useStyles = makeStyles({
    loginContainer: {
        backgroundImage: "linear-gradient(#ffe6e6, #ffb3b3)",
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        borderRadius: "4px"
    },
    requiredText: {
        fontFamily: "roboto",
        fontSize: '10px'
    }
})

export default function LoginForm() {
    const styles = useStyles()
    const router = useRouter()
    const { errors, setValue, getValues, watch, control } = useReactHookForm(
        loginFormInitialValues,
        loginFormValidationSchema,
        ""
    )
    const [openAlert, setOpenAlert] = useState(false)

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<IToken | any>({})
    const [customErrorMessage, setCustomErrorMessage] = useState("")

    useEffect(() => {
        const fieldValues = JSON.parse(localStorage.getItem("fieldValues") || "{}")
        setValue("full_name", fieldValues?.full_name)
        setValue("email", fieldValues?.email)
        setValue("gender", fieldValues?.gender)
        setValue("love_react", fieldValues?.love_react)
    }, [])

    useEffect(() => {
        if (data && data !== undefined && Object.keys(data).length > 0) {
            sessionStorage.setItem("token", data?.token)
            setLoading(false)
            router.push(`/homePage/${watch().full_name}`)
        }

    }, [data])

    const handleClose = () => {
        setOpenAlert(false)
        setLoading(false)
    }

    const handleLogin = async () => {
        setLoading(true)
        const values = watch()
        let state = false
        const getUserName = users.filter((user) => user.name === values.full_name)
        if (getUserName === undefined || getUserName.length === 0) {
            state = true
            setCustomErrorMessage("Incorrect Full Name")
        }
        else {
            const getObjFormUSer = users.filter((user) => user.email === getUserName[0]?.email)
            console.log("check for getUserName", getObjFormUSer)

            if (getObjFormUSer) {
                if (getObjFormUSer[0]?.email !== values.email) {
                    state = true
                    setCustomErrorMessage("Incorrect Email")
                }
                else if (getObjFormUSer[0]?.gender !== values?.gender) {
                    state = true
                    setCustomErrorMessage("Incorrect Gender")
                }
            }
        }

        if (!state) {
            localStorage.setItem("fieldValues", JSON.stringify(watch()))
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({

                    username: 'kminchelle',
                    password: '0lelplR',
                })
            })
                .then(response => response.json())
                .then(json => setData(json));
        }
        else {
            setOpenAlert(true)
            setLoading(false)
        }
    }
    console.log("", watch())

    return (
        <>
            <Box
                sx={{

                    display: 'flex', justifyContent: 'space-between',
                    minHeight: '100vh', borderRadius: "4px", width: '100%'
                }}
            >
                <Box sx={{ width: "50%", display: 'flex', padding: '20px', justifyContent: 'center', alignItems: 'center', backgroundImage: "linear-gradient(#66b3ff,#cce6ff, #66b3ff)" }}>
                    <Box flexDirection={'column'} >
                        <Typography variant="h4">Log In Form</Typography>

                        <Typography sx={{
                            fontFamily: "roboto", fontSize: '10px', color: 'purple',
                        }}>Fill the Required Fields with (*) to Log In</Typography>

                    </Box>
                    <Image src={ArrowImg} alt='arrow' />
                </Box>
                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', backgroundImage: "linear-gradient(#ffb3b3,#ff9999,#ff8080)", }}>
                    <Box sx={{ width: '80%' }}>
                        <DynamicForm
                            fields={fields}
                            errors={errors}
                            setValue={setValue}
                            getValues={getValues}
                            watch={watch}
                            control={control}
                        />
                        <LoadingButton variant="contained" size="medium"
                            loadingPosition="center"
                            color="primary"
                            disabled={!isFieldsValidate(errors, mandatoryFields, getValues)}
                            onClick={() => handleLogin()}
                            loading={loading}
                            sx={{ width: '100%' }}
                        >
                            Log In
                        </LoadingButton>
                    </Box>
                </Box>

            </Box>
            {openAlert && <SnackbarMessage
                open={true}
                handleClose={handleClose}
                message={customErrorMessage}
                type='error'
            />}
        </>
    )
}