import Home from "./index";
import React from "react";
import type { AppProps } from "next/app";
import "../styles/global.scss";
import { ConfigProvider, StyleProvider, ThemePicker } from "vcc-ui";

function HomePage({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider config={{}}>
      <StyleProvider>
        <ThemePicker variant="light">
          <Component {...pageProps} />
        </ThemePicker>
      </StyleProvider>
    </ConfigProvider>
  );
}

export default HomePage;
