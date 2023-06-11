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
<title>نجار الرياض </title>  
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">   
<meta name="description" content=" نحن فريق من الحرفيين المهرة والمتخصصين في فن النجارة. نقدم خدمات الأثاث المخصص، تجديد المطابخ والحمامات،وتواصل معنا لتحويل أفكارك إلى واقع ملموس">
<meta name="og:description" content=" نحن فريق من الحرفيين المهرة والمتخصصين في فن النجارة. نقدم خدمات الأثاث المخصص، تجديد المطابخ والحمامات،وتواصل معنا لتحويل أفكارك إلى واقع ملموس">

<meta property="og:image" content=${Najar}  />
<meta property="og:image:url"  content=${Najar}  />
<meta property="twitter:image" content=${Najar}  />
<meta property="og:title" content='نجار الرياض' />
      <meta property="og:image" content=${Najar}/>
      <meta
        property="og:url"
        content='https://www.najarv.com/' 
      />
      <meta name="theme-color" content="#d8bc64" />
      <meta name="keywords" content="نجار ديكورات,نجار فك وتركيب اثاث,تركيب اثاث غرف النوم,تركيب اثاث ايكيا,نجار أثاث,نجار بالرياض خشب,نجار خشب طاولات, نجار في الرياض,افضل نجار في الرياض" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content=${Najar} />
      <meta name="twitter:site" content='نجار' />
      <meta property='og:type' content='https://www.najarv.com/' />
      <meta name="google-site-verification" content="nudTrOck7CCX6fQdknp6WZMOE27dUN_w89Dm5zcmhFM" />
      <link rel="icon" href=${Log} />
    <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@900&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/css/main.css" />
    <link rel="canonical" href="/" />
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