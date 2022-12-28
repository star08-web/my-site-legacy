(function(){

    var manager = iframemanager();

    // Example with youtube embed
    manager.run({
        currLang: 'en',
        services : {
            featurefm : {
                embedUrl: 'https://ffm.to/{data-id}',
                iframe : {

                },
                cookie : {
                    name : 'cc_featurefm'
                },
                languages : {
                    en : {
                        notice: 'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer" href="https://help.feature.fm/hc/en-us/articles/360042334392-Terms-of-Use" title="Terms and conditions" target="_blank">terms and conditions</a> of feature.fm.',
                        loadBtn: 'Load Smartlink',
                        loadAllBtn: 'Don\'t ask again'
                    }
                }
            },
            amplify : {
                embedUrl: 'https://{owner-id}.ampl.ink/{data-id}',
                iframe : {

                },
                cookie : {
                    name : 'cc_amplify'
                },
                languages : {
                    en : {
                        notice: 'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer" href="https://help.feature.fm/hc/en-us/articles/360042334392-Terms-of-Use" title="Terms and conditions" target="_blank">terms and conditions</a> of feature.fm.',
                        loadBtn: 'Load Smartlink',
                        loadAllBtn: 'Don\'t ask again'
                    }
                }
            }
        }
    });
})();