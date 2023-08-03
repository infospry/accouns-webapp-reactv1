
function CustomScrollbar(){$(".sidebar .menu .list").slimscroll({height:"calc(100vh - 65px)",color:"#eeeeee",position:"right",size:"1px",alwaysVisible:!1,borderRadius:"3px",railBorderRadius:"0"}),$(".navbar-right .dropdown-menu .body").slimscroll({height:"330px",color:"rgba(0,0,0,0.2)",size:"3px",alwaysVisible:!1,borderRadius:"3px",railBorderRadius:"0"}),$(".right-sidebar .slim_scroll").slimscroll({height:"calc(100vh - 70px)",color:"rgba(0,0,0,0.4)",size:"2px",alwaysVisible:!1,borderRadius:"3px",railBorderRadius:"0"})}
function CustomJs(){$(".ls-toggle-btn").on("click",function(){$("body").toggleClass("ls-toggle-menu")}),$(".mobile_menu").on("click",function(){$(".sidebar").toggleClass("open")}),$(".right_icon_toggle_btn").on("click",function(){$("body").toggleClass("right_icon_toggle")})}$(document).ready(function ready(){$("body").addClass("theme-blue")});if("undefined"==typeof jQuery){throw new Error("jQuery plugins need to be before this file")}$.AdminAero={},$.AdminAero.options={leftSideBar:{scrollColor:"rgba(0,0,0,0.5)",scrollWidth:"4px",scrollAlwaysVisible:!1,scrollBorderRadius:"0",scrollRailBorderRadius:"0"},dropdownMenu:{effectIn:"fadeIn",effectOut:"fadeOut"}},$.AdminAero.leftSideBar={activate:function(){var e=this,d=$("body"),f=$(".overlay");$(window).on("click",function(b){var a=$(b.target);"i"===b.target.nodeName.toLowerCase()&&(a=$(b.target).parent()),!a.hasClass("bars")&&e.isOpen()&&0===a.parents("#leftsidebar").length&&(a.hasClass("js-right-sidebar")||f.fadeOut(),d.removeClass("overlay-open"))}),$.each($(".menu-toggle.toggled"),function(g,c){$(c).next().slideToggle(0)}),$.each($(".menu .list li.active"),function(h,g){var i=$(g).find("a:eq(0)");i.addClass("toggled"),i.next().show()}),$(".menu-toggle").on("click",function(h){var g=$(this),j=g.next();if($(g.parents("ul")[0]).hasClass("list")){var i=$(h.target).hasClass("menu-toggle")?h.target:$(h.target).parents(".menu-toggle");$.each($(".menu-toggle.toggled").not(i).next(),function(k,c){$(c).is(":visible")&&($(c).prev().toggleClass("toggled"),$(c).slideUp())})}g.toggleClass("toggled"),j.slideToggle(320)}),e.checkStatuForResize(!0),$(window).resize(function(){e.checkStatuForResize(!1)}),Waves.attach(".menu .list a",["waves-block"]),Waves.init()},checkStatuForResize:function(f){var e=$("body"),h=$(".navbar .navbar-header .bars"),g=e.width();f&&e.find(".content, .sidebar")
.addClass("no-animate").delay(1000).queue(function(){$(this).removeClass("no-animate").dequeue()}),g<1170?(g>767&&e.addClass("ls-toggle-menu"),
e.addClass("ls-closed"),h.fadeIn()):(e.removeClass("ls-closed ls-toggle-menu"),h.fadeOut())},isOpen:function(){return $("body").hasClass("overlay-open")}},$.AdminAero.rightSideBar={activate:function(){var e=this,d=$("#rightsidebar"),f=$(".overlay");$(window).on("click",function(b){var a=$(b.target);"i"===b.target.nodeName.toLowerCase()&&(a=$(b.target).parent()),!a.hasClass("js-right-sidebar")&&e.isOpen()&&0===a.parents("#rightsidebar").length&&(a.hasClass("bars")||f.fadeOut(),d.removeClass("open"))}),$(".js-right-sidebar").on("click",function(){d.toggleClass("open"),e.isOpen()?f.fadeIn():f.fadeOut()})},isOpen:function(){return $(".right-sidebar").hasClass("open")}},$.AdminAero.navbar={activate:function(){var d=$("body"),c=$(".overlay");$(".bars").on("click",function(){d.toggleClass("overlay-open"),d.hasClass("overlay-open")?c.fadeIn():c.fadeOut()}),$('.nav [data-close="true"]').on("click",function(){var f=$(".navbar-toggle").is(":visible"),e=$(".navbar-collapse");f&&e.slideUp(function(){e.removeClass("in").removeAttr("style")})})}};var edge="Microsoft Edge",ie10="Internet Explorer 10",ie11="Internet Explorer 11",opera="Opera",firefox="Mozilla Firefox",chrome="Google Chrome",safari="Safari";$.AdminAero.browser={activate:function(){var b=this;""!==b.getClassName()&&$("html").addClass(b.getClassName())},getBrowser:function(){var b=navigator.userAgent.toLowerCase();return/edge/i.test(b)?edge:/rv:11/i.test(b)?ie11:/msie 10/i.test(b)?ie10:/opr/i.test(b)?opera:/chrome/i.test(b)?chrome:/firefox/i.test(b)?firefox:navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)?safari:void 0},getClassName:function(){var b=this.getBrowser();return b===edge?"edge":b===ie11?"ie11":b===ie10?"ie10":b===opera?"opera":b===chrome?"chrome":b===firefox?"firefox":b===safari?"safari":""}},
// $(function(){$.AdminAero.browser.activate(),$.AdminAero.leftSideBar.activate(),$.AdminAero.rightSideBar.activate(),$.AdminAero.navbar.activate(), $.AdminAero.select.activate(), setTimeout(function(){$(".page-loader-wrapper").fadeOut()},50)}),
// $(function() {
//     $.AdminAero.browser.activate();
//     $.AdminAero.leftSideBar.activate();
//     $.AdminAero.rightSideBar.activate();
//     $.AdminAero.navbar.activate();
//     $.AdminAero.select.activate();
//     setTimeout(function() {
//       $(".page-loader-wrapper").fadeOut();
//     }, 50);
//   }),
document.addEventListener('DOMContentLoaded', function() {
    // Assuming $.AdminAero is already defined and contains the required properties.
    $.AdminAero.browser.activate();
    $.AdminAero.leftSideBar.activate();
    $.AdminAero.rightSideBar.activate();
    $.AdminAero.navbar.activate();
    $.AdminAero.select.activate();
  
    setTimeout(function() {
      document.querySelector(".page-loader-wrapper").style.display = "none";
    }, 50);
  }),

$(function(){CustomScrollbar(),CustomJs()}),(function(d,g){var f=d.jQuery||d.Cowboy||(d.Cowboy={}),e;f.throttle=e=function(m,l,a,b){var c,n=0;if(typeof l!=="boolean"){b=a;a=l;l=g}function k(){var p=this,h=+new Date()-n,q=arguments;function i(){n=+new Date();a.apply(p,q)}function j(){c=g}if(b&&!c){i()}c&&clearTimeout(c);if(b===g&&h>m){i()}else{if(l!==true){c=setTimeout(b?j:i,b===g?m-h:m)}}}if(f.guid){k.guid=a.guid=a.guid||f.guid++}return k};f.debounce=function(c,b,a){return a===g?e(c,b,false):e(c,a,b!==false)}})(this);

