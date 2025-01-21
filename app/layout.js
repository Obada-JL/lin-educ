import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../images/homelogo.png";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>مؤسسة لين التعليمية</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="مؤسسة لين التعليمية" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="favicon" href="../images/homelogo.png" /> */}
        {/* <link rel="favicon" href="/images/homelogo.png" type="image/png" /> */}
        <link rel="stylesheet" href="/styles/bootstrap.min.css" />
        <link rel="stylesheet" href="/styles/main_styles.css" />
        <link rel="stylesheet" href="/styles/responsive.css" />
        <link rel="stylesheet" href="/styles/responsive.css" />
        <link rel="icon" href="/homelogo.png" />
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
