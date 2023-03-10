import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&family=Raleway&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="h-screen w-screen bg-cream">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
