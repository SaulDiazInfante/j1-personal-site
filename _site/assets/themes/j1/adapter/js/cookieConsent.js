
/*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/cookieConsent.js
 # JS Adapter for J1 CookieConsent
 #
 #  Product/Info:
 #  http://jekyll.one
 #
 #  Copyright (C) 2022 Juergen Adams
 #
 #  J1 Template is licensed under MIT License.
 #  See: https://github.com/jekyll-one/J1 Template/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-07-29 22:42:01 +0200
 # -----------------------------------------------------------------------------
*/
// -----------------------------------------------------------------------------
// ESLint shimming
// -----------------------------------------------------------------------------
/* eslint indent: "off"                                                       */
/* eslint quotes: "off"                                                       */
// -----------------------------------------------------------------------------
'use strict';
j1.adapter.cookieConsent = (function (j1, window) {
  var environment                 = 'production';
  var tracking_enabled            = ('false' === 'true') ? true: false;
  var tracking_id                 = '<your-tracking-id>';
  var tracking_id_valid           = (tracking_id.includes('tracking-id')) ? false : true;
  var expireCookiesOnRequiredOnly = ('true' === 'true') ? true: false;
  var moduleOptions               = {};
  var _this;
  var $modal;
  var cookie_names;
  var user_cookie;
  var logger;
  var url;
  var baseUrl;
  var hostname;
  var auto_domain;
  var cookie_option_domain;
  var cookie_domain;
  var secure;
  var logText;
  var cookie_written;
  var contentLanguage;
  var navigatorLanguage;
  var domainAttribute;
  // NOTE: RegEx for tracking_id: ^(G|UA|YT|MO)-[a-zA-Z0-9-]+$
  // See: https://stackoverflow.com/questions/20411767/how-to-validate-google-analytics-tracking-id-using-a-javascript-function/20412153
  // ---------------------------------------------------------------------------
  // Helper functions
  // ---------------------------------------------------------------------------
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
        module_name: 'j1.adapter.cookieConsent',
        generated:   '2022-07-29 22:42:01 +0200'
      }, options);
      // -----------------------------------------------------------------------
      // Global variable settings
      // -----------------------------------------------------------------------
      _this                 = j1.adapter.cookieConsent;
      logger                = log4javascript.getLogger('j1.adapter.cookieConsent');
      cookie_names          = j1.getCookieNames();
      url                   = new liteURL(window.location.href);
      baseUrl               = url.origin;
      hostname              = url.hostname;
      auto_domain           = hostname.substring(hostname.lastIndexOf('.', hostname.lastIndexOf('.') - 1) + 1);
      cookie_option_domain  = ('false' === 'true');
      secure                = (url.protocol.includes('https')) ? true : false;
      contentLanguage       = 'en';
      navigatorLanguage     = navigator.language || navigator.userLanguage;
      // initialize state flag
      _this.state = 'pending';
      // Load  module DEFAULTS|CONFIG
      /* eslint-disable */
      moduleOptions = $.extend({}, {"enabled":true, "reloadPageOnChange":true, "autoShowDialog":true, "dialogLanguage":"content", "dialogLanguages":["en", "de"], "contentURL":"/assets/data/cookieconsent", "whitelisted":["/pages/public/legal/en/privacy/", "/pages/public/se-fake/"], "xhrDataElement":"consent-data", "dialogContainerID":"consent-dialog", "postSelectionCallback":"j1.adapter.cookieConsent.cbCookie", "modal_settings":{"title":{"de":"Ihre Privatsph??re", "en":"Your Privacy"}, "body_text":{"en":"This website uses cookies and similar technologies that are required for operation. You are free to decide to give, refuse or withdraw your consent at any time by clicking the <code>My Settings</code> button. Changes are possible at any time by clicking on the <code>cookie</code> icon in the menu bar. Additional cookies are used only with your consent. Additional cookies are used to analyze the use of this website or to store your personal settings for this website. Personal settings allow all visitors to save preferences of the use of services. For more information about what data is collected and shared with partners, please find more information with <code>Privacy Notice</code>. <br><br> To visit this website, your consent on cookies is required by clicking the <code>I Agree</code> button.\n", "de":"Diese Website verwendet Cookies und ??hnliche Technologien, die f??r den Betrieb dieser Website erforderlich sind. Sie k??nnen zu jederzeit entscheiden, ob Sie Ihre Zustimmung geben, verweigern oder zur??ckziehen. Sie k??nnen Ihre Zustimmung geben, indem Sie auf die Schaltfl??che <code>Einverstanden</code> klicken. Nachtr??gliche ??nderungen sind jederzeit m??glich, indem Sie auf das <code>Cookie</code> Symbol in der Men??leiste klicken. <br><br> Erweiterte Cookies werden nur mit Ihrer <b>Zustimmung</b> verwendet. Zus??tzliche Cookies werden verwendet, um die Nutzung dieser Website zu analysieren oder Ihre pers??nlichen Einstellungen f??r diese Webseite zu speichern. Analysen der Nutzung der Website helfen uns, Ihnen eine optimaler Nutzung diese Website zu erm??glichen. Pers??nliche Einstellungen erlauben es allen Besuchern, Pr??ferenzen der Nutzung von Diensten zu speichern. <br><br> Weitere Informationen dar??ber, welche Daten gesammelt und an Partner weitergegeben werden finden Sie in der <code>Datenschutzrichtlinie</code>. Oder in Kurzform, indem Sie auf <code>Datenschutzerkl??rung</code> klicken. <br><br> Wenn Sie diese Website besuchen, ist Ihre Zustimmung zur Verwendung von Cookies erforderlich, indem Sie auf die Schaltfl??che <code>Einverstanden</code> klicken.\n"}, "privacy_notice":{"en":"The operator of this website takes the protection of your personal data seriously. We treat your data confidential and comply with the General Data Protection Regulation (GDPR) of the European Union to protect your privacy. A set of data is stored in <b>Persistent Cookies</b>. Our partners and we make use of Persistent Cookies. Those <b>additional</b> cookies are only used with your consent. <br> <ul>\n  <li>\n    <code>Necessary</code> This website is based on static content, and no\n    database is used behind it. All information (data) needed to control this\n    site is stored in so-called <b>Session Cookies</b>. Your browser automatically\n    <b>removes</b> session cookies if you close all windows of the browser.\n  </li>\n  <li>\n    <code>Analysis</code> of this website's usage helps optimize the site's\n    pages to improve the visitor's experience. For analysis, Google Analytics\n    (GA) is used. GA uses <b>Persistent Cookies</b> that remain on your computer\n    for its service. This website does <b>not</b> transfer any personal data to GA.\n    Implicit personal information, like IP addresses, is anonymized to protect\n    your privacy.\n  </li>\n  <li>\n    <code>Personalization</code> provides <b>additional services</b> like themes,\n    translation, comments, or running advertising campaigns to provide visitors\n    with a website free of charge. Partners use <b>Persistent Cookies</b> that\n    remain on your computer for their services. Our partners like Bootswatch,\n    Disqus, or Google provide excellent personalized services and finance running\n    this site.\n  </li>\n</ul>\n", "de":"Der Betreiber dieser Website nimmt den Schutz Ihrer pers??nlichen Daten sehr ernst. Wir behandeln Ihre Daten vertraulich und halten uns an die <b>Datenschutzgrundverordnung</b> (DSGVO) der Europ??ischen Union zum Schutz Ihrer Privatsph??re. <br><br> Eine Reihe von Daten wird in <b>dauerhaften Cookies</b> gespeichert. Unsere Partner und wir verwenden dauerhafte Cookies. Diese <b>zus??tzlichen</b> Daten werden nur mit Ihrer <b>Zustimmung</b> gespeichert. <br> <ul>\n  <li>\n    <code>Notwendig</code> Diese Website speichert <b>keine</b> pers??nliche Daten\n    in Datenbanken. Alle Informationen (Daten) die zur Steuerung dieser Seite\n    notwendig sind, werden in sogenannten <b>Sitzungscookies</b> gespeichert. Ihr\n    Browser <b>entfernt</b> Sitzungscookies automatisch ohne Ihr zutun, wenn Sie\n    alle Browserfenster schlie??en.\n  <li>\n    <code>Analysen</code> der Nutzung dieser Website hilft bei der Optimierung der\n    Website, um die Nutzung f??r alle Besucher zu verbessern. F??r die Analyse wird\n    der Dienst <em>Google Analytics</em> (GA) verwendet. GA verwendet dauerhafte\n    Cookies die auf Ihrem Computer verbleiben, um diesen Dienst zu erm??glichen.\n    Diese Website ??bertr??gt <b>keine</b> pers??nlichen Daten an den Dienst GA.\n    Implizite pers??nliche Informationen, wie IP-Adressen, werden zum Schutz der\n    Privatsph??re unserer Besucher anonymisiert.\n  </li>\n  <li>\n    <code>Personalisierung</code> wird verwendet, um <b>zus??tzliche</b> Dienste\n    anzubieten. Dazu geh??ren Themen, ??bersetzungen, Kommentare oder Werbekampagnen\n    die allen Anwendern einen kostenlosen Besuch dieser Website erm??glichen.\n    Partner verwenden f??r ihre Dienste dauerhafte Cookies, die auf Ihrem Computer\n    verbleiben. Unsere Partner wie Bootswatch, Disqus, oder Google bieten hervorragende\n    personalisierte Dienste und finanzieren die Kosten f??r den Betrieb dieser Seiten.\n  </li>\n</ul>\n"}}, "show_cookie_icon":true, "expire_cookies_on_required_only":true});
      /* eslint-enable */
      if (typeof settings !== 'undefined') {
        moduleOptions = $.extend({}, moduleOptions, settings);
      }
      if (moduleOptions.dialogLanguage === 'auto') {
        moduleOptions.dialogLanguage = navigatorLanguage;
      } else if (moduleOptions.dialogLanguage === 'content') {
        moduleOptions.dialogLanguage = contentLanguage;
      }
      // -----------------------------------------------------------------------
      // initializer
      // -----------------------------------------------------------------------
      var dependencies_met_page_ready = setInterval (function (options) {
        var expires     = '365';
        var same_site   = 'Strict';
        // // set domain used by cookies
        // if (cookie_option_domain == 'auto') {
        //   domainAttribute = domain ;
        // } else  {
        //   domainAttribute = '';
        // }
        // set domain used by cookies
        if (cookie_option_domain) {
          if (cookie_option_domain == 'auto') {
            domainAttribute = auto_domain;
            stringifiedAttributes += '; ' + 'Domain=' + domainAttribute;
          } else if (cookie_option_domain)  {
            domainAttribute = domain;
            stringifiedAttributes += '; ' + 'Domain=' + domainAttribute;
          }
        }
        // Failsafe: if 'None' is given for samesite in non-secure
        // environments open access to cookies to subdomains
        // ---------------------------------------------------------------------
        if (same_site == 'None' && !secure) {
          same_site = 'Lax';
        }
        if ( j1.getState() === 'finished' ) {
          _this.setState('started');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.info('\n' + 'module is being initialized');
          j1.cookieConsent = new CookieConsent ({
            contentURL:             moduleOptions.contentURL,                   // dialog content (modals) for all supported languages
            cookieName:             cookie_names.user_consent,                  // name of the consent cookie
            cookieStorageDays:      expires,                                    // lifetime of a cookie [0..365], 0: session cookie
            cookieSameSite:         same_site,                                  // restrict consent cookie
            cookieSecure:           secure,                                     // only sent to the server with an encrypted request over HTTPS
            cookieDomain:           domainAttribute,                            // set domain (hostname|domain)
            dialogLanguage:         moduleOptions.dialogLanguage,               // language for the dialog (modal)
            whitelisted:            moduleOptions.whitelisted,                  // pages NO cookie dialog is shown
            reloadPageOnChange:     moduleOptions.reloadPageOnChange,           // reload if setzings has changed
            dialogContainerID:      moduleOptions.dialogContainerID,            // container, the dialog modal is (dynamically) loaded
            xhrDataElement:         moduleOptions.xhrDataElement,               // container for all language-specific dialogs (modals)
            postSelectionCallback:  moduleOptions.postSelectionCallback,        // callback function, called after the user has made his selection
          });
          _this.setState('finished');
          logger.debug('\n' + 'state: ' + _this.getState());
          logger.debug('\n' + 'module initialized successfully');
          // -------------------------------------------------------------------
          // NOTE: Click events moved to Navigator (core)
          // -------------------------------------------------------------------
          clearInterval(dependencies_met_page_ready);
        }
      }, 25);
    }, // END init
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
        //
        // Place handling of command|action here
        //
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
    }, // END getState
    // -------------------------------------------------------------------------
    // cbCookie()
    // Called (callback) by CookieConsent module after the user has
    // made his selection
    // -------------------------------------------------------------------------
    cbCookie: function () {
      var url             = new liteURL(window.location.href);
      var hostname        = url.hostname;
      var gaCookies       = j1.findCookie('_ga');
      var gasCookies      = j1.findCookie('__ga');
      var j1Cookies       = j1.findCookie('j1');
      var cookie_names    = j1.getCookieNames();
      var user_state      = j1.readCookie(cookie_names.user_state);
      var user_consent    = j1.readCookie(cookie_names.user_consent);
      var user_translate  = j1.readCookie(cookie_names.user_translate);
      var json            = JSON.stringify(user_consent);
      var user_agent      = platform.ua;
      var cookie_written;
      logger.info('\n' + 'entered post selection callback from CookieConsent');
      logger.info('\n' + 'current values from CookieConsent: ' + json);
      // enable cookie button if not visible
      if ($('#quickLinksCookieButton').css('display') === 'none')  {
        $('#quickLinksCookieButton').css('display', 'block');
      }
      // Manage Google Analytics OptIn/Out
      // See: https://github.com/luciomartinez/gtag-opt-in/wiki
      if (tracking_enabled && tracking_id_valid) {
        // Managing cookie life-time
        // ---------------------------------------------------------------------
        // If cookie settings allows only "required" cookies, all "persistent"
        // cookies (Comments|Ads|Translation) get expired to "session" for
        // better GDPR compliance. The GDPR regulations does NOT require
        // any consent on session-only cookies.
        //
        if (!user_consent.analysis || !user_consent.personalization) {
          // overload cookie consent settings
          user_translate.analysis         = user_consent.analysis;
          user_translate.personalization  = user_consent.personalization;
          // disable translation service
          user_translate.translationEnabled = false;
          cookie_written = j1.writeCookie({
            name:     cookie_names.user_translate,
            data:     user_translate,
            secure:   secure
          });
          // expire permanent cookies to session
          // -------------------------------------------------------------------
          j1.expireCookie({ name: cookie_names.user_state });
          j1.expireCookie({ name: cookie_names.user_consent });
          j1.expireCookie({ name: cookie_names.user_translate });
        }
        if (moduleOptions.reloadPageOnChange) {
          // reload current page (skip cache)
          location.reload(true);
        }
      } else {
        // Failsafe: Make (really) sure the all GA|GAS cookies removed
        // left from a previous session/page view for better privacy compliance
        // ---------------------------------------------------------------------
        // remove cookies on invalid GA config or left from a previous
        // session/page view if they exists
        // ---------------------------------------------------------------------
        gaCookies.forEach(function (item) {
          logger.warn('\n' + 'delete GA cookie: ' + item);
          if (hostname == 'localhost') {
            j1.removeCookie({ name: item, domain: false, secure: false });
          } else {
            j1.removeCookie({ name: item, domain: '.' + hostname, secure: false });
          }
        });
        // remove cookies on invalid GAS config or left from a previous
        // session/page view if they exists
        // ---------------------------------------------------------------------
        gasCookies.forEach(function (item) {
          // Remove cookies from Google Ads
          logger.warn('\n' + 'delete GAS cookie: ' + item);
          if (hostname == 'localhost') {
            j1.removeCookie({ name: item, domain: false, secure: false });
          } else {
            j1.removeCookie({ name: item, domain: '.' + hostname, secure: false });
          }
        });
        // Managing cookie life-time. If cookie settings allows only
        // "required" cookies, all "persistent" cookies (Comments|Ads|Translation)
        // get expired to "session" for better GDPR compliance. The GDPR
        // regulations|privacy does NOT require any consent on using cookies
        // for session-only cookies.
        // ---------------------------------------------------------------------
        if (!user_consent.analysis || !user_consent.personalization) {
          // overload cookie consent settings
          user_translate.analysis         = user_consent.analysis;
          user_translate.personalization  = user_consent.personalization;
          // disable translation service
          user_translate.translationEnabled = false;
          cookie_written = j1.writeCookie({
            name:     cookie_names.user_translate,
            data:     user_translate,
            secure:   secure
          });
          if (expireCookiesOnRequiredOnly) {
            // expire permanent cookies to session
            j1.expireCookie({ name: cookie_names.user_state });
            j1.expireCookie({ name: cookie_names.user_consent });
            j1.expireCookie({ name: cookie_names.user_translate });
          }
        }
        if (moduleOptions.reloadPageOnChange) {
          // reload current page (skip cache)
          location.reload(true);
        }
      } // END if tracking_enabled
    } // END cbCookie
  }; // END return
})(j1, window);


