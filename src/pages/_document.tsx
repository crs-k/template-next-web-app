import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import {CssBaseline} from '@nextui-org/react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>
    };
  }

  render() {
    return (
      <Html>
        <Head>
          {CssBaseline.flush()}
          <link
            rel="icon"
            href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/cloud-with-lightning-and-rain_26c8-fe0f.png"
          />
        </Head>
        <body className="dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
