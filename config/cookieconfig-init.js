// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    gui_options: {
        consent_modal: {
            layout: 'box',               // box/cloud/bar
            position: 'middle center',     // bottom/middle/top + left/right/center
            transition: 'slide',           // zoom/slide
            swap_buttons: false            // enable to invert buttons
        },
        settings_modal: {
            layout: 'box',                 // box/bar
            // position: 'left',           // left/right
            transition: 'slide'            // zoom/slide
        }
    },
    current_lang: 'en',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false
    // mode: 'opt-in',                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    delay: 0,                               // default: 0
    auto_language: null,                     // default: null; could also be 'browser' or 'document'
    autorun: true,                          // default: true
    force_consent: true,                   // default: false
    hide_from_bots: false,                  // default: false
    remove_cookie_tables: false  ,           // default: false
    cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    cookie_expiration: 182,                 // default: 182 (days)
    cookie_necessary_only_expiration: 182,   // default: disabled
    cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'We use cookies 🍪',
                description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Reject all',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Cookie preferences',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Cookie usage 📢',
                        description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        },
                        cookie_table:[
                            {
                                col1: 'NO_COOKIE',       // match all cookies starting with "_ga"
                                col2: 'this website',
                                col3: 'TEMP (deletes when the page get closed)',
                                col4: 'Hostng (https://github.io)',
                                is_regex: true
                            }
                        ]
                    }, {
                        title: 'Performance and Analytics cookies',
                        description: 'These cookies allow the creator of this website to get info about the website',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '_clck',       // match all cookies starting with "_ga"
                                col2: 'clarity.microsoft.com',
                                col3: '2 years',
                                col4: 'Microsoft Clarity',
                                is_regex: true
                            }
                        ]

                    }, {
                        title: 'More information',
                        description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="mailto:webstar868@gmail.com">contact us</a>.',
                    }
                ]
            }
        }
    }
});

document.body.classList.toggle('c_darkmode');