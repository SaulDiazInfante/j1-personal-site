

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/themer.js
 # JS Adapter for J1 themer (bootstrapThemeSwitcher)
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/jguadagno/bootstrapThemeSwitcher
 #
 # Copyright (C) 2022 Juergen Adams
 # Copyright (C) 2014 Joseph Guadagno
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # bootstrapThemeSwitcher is licensed under the MIT License.
 # For details, see https://github.com/jguadagno/bootstrapThemeSwitcher/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 # NOTE:
 #  Setup of theme loaders for local_themes|remote_themes moved
 #  to adapter navigator.js
 # -----------------------------------------------------------------------------
 # Adapter generated: 2022-07-29 22:42:01 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.themer=function(e,t){function o(e){var t=document.styleSheets;t[t.length-1];for(var o in document.styleSheets)if(t[o].href&&t[o].href.indexOf(e)>-1)return!0;return!1}var s,a,i,n,r,c,l,h='production',d=$.extend({},{enabled:!0,debug:!1,saveToCookie:!0,reloadPageOnChange:!1,retries:30,preview_page:"/pages/public/previewer/theme/",menu_icon_family:"MDI",menu_icon_color:"#9E9E9E",menu_icon_size:"mdi-sm",cssThemeLink:"bootstrapTheme",defaultCssFile:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",bootswatchApiUrl:"https://bootswatch.com/api",bootswatchApiVersion:5,loadFromBootswatch:!0,localThemes:"/assets/data/themes.json",excludeBootswatch:"Default, default, Lux, Sketchy",includeBootswatch:"",skipIncludeBootswatch:""}),m=!!(l=new liteURL(t.location.href)).protocol.includes('https'),u={},f=e.getCookieNames(),p=!1,g=!1,k='default',w='production'===h?'.min.css':'.css',_='UnoLight',b='J1 Team',v='https://jekyll.one/',C='/assets/themes/j1/core/css/themes/'+_.toLowerCase()+'/bootstrap'+w,T=0,x=d.retries;return{init:function(n){$.extend({module_name:'j1.adapter.themer',generated:'2022-07-29 22:42:01 +0200'},n);a=e.adapter.themer,l=new liteURL(t.location.href),l.origin,l.origin+'/204.html',r=e.findCookie('j1'),c=e.findCookie('_ga'),i=log4javascript.getLogger('j1.adapter.themer'),a.state='started',i.debug("\nstate: "+a.getState());var h=setInterval(function(){if(p=e.existsCookie(f.user_state),T+=1,p){if(u=e.readCookie(f.user_state),e.readCookie(f.user_consent),i.info("\ncookie "+f.user_state+' successfully loaded after: '+25*T+' ms'),''===u.theme_css&&(u.theme_name=_,u.theme_css=C,u.theme_author=b,u.theme_author_url=v,e.writeCookie({name:f.user_state,data:u,secure:m,expires:365})||i.error("\nfailed to write cookie: "+f.user_consent)),u.theme_switcher=d.enabled,d.enabled){i.info("\nthemes detected as: enabled"),i.info("\ntheme is being initialized: "+u.theme_name),$('#remote_themes').bootstrapThemeSwitcher.defaults={debug:d.debug,saveToCookie:d.saveToCookie,cssThemeLink:d.cssThemeLink,cookieThemeName:d.cookieThemeName,cookieDefaultThemeName:d.cookieDefaultThemeName,cookieThemeCss:d.cookieThemeCss,cookieThemeExtensionCss:d.cookieThemeExtensionCss,cookieExpiration:d.cookieExpiration,cookiePath:d.cookiePath,defaultCssFile:d.defaultCssFile,bootswatchApiUrl:d.bootswatchApiUrl,bootswatchApiVersion:d.bootswatchApiVersion,loadFromBootswatch:d.loadFromBootswatch,localFeed:d.localThemes,excludeBootswatch:d.excludeBootswatch,includeBootswatch:d.includeBootswatch,skipIncludeBootswatch:d.skipIncludeBootswatch};var n=setInterval(function(){'finished'==e.getState()&&(g=o(u.theme_css),s='<link rel="stylesheet" id="'+k+'" href="'+u.theme_css+'" type="text/css" />',u.theme_name.includes('Uno')&&g||($('head').append(s),a.setState('finished'),i.debug("\nstate: "+a.getState()),i.info("\nmodule initialized successfully"),clearInterval(n)))},25)}else a.setState('finished'),i.debug("\nstate: "+a.getState()),i.info("\nthemes detected as: disabled");clearInterval(h)}T>x&&(i.error("\ninterval max count reached: "+x),i.error("\ncheck failed after: "+25*x+' ms'),i.error("\nloading cookie failed: "+f.user_state),i.debug("\nj1 cookies found:"+r.length),r.forEach(e=>console.log('j1.core.switcher: '+e)),i.debug("\nga cookies found:"+c.length),c.forEach(e=>console.log('j1.core.switcher: '+e)),i.warn("\nredirect to home page"),t.location.href='/',clearInterval(h))},25)},messageHandler:function(e,t){var o=JSON.stringify(t,undefined,2);n="\nreceived message from "+e+': '+o,i.info(n),'command'===t.type&&'module_initialized'===t.action&&i.info('\n'+t.text)},setState:function(e){a.state=e},getState:function(){return a.state}}}(j1,window);


