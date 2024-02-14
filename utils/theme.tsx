import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            light: "white",
            main: "blue",
            dark: "black",
            contrastText: "#fff",
        },
    },
    typography: {
        fontFamily: "Roboto",
    },
});