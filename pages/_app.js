import BackgroundPic from "../components/layout.js";

export default function App({ Component, pageProps }) {
    return (
      <BackgroundPic><Component {...pageProps} /></BackgroundPic>
    );
  }