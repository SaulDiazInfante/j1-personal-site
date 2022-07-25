

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/justifiedGallery.js
 # JS Adapter for JustifiedGallery
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/miromannino/Justified-Gallery
 #
 # Copyright (C) 2022 Juergen Adams
 # Copyright (C) 2016 Miro Mannino
 #
 # J1 Template is licensed under the MIT License.
 # See: https://github.com/jekyll-one-org/J1 Template/blob/master/LICENSE
 # Justified Gallery is licensed under the MIT license
 # See: https://github.com/miromannino/Justified-Gallery
 # -----------------------------------------------------------------------------
 # Adapter generated: 2022-07-26 01:42:14 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.justifiedGallery=function(e){var i,o,t,a={};return{init:function(t){var n=$.extend({module_name:'j1.adapter.justifiedGallery',generated:'2022-07-26 01:42:14 +0200'},t);i=e.adapter.justifiedGallery,o=log4javascript.getLogger('j1.adapter.justifiedGallery');var l=setInterval(function(){'finished'==e.getState()&&(i.setState('started'),o.debug("\nstate: "+i.getState()),o.info("\nmodule is being initialized"),a=$.extend({},{enabled:!0,xhr_data_path:"/assets/data/galleries.json",instance_type:"multiple",rowHeight:170,galleries:[{gallery:{enabled:!0,type:"image",id:"jg_example",title:"Example of LightGallery Lightbox",show_delay:250,css_classes:"mb-3",images_path:"/assets/images/modules/gallery/mega_cities",thumb_path:"/assets/images/modules/gallery/mega_cities",images:["banter-snaps_b.jpg","denys-nevozhai-1_b.jpg"],captions_gallery:["Osaka - Japan","Man posing at the rooftop of Jin Mao Tower Shanghai - China"],captions_lightbox:[],gallery_options:{rowHeight:250,margins:1},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"image",id:"jg_old_times",show_delay:200,title:"GrandPa around the 1930th",css_classes:"mb-3",images_path:"/assets/images/modules/gallery/old_times",thumb_path:"/assets/images/modules/gallery/old_times",images:["image_01.jpg","image_02.jpg","image_03.jpg","image_04.jpg"],captions_gallery:["GrandPa's 80th Birthday","GrandPa's 80th Birthday","GrandPa's annual journey","GrandPa's annual journey"],captions_lightbox:[],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"image",id:"jg_customizer",show_delay:250,css_classes:"mb-3",images_path:"/assets/images/modules/gallery/mega_cities",thumb_path:"/assets/images/modules/gallery/mega_cities",images:["banter-snaps_b.jpg","denys-nevozhai-1_b.jpg","gints-gailis_b.jpg","steven-diaz_b.jpg","denys-nevozhai-2_b.jpg","johan-mouchet_b.jpg","emmad-mazhari_b.jpg","federico-rizzarelli_b.jpg","andreas-brucker_b.jpg","thomas-tucker_b.jpg","luca-bravo_b.jpg","ethan-brooke_b.jpg","oskars-sylwan_b.jpg"],captions_gallery:["Osaka - Japan","Man posing at the rooftop of Jin Mao Tower Shanghai - China","Shangri-La Hotel Jakarta - Indonesia","Tokyo seen from World Trade Center Observation Deck - Japan","Young couple over Shenzhen - China","The Queen Bee at the Eureka Tower - Melbourne Southbank Australia","Chicago - United States","Shanghai - China","Cityscape of Bangkok Downtown - Thailand","Sunset over Taipei City - Taiwan","Brooklyn Bridge New York - United States","Lotte World Tower Seoul - South Korea","New York City","United States"],captions_lightbox:[],gallery_options:{rowHeight:150,margins:1},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"video-html5",id:"jg_video_html5",show_delay:300,title:!1,theme:"city",video_path:"/assets/videos/gallery/html5",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["video1.mp4","video2.mp4"],captions_gallery:["PeckPocketed","Rollin`Wild"],captions_lightbox:["<p>CGI Animated Short HD: Student Academy Award Winning <b>PeckPocketed</b> by Kevin Herron</p>","<p>Rollin`Wild - Short Funny Animated Clips - Film Academy BW</p>"],poster:["video1-poster.jpg","video2-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_youtube",show_delay:300,title:!1,css_classes:"",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["//youtube.com/watch?v=X5Cfi7U4eL4","//youtube.com/watch?v=Nck6BZga7TQ","//youtube.com/watch?v=F2SXmzk8ve4","//youtube.com/watch?v=ln3wAdRAim4"],captions_gallery:["Carpool Karaoke - Lady Gaga","Carpool Karaoke - Adele","Carpool Karaoke - Gwen Stefani","Carpool Karaoke - First Lady Michelle Obama"],captions_lightbox:["<p>Lady Gaga joins James for a drive through Los Angeles singing her classics and tracks from her new album</p>","<p>James Corden is about the holidays in London and gets Adele off for a ride through the city. On the way they sing some of their biggest hits and Adele raps Nicki Minaj's <b>monster</b></p>","<p>Gwen Stefani, Julia Roberts, George Clooney and James Corden singing Holla back girl, there's nothing left to see</p>","<p>James Corden's White House tour takes an unthinkable turn when First Lady Michelle Obama joins him for a drive around the grounds singing Stevie Wonder and Beyonce</p>"],poster:["video_gaga-poster.jpg","video_adele-poster.jpg","video_gwen-poster.jpg","video_michelle-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_youtube_2",show_delay:300,title:!1,css_classes:"",image_path:"/assets/videos/gallery/voice_kids_de_2021",thumb_path:"/assets/videos/gallery/voice_kids_de_2021",videos:["//youtube.com/watch?v=aQqPgLMgO-I","//youtube.com/watch?v=Bl6tkAgaP1g","//youtube.com/watch?v=GuiOYCv9NTI","//youtube.com/watch?v=1bvE2mgJ22I"],player_params:["start: 0, end: 148","start: 0, end: 122","start: 0, end: 104","start: 10, end: 173"],captions_gallery:["The Voice Kids Germany 2021 - Constance","The Voice Kids Germany 2021 - Elisa","The Voice Kids Germany 2021 - Ben","The Voice Kids Germany 2021 - The Battle"],captions_lightbox:["<p>14-year-old Constance has dreamed of being on The Voice Kids stage for a very long time. Your dream has finally come true! She performs a breathtaking version of Sia's song Alive.</p>","<p>14-year-old Elisa is fascinated by the classics of pop music. Her version of Hey Jude from The Beatles comes with a lot of feeling.</p>","<p>14-year-old Ben pours all of his emotions into his performance of Maroon 5's Sunday Morning. He wants to show what he's made of.</p>","<p>The battle of the three young people is a real emotional battle. Elisa's husky voice, Constanze's unbelievable power, and Ben's rhythm come into their own in Adele's James Bond theme song Skyfall.</p>"],poster:["constance.jpg","elisa.jpg","ben.jpg","battle.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_vimeo",show_delay:300,title:!1,thumb_items:2,thumb_spacing:5,thumb_bordered:!0,thumb_animate:!0,css_classes:"",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["//vimeo.com/179528528","//vimeo.com/202117650","//vimeo.com/196000652"],captions_gallery:["Forever 21 - Kick It Old School","Forever 21 - Stay Colorful, Babe!","Forever 21 - NYE Party Shop"],captions_lightbox:["<p>Kick It Old School on Vimeo</p>","<p>Stay Colorful on Vimeo</p>","<p>NYE Party Shop on Vimeo</p>"],poster:["kick-it-old-school-poster.jpg","stay-colorful-poster.jpg","nye-party-shop-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg"}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_dailymotion",show_delay:300,title:!1,thumb_items:2,thumb_spacing:5,thumb_bordered:!0,thumb_animate:!0,css_classes:"",image_path:"/assets/videos/gallery/dailymotion",thumb_path:"/assets/videos/gallery/dailymotion",videos:["//dai.ly/x887s09","//dai.ly/x87ycik"],captions_gallery:["Guided Meditation: Morning Energy","Beginner Mat Pilates: Core Workout"],captions_lightbox:["<p>Guided Meditation: Morning Energy</p>","<p>Beginner Mat Pilates: Core Workout</p>"],poster:["meditation.jpg","pilates.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg"}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_vk",show_delay:300,title:!1,thumb_items:2,thumb_spacing:5,thumb_bordered:!0,thumb_animate:!0,css_classes:"",image_path:"/assets/videos/gallery/vk",thumb_path:"/assets/videos/gallery/vk",videos:["//vk.com/video_ext.php?oid=-114944820&id=456242413&hash=ef5be3f71500f8df","//vk.com/video_ext.php?oid=-114944820&id=456239717&hash=f6651448bfb14b90"],captions_gallery:["Otter plague","Looked at the shark's mouth (whale shark)"],captions_lightbox:["<p>Otter plague</p>","<p>Looked at the shark's mouth (whale shark)</p>"],poster:["otter.jpg","hai.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg"}}}]}),void 0!==n&&(a=$.extend({},a,n)),i.initialize(a),i.setState('finished'),o.debug("\nstate: "+i.getState()),o.info("\nmodule initialized successfully"),clearInterval(l))},25)},initialize:function(){if(o=log4javascript.getLogger('j1.adapter.justifiedGallery'),i.setState('running'),o.debug("\nstate: "+i.getState()),$('#jg_example').length){t="\ngallery is being initialized on id: #jg_example",o.info(t);var a='<div class="jg-gallery-title">Example of LightGallery Lightbox</div>';$('#jg_example').before(a),$('#jg_example').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var a='';for(var n in' light-gallery ',i.jg_example){var l=i.jg_example[n].img,s=i.jg_example[n].captions_gallery,g=i.jg_example[n].captions_lightbox;null!=g&&'lg'=='lg'?(a+='<a data-sub-html="'+g+'" ',a+='href="'+l+"\">\n",a+='  <img src="'+l+'" img alt="'+g+"\">\n"):(a+='<a data-sub-html="'+s+'" ',a+='href="'+l+"\">\n",a+=' <img src="'+l+'" img alt="'+s+"\">\n"),a+="</a>\n"}$('#jg_example').hide().html(a);var d=$('#jg_example');undefined,d.justifiedGallery({rowHeight:250,margins:1}).on('jg.complete',function(i){i.stopPropagation(),d.lightGallery({lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}),e.jg_example=d.data('lightGallery'),setTimeout(function(){$('#jg_example').show(),t="\ninitializing gallery finished on id: #jg_example",o.info(t)},250)})})}if($('#jg_old_times').length){t="\ngallery is being initialized on id: #jg_old_times",o.info(t);a='<div class="jg-gallery-title">GrandPa around the 1930th</div>';$('#jg_old_times').before(a),$('#jg_old_times').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var a='';for(var n in' light-gallery ',i.jg_old_times){var l=i.jg_old_times[n].img,s=i.jg_old_times[n].captions_gallery,g=i.jg_old_times[n].captions_lightbox;null!=g&&'lg'=='lg'?(a+='<a data-sub-html="'+g+'" ',a+='href="'+l+"\">\n",a+='  <img src="'+l+'" img alt="'+g+"\">\n"):(a+='<a data-sub-html="'+s+'" ',a+='href="'+l+"\">\n",a+=' <img src="'+l+'" img alt="'+s+"\">\n"),a+="</a>\n"}$('#jg_old_times').hide().html(a);var d=$('#jg_old_times');undefined,d.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),d.lightGallery({lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}),e.jg_old_times=d.data('lightGallery'),setTimeout(function(){$('#jg_old_times').show(),t="\ninitializing gallery finished on id: #jg_old_times",o.info(t)},200)})})}$('#jg_customizer').length&&(t="\ngallery is being initialized on id: #jg_customizer",o.info(t),$('#jg_customizer').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var a='';for(var n in' light-gallery ',i.jg_customizer){var l=i.jg_customizer[n].img,s=i.jg_customizer[n].captions_gallery,g=i.jg_customizer[n].captions_lightbox;null!=g&&'lg'=='lg'?(a+='<a data-sub-html="'+g+'" ',a+='href="'+l+"\">\n",a+='  <img src="'+l+'" img alt="'+g+"\">\n"):(a+='<a data-sub-html="'+s+'" ',a+='href="'+l+"\">\n",a+=' <img src="'+l+'" img alt="'+s+"\">\n"),a+="</a>\n"}$('#jg_customizer').hide().html(a);var d=$('#jg_customizer');undefined,d.justifiedGallery({rowHeight:150,margins:1}).on('jg.complete',function(i){i.stopPropagation(),d.lightGallery({lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}),e.jg_customizer=d.data('lightGallery'),setTimeout(function(){$('#jg_customizer').show(),t="\ninitializing gallery finished on id: #jg_customizer",o.info(t)},250)})})),$('#jg_video_html5').length&&(t="\ngallery is being initialized on id: #jg_video_html5",o.info(t),$('#jg_video_html5').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var a='';for(var n in' light-gallery ',i.jg_video_html5){var l=i.jg_video_html5[n].image_path+'/'+i.jg_video_html5[n].poster,s=i.jg_video_html5[n].captions_gallery,g=i.jg_video_html5[n].captions_lightbox,d=i.jg_video_html5[n].video_id,_=i.jg_video_html5[n].video;i.jg_video_html5[n].theme,i.jg_video_html5[n].player_params;null!=g&&'lg'=='lg'?(a+='<a data-sub-html="'+g+'" ',a+=' data-html="#'+d+"\">\n",a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+g+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(a+='<a data-sub-html="'+s+'" ',a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+s+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),a+="</a>\n"}var r='';for(var n in i.jg_video_html5){_=i.jg_video_html5[n].video_path+'/'+i.jg_video_html5[n].video;var m=i.jg_video_html5[n].image_path+'/'+i.jg_video_html5[n].poster;i.jg_video_html5[n].captions_lightbox;r+='<div style="display:none;" id="'+(d=i.jg_video_html5[n].video_id)+"\">\n",r+="  <video class=\"lg-video-object lg-html5 video-js vjs-theme-city\"\n",r+='         poster="'+m+"\" controls=\"\" preload=\"none\">\n",r+='    <source src="'+_+'" type="video/'+_.substr(_.lastIndexOf('.')+1)+"\">\n",r+="    Your browser does not support HTML5 video.\n",r+="  </video>\n",r+="</div>\n"}$('#jg_video_html5').before(r),$('#jg_video_html5').hide().html(a);var v=$('#jg_video_html5');undefined,v.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),v.lightGallery({lightbox:"lg",videojs:!0,videojsOptions:{}}),e.jg_video_html5=v.data('lightGallery'),setTimeout(function(){$('#jg_video_html5').show(),t="\ninitializing gallery finished on id: #jg_video_html5",o.info(t)},300)})})),$('#jg_video_online_youtube').length&&(t="\ngallery is being initialized on id: #jg_video_online_youtube",o.info(t),$('#jg_video_online_youtube').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var a='';for(var n in' light-gallery ',i.jg_video_online_youtube){var l=i.jg_video_online_youtube[n].image_path+'/'+i.jg_video_online_youtube[n].poster,s=i.jg_video_online_youtube[n].captions_gallery,g=i.jg_video_online_youtube[n].captions_lightbox,d=(i.jg_video_online_youtube[n].video_id,i.jg_video_online_youtube[n].video),_=(i.jg_video_online_youtube[n].theme,i.jg_video_online_youtube[n].player_params);null!=g&&'lg'=='lg'?(a+='<a data-sub-html="'+g+'" ',a+=' data-src="'+d+'"',a+=' data-options="'+_+"\">\n",a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+g+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(a+='<a data-sub-html="'+s+'" ',a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+s+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),a+="</a>\n"}var r='';for(var n in i.jg_video_online_youtube){d=i.jg_video_online_youtube[n].video_path+'/'+i.jg_video_online_youtube[n].video;var m=i.jg_video_online_youtube[n].image_path+'/'+i.jg_video_online_youtube[n].poster;i.jg_video_online_youtube[n].captions_lightbox;r+='<div style="display:none;" id="'+i.jg_video_online_youtube[n].video_id+"\">\n",r+="  <video class=\"lg-video-object lg-html5 video-js vjs-theme-\"\n",r+='         poster="'+m+"\" controls=\"\" preload=\"none\">\n",r+='    <source src="'+d+'" type="video/'+d.substr(d.lastIndexOf('.')+1)+"\">\n",r+="    Your browser does not support HTML5 video.\n",r+="  </video>\n",r+="</div>\n"}$('#jg_video_online_youtube').before(r),$('#jg_video_online_youtube').hide().html(a);var v=$('#jg_video_online_youtube');undefined,v.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),v.lightGallery({lightbox:"lg",videojs:!0,videojsOptions:{}}),e.jg_video_online_youtube=v.data('lightGallery'),setTimeout(function(){$('#jg_video_online_youtube').show(),t="\ninitializing gallery finished on id: #jg_video_online_youtube",o.info(t)},300)})})),$('#jg_video_online_youtube_2').length&&(t="\ngallery is being initialized on id: #jg_video_online_youtube_2",o.info(t),$('#jg_video_online_youtube_2').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var a='';for(var n in' light-gallery ',i.jg_video_online_youtube_2){var l=i.jg_video_online_youtube_2[n].image_path+'/'+i.jg_video_online_youtube_2[n].poster,s=i.jg_video_online_youtube_2[n].captions_gallery,g=i.jg_video_online_youtube_2[n].captions_lightbox,d=(i.jg_video_online_youtube_2[n].video_id,i.jg_video_online_youtube_2[n].video),_=(i.jg_video_online_youtube_2[n].theme,i.jg_video_online_youtube_2[n].player_params);null!=g&&'lg'=='lg'?(a+='<a data-sub-html="'+g+'" ',a+=' data-src="'+d+'"',a+=' data-options="'+_+"\">\n",a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+g+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(a+='<a data-sub-html="'+s+'" ',a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+s+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),a+="</a>\n"}var r='';for(var n in i.jg_video_online_youtube_2){d=i.jg_video_online_youtube_2[n].video_path+'/'+i.jg_video_online_youtube_2[n].video;var m=i.jg_video_online_youtube_2[n].image_path+'/'+i.jg_video_online_youtube_2[n].poster;i.jg_video_online_youtube_2[n].captions_lightbox;r+='<div style="display:none;" id="'+i.jg_video_online_youtube_2[n].video_id+"\">\n",r+="  <video class=\"lg-video-object lg-html5 video-js vjs-theme-\"\n",r+='         poster="'+m+"\" controls=\"\" preload=\"none\">\n",r+='    <source src="'+d+'" type="video/'+d.substr(d.lastIndexOf('.')+1)+"\">\n",r+="    Your browser does not support HTML5 video.\n",r+="  </video>\n",r+="</div>\n"}$('#jg_video_online_youtube_2').before(r),$('#jg_video_online_youtube_2').hide().html(a);var v=$('#jg_video_online_youtube_2');undefined,v.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),v.lightGallery({lightbox:"lg",videojs:!0,videojsOptions:{}}),e.jg_video_online_youtube_2=v.data('lightGallery'),setTimeout(function(){$('#jg_video_online_youtube_2').show(),t="\ninitializing gallery finished on id: #jg_video_online_youtube_2",o.info(t)},300)})})),$('#jg_video_online_vimeo').length&&(t="\ngallery is being initialized on id: #jg_video_online_vimeo",o.info(t),$('#jg_video_online_vimeo').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var a='';for(var n in' light-gallery ',i.jg_video_online_vimeo){var l=i.jg_video_online_vimeo[n].image_path+'/'+i.jg_video_online_vimeo[n].poster,s=i.jg_video_online_vimeo[n].captions_gallery,g=i.jg_video_online_vimeo[n].captions_lightbox,d=(i.jg_video_online_vimeo[n].video_id,i.jg_video_online_vimeo[n].video),_=(i.jg_video_online_vimeo[n].theme,i.jg_video_online_vimeo[n].player_params);null!=g&&'lg'=='lg'?(a+='<a data-sub-html="'+g+'" ',a+=' data-src="'+d+'"',a+=' data-options="'+_+"\">\n",a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+g+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(a+='<a data-sub-html="'+s+'" ',a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+s+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),a+="</a>\n"}var r='';for(var n in i.jg_video_online_vimeo){d=i.jg_video_online_vimeo[n].video_path+'/'+i.jg_video_online_vimeo[n].video;var m=i.jg_video_online_vimeo[n].image_path+'/'+i.jg_video_online_vimeo[n].poster;i.jg_video_online_vimeo[n].captions_lightbox;r+='<div style="display:none;" id="'+i.jg_video_online_vimeo[n].video_id+"\">\n",r+="  <video class=\"lg-video-object lg-html5 video-js vjs-theme-\"\n",r+='         poster="'+m+"\" controls=\"\" preload=\"none\">\n",r+='    <source src="'+d+'" type="video/'+d.substr(d.lastIndexOf('.')+1)+"\">\n",r+="    Your browser does not support HTML5 video.\n",r+="  </video>\n",r+="</div>\n"}$('#jg_video_online_vimeo').before(r),$('#jg_video_online_vimeo').hide().html(a);var v=$('#jg_video_online_vimeo');undefined,v.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),v.lightGallery({lightbox:"lg"}),e.jg_video_online_vimeo=v.data('lightGallery'),setTimeout(function(){$('#jg_video_online_vimeo').show(),t="\ninitializing gallery finished on id: #jg_video_online_vimeo",o.info(t)},300)})})),$('#jg_video_online_dailymotion').length&&(t="\ngallery is being initialized on id: #jg_video_online_dailymotion",o.info(t),$('#jg_video_online_dailymotion').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var a='';for(var n in' light-gallery ',i.jg_video_online_dailymotion){var l=i.jg_video_online_dailymotion[n].image_path+'/'+i.jg_video_online_dailymotion[n].poster,s=i.jg_video_online_dailymotion[n].captions_gallery,g=i.jg_video_online_dailymotion[n].captions_lightbox,d=(i.jg_video_online_dailymotion[n].video_id,i.jg_video_online_dailymotion[n].video),_=(i.jg_video_online_dailymotion[n].theme,i.jg_video_online_dailymotion[n].player_params);null!=g&&'lg'=='lg'?(a+='<a data-sub-html="'+g+'" ',a+=' data-src="'+d+'"',a+=' data-options="'+_+"\">\n",a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+g+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(a+='<a data-sub-html="'+s+'" ',a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+s+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),a+="</a>\n"}var r='';for(var n in i.jg_video_online_dailymotion){d=i.jg_video_online_dailymotion[n].video_path+'/'+i.jg_video_online_dailymotion[n].video;var m=i.jg_video_online_dailymotion[n].image_path+'/'+i.jg_video_online_dailymotion[n].poster;i.jg_video_online_dailymotion[n].captions_lightbox;r+='<div style="display:none;" id="'+i.jg_video_online_dailymotion[n].video_id+"\">\n",r+="  <video class=\"lg-video-object lg-html5 video-js vjs-theme-\"\n",r+='         poster="'+m+"\" controls=\"\" preload=\"none\">\n",r+='    <source src="'+d+'" type="video/'+d.substr(d.lastIndexOf('.')+1)+"\">\n",r+="    Your browser does not support HTML5 video.\n",r+="  </video>\n",r+="</div>\n"}$('#jg_video_online_dailymotion').before(r),$('#jg_video_online_dailymotion').hide().html(a);var v=$('#jg_video_online_dailymotion');undefined,v.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),v.lightGallery({lightbox:"lg"}),e.jg_video_online_dailymotion=v.data('lightGallery'),setTimeout(function(){$('#jg_video_online_dailymotion').show(),t="\ninitializing gallery finished on id: #jg_video_online_dailymotion",o.info(t)},300)})})),$('#jg_video_online_vk').length&&(t="\ngallery is being initialized on id: #jg_video_online_vk",o.info(t),$('#jg_video_online_vk').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var a='';for(var n in' light-gallery ',i.jg_video_online_vk){var l=i.jg_video_online_vk[n].image_path+'/'+i.jg_video_online_vk[n].poster,s=i.jg_video_online_vk[n].captions_gallery,g=i.jg_video_online_vk[n].captions_lightbox,d=(i.jg_video_online_vk[n].video_id,i.jg_video_online_vk[n].video),_=(i.jg_video_online_vk[n].theme,i.jg_video_online_vk[n].player_params);null!=g&&'lg'=='lg'?(a+='<a data-sub-html="'+g+'" ',a+=' data-src="'+d+'"',a+=' data-options="'+_+"\">\n",a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+g+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(a+='<a data-sub-html="'+s+'" ',a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+s+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),a+="</a>\n"}var r='';for(var n in i.jg_video_online_vk){d=i.jg_video_online_vk[n].video_path+'/'+i.jg_video_online_vk[n].video;var m=i.jg_video_online_vk[n].image_path+'/'+i.jg_video_online_vk[n].poster;i.jg_video_online_vk[n].captions_lightbox;r+='<div style="display:none;" id="'+i.jg_video_online_vk[n].video_id+"\">\n",r+="  <video class=\"lg-video-object lg-html5 video-js vjs-theme-\"\n",r+='         poster="'+m+"\" controls=\"\" preload=\"none\">\n",r+='    <source src="'+d+'" type="video/'+d.substr(d.lastIndexOf('.')+1)+"\">\n",r+="    Your browser does not support HTML5 video.\n",r+="  </video>\n",r+="</div>\n"}$('#jg_video_online_vk').before(r),$('#jg_video_online_vk').hide().html(a);var v=$('#jg_video_online_vk');undefined,v.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),v.lightGallery({lightbox:"lg"}),e.jg_video_online_vk=v.data('lightGallery'),setTimeout(function(){$('#jg_video_online_vk').show(),t="\ninitializing gallery finished on id: #jg_video_online_vk",o.info(t)},300)})}))},messageHandler:function(e,a){var n=JSON.stringify(a,undefined,2);return t="\nreceived message from "+e+': '+n,o.debug(t),'command'===a.type&&'module_initialized'===a.action&&(i.setState('finished'),o.info('\n'+a.text)),!0},setState:function(e){i.state=e},getState:function(){return i.state}}}(j1,window);


