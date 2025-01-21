"use client";
import "public/styles/bootstrap.min.css";
import "public/styles/owl.carousel.css";
import "public/styles/owl.theme.default.css";
import "public/styles/animate.css";
// import "public/styles/main_styles.css";
import "public/styles/responsive.css";
import "../public/favicon.ico";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS (includes Popper.js)
import "owl.carousel/dist/assets/owl.carousel.css";
import "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "jquery.scrollto";
import "/plugins/marquee/jquery.marquee.min.js";
import "jquery";
import { useEffect } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <link rel="icon" href="/homelogo.png" />
      </Head> */}
      <Component {...pageProps} />
    </>
  );
}
