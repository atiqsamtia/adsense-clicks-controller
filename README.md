adsense-clicks-controller
=========================

By Using this script you can Prevent your visitors to multiple click on your Ads. 
you can select maximum clicks a user can click on ads in next 24 hours.

- You can select how many click per user per page.
- If you want to set full site limit simply for page name pass site name for all pages.`falcons_adclick_load('site',4)`
- If want to allow user to click more on certain page e-g on contact-us page `falcons_adclick_load('contact',10)`



* Author: Atiq Samtia (http://atiqsamtia.com)
* Version: 1.2
* Updated:18-09-2016 04:13 AM +5

## DEMO

  **https://atiqsamtia.github.io/adsense-clicks-controller/**


## HOW TO USE ?

### 1. HTML PAGE
  * Ad this code in your head or footer
        <!-- loading Dependencies -->

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>
        <script src="//malsup.github.io/jquery.blockUI.js"></script>
        <script src="//malsup.github.com/chili-1.7.pack.js"></script>
        
        <!-- Load The Script -->

        <script src="https://atiqsamtia.github.io/adsense-clicks-controller/adsense-clicks-controller.js"></script>
        
  * replace `<body>` tag with `<body onload="falcons_adclick_load('page',3)">` --- WHERE 3 is maximum clicks allowed on ads daily(change according to your needs).
  *  Place you ad codes in `<div>` having  class falcons_adclick_ad  eg  `<div class="falcons_adclick_ad"> YOUR AD CODE </div>`
  * You can also add class of 'falcons_adclick_ad' into any existing adcode Div.eg  `<div id='googlead101' class="googleAD adplaceholder300 falcons_adclick_ad"> YOUR AD CODE </div>`
  * See fullscript.html for Demo.
  
### 2. PHP page.
  * Download **mainadsense.php**
  * upload the file onto your server 
  * include mainadsense.php in your page where ads are placed.  eg `<?php include "mainadsense.php"; ?>`
  * replace `<body>` tag with `<body onload="falcons_adclick_load('page',3)">` --- WHERE 3 is maximum clicks allowed on ads daily(change according to your needs).
  * Place you ad codes in `<div>` having  class falcons_adclick_ad  eg  `<div class="falcons_adclick_ad"> YOUR AD CODE </div>`
  * You can also add class of 'falcons_adclick_ad' into any existing adcode Div. eg  `<div id='googlead101' class="googleAD adplaceholder300 falcons_adclick_ad"> YOUR AD CODE </div>`
  * See example.php for Demo.
  

Pricing: This Script is free of Cost for Personal use . This canot be sold.

Read example.php and fullscript.html for more information......

## ChangeLog.

 * *08-08-2015* : Added CLASS tag instesd of ID
 * *07-08-2015* : Multi page support added.

