import "../styles/globals.css";
import Home from "../components/layout/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Home {...pageProps}></Home>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
