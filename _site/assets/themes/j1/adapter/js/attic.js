

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
 #  Adapter generated: 2022-07-13 19:23:35 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.attic = (function (j1, window) {
  var environment   = 'development';
  var moduleOptions = {};
  var _this;
  var logger;
  var logText;
  // ---------------------------------------------------------------------------
  // Main object
  // ---------------------------------------------------------------------------
  return {
    // -------------------------------------------------------------------------
    // Initializer
    // -------------------------------------------------------------------------
    init: function (options) {
      // -----------------------------------------------------------------------
      // Default module settings
      // -----------------------------------------------------------------------
      var settings = $.extend({
        module_name: 'j1.adapter.attic',
        generated:   '2022-07-13 19:23:35 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this   = j1.adapter.attic;
      logger  = log4javascript.getLogger('j1.adapter.attic');
      // initialize state flag
      _this.state = 'pending';
      // create settings object from frontmatter options
      var frontmatterOptions  = options != null ? $.extend({}, options) : {};
      // create settings object from attic options
      var atticOptions         = $.extend({}, {"debug":false, "icon_family":"MDI", "icon_color":"#9E9E9E", "icon_size":"default", "raised_level":0, "r_text":"enabled", "text_emphasis":"stronger", "padding_top":200, "padding_bottom":50, "margin_bottom":50, "title_size":"3em", "title_color":"rgba(255, 255, 255, 0.8)", "title_animate":"bounceInDown", "title_align":"left", "tagline_size":"1.5em", "tagline_color":"rgba(255, 255, 255, 0.8)", "tagline_animate":"fadeInRight", "tagline_align":"left", "background_color_1":"#000", "background_color_2":"#78909C", "action_enabled":false, "action_url":"#void", "action_button":"btn-default", "action_icon":"download", "action_icon_family":"MDI", "action_text":"Download Now", "logo_enabled":false, "logo_url":"/assets/images/modules/icons/j1/j1-512x512.png", "logo_alt":"Jekyll-One-Template", "logo_height":196, "logo_animate":"slideInDown", "spinner":false, "caption":"", "caption_href":"", "caption_color":"rgba(255, 255, 255, 0.5)", "opacity":1.0, "alignX":0.5, "alignY":0.5, "scale":"cover", "transition":"fadeInOut", "duration":5000, "transitionDuration":"normal", "animateFirst":true, "start":0, "paused":false, "preload":2, "preloadSize":1, "bypassCss":false, "alwaysTestWindowResolution":false, "resolutionRefreshRate":2500, "resolutionChangeRatioThreshold":0.1, "isVideo":false, "loop":false, "mute":false, "attics":[{"name":"Home", "attic":{"enabled":true, "id":"attic_home", "layout":"home", "padding_top":400, "padding_bottom":50, "opacity":0.5}}, {"name":"Page_Post", "attic":{"enabled":true, "id":"attic_page_post", "layout":["page", "post", "blog_archive"], "padding_top":400, "padding_bottom":50, "opacity":0.5}}, {"name":"Text attic", "attic":{"enabled":true, "id":"attic_text", "layout":["collection", "app", "raw"]}}]});
      // Save frontmatterOptions in the j1 namespace
      // to be used later by j1.template.init() to load the header
      _this['frontmatterOptions'] = frontmatterOptions;
      _this.setState('started');
      logger.debug('\n' + 'state: ' + _this.getState());
      logger.info('\n' + 'module is being initialized');
      _this.loadHeader(frontmatterOptions);
    }, // END init
    // -------------------------------------------------------------------------
    // Initialize all header supported
    // -------------------------------------------------------------------------
    loadHeader: function () {
      var frontmatterOptions = _this.frontmatterOptions;
          // Create the SPECIFIC header loader FUNCTION of type: attic_home
          function attic_home (atticOptions) {
            // Fire backstretch for all slides of the header on attic_id
            if ($('#attic_home').length) {
              $('#attic_home').backstretch(
                atticOptions.slides, {
                  debug:                          atticOptions.debug,
                  spinner:                        atticOptions.spinner,
                  alignX:                         atticOptions.alignX,
                  alignY:                         atticOptions.alignY,
                  scale:                          atticOptions.scale,
                  transition:                     atticOptions.transition,
                  transitionDuration:             atticOptions.transitionDuration,
                  animateFirst:                   atticOptions.animateFirst,
                  duration:                       atticOptions.duration,
                  paused:                         atticOptions.paused,
                  start:                          atticOptions.start,
                  preload:                        atticOptions.preload,
                  preloadSize:                    atticOptions.preloadSize,
                  bypassCss:                      atticOptions.bypassCss,
                  alwaysTestWindowResolution:     atticOptions.alwaysTestWindowResolution,
                  resolutionRefreshRate:          atticOptions.resolutionRefreshRate,
                  resolutionChangeRatioThreshold: atticOptions.transition,
                  isVideo:                        atticOptions.isVideo,
                  loop:                           atticOptions.loop,
                  mute:                           atticOptions.mute
              });
            }
            if (atticOptions.spinner) {
              $('.backstretch').addClass(atticOptions.spinner);
            }
            // Collect backstretch instance data for Backstretch callbacks
            var backstretch_instance_data = $('#attic_home').data('backstretch');
           $(window).on('backstretch.before', function (e, instance, index) {
              _this.setState('backstretch_before');
              logger.debug('\n' + 'state: ' + _this.getState());
            });
            $(window).on('backstretch.after', function (e, instance, index) {
              logText ='add caption text';
              _this.setState('backstretch_after');
              logger.debug('\n' + 'state: ' + status);
              // logger.debug(logText);
              if (typeof atticOptions.slides[index].caption != 'undefined') {
                var cText = atticOptions.slides[index].caption.text;
                var cLink = atticOptions.slides[index].caption.href;
                if (cLink) {
                  $('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="' +cLink+ '" target="_blank">'+cText+'</a>').show(); //.addClass('animated fadeInUp');
                } else {
                  $('.attic-caption').text(cText).show(); //.addClass('animated fadeInUp');
                }
              } else if (typeof atticOptions.slides[index].badge != 'undefined') {
                var bType   = atticOptions.slides[index].badge.type;
                var bAuthor = atticOptions.slides[index].badge.author;
                var bLink   = atticOptions.slides[index].badge.href;
                if (bType === 'unsplash') {
                  var badgeHTML = ''
                      + '<div class="attic__badge">'
                      + ' <a class="attic__badge_unsplash"'
                      + '  href="' +bLink+ '?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"'
                      + '  target="_blank"'
                      + '  rel="noopener noreferrer"'
                      + '  title="Free high-resolution photos from ' +bAuthor+ '">'
                      + '  <span class="attic__badge_unsplash_icon">'
                      + '    <svg xmlns="http://www.w3.org/2000/svg"'
                      + '	   class="attic__badge_unsplash_icon-size"'
                      + '      viewBox="0 0 32 32">'
                      + '      <title>search unsplash</title>'
                      + '      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>'
                      + '    </svg>'
                      + '  </span>'
                      + '  <span class="attic__badge_unsplash_text">' +bAuthor+ '</span>'
                      + ' </a>'
                      + '</div>';
                  $('.attic-caption').html(badgeHTML).show();
                }
              }
              _this.setState('finished');
              logger.debug('\n' + 'state: ' + _this.getState());
              logger.info('\n' + 'module initialized successfully');
            });
            $(window).on('backstretch.before', function (e, instance, index) {
              _this.setState('backstretch_before_image_once');
              logger.debug('\n' + 'state: ' + _this.getState());
              // Stop the slideshow after reached the last image
              if (index === backstretch_instance_data.images.length -1) {
                $('#attic_home').backstretch('pause');
                // remove class for the backstretch_intro background
                $('.backstretch').removeClass(atticOptions.spinner);
              }
            });
          } // END if attic_id exists
          // Initialize the header found in page
          if ($('#attic_home').length) {
            // Load  Attic OPTIONS
            var atticOptions = $.extend({}, {"debug":false, "icon_family":"MDI", "icon_color":"#9E9E9E", "icon_size":"default", "raised_level":0, "r_text":"enabled", "text_emphasis":"stronger", "padding_top":200, "padding_bottom":50, "margin_bottom":50, "title_size":"3em", "title_color":"rgba(255, 255, 255, 0.8)", "title_animate":"bounceInDown", "title_align":"left", "tagline_size":"1.5em", "tagline_color":"rgba(255, 255, 255, 0.8)", "tagline_animate":"fadeInRight", "tagline_align":"left", "background_color_1":"#000", "background_color_2":"#78909C", "action_enabled":false, "action_url":"#void", "action_button":"btn-default", "action_icon":"download", "action_icon_family":"MDI", "action_text":"Download Now", "logo_enabled":false, "logo_url":"/assets/images/modules/icons/j1/j1-512x512.png", "logo_alt":"Jekyll-One-Template", "logo_height":196, "logo_animate":"slideInDown", "spinner":false, "caption":"", "caption_href":"", "caption_color":"rgba(255, 255, 255, 0.5)", "opacity":1.0, "alignX":0.5, "alignY":0.5, "scale":"cover", "transition":"fadeInOut", "duration":5000, "transitionDuration":"normal", "animateFirst":true, "start":0, "paused":false, "preload":2, "preloadSize":1, "bypassCss":false, "alwaysTestWindowResolution":false, "resolutionRefreshRate":2500, "resolutionChangeRatioThreshold":0.1, "isVideo":false, "loop":false, "mute":false, "attics":[{"name":"Home", "attic":{"enabled":true, "id":"attic_home", "layout":"home", "padding_top":400, "padding_bottom":50, "opacity":0.5}}, {"name":"Page_Post", "attic":{"enabled":true, "id":"attic_page_post", "layout":["page", "post", "blog_archive"], "padding_top":400, "padding_bottom":50, "opacity":0.5}}, {"name":"Text attic", "attic":{"enabled":true, "id":"attic_text", "layout":["collection", "app", "raw"]}}]});
                // Create and json object for HEADER options taken from
                // header config (YAML data file)
                /* eslint-disable */
                var atticOptionsHeader = {
                                "opacity":                0.5, 
                            "padding_top":            400, 
                         "padding_bottom":         50, 
                }
                /* eslint-enable */
                // Create an json object for BACKSTRETCH options taken from
                // header config (yaml data file)
                /* eslint-disable */
                var atticOptionsBackstretch = {
                                "opacity":                0.5, 
                }
                /* eslint-enable */
                // Merge|Overload Attic OPTIONS
                atticOptions = j1.mergeData(atticOptions, atticOptionsHeader);
                atticOptions = j1.mergeData(atticOptions, atticOptionsBackstretch);
                // Overload Attic OPTIONS by settings from frontmatterOptions
                if (frontmatterOptions.background_color_1) atticOptions.background_color_1 = frontmatterOptions.background_color_1;
                if (frontmatterOptions.background_color_2) atticOptions.background_color_2 = frontmatterOptions.background_color_2;
               // ENDIF attic_id
                 // ENDFOR item in header_config.attics
            if (frontmatterOptions) {
              if (typeof frontmatterOptions.raised_level != 'undefined') { atticOptions.raised_level = frontmatterOptions.raised_level; }
              if (typeof frontmatterOptions.r_text != 'undefined') { atticOptions.r_text = frontmatterOptions.r_text; }
              if (typeof frontmatterOptions.text_emphasis != 'undefined') { atticOptions.text_emphasis = frontmatterOptions.text_emphasis; }
              if (typeof frontmatterOptions.padding_top != 'undefined') { atticOptions.padding_top = frontmatterOptions.padding_top; }
              if (typeof frontmatterOptions.padding_bottom != 'undefined') { atticOptions.padding_bottom = frontmatterOptions.padding_bottom; }
              if (typeof frontmatterOptions.margin_bottom != 'undefined') { atticOptions.margin_bottom = frontmatterOptions.margin_bottom; }
              if (typeof frontmatterOptions.title != 'undefined') {
                if (typeof frontmatterOptions.title.color != 'undefined') { atticOptions.title_color = frontmatterOptions.title.color; }
                if (typeof frontmatterOptions.title.size != 'undefined') { atticOptions.title_size = frontmatterOptions.title.size; }
                if (typeof frontmatterOptions.title.animate != 'undefined') { atticOptions.title_animate = frontmatterOptions.title.animate; }
                if (typeof frontmatterOptions.title.align != 'undefined') { atticOptions.title_align = frontmatterOptions.title.align; }
              }
              if (typeof frontmatterOptions.tagline != 'undefined') {
                if (typeof frontmatterOptions.tagline.color != 'undefined') { atticOptions.tagline_color = frontmatterOptions.tagline.color; }
                if (typeof frontmatterOptions.tagline.size != 'undefined') { atticOptions.tagline_size = frontmatterOptions.tagline.size; }
                if (typeof frontmatterOptions.tagline.animate != 'undefined') { atticOptions.tagline_animate = frontmatterOptions.tagline.animate; }
                if (typeof frontmatterOptions.tagline.align != 'undefined') { atticOptions.tagline_align = frontmatterOptions.tagline.align; }
              }
              if (typeof frontmatterOptions.spinner != 'undefined') { atticOptions.spinner = frontmatterOptions.spinner; }
              if (typeof frontmatterOptions.opacity != 'undefined') { atticOptions.opacity = frontmatterOptions.opacity; }
              if (typeof frontmatterOptions.alignX != 'undefined') { atticOptions.alignX = frontmatterOptions.alignX; }
              if (typeof frontmatterOptions.alignY != 'undefined') { atticOptions.alignY = frontmatterOptions.alignY; }
              if (typeof frontmatterOptions.scale != 'undefined') { atticOptions.scale = frontmatterOptions.scale; }
              if (typeof frontmatterOptions.start != 'undefined') { atticOptions.start = frontmatterOptions.start; }
              if (typeof frontmatterOptions.animateFirst != 'undefined') { atticOptions.animateFirst = frontmatterOptions.animateFirst; }
              if (typeof frontmatterOptions.preload != 'undefined') { atticOptions.preload = frontmatterOptions.preload; }
              if (typeof frontmatterOptions.preloadSize != 'undefined') { atticOptions.preloadSize = frontmatterOptions.preloadSize; }
              if (typeof frontmatterOptions.mute != 'undefined') { atticOptions.mute = frontmatterOptions.mute; }
              if (typeof frontmatterOptions.bypassCss != 'undefined') { atticOptions.bypassCss = frontmatterOptions.bypassCss; }
              if (typeof frontmatterOptions.isVideo != 'undefined') { atticOptions.isVideo = frontmatterOptions.isVideo; }
              if (typeof frontmatterOptions.loop != 'undefined') { atticOptions.loop = frontmatterOptions.loop; }
              if (typeof frontmatterOptions.paused != 'undefined') { atticOptions.paused = frontmatterOptions.paused; }
              if (typeof frontmatterOptions.transition != 'undefined') { atticOptions.transition = frontmatterOptions.transition; }
              if (typeof frontmatterOptions.duration != 'undefined') { atticOptions.duration = frontmatterOptions.duration; }
              if (typeof frontmatterOptions.transitionDuration != 'undefined') { atticOptions.transitionDuration = frontmatterOptions.transitionDuration; }
              if (typeof frontmatterOptions.slides != 'undefined') { atticOptions.slides = frontmatterOptions.slides; }
            }
            if (atticOptions.r_text == 'enabled') { $('#attic_home').addClass('r-text'); }
            var raised_level = 'raised-z' +atticOptions.raised_level;
            $('#attic_home').addClass(raised_level);
            $('#head-title').addClass(atticOptions.title_animate);
            $('#head-tagline').addClass(atticOptions.tagline_animate);
            var text_emphasis = 'text-emphasis-' +atticOptions.text_emphasis;
            $('#head-title-text').addClass(text_emphasis);
            // $('#head-title-text').addClass(notranslate);
            $('#head-tagline-text').addClass(text_emphasis);
            var attic_style = '';
            // Initialze header background gradient
            attic_style += '<style> .attic { ';
            attic_style += 'background-image: -webkit-gradient(linear, left top, left bottom, from(' +atticOptions.background_color_1 + '), to(' +atticOptions.background_color_2+ ')) !important;';
            attic_style += 'background-image: -webkit-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: -o-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: linear-gradient(to bottom, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' +atticOptions.background_color_1 + '", endColorstr="' +atticOptions.background_color_2 + '", GradientType=0) !important;';
            attic_style += '} </style>';
            $('head').append(attic_style);
            // Initialze header sizes
            attic_style = '';
            attic_style = '<style> .attic { padding-top: ' +atticOptions.padding_top+ 'px; padding-bottom: ' +atticOptions.padding_bottom+ 'px; margin-bottom: ' +atticOptions.margin_bottom+ 'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>';
            $('head').append(attic_style);
            $('head').append('<style> .attic .head-title h2 { color: ' +atticOptions.title_color+ ';font-size: ' +atticOptions.title_size+ ' !important; text-align: ' +atticOptions.title_align+ ';} </style>');
            $('head').append('<style> .attic .head-tagline h3 { color: ' +atticOptions.tagline_color+ ';font-size: ' +atticOptions.tagline_size+ ' !important; text-align: ' +atticOptions.tagline_align+ '; } </style>');
            // Add opacity to all header images
            // See: https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/
            var attic_opacity;
            attic_opacity = '<style> .backstretch-item { opacity: ' +atticOptions.opacity+ '; </style>';
            $('head').append(attic_opacity);
            _this.setState('initialized');
            logger.debug('\n' + 'state: ' + _this.getState());
            if (typeof atticOptions.slides != 'undefined') {
              // Load the image header if the page is ready (visible)
              $(function() {
                // logger.debug('\n' + 'Load image header on: ' + attic_home);
                logger.debug('\n' + 'Load image header');
                attic_home(atticOptions);
                _this.setState('completed');
                logger.debug('\n' + 'state: ' + _this.getState());
              });
            }
          } // END if header id found in page
         // END if header enabled
          // Create the SPECIFIC header loader FUNCTION of type: attic_page_post
          function attic_page_post (atticOptions) {
            // Fire backstretch for all slides of the header on attic_id
            if ($('#attic_page_post').length) {
              $('#attic_page_post').backstretch(
                atticOptions.slides, {
                  debug:                          atticOptions.debug,
                  spinner:                        atticOptions.spinner,
                  alignX:                         atticOptions.alignX,
                  alignY:                         atticOptions.alignY,
                  scale:                          atticOptions.scale,
                  transition:                     atticOptions.transition,
                  transitionDuration:             atticOptions.transitionDuration,
                  animateFirst:                   atticOptions.animateFirst,
                  duration:                       atticOptions.duration,
                  paused:                         atticOptions.paused,
                  start:                          atticOptions.start,
                  preload:                        atticOptions.preload,
                  preloadSize:                    atticOptions.preloadSize,
                  bypassCss:                      atticOptions.bypassCss,
                  alwaysTestWindowResolution:     atticOptions.alwaysTestWindowResolution,
                  resolutionRefreshRate:          atticOptions.resolutionRefreshRate,
                  resolutionChangeRatioThreshold: atticOptions.transition,
                  isVideo:                        atticOptions.isVideo,
                  loop:                           atticOptions.loop,
                  mute:                           atticOptions.mute
              });
            }
            if (atticOptions.spinner) {
              $('.backstretch').addClass(atticOptions.spinner);
            }
            // Collect backstretch instance data for Backstretch callbacks
            var backstretch_instance_data = $('#attic_page_post').data('backstretch');
           $(window).on('backstretch.before', function (e, instance, index) {
              _this.setState('backstretch_before');
              logger.debug('\n' + 'state: ' + _this.getState());
            });
            $(window).on('backstretch.after', function (e, instance, index) {
              logText ='add caption text';
              _this.setState('backstretch_after');
              logger.debug('\n' + 'state: ' + status);
              // logger.debug(logText);
              if (typeof atticOptions.slides[index].caption != 'undefined') {
                var cText = atticOptions.slides[index].caption.text;
                var cLink = atticOptions.slides[index].caption.href;
                if (cLink) {
                  $('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="' +cLink+ '" target="_blank">'+cText+'</a>').show(); //.addClass('animated fadeInUp');
                } else {
                  $('.attic-caption').text(cText).show(); //.addClass('animated fadeInUp');
                }
              } else if (typeof atticOptions.slides[index].badge != 'undefined') {
                var bType   = atticOptions.slides[index].badge.type;
                var bAuthor = atticOptions.slides[index].badge.author;
                var bLink   = atticOptions.slides[index].badge.href;
                if (bType === 'unsplash') {
                  var badgeHTML = ''
                      + '<div class="attic__badge">'
                      + ' <a class="attic__badge_unsplash"'
                      + '  href="' +bLink+ '?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"'
                      + '  target="_blank"'
                      + '  rel="noopener noreferrer"'
                      + '  title="Free high-resolution photos from ' +bAuthor+ '">'
                      + '  <span class="attic__badge_unsplash_icon">'
                      + '    <svg xmlns="http://www.w3.org/2000/svg"'
                      + '	   class="attic__badge_unsplash_icon-size"'
                      + '      viewBox="0 0 32 32">'
                      + '      <title>search unsplash</title>'
                      + '      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>'
                      + '    </svg>'
                      + '  </span>'
                      + '  <span class="attic__badge_unsplash_text">' +bAuthor+ '</span>'
                      + ' </a>'
                      + '</div>';
                  $('.attic-caption').html(badgeHTML).show();
                }
              }
              _this.setState('finished');
              logger.debug('\n' + 'state: ' + _this.getState());
              logger.info('\n' + 'module initialized successfully');
            });
            $(window).on('backstretch.before', function (e, instance, index) {
              _this.setState('backstretch_before_image_once');
              logger.debug('\n' + 'state: ' + _this.getState());
              // Stop the slideshow after reached the last image
              if (index === backstretch_instance_data.images.length -1) {
                $('#attic_page_post').backstretch('pause');
                // remove class for the backstretch_intro background
                $('.backstretch').removeClass(atticOptions.spinner);
              }
            });
          } // END if attic_id exists
          // Initialize the header found in page
          if ($('#attic_page_post').length) {
            // Load  Attic OPTIONS
            var atticOptions = $.extend({}, {"debug":false, "icon_family":"MDI", "icon_color":"#9E9E9E", "icon_size":"default", "raised_level":0, "r_text":"enabled", "text_emphasis":"stronger", "padding_top":200, "padding_bottom":50, "margin_bottom":50, "title_size":"3em", "title_color":"rgba(255, 255, 255, 0.8)", "title_animate":"bounceInDown", "title_align":"left", "tagline_size":"1.5em", "tagline_color":"rgba(255, 255, 255, 0.8)", "tagline_animate":"fadeInRight", "tagline_align":"left", "background_color_1":"#000", "background_color_2":"#78909C", "action_enabled":false, "action_url":"#void", "action_button":"btn-default", "action_icon":"download", "action_icon_family":"MDI", "action_text":"Download Now", "logo_enabled":false, "logo_url":"/assets/images/modules/icons/j1/j1-512x512.png", "logo_alt":"Jekyll-One-Template", "logo_height":196, "logo_animate":"slideInDown", "spinner":false, "caption":"", "caption_href":"", "caption_color":"rgba(255, 255, 255, 0.5)", "opacity":1.0, "alignX":0.5, "alignY":0.5, "scale":"cover", "transition":"fadeInOut", "duration":5000, "transitionDuration":"normal", "animateFirst":true, "start":0, "paused":false, "preload":2, "preloadSize":1, "bypassCss":false, "alwaysTestWindowResolution":false, "resolutionRefreshRate":2500, "resolutionChangeRatioThreshold":0.1, "isVideo":false, "loop":false, "mute":false, "attics":[{"name":"Home", "attic":{"enabled":true, "id":"attic_home", "layout":"home", "padding_top":400, "padding_bottom":50, "opacity":0.5}}, {"name":"Page_Post", "attic":{"enabled":true, "id":"attic_page_post", "layout":["page", "post", "blog_archive"], "padding_top":400, "padding_bottom":50, "opacity":0.5}}, {"name":"Text attic", "attic":{"enabled":true, "id":"attic_text", "layout":["collection", "app", "raw"]}}]});
                // Create and json object for HEADER options taken from
                // header config (YAML data file)
                /* eslint-disable */
                var atticOptionsHeader = {
                                "opacity":                0.5, 
                            "padding_top":            400, 
                         "padding_bottom":         50, 
                }
                /* eslint-enable */
                // Create an json object for BACKSTRETCH options taken from
                // header config (yaml data file)
                /* eslint-disable */
                var atticOptionsBackstretch = {
                                "opacity":                0.5, 
                }
                /* eslint-enable */
                // Merge|Overload Attic OPTIONS
                atticOptions = j1.mergeData(atticOptions, atticOptionsHeader);
                atticOptions = j1.mergeData(atticOptions, atticOptionsBackstretch);
                // Overload Attic OPTIONS by settings from frontmatterOptions
                if (frontmatterOptions.background_color_1) atticOptions.background_color_1 = frontmatterOptions.background_color_1;
                if (frontmatterOptions.background_color_2) atticOptions.background_color_2 = frontmatterOptions.background_color_2;
               // ENDIF attic_id
                 // ENDFOR item in header_config.attics
            if (frontmatterOptions) {
              if (typeof frontmatterOptions.raised_level != 'undefined') { atticOptions.raised_level = frontmatterOptions.raised_level; }
              if (typeof frontmatterOptions.r_text != 'undefined') { atticOptions.r_text = frontmatterOptions.r_text; }
              if (typeof frontmatterOptions.text_emphasis != 'undefined') { atticOptions.text_emphasis = frontmatterOptions.text_emphasis; }
              if (typeof frontmatterOptions.padding_top != 'undefined') { atticOptions.padding_top = frontmatterOptions.padding_top; }
              if (typeof frontmatterOptions.padding_bottom != 'undefined') { atticOptions.padding_bottom = frontmatterOptions.padding_bottom; }
              if (typeof frontmatterOptions.margin_bottom != 'undefined') { atticOptions.margin_bottom = frontmatterOptions.margin_bottom; }
              if (typeof frontmatterOptions.title != 'undefined') {
                if (typeof frontmatterOptions.title.color != 'undefined') { atticOptions.title_color = frontmatterOptions.title.color; }
                if (typeof frontmatterOptions.title.size != 'undefined') { atticOptions.title_size = frontmatterOptions.title.size; }
                if (typeof frontmatterOptions.title.animate != 'undefined') { atticOptions.title_animate = frontmatterOptions.title.animate; }
                if (typeof frontmatterOptions.title.align != 'undefined') { atticOptions.title_align = frontmatterOptions.title.align; }
              }
              if (typeof frontmatterOptions.tagline != 'undefined') {
                if (typeof frontmatterOptions.tagline.color != 'undefined') { atticOptions.tagline_color = frontmatterOptions.tagline.color; }
                if (typeof frontmatterOptions.tagline.size != 'undefined') { atticOptions.tagline_size = frontmatterOptions.tagline.size; }
                if (typeof frontmatterOptions.tagline.animate != 'undefined') { atticOptions.tagline_animate = frontmatterOptions.tagline.animate; }
                if (typeof frontmatterOptions.tagline.align != 'undefined') { atticOptions.tagline_align = frontmatterOptions.tagline.align; }
              }
              if (typeof frontmatterOptions.spinner != 'undefined') { atticOptions.spinner = frontmatterOptions.spinner; }
              if (typeof frontmatterOptions.opacity != 'undefined') { atticOptions.opacity = frontmatterOptions.opacity; }
              if (typeof frontmatterOptions.alignX != 'undefined') { atticOptions.alignX = frontmatterOptions.alignX; }
              if (typeof frontmatterOptions.alignY != 'undefined') { atticOptions.alignY = frontmatterOptions.alignY; }
              if (typeof frontmatterOptions.scale != 'undefined') { atticOptions.scale = frontmatterOptions.scale; }
              if (typeof frontmatterOptions.start != 'undefined') { atticOptions.start = frontmatterOptions.start; }
              if (typeof frontmatterOptions.animateFirst != 'undefined') { atticOptions.animateFirst = frontmatterOptions.animateFirst; }
              if (typeof frontmatterOptions.preload != 'undefined') { atticOptions.preload = frontmatterOptions.preload; }
              if (typeof frontmatterOptions.preloadSize != 'undefined') { atticOptions.preloadSize = frontmatterOptions.preloadSize; }
              if (typeof frontmatterOptions.mute != 'undefined') { atticOptions.mute = frontmatterOptions.mute; }
              if (typeof frontmatterOptions.bypassCss != 'undefined') { atticOptions.bypassCss = frontmatterOptions.bypassCss; }
              if (typeof frontmatterOptions.isVideo != 'undefined') { atticOptions.isVideo = frontmatterOptions.isVideo; }
              if (typeof frontmatterOptions.loop != 'undefined') { atticOptions.loop = frontmatterOptions.loop; }
              if (typeof frontmatterOptions.paused != 'undefined') { atticOptions.paused = frontmatterOptions.paused; }
              if (typeof frontmatterOptions.transition != 'undefined') { atticOptions.transition = frontmatterOptions.transition; }
              if (typeof frontmatterOptions.duration != 'undefined') { atticOptions.duration = frontmatterOptions.duration; }
              if (typeof frontmatterOptions.transitionDuration != 'undefined') { atticOptions.transitionDuration = frontmatterOptions.transitionDuration; }
              if (typeof frontmatterOptions.slides != 'undefined') { atticOptions.slides = frontmatterOptions.slides; }
            }
            if (atticOptions.r_text == 'enabled') { $('#attic_page_post').addClass('r-text'); }
            var raised_level = 'raised-z' +atticOptions.raised_level;
            $('#attic_page_post').addClass(raised_level);
            $('#head-title').addClass(atticOptions.title_animate);
            $('#head-tagline').addClass(atticOptions.tagline_animate);
            var text_emphasis = 'text-emphasis-' +atticOptions.text_emphasis;
            $('#head-title-text').addClass(text_emphasis);
            // $('#head-title-text').addClass(notranslate);
            $('#head-tagline-text').addClass(text_emphasis);
            var attic_style = '';
            // Initialze header background gradient
            attic_style += '<style> .attic { ';
            attic_style += 'background-image: -webkit-gradient(linear, left top, left bottom, from(' +atticOptions.background_color_1 + '), to(' +atticOptions.background_color_2+ ')) !important;';
            attic_style += 'background-image: -webkit-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: -o-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: linear-gradient(to bottom, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' +atticOptions.background_color_1 + '", endColorstr="' +atticOptions.background_color_2 + '", GradientType=0) !important;';
            attic_style += '} </style>';
            $('head').append(attic_style);
            // Initialze header sizes
            attic_style = '';
            attic_style = '<style> .attic { padding-top: ' +atticOptions.padding_top+ 'px; padding-bottom: ' +atticOptions.padding_bottom+ 'px; margin-bottom: ' +atticOptions.margin_bottom+ 'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>';
            $('head').append(attic_style);
            $('head').append('<style> .attic .head-title h2 { color: ' +atticOptions.title_color+ ';font-size: ' +atticOptions.title_size+ ' !important; text-align: ' +atticOptions.title_align+ ';} </style>');
            $('head').append('<style> .attic .head-tagline h3 { color: ' +atticOptions.tagline_color+ ';font-size: ' +atticOptions.tagline_size+ ' !important; text-align: ' +atticOptions.tagline_align+ '; } </style>');
            // Add opacity to all header images
            // See: https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/
            var attic_opacity;
            attic_opacity = '<style> .backstretch-item { opacity: ' +atticOptions.opacity+ '; </style>';
            $('head').append(attic_opacity);
            _this.setState('initialized');
            logger.debug('\n' + 'state: ' + _this.getState());
            if (typeof atticOptions.slides != 'undefined') {
              // Load the image header if the page is ready (visible)
              $(function() {
                // logger.debug('\n' + 'Load image header on: ' + attic_page_post);
                logger.debug('\n' + 'Load image header');
                attic_page_post(atticOptions);
                _this.setState('completed');
                logger.debug('\n' + 'state: ' + _this.getState());
              });
            }
          } // END if header id found in page
         // END if header enabled
          // Create the SPECIFIC header loader FUNCTION of type: attic_text
          function attic_text (atticOptions) {
            // Fire backstretch for all slides of the header on attic_id
            if ($('#attic_text').length) {
              $('#attic_text').backstretch(
                atticOptions.slides, {
                  debug:                          atticOptions.debug,
                  spinner:                        atticOptions.spinner,
                  alignX:                         atticOptions.alignX,
                  alignY:                         atticOptions.alignY,
                  scale:                          atticOptions.scale,
                  transition:                     atticOptions.transition,
                  transitionDuration:             atticOptions.transitionDuration,
                  animateFirst:                   atticOptions.animateFirst,
                  duration:                       atticOptions.duration,
                  paused:                         atticOptions.paused,
                  start:                          atticOptions.start,
                  preload:                        atticOptions.preload,
                  preloadSize:                    atticOptions.preloadSize,
                  bypassCss:                      atticOptions.bypassCss,
                  alwaysTestWindowResolution:     atticOptions.alwaysTestWindowResolution,
                  resolutionRefreshRate:          atticOptions.resolutionRefreshRate,
                  resolutionChangeRatioThreshold: atticOptions.transition,
                  isVideo:                        atticOptions.isVideo,
                  loop:                           atticOptions.loop,
                  mute:                           atticOptions.mute
              });
            }
            if (atticOptions.spinner) {
              $('.backstretch').addClass(atticOptions.spinner);
            }
            // Collect backstretch instance data for Backstretch callbacks
            var backstretch_instance_data = $('#attic_text').data('backstretch');
           $(window).on('backstretch.before', function (e, instance, index) {
              _this.setState('backstretch_before');
              logger.debug('\n' + 'state: ' + _this.getState());
            });
            $(window).on('backstretch.after', function (e, instance, index) {
              logText ='add caption text';
              _this.setState('backstretch_after');
              logger.debug('\n' + 'state: ' + status);
              // logger.debug(logText);
              if (typeof atticOptions.slides[index].caption != 'undefined') {
                var cText = atticOptions.slides[index].caption.text;
                var cLink = atticOptions.slides[index].caption.href;
                if (cLink) {
                  $('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="' +cLink+ '" target="_blank">'+cText+'</a>').show(); //.addClass('animated fadeInUp');
                } else {
                  $('.attic-caption').text(cText).show(); //.addClass('animated fadeInUp');
                }
              } else if (typeof atticOptions.slides[index].badge != 'undefined') {
                var bType   = atticOptions.slides[index].badge.type;
                var bAuthor = atticOptions.slides[index].badge.author;
                var bLink   = atticOptions.slides[index].badge.href;
                if (bType === 'unsplash') {
                  var badgeHTML = ''
                      + '<div class="attic__badge">'
                      + ' <a class="attic__badge_unsplash"'
                      + '  href="' +bLink+ '?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"'
                      + '  target="_blank"'
                      + '  rel="noopener noreferrer"'
                      + '  title="Free high-resolution photos from ' +bAuthor+ '">'
                      + '  <span class="attic__badge_unsplash_icon">'
                      + '    <svg xmlns="http://www.w3.org/2000/svg"'
                      + '	   class="attic__badge_unsplash_icon-size"'
                      + '      viewBox="0 0 32 32">'
                      + '      <title>search unsplash</title>'
                      + '      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>'
                      + '    </svg>'
                      + '  </span>'
                      + '  <span class="attic__badge_unsplash_text">' +bAuthor+ '</span>'
                      + ' </a>'
                      + '</div>';
                  $('.attic-caption').html(badgeHTML).show();
                }
              }
              _this.setState('finished');
              logger.debug('\n' + 'state: ' + _this.getState());
              logger.info('\n' + 'module initialized successfully');
            });
            $(window).on('backstretch.before', function (e, instance, index) {
              _this.setState('backstretch_before_image_once');
              logger.debug('\n' + 'state: ' + _this.getState());
              // Stop the slideshow after reached the last image
              if (index === backstretch_instance_data.images.length -1) {
                $('#attic_text').backstretch('pause');
                // remove class for the backstretch_intro background
                $('.backstretch').removeClass(atticOptions.spinner);
              }
            });
          } // END if attic_id exists
          // Initialize the header found in page
          if ($('#attic_text').length) {
            // Load  Attic OPTIONS
            var atticOptions = $.extend({}, {"debug":false, "icon_family":"MDI", "icon_color":"#9E9E9E", "icon_size":"default", "raised_level":0, "r_text":"enabled", "text_emphasis":"stronger", "padding_top":200, "padding_bottom":50, "margin_bottom":50, "title_size":"3em", "title_color":"rgba(255, 255, 255, 0.8)", "title_animate":"bounceInDown", "title_align":"left", "tagline_size":"1.5em", "tagline_color":"rgba(255, 255, 255, 0.8)", "tagline_animate":"fadeInRight", "tagline_align":"left", "background_color_1":"#000", "background_color_2":"#78909C", "action_enabled":false, "action_url":"#void", "action_button":"btn-default", "action_icon":"download", "action_icon_family":"MDI", "action_text":"Download Now", "logo_enabled":false, "logo_url":"/assets/images/modules/icons/j1/j1-512x512.png", "logo_alt":"Jekyll-One-Template", "logo_height":196, "logo_animate":"slideInDown", "spinner":false, "caption":"", "caption_href":"", "caption_color":"rgba(255, 255, 255, 0.5)", "opacity":1.0, "alignX":0.5, "alignY":0.5, "scale":"cover", "transition":"fadeInOut", "duration":5000, "transitionDuration":"normal", "animateFirst":true, "start":0, "paused":false, "preload":2, "preloadSize":1, "bypassCss":false, "alwaysTestWindowResolution":false, "resolutionRefreshRate":2500, "resolutionChangeRatioThreshold":0.1, "isVideo":false, "loop":false, "mute":false, "attics":[{"name":"Home", "attic":{"enabled":true, "id":"attic_home", "layout":"home", "padding_top":400, "padding_bottom":50, "opacity":0.5}}, {"name":"Page_Post", "attic":{"enabled":true, "id":"attic_page_post", "layout":["page", "post", "blog_archive"], "padding_top":400, "padding_bottom":50, "opacity":0.5}}, {"name":"Text attic", "attic":{"enabled":true, "id":"attic_text", "layout":["collection", "app", "raw"]}}]});
                // Create and json object for HEADER options taken from
                // header config (YAML data file)
                /* eslint-disable */
                var atticOptionsHeader = {
                }
                /* eslint-enable */
                // Create an json object for BACKSTRETCH options taken from
                // header config (yaml data file)
                /* eslint-disable */
                var atticOptionsBackstretch = {
                }
                /* eslint-enable */
                // Merge|Overload Attic OPTIONS
                atticOptions = j1.mergeData(atticOptions, atticOptionsHeader);
                atticOptions = j1.mergeData(atticOptions, atticOptionsBackstretch);
                // Overload Attic OPTIONS by settings from frontmatterOptions
                if (frontmatterOptions.background_color_1) atticOptions.background_color_1 = frontmatterOptions.background_color_1;
                if (frontmatterOptions.background_color_2) atticOptions.background_color_2 = frontmatterOptions.background_color_2;
               // ENDIF attic_id
             // ENDFOR item in header_config.attics
            if (frontmatterOptions) {
              if (typeof frontmatterOptions.raised_level != 'undefined') { atticOptions.raised_level = frontmatterOptions.raised_level; }
              if (typeof frontmatterOptions.r_text != 'undefined') { atticOptions.r_text = frontmatterOptions.r_text; }
              if (typeof frontmatterOptions.text_emphasis != 'undefined') { atticOptions.text_emphasis = frontmatterOptions.text_emphasis; }
              if (typeof frontmatterOptions.padding_top != 'undefined') { atticOptions.padding_top = frontmatterOptions.padding_top; }
              if (typeof frontmatterOptions.padding_bottom != 'undefined') { atticOptions.padding_bottom = frontmatterOptions.padding_bottom; }
              if (typeof frontmatterOptions.margin_bottom != 'undefined') { atticOptions.margin_bottom = frontmatterOptions.margin_bottom; }
              if (typeof frontmatterOptions.title != 'undefined') {
                if (typeof frontmatterOptions.title.color != 'undefined') { atticOptions.title_color = frontmatterOptions.title.color; }
                if (typeof frontmatterOptions.title.size != 'undefined') { atticOptions.title_size = frontmatterOptions.title.size; }
                if (typeof frontmatterOptions.title.animate != 'undefined') { atticOptions.title_animate = frontmatterOptions.title.animate; }
                if (typeof frontmatterOptions.title.align != 'undefined') { atticOptions.title_align = frontmatterOptions.title.align; }
              }
              if (typeof frontmatterOptions.tagline != 'undefined') {
                if (typeof frontmatterOptions.tagline.color != 'undefined') { atticOptions.tagline_color = frontmatterOptions.tagline.color; }
                if (typeof frontmatterOptions.tagline.size != 'undefined') { atticOptions.tagline_size = frontmatterOptions.tagline.size; }
                if (typeof frontmatterOptions.tagline.animate != 'undefined') { atticOptions.tagline_animate = frontmatterOptions.tagline.animate; }
                if (typeof frontmatterOptions.tagline.align != 'undefined') { atticOptions.tagline_align = frontmatterOptions.tagline.align; }
              }
              if (typeof frontmatterOptions.spinner != 'undefined') { atticOptions.spinner = frontmatterOptions.spinner; }
              if (typeof frontmatterOptions.opacity != 'undefined') { atticOptions.opacity = frontmatterOptions.opacity; }
              if (typeof frontmatterOptions.alignX != 'undefined') { atticOptions.alignX = frontmatterOptions.alignX; }
              if (typeof frontmatterOptions.alignY != 'undefined') { atticOptions.alignY = frontmatterOptions.alignY; }
              if (typeof frontmatterOptions.scale != 'undefined') { atticOptions.scale = frontmatterOptions.scale; }
              if (typeof frontmatterOptions.start != 'undefined') { atticOptions.start = frontmatterOptions.start; }
              if (typeof frontmatterOptions.animateFirst != 'undefined') { atticOptions.animateFirst = frontmatterOptions.animateFirst; }
              if (typeof frontmatterOptions.preload != 'undefined') { atticOptions.preload = frontmatterOptions.preload; }
              if (typeof frontmatterOptions.preloadSize != 'undefined') { atticOptions.preloadSize = frontmatterOptions.preloadSize; }
              if (typeof frontmatterOptions.mute != 'undefined') { atticOptions.mute = frontmatterOptions.mute; }
              if (typeof frontmatterOptions.bypassCss != 'undefined') { atticOptions.bypassCss = frontmatterOptions.bypassCss; }
              if (typeof frontmatterOptions.isVideo != 'undefined') { atticOptions.isVideo = frontmatterOptions.isVideo; }
              if (typeof frontmatterOptions.loop != 'undefined') { atticOptions.loop = frontmatterOptions.loop; }
              if (typeof frontmatterOptions.paused != 'undefined') { atticOptions.paused = frontmatterOptions.paused; }
              if (typeof frontmatterOptions.transition != 'undefined') { atticOptions.transition = frontmatterOptions.transition; }
              if (typeof frontmatterOptions.duration != 'undefined') { atticOptions.duration = frontmatterOptions.duration; }
              if (typeof frontmatterOptions.transitionDuration != 'undefined') { atticOptions.transitionDuration = frontmatterOptions.transitionDuration; }
              if (typeof frontmatterOptions.slides != 'undefined') { atticOptions.slides = frontmatterOptions.slides; }
            }
            if (atticOptions.r_text == 'enabled') { $('#attic_text').addClass('r-text'); }
            var raised_level = 'raised-z' +atticOptions.raised_level;
            $('#attic_text').addClass(raised_level);
            $('#head-title').addClass(atticOptions.title_animate);
            $('#head-tagline').addClass(atticOptions.tagline_animate);
            var text_emphasis = 'text-emphasis-' +atticOptions.text_emphasis;
            $('#head-title-text').addClass(text_emphasis);
            // $('#head-title-text').addClass(notranslate);
            $('#head-tagline-text').addClass(text_emphasis);
            var attic_style = '';
            // Initialze header background gradient
            attic_style += '<style> .attic { ';
            attic_style += 'background-image: -webkit-gradient(linear, left top, left bottom, from(' +atticOptions.background_color_1 + '), to(' +atticOptions.background_color_2+ ')) !important;';
            attic_style += 'background-image: -webkit-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: -o-linear-gradient(top, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'background-image: linear-gradient(to bottom, ' +atticOptions.background_color_1 + ' 0%, ' +atticOptions.background_color_2 + ' 100%) !important;';
            attic_style += 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="' +atticOptions.background_color_1 + '", endColorstr="' +atticOptions.background_color_2 + '", GradientType=0) !important;';
            attic_style += '} </style>';
            $('head').append(attic_style);
            // Initialze header sizes
            attic_style = '';
            attic_style = '<style> .attic { padding-top: ' +atticOptions.padding_top+ 'px; padding-bottom: ' +atticOptions.padding_bottom+ 'px; margin-bottom: ' +atticOptions.margin_bottom+ 'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>';
            $('head').append(attic_style);
            $('head').append('<style> .attic .head-title h2 { color: ' +atticOptions.title_color+ ';font-size: ' +atticOptions.title_size+ ' !important; text-align: ' +atticOptions.title_align+ ';} </style>');
            $('head').append('<style> .attic .head-tagline h3 { color: ' +atticOptions.tagline_color+ ';font-size: ' +atticOptions.tagline_size+ ' !important; text-align: ' +atticOptions.tagline_align+ '; } </style>');
            // Add opacity to all header images
            // See: https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/
            var attic_opacity;
            attic_opacity = '<style> .backstretch-item { opacity: ' +atticOptions.opacity+ '; </style>';
            $('head').append(attic_opacity);
            _this.setState('initialized');
            logger.debug('\n' + 'state: ' + _this.getState());
            if (typeof atticOptions.slides != 'undefined') {
              // Load the image header if the page is ready (visible)
              $(function() {
                // logger.debug('\n' + 'Load image header on: ' + attic_text);
                logger.debug('\n' + 'Load image header');
                attic_text(atticOptions);
                _this.setState('completed');
                logger.debug('\n' + 'state: ' + _this.getState());
              });
            }
          } // END if header id found in page
         // END if header enabled
       // END for item in header_config.attics
      // NO header found in page
      if ($('#no_header').length) {
        _this.setState('completed');
        logger.debug('\n' + 'state: ' + _this.getState());
        logger.warn('\n' + 'no header configured or found in page');
      }
      return true;
    }, // END loadHeader
    // -------------------------------------------------------------------------
    // messageHandler: MessageHandler for J1 CookieConsent module
    // Manage messages send from other J1 modules
    // -------------------------------------------------------------------------
    messageHandler: function (sender, message) {
      var json_message = JSON.stringify(message, undefined, 2);
      logText = '\n' + 'received message from ' + sender + ': ' + json_message;
      logger.debug(logText);
      // -----------------------------------------------------------------------
      //  Process commands|actions
      // -----------------------------------------------------------------------
      if (message.type === 'command' && message.action === 'module_initialized') {
        status = 'completed';
        logger.info('\n' + message.text);
      }
      //
      // Place handling of other command|action here
      //
      return true;
    }, // END messageHandler
    // -------------------------------------------------------------------------
    // setState()
    // Sets the current (processing) state of the module
    // -------------------------------------------------------------------------
    setState: function (stat) {
      _this.state = stat;
    }, // END setState
    // -------------------------------------------------------------------------
    // getState()
    // Returns the current (processing) state of the module
    // -------------------------------------------------------------------------
    getState: function () {
      return _this.state;
    } // END getState
  }; // END return
})(j1, window);



