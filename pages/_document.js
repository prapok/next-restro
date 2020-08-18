import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
         <Head>
            <link rel="icon" href="/favicon.png" />
            <link rel="stylesheet" href="/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/css/stylesheet.css" />
            <link rel="stylesheet" href="/css/navbar.css" />
            <link rel="stylesheet" href="/fonts/font-awesome/css/font-awesome.min.css" />
            <link rel="stylesheet" href="/css/animate.min.css" />
            <link rel="stylesheet" href="/css/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
            <script src="/js/isotope.pkgd.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          
          <script src="/js/jquery-3.2.1.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/top.js"></script>
          <script src="/js/loader.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument;