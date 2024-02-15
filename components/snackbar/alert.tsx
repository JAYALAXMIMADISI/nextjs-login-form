import { Alert, Snackbar } from "@mui/material";
import React from "react";

export default function SnackbarMessage({ handleClose, message, type, open }: any) {
    console.log("error")

    return (
        <>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }} variant='filled'>
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}