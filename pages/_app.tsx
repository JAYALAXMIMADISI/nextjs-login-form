import "@/styles/globals.css";
import { theme } from "@/utils/theme";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>;
}
