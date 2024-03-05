<!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
</head>    
<script src="/core/assets/vendor/jquery/jquery.min.js?v=3.5.1"></script>
<script src="https://stanford-gsb.libcal.com/js/hours_today.js"></script>
<body>
<div id="s_lc_tdh_5088_0"></div> 
<script>
$(function(){ 
var s_lc_tdh_5088_0 = new $.LibCalTodayHours( $("#s_lc_tdh_5088_0"), { iid: 5088, lid: 0 }); 
});
$(document).ready(function() {
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      var attrValue = $('a.s-lc-w-today-view-link').attr('href');
      if (attrValue != '/library/about/hours') {
        $('a.s-lc-w-today-view-link').attr('href', '/library/about/hours');
      }
    });
  });

  // Observe the element with the ID "s_lc_tdh_5088_0"
  observer.observe(document.getElementById("s_lc_tdh_5088_0"), {
    attributes: true, // Observe attribute changes
    childList: true, // Observe child node additions and removals
    subtree: true // Observe changes to the subtree
  });
});
</script> 

<!-- Please note: The following styles are optional, feel free to modify! //-->
<style>
.s-lc-mhw-header { padding-top: 21px; }
.s-lc-w-today { border-spacing: 0; border-collapse: collapse; width: 100%; }.s-lc-w-today td, .s-lc-w-today th { padding: 8px 5px; }
.s-lc-w-head { text-align: center; border-bottom: 1px solid #ddd; }
.s-lc-w-loading { margin-top: 80px; text-align: center; }
.s-lc-w-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0; }
.s-lc-w-btn { line-height: 1.5; border-radius: 3px; display: inline-block; padding: 10px 15px 6px; margin-bottom: 0; font-weight: normal; font-size: 1rem;  text-align: center; white-space: nowrap; vertical-align: middle; touch-action: manipulation; cursor: pointer; user-select: none; border: 1px solid #ccc; color: #333; background-color: #fff; }
.s-lc-w-btn:active, .s-lc-w-btn:hover { color: #333; background-color: #d4d4d4; border-color: #8c8c8c; }
.s-lc-w-previous { float: left;}
.s-lc-w-next { float: right; }
.s-lc-w-location td { font-weight: bold; }
.s-lc-w-department .s-lc-w-name { padding-left: 20px; }
.s-lc-w-times .s-lc-w-name a { font-weight:normal; }
.s-lc-w-times { border-bottom: 1px solid #d9d9d9; }
.s-lc-w-today-view-link { text-decoration: none; }
.s-lc-w-today-view-all { padding: 8px 5px; }
.s-lc-w-today-view-all a::after {content: "";
    display: inline-block;
    speak: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-transform: none;
    line-height: 1;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    font-family: 'icons';
   font-size: 0.8rem;
    margin-left: 0.1875rem;}
.s-lc-w-today .s-lc-w-head { background-color: #ffff; }
.s-lc-w-head span { font-size: 1rem; line-height: 1.3; font-weight:normal; }
.s-lc-w-times .s-lc-w-name { font-size: 1.125rem; line-height:1.3; }
.s-lc-w-times .s-lc-w-time { font-size: 1.125rem; line-height:1.3; text-align: right; padding: 20px 0; font-weight:normal; }
.s-lc-w-times .s-lc-closed { background-color: #ffff; margin: 0; padding: 0; }
#s-lc-w-today-cont-0 { border: 1px solid #d9d9d9; }
#s-lc-w-today-cont-0 .s-lc-w-head { padding: 0 0 20px 0;}
#s-lc-w-today-cont-0 .s-lc-w-name { padding: 20px 0;}
#s-lc-w-today-cont-0 table thead  { border-top:none; }
#s-lc-w-today-cont-0 table thead tr { border-top:none; }
#s-lc-w-today-cont-0  { position: relative; padding: 26px 26px 20px 26px;}
#s-lc-w-today-cont-0 table tbody tr { border-top:none; }
#s-lc-w-today-cont-0 .s-lc-w-today-view-all { text-align: center; padding: 20px 0 0 0; font-size:1.125rem; line-height: 1.3;}
#s-lc-w-today-cont-0 .s-lc-w-today-view-all::hover { text-decoration: none; }
#s-lc-w-today-cont-0 table { margin-bottom: 0; }
.s-lc-w-head  span.s-lc-w-head-pre { font-size: 1.75rem;
    line-height: 1.3; font-family: "NewsGothicBT-Demi", "Avant Garde", "Futura", "Helvetica Neue", Helvetica, Arial, sans-serif;}
.s-lc-w-btn { background-color: #ffff; border: 1px solid #636f00; padding: 10px 15px 6px; border-radius: 22px; font-family: "NewsGothicBT", "Avant Garde", "Futura", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 1rem; line-height: 1.4; color: #636f00;}
.s-lc-w-btn:hover { background-color: #26639d; color: #ffff;}
.s-lc-w-previous::before{ content: "";
    display: inline;
    speak: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-transform: none;
    line-height: 1;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    font-family: 'icons';
    font-size: 1rem;}
.s-lc-w-next::after {
content: "";
display: inline;
speak: none;
text-rendering: optimizeLegibility;
-moz-osx-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased;
 text-transform: none;
 line-height: 1;
 font-style: normal;
 font-variant: normal;
 font-weight: normal;
 font-family: 'icons';
  font-size: 1rem;
}
.paragraph--type--elements .s-lc-w-today .s-lc-w-previous {
  position: absolute;
  left: 20px;
}

.paragraph--type--elements .s-lc-w-today .s-lc-w-next {
  position: absolute;
  right: 20px;
}
@media only screen and (max-width: 767px) { .s-lc-w-btn { margin-bottom:10px; padding: 10px 10px 6px; } }
caption.sr-only { display:none;}
@media only screen and (max-width: 374px) { #s-lc-w-today-cont-0 { padding-top: 90px; } .s-lc-w-btn { font-size: 14px; display: flex; align-items: center; justify-content: flex-end; min-width: 115px;} }
@media screen and (max-width: 767px) and (min-width: 375px) { #s-lc-w-today-cont-0 { padding-top: 100px; }  .s-lc-w-btn.s-lc-w-next { min-width: 142px; text-align: right; } }
@media only screen and (max-width: 767px) { #s-lc-w-today-cont-0 { position:relative; } .s-lc-w-btn { top: 26px; margin-bottom: 0;} .s-lc-w-btn.s-lc-w-next { text-align: right; } }
@media screen and (max-width: 1190px) and (min-width: 375px) {
  #s-lc-w-today-cont-0 {
    padding-top: 100px;
  }
  .s-lc-w-btn.s-lc-w-next {
    min-width: 115px;
  }

  .s-lc-w-btn {
    top: 26px;
  }
}
</style>
</body>
</html>  
