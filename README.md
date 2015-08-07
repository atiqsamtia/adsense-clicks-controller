adsense-clicks-controller
=========================

By Using this script you can Prevent your visitors to multiple click on your Ads. 
you can select maximum clicks a user can click on ads in next 24 hours.

Author: Atiq Samtia (http://atiqsamtia.com)
Version: 1.1
Updated:07-08-2015

## DEMO

  **http://atiqsamtia.com/click-control/**


## HOW TO USE ?

## 1: HTML PAGE
  * paste the script from **mainadsense.php** into head of page.
  * replace <code><body></code> tag with <code><body onload="checkCookie(3)"></code> --- WHERE 3 is maximum clicks allowed on ads daily(change according to your needs).
  * Place you ad codes in <div> having  iD blockMe  eg  **<div id="blockMe"> YOUR AD CODE </div>**
  * See fullscript.html for Demo.
  
## 2: PHP page.
  * Download **mainadsense.php**
  * upload the file onto your server 
  * include mainadsense.php in your page where ads are placed.  eg **<?php include "mainadsense.php"; ?>**
  * replace **<body>** tag with **<body onload="checkCookie(3)">** --- WHERE 3 is maximum clicks allowed on ads daily(change according to your needs).
  * Place you ad codes in <div> having  iD blockMe  eg  **<div id="blockMe"> YOUR AD CODE </div>**
  * See example.php for Demo.
  

Pricing: This Script is free of Cost for Personal use . This canot be sold.

Read example.php and fullscript.html for more information......

