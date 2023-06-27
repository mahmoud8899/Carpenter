import React from "react";
import { renderToString } from 'react-dom/server'
import Log from '../Icons/logo.ico'
import Najar from '../Icons/rr.png'
import { StaticRouter } from "react-router-dom/server";
import Routes from '../Router'
import { Helmet } from 'react-helmet';


export default function Render(req) {

  const appString = renderToString(

    <StaticRouter location={req.url}  >
        <Routes />
    </StaticRouter>

)


const helmet = Helmet.renderStatic()

  const html = `
  <!DOCTYPE html>
<html lang="ar" class="ar">
<head>
<title>نجار بالرياض</title>  
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">   
<link rel="icon" href=${Log} />
<meta name="google-site-verification" content="nudTrOck7CCX6fQdknp6WZMOE27dUN_w89Dm5zcmhFM" />
${helmet.title.toString()}
${helmet.meta.toString()}
${helmet.link.toString()}
      <meta name="theme-color" content="#d8bc64" />
    <link rel="stylesheet" type="text/css" href="/css/main.css" />
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11228036732"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11228036732');
</script>


<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PG6JSZL');</script>
<!-- End Google Tag Manager -->




</head>
<body ${helmet.bodyAttributes.toString()}>
    <div id="Mahmoud-Almadhoun+467098520">
         ${appString}
    </div>
    <script src="/client/bundle.js" defer ></script>
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11228036732"></script>

<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11228036732');
</script>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PG6JSZL"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

    
</body>
</html>
  `



  return html

}