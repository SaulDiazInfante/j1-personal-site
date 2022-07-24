

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/attic.js
 # JS Adapter for J1 Master Header
 #
 # Product/Info:
 # https://jekyll.one
 # http://www.jquery-backstretch.com/
 #
 # Copyright (C) 2022 Juergen Adams
 # Copyright (C) 2012 Scott Robbin
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # Backstretch is licensed under the MIT License.
 # For details, see https://github.com/jquery-backstretch/jquery-backstretch
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-07-24 02:00:25 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.attic=function(t,e){var a,i,n;return{init:function(e){$.extend({module_name:'j1.adapter.attic',generated:'2022-07-24 02:00:25 +0200'},e);a=t.adapter.attic,i=log4javascript.getLogger('j1.adapter.attic'),a.state='pending';var n=null!=e?$.extend({},e):{};$.extend({},{debug:!1,icon_family:"MDI",icon_color:"#9E9E9E",icon_size:"default",raised_level:0,r_text:"enabled",text_emphasis:"stronger",padding_top:200,padding_bottom:50,margin_bottom:50,title_size:"3em",title_color:"rgba(255, 255, 255, 0.8)",title_animate:"animate__bounceInDown",title_align:"left",tagline_size:"1.5em",tagline_color:"rgba(255, 255, 255, 0.8)",tagline_animate:"animate__fadeInRight",tagline_align:"left",background_color_1:"#0D47A1",background_color_2:"#0D47A1",action_enabled:!1,action_url:"#void",action_button:"btn-default",action_icon:"download",action_icon_family:"MDI",action_text:"Download Now",logo_enabled:!1,logo_url:"/assets/images/modules/icons/j1/j1-512x512.png",logo_alt:"Jekyll-One-Template",logo_height:196,logo_animate:"animate__slideInDown",spinner:!1,caption:"",caption_href:"",caption_color:"rgba(255, 255, 255, 0.5)",opacity:1,alignX:.5,alignY:.5,scale:"cover",transition:"fadeInOut",duration:5e3,transitionDuration:"normal",animateFirst:!0,start:0,paused:!1,preload:2,preloadSize:1,bypassCss:!1,alwaysTestWindowResolution:!1,resolutionRefreshRate:2500,resolutionChangeRatioThreshold:.1,isVideo:!1,loop:!1,mute:!1,attics:[{name:"Home",attic:{enabled:!0,id:"attic_home",layout:"home",padding_top:400,padding_bottom:50,opacity:.5}},{name:"Page_Post",attic:{enabled:!0,id:"attic_page_post",layout:["page","post","blog_archive"],padding_top:400,padding_bottom:50,opacity:.5}},{name:"Text attic",attic:{enabled:!0,id:"attic_text",layout:["collection","app","raw"]}}]});a.frontmatterOptions=n,a.setState('started'),i.debug("\nstate: "+a.getState()),i.info("\nmodule is being initialized"),a.loadHeader(n)},loadHeader:function(){function t(t){$('#attic_home').length&&$('#attic_home').backstretch(t.slides,{debug:t.debug,spinner:t.spinner,alignX:t.alignX,alignY:t.alignY,scale:t.scale,transition:t.transition,transitionDuration:t.transitionDuration,animateFirst:t.animateFirst,duration:t.duration,paused:t.paused,start:t.start,preload:t.preload,preloadSize:t.preloadSize,bypassCss:t.bypassCss,alwaysTestWindowResolution:t.alwaysTestWindowResolution,resolutionRefreshRate:t.resolutionRefreshRate,resolutionChangeRatioThreshold:t.transition,isVideo:t.isVideo,loop:t.loop,mute:t.mute}),t.spinner&&$('.backstretch').addClass(t.spinner);var o=$('#attic_home').data('backstretch');$(e).on('backstretch.before',function(){a.setState('backstretch_before'),i.debug("\nstate: "+a.getState())}),$(e).on('backstretch.after',function(e,o,d){if(n='add caption text',a.setState('backstretch_after'),i.debug("\nstate: "+status),'undefined'!=typeof t.slides[d].caption){var s=t.slides[d].caption.text,l=t.slides[d].caption.href;l?$('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="'+l+'" target="_blank">'+s+'</a>').show():$('.attic-caption').text(s).show()}else if('undefined'!=typeof t.slides[d].badge){var r=t.slides[d].badge.type,p=t.slides[d].badge.author,c=t.slides[d].badge.href;if('unsplash'===r){var g="<div class=\"attic__badge\"> <a class=\"attic__badge_unsplash link-no-decoration\"  href=\""+c+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"  target=\"_blank\"  rel=\"noopener noreferrer\"  title=\"Free high-resolution photos from "+p+"\">  <span class=\"attic__badge_unsplash_icon\">    <svg xmlns=\"http://www.w3.org/2000/svg\"\t   class=\"attic__badge_unsplash_icon-size\"      viewBox=\"0 0 32 32\">      <path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path>    </svg>  </span>  <span class=\"attic__badge_unsplash_text\">"+p+"</span> </a></div>";$('.attic-caption').html(g).show()}}a.setState('finished'),i.debug("\nstate: "+a.getState()),i.info("\nmodule initialized successfully")}),$(e).on('backstretch.before',function(e,n,d){a.setState('backstretch_before_image_once'),i.debug("\nstate: "+a.getState()),d===o.images.length-1&&($('#attic_home').backstretch('pause'),$('.backstretch').removeClass(t.spinner))})}function o(t){$('#attic_page_post').length&&$('#attic_page_post').backstretch(t.slides,{debug:t.debug,spinner:t.spinner,alignX:t.alignX,alignY:t.alignY,scale:t.scale,transition:t.transition,transitionDuration:t.transitionDuration,animateFirst:t.animateFirst,duration:t.duration,paused:t.paused,start:t.start,preload:t.preload,preloadSize:t.preloadSize,bypassCss:t.bypassCss,alwaysTestWindowResolution:t.alwaysTestWindowResolution,resolutionRefreshRate:t.resolutionRefreshRate,resolutionChangeRatioThreshold:t.transition,isVideo:t.isVideo,loop:t.loop,mute:t.mute}),t.spinner&&$('.backstretch').addClass(t.spinner);var o=$('#attic_page_post').data('backstretch');$(e).on('backstretch.before',function(){a.setState('backstretch_before'),i.debug("\nstate: "+a.getState())}),$(e).on('backstretch.after',function(e,o,d){if(n='add caption text',a.setState('backstretch_after'),i.debug("\nstate: "+status),'undefined'!=typeof t.slides[d].caption){var s=t.slides[d].caption.text,l=t.slides[d].caption.href;l?$('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="'+l+'" target="_blank">'+s+'</a>').show():$('.attic-caption').text(s).show()}else if('undefined'!=typeof t.slides[d].badge){var r=t.slides[d].badge.type,p=t.slides[d].badge.author,c=t.slides[d].badge.href;if('unsplash'===r){var g="<div class=\"attic__badge\"> <a class=\"attic__badge_unsplash link-no-decoration\"  href=\""+c+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"  target=\"_blank\"  rel=\"noopener noreferrer\"  title=\"Free high-resolution photos from "+p+"\">  <span class=\"attic__badge_unsplash_icon\">    <svg xmlns=\"http://www.w3.org/2000/svg\"\t   class=\"attic__badge_unsplash_icon-size\"      viewBox=\"0 0 32 32\">      <path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path>    </svg>  </span>  <span class=\"attic__badge_unsplash_text\">"+p+"</span> </a></div>";$('.attic-caption').html(g).show()}}a.setState('finished'),i.debug("\nstate: "+a.getState()),i.info("\nmodule initialized successfully")}),$(e).on('backstretch.before',function(e,n,d){a.setState('backstretch_before_image_once'),i.debug("\nstate: "+a.getState()),d===o.images.length-1&&($('#attic_page_post').backstretch('pause'),$('.backstretch').removeClass(t.spinner))})}function d(t){$('#attic_text').length&&$('#attic_text').backstretch(t.slides,{debug:t.debug,spinner:t.spinner,alignX:t.alignX,alignY:t.alignY,scale:t.scale,transition:t.transition,transitionDuration:t.transitionDuration,animateFirst:t.animateFirst,duration:t.duration,paused:t.paused,start:t.start,preload:t.preload,preloadSize:t.preloadSize,bypassCss:t.bypassCss,alwaysTestWindowResolution:t.alwaysTestWindowResolution,resolutionRefreshRate:t.resolutionRefreshRate,resolutionChangeRatioThreshold:t.transition,isVideo:t.isVideo,loop:t.loop,mute:t.mute}),t.spinner&&$('.backstretch').addClass(t.spinner);var o=$('#attic_text').data('backstretch');$(e).on('backstretch.before',function(){a.setState('backstretch_before'),i.debug("\nstate: "+a.getState())}),$(e).on('backstretch.after',function(e,o,d){if(n='add caption text',a.setState('backstretch_after'),i.debug("\nstate: "+status),'undefined'!=typeof t.slides[d].caption){var s=t.slides[d].caption.text,l=t.slides[d].caption.href;l?$('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="'+l+'" target="_blank">'+s+'</a>').show():$('.attic-caption').text(s).show()}else if('undefined'!=typeof t.slides[d].badge){var r=t.slides[d].badge.type,p=t.slides[d].badge.author,c=t.slides[d].badge.href;if('unsplash'===r){var g="<div class=\"attic__badge\"> <a class=\"attic__badge_unsplash link-no-decoration\"  href=\""+c+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"  target=\"_blank\"  rel=\"noopener noreferrer\"  title=\"Free high-resolution photos from "+p+"\">  <span class=\"attic__badge_unsplash_icon\">    <svg xmlns=\"http://www.w3.org/2000/svg\"\t   class=\"attic__badge_unsplash_icon-size\"      viewBox=\"0 0 32 32\">      <path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path>    </svg>  </span>  <span class=\"attic__badge_unsplash_text\">"+p+"</span> </a></div>";$('.attic-caption').html(g).show()}}a.setState('finished'),i.debug("\nstate: "+a.getState()),i.info("\nmodule initialized successfully")}),$(e).on('backstretch.before',function(e,n,d){a.setState('backstretch_before_image_once'),i.debug("\nstate: "+a.getState()),d===o.images.length-1&&($('#attic_text').backstretch('pause'),$('.backstretch').removeClass(t.spinner))})}var s=a.frontmatterOptions;if($('#attic_home').length){var l=$.extend({},{debug:!1,icon_family:"MDI",icon_color:"#9E9E9E",icon_size:"default",raised_level:0,r_text:"enabled",text_emphasis:"stronger",padding_top:200,padding_bottom:50,margin_bottom:50,title_size:"3em",title_color:"rgba(255, 255, 255, 0.8)",title_animate:"animate__bounceInDown",title_align:"left",tagline_size:"1.5em",tagline_color:"rgba(255, 255, 255, 0.8)",tagline_animate:"animate__fadeInRight",tagline_align:"left",background_color_1:"#0D47A1",background_color_2:"#0D47A1",action_enabled:!1,action_url:"#void",action_button:"btn-default",action_icon:"download",action_icon_family:"MDI",action_text:"Download Now",logo_enabled:!1,logo_url:"/assets/images/modules/icons/j1/j1-512x512.png",logo_alt:"Jekyll-One-Template",logo_height:196,logo_animate:"animate__slideInDown",spinner:!1,caption:"",caption_href:"",caption_color:"rgba(255, 255, 255, 0.5)",opacity:1,alignX:.5,alignY:.5,scale:"cover",transition:"fadeInOut",duration:5e3,transitionDuration:"normal",animateFirst:!0,start:0,paused:!1,preload:2,preloadSize:1,bypassCss:!1,alwaysTestWindowResolution:!1,resolutionRefreshRate:2500,resolutionChangeRatioThreshold:.1,isVideo:!1,loop:!1,mute:!1,attics:[{name:"Home",attic:{enabled:!0,id:"attic_home",layout:"home",padding_top:400,padding_bottom:50,opacity:.5}},{name:"Page_Post",attic:{enabled:!0,id:"attic_page_post",layout:["page","post","blog_archive"],padding_top:400,padding_bottom:50,opacity:.5}},{name:"Text attic",attic:{enabled:!0,id:"attic_text",layout:["collection","app","raw"]}}]}),r={opacity:.5,padding_top:400,padding_bottom:50},p={opacity:.5};l=$.extend({},l,r,p),s.background_color_1&&(l.background_color_1=s.background_color_1),s.background_color_2&&(l.background_color_2=s.background_color_2),s&&('undefined'!=typeof s.raised_level&&(l.raised_level=s.raised_level),'undefined'!=typeof s.r_text&&(l.r_text=s.r_text),'undefined'!=typeof s.text_emphasis&&(l.text_emphasis=s.text_emphasis),'undefined'!=typeof s.padding_top&&(l.padding_top=s.padding_top),'undefined'!=typeof s.padding_bottom&&(l.padding_bottom=s.padding_bottom),'undefined'!=typeof s.margin_bottom&&(l.margin_bottom=s.margin_bottom),'undefined'!=typeof s.title&&('undefined'!=typeof s.title.color&&(l.title_color=s.title.color),'undefined'!=typeof s.title.size&&(l.title_size=s.title.size),'undefined'!=typeof s.title.animate&&(l.title_animate=s.title.animate),'undefined'!=typeof s.title.align&&(l.title_align=s.title.align)),'undefined'!=typeof s.tagline&&('undefined'!=typeof s.tagline.color&&(l.tagline_color=s.tagline.color),'undefined'!=typeof s.tagline.size&&(l.tagline_size=s.tagline.size),'undefined'!=typeof s.tagline.animate&&(l.tagline_animate=s.tagline.animate),'undefined'!=typeof s.tagline.align&&(l.tagline_align=s.tagline.align)),'undefined'!=typeof s.spinner&&(l.spinner=s.spinner),'undefined'!=typeof s.opacity&&(l.opacity=s.opacity),'undefined'!=typeof s.alignX&&(l.alignX=s.alignX),'undefined'!=typeof s.alignY&&(l.alignY=s.alignY),'undefined'!=typeof s.scale&&(l.scale=s.scale),'undefined'!=typeof s.start&&(l.start=s.start),'undefined'!=typeof s.animateFirst&&(l.animateFirst=s.animateFirst),'undefined'!=typeof s.preload&&(l.preload=s.preload),'undefined'!=typeof s.preloadSize&&(l.preloadSize=s.preloadSize),'undefined'!=typeof s.mute&&(l.mute=s.mute),'undefined'!=typeof s.bypassCss&&(l.bypassCss=s.bypassCss),'undefined'!=typeof s.isVideo&&(l.isVideo=s.isVideo),'undefined'!=typeof s.loop&&(l.loop=s.loop),'undefined'!=typeof s.paused&&(l.paused=s.paused),'undefined'!=typeof s.transition&&(l.transition=s.transition),'undefined'!=typeof s.duration&&(l.duration=s.duration),'undefined'!=typeof s.transitionDuration&&(l.transitionDuration=s.transitionDuration),'undefined'!=typeof s.slides&&(l.slides=s.slides)),'enabled'==l.r_text&&$('#attic_home').addClass('r-text');var c='raised-z'+l.raised_level;$('#attic_home').addClass(c),$('#head-title').addClass(l.title_animate),$('#head-tagline').addClass(l.tagline_animate);var g='text-emphasis-'+l.text_emphasis;$('#head-title-text').addClass(g),$('#head-tagline-text').addClass(g);var _='';_+='<style> .attic { ',_+='background-image: -webkit-gradient(linear, left top, left bottom, from('+l.background_color_1+'), to('+l.background_color_2+')) !important;',_+='background-image: -webkit-linear-gradient(top, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='background-image: -o-linear-gradient(top, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='background-image: linear-gradient(to bottom, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+l.background_color_1+'", endColorstr="'+l.background_color_2+'", GradientType=0) !important;',_+='} </style>',$('head').append(_),_='',_='<style> .attic { padding-top: '+l.padding_top+'px; padding-bottom: '+l.padding_bottom+'px; margin-bottom: '+l.margin_bottom+'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>',$('head').append(_),$('head').append('<style> .attic .head-title h2 { color: '+l.title_color+';font-size: '+l.title_size+' !important; text-align: '+l.title_align+';} </style>'),$('head').append('<style> .attic .head-tagline h3 { color: '+l.tagline_color+';font-size: '+l.tagline_size+' !important; text-align: '+l.tagline_align+'; } </style>'),u='<style> .backstretch-item { opacity: '+l.opacity+'; </style>',$('head').append(u),a.setState('initialized'),i.debug("\nstate: "+a.getState()),'undefined'!=typeof l.slides&&$(function(){i.debug("\nLoad image header"),t(l),a.setState('completed'),i.debug("\nstate: "+a.getState())})}if($('#attic_page_post').length){l=$.extend({},{debug:!1,icon_family:"MDI",icon_color:"#9E9E9E",icon_size:"default",raised_level:0,r_text:"enabled",text_emphasis:"stronger",padding_top:200,padding_bottom:50,margin_bottom:50,title_size:"3em",title_color:"rgba(255, 255, 255, 0.8)",title_animate:"animate__bounceInDown",title_align:"left",tagline_size:"1.5em",tagline_color:"rgba(255, 255, 255, 0.8)",tagline_animate:"animate__fadeInRight",tagline_align:"left",background_color_1:"#0D47A1",background_color_2:"#0D47A1",action_enabled:!1,action_url:"#void",action_button:"btn-default",action_icon:"download",action_icon_family:"MDI",action_text:"Download Now",logo_enabled:!1,logo_url:"/assets/images/modules/icons/j1/j1-512x512.png",logo_alt:"Jekyll-One-Template",logo_height:196,logo_animate:"animate__slideInDown",spinner:!1,caption:"",caption_href:"",caption_color:"rgba(255, 255, 255, 0.5)",opacity:1,alignX:.5,alignY:.5,scale:"cover",transition:"fadeInOut",duration:5e3,transitionDuration:"normal",animateFirst:!0,start:0,paused:!1,preload:2,preloadSize:1,bypassCss:!1,alwaysTestWindowResolution:!1,resolutionRefreshRate:2500,resolutionChangeRatioThreshold:.1,isVideo:!1,loop:!1,mute:!1,attics:[{name:"Home",attic:{enabled:!0,id:"attic_home",layout:"home",padding_top:400,padding_bottom:50,opacity:.5}},{name:"Page_Post",attic:{enabled:!0,id:"attic_page_post",layout:["page","post","blog_archive"],padding_top:400,padding_bottom:50,opacity:.5}},{name:"Text attic",attic:{enabled:!0,id:"attic_text",layout:["collection","app","raw"]}}]}),r={opacity:.5,padding_top:400,padding_bottom:50},p={opacity:.5};l=$.extend({},l,r,p),s.background_color_1&&(l.background_color_1=s.background_color_1),s.background_color_2&&(l.background_color_2=s.background_color_2),s&&('undefined'!=typeof s.raised_level&&(l.raised_level=s.raised_level),'undefined'!=typeof s.r_text&&(l.r_text=s.r_text),'undefined'!=typeof s.text_emphasis&&(l.text_emphasis=s.text_emphasis),'undefined'!=typeof s.padding_top&&(l.padding_top=s.padding_top),'undefined'!=typeof s.padding_bottom&&(l.padding_bottom=s.padding_bottom),'undefined'!=typeof s.margin_bottom&&(l.margin_bottom=s.margin_bottom),'undefined'!=typeof s.title&&('undefined'!=typeof s.title.color&&(l.title_color=s.title.color),'undefined'!=typeof s.title.size&&(l.title_size=s.title.size),'undefined'!=typeof s.title.animate&&(l.title_animate=s.title.animate),'undefined'!=typeof s.title.align&&(l.title_align=s.title.align)),'undefined'!=typeof s.tagline&&('undefined'!=typeof s.tagline.color&&(l.tagline_color=s.tagline.color),'undefined'!=typeof s.tagline.size&&(l.tagline_size=s.tagline.size),'undefined'!=typeof s.tagline.animate&&(l.tagline_animate=s.tagline.animate),'undefined'!=typeof s.tagline.align&&(l.tagline_align=s.tagline.align)),'undefined'!=typeof s.spinner&&(l.spinner=s.spinner),'undefined'!=typeof s.opacity&&(l.opacity=s.opacity),'undefined'!=typeof s.alignX&&(l.alignX=s.alignX),'undefined'!=typeof s.alignY&&(l.alignY=s.alignY),'undefined'!=typeof s.scale&&(l.scale=s.scale),'undefined'!=typeof s.start&&(l.start=s.start),'undefined'!=typeof s.animateFirst&&(l.animateFirst=s.animateFirst),'undefined'!=typeof s.preload&&(l.preload=s.preload),'undefined'!=typeof s.preloadSize&&(l.preloadSize=s.preloadSize),'undefined'!=typeof s.mute&&(l.mute=s.mute),'undefined'!=typeof s.bypassCss&&(l.bypassCss=s.bypassCss),'undefined'!=typeof s.isVideo&&(l.isVideo=s.isVideo),'undefined'!=typeof s.loop&&(l.loop=s.loop),'undefined'!=typeof s.paused&&(l.paused=s.paused),'undefined'!=typeof s.transition&&(l.transition=s.transition),'undefined'!=typeof s.duration&&(l.duration=s.duration),'undefined'!=typeof s.transitionDuration&&(l.transitionDuration=s.transitionDuration),'undefined'!=typeof s.slides&&(l.slides=s.slides)),'enabled'==l.r_text&&$('#attic_page_post').addClass('r-text');c='raised-z'+l.raised_level;$('#attic_page_post').addClass(c),$('#head-title').addClass(l.title_animate),$('#head-tagline').addClass(l.tagline_animate);g='text-emphasis-'+l.text_emphasis;$('#head-title-text').addClass(g),$('#head-tagline-text').addClass(g);_='';_+='<style> .attic { ',_+='background-image: -webkit-gradient(linear, left top, left bottom, from('+l.background_color_1+'), to('+l.background_color_2+')) !important;',_+='background-image: -webkit-linear-gradient(top, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='background-image: -o-linear-gradient(top, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='background-image: linear-gradient(to bottom, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+l.background_color_1+'", endColorstr="'+l.background_color_2+'", GradientType=0) !important;',_+='} </style>',$('head').append(_),_='',_='<style> .attic { padding-top: '+l.padding_top+'px; padding-bottom: '+l.padding_bottom+'px; margin-bottom: '+l.margin_bottom+'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>',$('head').append(_),$('head').append('<style> .attic .head-title h2 { color: '+l.title_color+';font-size: '+l.title_size+' !important; text-align: '+l.title_align+';} </style>'),$('head').append('<style> .attic .head-tagline h3 { color: '+l.tagline_color+';font-size: '+l.tagline_size+' !important; text-align: '+l.tagline_align+'; } </style>'),u='<style> .backstretch-item { opacity: '+l.opacity+'; </style>',$('head').append(u),a.setState('initialized'),i.debug("\nstate: "+a.getState()),'undefined'!=typeof l.slides&&$(function(){i.debug("\nLoad image header"),o(l),a.setState('completed'),i.debug("\nstate: "+a.getState())})}if($('#attic_text').length){l=$.extend({},{debug:!1,icon_family:"MDI",icon_color:"#9E9E9E",icon_size:"default",raised_level:0,r_text:"enabled",text_emphasis:"stronger",padding_top:200,padding_bottom:50,margin_bottom:50,title_size:"3em",title_color:"rgba(255, 255, 255, 0.8)",title_animate:"animate__bounceInDown",title_align:"left",tagline_size:"1.5em",tagline_color:"rgba(255, 255, 255, 0.8)",tagline_animate:"animate__fadeInRight",tagline_align:"left",background_color_1:"#0D47A1",background_color_2:"#0D47A1",action_enabled:!1,action_url:"#void",action_button:"btn-default",action_icon:"download",action_icon_family:"MDI",action_text:"Download Now",logo_enabled:!1,logo_url:"/assets/images/modules/icons/j1/j1-512x512.png",logo_alt:"Jekyll-One-Template",logo_height:196,logo_animate:"animate__slideInDown",spinner:!1,caption:"",caption_href:"",caption_color:"rgba(255, 255, 255, 0.5)",opacity:1,alignX:.5,alignY:.5,scale:"cover",transition:"fadeInOut",duration:5e3,transitionDuration:"normal",animateFirst:!0,start:0,paused:!1,preload:2,preloadSize:1,bypassCss:!1,alwaysTestWindowResolution:!1,resolutionRefreshRate:2500,resolutionChangeRatioThreshold:.1,isVideo:!1,loop:!1,mute:!1,attics:[{name:"Home",attic:{enabled:!0,id:"attic_home",layout:"home",padding_top:400,padding_bottom:50,opacity:.5}},{name:"Page_Post",attic:{enabled:!0,id:"attic_page_post",layout:["page","post","blog_archive"],padding_top:400,padding_bottom:50,opacity:.5}},{name:"Text attic",attic:{enabled:!0,id:"attic_text",layout:["collection","app","raw"]}}]}),r={},p={};l=$.extend({},l,r,p),s.background_color_1&&(l.background_color_1=s.background_color_1),s.background_color_2&&(l.background_color_2=s.background_color_2),s&&('undefined'!=typeof s.raised_level&&(l.raised_level=s.raised_level),'undefined'!=typeof s.r_text&&(l.r_text=s.r_text),'undefined'!=typeof s.text_emphasis&&(l.text_emphasis=s.text_emphasis),'undefined'!=typeof s.padding_top&&(l.padding_top=s.padding_top),'undefined'!=typeof s.padding_bottom&&(l.padding_bottom=s.padding_bottom),'undefined'!=typeof s.margin_bottom&&(l.margin_bottom=s.margin_bottom),'undefined'!=typeof s.title&&('undefined'!=typeof s.title.color&&(l.title_color=s.title.color),'undefined'!=typeof s.title.size&&(l.title_size=s.title.size),'undefined'!=typeof s.title.animate&&(l.title_animate=s.title.animate),'undefined'!=typeof s.title.align&&(l.title_align=s.title.align)),'undefined'!=typeof s.tagline&&('undefined'!=typeof s.tagline.color&&(l.tagline_color=s.tagline.color),'undefined'!=typeof s.tagline.size&&(l.tagline_size=s.tagline.size),'undefined'!=typeof s.tagline.animate&&(l.tagline_animate=s.tagline.animate),'undefined'!=typeof s.tagline.align&&(l.tagline_align=s.tagline.align)),'undefined'!=typeof s.spinner&&(l.spinner=s.spinner),'undefined'!=typeof s.opacity&&(l.opacity=s.opacity),'undefined'!=typeof s.alignX&&(l.alignX=s.alignX),'undefined'!=typeof s.alignY&&(l.alignY=s.alignY),'undefined'!=typeof s.scale&&(l.scale=s.scale),'undefined'!=typeof s.start&&(l.start=s.start),'undefined'!=typeof s.animateFirst&&(l.animateFirst=s.animateFirst),'undefined'!=typeof s.preload&&(l.preload=s.preload),'undefined'!=typeof s.preloadSize&&(l.preloadSize=s.preloadSize),'undefined'!=typeof s.mute&&(l.mute=s.mute),'undefined'!=typeof s.bypassCss&&(l.bypassCss=s.bypassCss),'undefined'!=typeof s.isVideo&&(l.isVideo=s.isVideo),'undefined'!=typeof s.loop&&(l.loop=s.loop),'undefined'!=typeof s.paused&&(l.paused=s.paused),'undefined'!=typeof s.transition&&(l.transition=s.transition),'undefined'!=typeof s.duration&&(l.duration=s.duration),'undefined'!=typeof s.transitionDuration&&(l.transitionDuration=s.transitionDuration),'undefined'!=typeof s.slides&&(l.slides=s.slides)),'enabled'==l.r_text&&$('#attic_text').addClass('r-text');c='raised-z'+l.raised_level;$('#attic_text').addClass(c),$('#head-title').addClass(l.title_animate),$('#head-tagline').addClass(l.tagline_animate);g='text-emphasis-'+l.text_emphasis;$('#head-title-text').addClass(g),$('#head-tagline-text').addClass(g);var u;_='';_+='<style> .attic { ',_+='background-image: -webkit-gradient(linear, left top, left bottom, from('+l.background_color_1+'), to('+l.background_color_2+')) !important;',_+='background-image: -webkit-linear-gradient(top, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='background-image: -o-linear-gradient(top, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='background-image: linear-gradient(to bottom, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+l.background_color_1+'", endColorstr="'+l.background_color_2+'", GradientType=0) !important;',_+='} </style>',$('head').append(_),_='',_='<style> .attic { padding-top: '+l.padding_top+'px; padding-bottom: '+l.padding_bottom+'px; margin-bottom: '+l.margin_bottom+'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>',$('head').append(_),$('head').append('<style> .attic .head-title h2 { color: '+l.title_color+';font-size: '+l.title_size+' !important; text-align: '+l.title_align+';} </style>'),$('head').append('<style> .attic .head-tagline h3 { color: '+l.tagline_color+';font-size: '+l.tagline_size+' !important; text-align: '+l.tagline_align+'; } </style>'),u='<style> .backstretch-item { opacity: '+l.opacity+'; </style>',$('head').append(u),a.setState('initialized'),i.debug("\nstate: "+a.getState()),'undefined'!=typeof l.slides&&$(function(){i.debug("\nLoad image header"),d(l),a.setState('completed'),i.debug("\nstate: "+a.getState())})}return $('#no_header').length&&(a.setState('completed'),i.debug("\nstate: "+a.getState()),i.warn("\nno header configured or found in page")),!0},messageHandler:function(t,e){var a=JSON.stringify(e,undefined,2);return n="\nreceived message from "+t+': '+a,i.debug(n),'command'===e.type&&'module_initialized'===e.action&&(status='completed',i.info('\n'+e.text)),!0},setState:function(t){a.state=t},getState:function(){return a.state}}}(j1,window);


