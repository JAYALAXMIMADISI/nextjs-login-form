import DynamicForm from "@/components/dynamicForm";
import { fields, isFieldsValidate, loginFormInitialValues, loginFormValidationSchema, mandatoryFields } from "@/helpers/login";
import useReactHookForm from "@/hooks/useReactHookForm";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Container } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function LoginForm() {
    const { errors, setValue, getValues, watch, control } = useReactHookForm(
        loginFormInitialValues,
        loginFormValidationSchema,
        ""
    )

    console.log("check for watch values", watch())

    return (
        <>
            <Container sx={{
                display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',
                minHeight: '100vh', border: '2px solid',
            }}>
                <Box>
                    <DynamicForm
                        fields={fields}
                        errors={errors}
                        setValue={setValue}
                        getValues={getValues}
                        watch={watch}
                        control={control}
                    />
                </Box>
                <Link href={`/homePage/${watch().full_name}`}><LoadingButton variant="contained" size="medium"
                    loadingPosition="center"
                    color="primary"
                    disabled={!isFieldsValidate(errors, mandatoryFields, getValues)}
                //  onClick={handleSubmit}
                //  loading={loading}
                >Log In</LoadingButton></Link>
            </Container>
        </>
    )
}