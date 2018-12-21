<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
   <head>
     <meta charset="utf-8">
     <style>
     .loading {
         opacity: 0;
         transition: opacity .8s ease-in-out;
         position: fixed;
         height: 100%;
         width: 100%;
         top: 0;
         left: 0;
         background: #222;
         z-index: -1;
     }

     app-root:empty + .loading{
       opacity: 1;
       z-index: 100;
     }

     app-root:empty + .loading h1 {
       margin: .67em 0;
       font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
       font-weight: 500;
       line-height: 1.1;
       font-size: 36px;
       color: #CDE1C9;
       position: absolute;
       top: 50%;
       width: 100%;
       text-align: center;
       transform: translate(0, -50%);
     }
     </style>
     <title>MyApp</title>
     <base href="./">

     <meta name="viewport" content="width=device-width, initial-scale=1">
     <link rel="icon" type="image/x-icon" href=<?php echo $this->baseurl?>/templates/<?php echo $this->template;?>/favicon.ico>
   </head>
   <body>
     <app-root></app-root>
     <div class="loading">
       <h1>Loading...</h1>
     </div>
     <script>
     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
     })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

     ga('create', 'UA-2166738-1', 'auto');
     </script>
     <script src=<?php echo $this->baseurl?>/templates/<?php echo $this->template;?>/inline.bundle.js></script>
     <script src=<?php echo $this->baseurl?>/templates/<?php echo $this->template;?>/styles.bundle.js></script>
     <script src=<?php echo $this->baseurl?>/templates/<?php echo $this->template;?>/vendor.bundle.js></script>
     <script src=<?php echo $this->baseurl?>/templates/<?php echo $this->template;?>/main.bundle.js></script>
   </body>
   </html>
