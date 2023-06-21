import React from "react";
import { renderToString } from 'react-dom/server'
import App from '../App'
import Log from '../Icons/logo.ico'
import Najar from '../Icons/rr.png'




export default function Render() {

  const User = renderToString(
    <App />
  )

  const html = `
  <!DOCTYPE html>
<html lang="ar" class="ar">
<head>
<title>نجار خشبي | نجار موبيليا</title>  
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">   
<meta property="og:image" content=${Najar}  />
<meta property="og:image:url"  content=${Najar}  />
<meta property="twitter:image" content=${Najar}  />
<meta property="og:title" content='نجار خشبي | نجار موبيليا' />
      <meta property="og:image" content=${Najar}/>
      <meta
        property="og:url"
        content='https://www.najarv.com/' 
      />
      <meta name="theme-color" content="#d8bc64" />
      <meta name="description" content=" نحن فريق من الحرفيين المهرة والمتخصصين في فن النجارة. نقدم خدمات الأثاث المخصص، تجديد المطابخ والحمامات،وتواصل معنا لتحويل أفكارك إلى واقع ملموس">
      <meta name="og:description" content=" نحن فريق من الحرفيين المهرة والمتخصصين في فن النجارة. نقدم خدمات الأثاث المخصص، تجديد المطابخ والحمامات،وتواصل معنا لتحويل أفكارك إلى واقع ملموس">
      
      <meta name="keywords" content="نجار تفصيل غرف نوم، نجار تصنيع أثاث، نجار خشب طاولات، نجار فك وتركيب، نجار تصنيع أبواب، تصميم وتنفيذ غرف نوم، تصنيع أبواب ونوافذ مخصصة">


      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content=${Najar} />
      <meta name="twitter:site" content='نجار خشبي | نجار موبيليا' />
      <meta property='og:type' content='https://www.najarv.com/' />
      <meta name="google-site-verification" content="nudTrOck7CCX6fQdknp6WZMOE27dUN_w89Dm5zcmhFM" />
      <link rel="icon" href=${Log} />


    
    <link rel="stylesheet" type="text/css" href="/css/main.css" />
    <link rel="canonical" href="https://www.najarv.com/" />

    <!-- Event snippet for call ext conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
<script>
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-11183115233/-gynCKqkka8YEOGXw9Qp',
      'event_callback': callback
  });
  return false;
}
</script>

    
</head>
<body>
    <div id="Mahmoud-Almadhoun+467098520">
         ${User}
    </div>
    <script src="./client/bundle.js" defer ></script>
    
</body>
</html>
  `



  return html

}