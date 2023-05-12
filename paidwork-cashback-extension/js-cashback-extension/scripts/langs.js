$(document).ready(function() {
        var lang = localStorage.getItem('lang');
        if(lang===null||lang==='1'){
            var home = chrome.i18n.getMessage("Home");
            var Shops_footer = chrome.i18n.getMessage("Shops_footer");
            var Earn_footer = chrome.i18n.getMessage("Earn_footer");
            var Earn_profile = chrome.i18n.getMessage("Earn_profile");
            var settings_text = chrome.i18n.getMessage("settings_text");
            var settings_lang = chrome.i18n.getMessage("settings_lang");
            var theme_text = chrome.i18n.getMessage("theme_text");
            var sign_in_button = chrome.i18n.getMessage("sign_in_button");
            var register_button = chrome.i18n.getMessage("register_button");
            var login_text = chrome.i18n.getMessage("login_text");
            var jezyk = chrome.i18n.getMessage("jezyk");
            var pw_main_button = chrome.i18n.getMessage("pw_main_button");
            var pw_main_button_ac = chrome.i18n.getMessage("pw_main_button_ac");
            $('.pw_main_content_default-notification_text').html(langEN[2]);
            $('.footer_home').html(home);
            $('.footer_shops').html(Shops_footer);
            $('.footer_earn').html(Earn_footer);
            $('.footer_profile').html(Earn_profile);
            $('.settings-text').html(settings_text);
            $('.settings-lang').html(settings_lang);
            $('.theme-text').html(theme_text);
            $('.minimal').val(jezyk);
            $('.sign-in-button').html(sign_in_button);
            $('.register-button').html(register_button);
            $('.login-text').html(login_text);
            $('.pw_main_button').html(pw_main_button);
            $('.pw_main_button_ac').html(pw_main_button_ac);
    };
   

    var desc = localStorage.getItem('desc');
    var def = localStorage.getItem('def');
    var home = localStorage.getItem('home');
    var shops = localStorage.getItem('shops');
    var earn = localStorage.getItem('earn');
    var profile = localStorage.getItem('profile');
    var settingstext = localStorage.getItem('settings-text');
    var settingslang = localStorage.getItem('settings-lang');
    var themetext = localStorage.getItem('theme-text');
    var Currlangis = localStorage.getItem('Currlangis');
    if (home) {
    $('.pw_main_content_cashback-description_text').html(desc);
    $('.pw_main_content_default-notification_text').html(def);
    $('.footer_home').html(home);
    $('.footer_shops').html(shops);
    $('.footer_earn').html(earn);
    $('.footer_profile').html(profile);
    $('.settings-text').html(settingstext);
    $('.settings-lang').html(settingslang);
    $('.theme-text').html(themetext);
    $('.minimal').val(Currlangis);
    }
    
});

$('.minimal').on('change', function() {
    
    var selectedValue = $(this).val();
    var description = document.getElementById('CurLang').innerHTML;
        if (selectedValue === 'English (United States)') {
            $('.pw_main_content_default-notification_text').html(langEN[2]);
            $('.footer_home').html(langEN[5]);
            $('.footer_shops').html(langEN[6]);
            $('.footer_earn').html(langEN[7]);
            $('.footer_profile').html(langEN[8]);
            $('.settings-text').html(langEN[9]);
            $('.settings-lang').html(langEN[10]);
            $('.theme-text').html(langEN[11]);
            localStorage.setItem('def', langEN[2]);
            localStorage.setItem('home', langEN[5]);
            localStorage.setItem('shops', langEN[6]);
            localStorage.setItem('earn', langEN[7]);
            localStorage.setItem('profile', langEN[8]);
            localStorage.setItem('settings-text', langEN[9]);
            localStorage.setItem('settings-lang', langEN[10]);
            localStorage.setItem('theme-text', langEN[11]);
            localStorage.setItem('Currlangis', selectedValue);
            localStorage.setItem('lang', 2);
        }
        else if (selectedValue === 'English (United Kingdom)') {
            $('.pw_main_content_default-notification_text').html(langEN[2]);
            $('.footer_home').html(langEN[5]);
            $('.footer_shops').html(langEN[6]);
            $('.footer_earn').html(langEN[7]);
            $('.footer_profile').html(langEN[8]);
            $('.settings-text').html(langEN[9]);
            $('.settings-lang').html(langEN[10]);
            $('.theme-text').html(langEN[11]);
            localStorage.setItem('def', langEN[2]);
            localStorage.setItem('home', langEN[5]);
            localStorage.setItem('shops', langEN[6]);
            localStorage.setItem('earn', langEN[7]);
            localStorage.setItem('profile', langEN[8]);
            localStorage.setItem('settings-text', langEN[9]);
            localStorage.setItem('settings-lang', langEN[10]);
            localStorage.setItem('theme-text', langEN[11]);
            localStorage.setItem('lang', 2);
            localStorage.setItem('Currlangis', selectedValue);
        }
        else if (selectedValue === 'Español') {
            $('.pw_main_content_default-notification_text').html(langES[2]);
            $('.footer_home').html(langES[5]);
            $('.footer_shops').html(langES[6]);
            $('.footer_earn').html(langES[7]);
            $('.footer_profile').html(langES[8]);
            $('.settings-text').html(langES[9]);
            $('.settings-lang').html(langES[10]);
            $('.theme-text').html(langES[11]);
            localStorage.setItem('def', langES[2]);
            localStorage.setItem('lang', 2);
            localStorage.setItem('home', langES[5]);
            localStorage.setItem('shops', langES[6]);
            localStorage.setItem('earn', langES[7]);
            localStorage.setItem('profile', langES[8]);
            localStorage.setItem('settings-text', langES[9]);
            localStorage.setItem('settings-lang', langES[10]);
            localStorage.setItem('theme-text', langES[11]);
            localStorage.setItem('Currlangis', selectedValue);
             }
             else if (selectedValue === 'Deutsch') {
                $('.pw_main_content_default-notification_text').html(langDE[2]);
                $('.footer_home').html(langDE[5]);
                $('.footer_shops').html(langDE[6]);
                $('.footer_earn').html(langDE[7]);
                $('.footer_profile').html(langDE[8]);
                $('.settings-text').html(langDE[9]);
                $('.settings-lang').html(langDE[10]);
                $('.theme-text').html(langDE[11]);
                localStorage.setItem('def', langDE[2]);
                localStorage.setItem('lang', 2);
                localStorage.setItem('home', langDE[5]);
                localStorage.setItem('shops', langDE[6]);
                localStorage.setItem('earn', langDE[7]);
                localStorage.setItem('profile', langDE[8]);
                localStorage.setItem('settings-text', langDE[9]);
                localStorage.setItem('settings-lang', langDE[10]);
                localStorage.setItem('theme-text', langDE[11]);
                localStorage.setItem('Currlangis', selectedValue);
                 }
                 else if (selectedValue === 'Français') {
                    $('.pw_main_content_default-notification_text').html(langFR[2]);
                    $('.footer_home').html(langFR[5]);
                    $('.footer_shops').html(langFR[6]);
                    $('.footer_earn').html(langFR[7]);
                    $('.footer_profile').html(langFR[8]);
                    $('.settings-text').html(langFR[9]);
                    $('.settings-lang').html(langFR[10]);
                    $('.theme-text').html(langFR[11]);
                    localStorage.setItem('def', langFR[2]);
                    localStorage.setItem('lang', 2);
                    localStorage.setItem('home', langFR[5]);
                    localStorage.setItem('shops', langFR[6]);
                    localStorage.setItem('earn', langFR[7]);
                    localStorage.setItem('profile', langFR[8]);
                    localStorage.setItem('settings-text', langFR[9]);
                    localStorage.setItem('settings-lang', langFR[10]);
                    localStorage.setItem('theme-text', langFR[11]);
                    localStorage.setItem('Currlangis', selectedValue);
                     }
                     else if (selectedValue === 'Italiano') {
                        $('.pw_main_content_default-notification_text').html(langIT[2]);
                        $('.footer_home').html(langIT[5]);
                        $('.footer_shops').html(langIT[6]);
                        $('.footer_earn').html(langIT[7]);
                        $('.footer_profile').html(langIT[8]);
                        $('.settings-text').html(langIT[9]);
                        $('.settings-lang').html(langIT[10]);
                        $('.theme-text').html(langIT[11]);
                        localStorage.setItem('def', langIT[2]);
                        localStorage.setItem('lang', 2);
                        localStorage.setItem('home', langIT[5]);
                        localStorage.setItem('shops', langIT[6]);
                        localStorage.setItem('earn', langIT[7]);
                        localStorage.setItem('profile', langIT[8]);
                        localStorage.setItem('settings-text', langIT[9]);
                        localStorage.setItem('settings-lang', langIT[10]);
                        localStorage.setItem('theme-text', langIT[11]);
                        localStorage.setItem('Currlangis', selectedValue);
                         }
                         else if (selectedValue === 'Nederlands') {
                            $('.pw_main_content_default-notification_text').html(langNE[2]);
                            $('.footer_home').html(langNE[5]);
                            $('.footer_shops').html(langNE[6]);
                            $('.footer_earn').html(langNE[7]);
                            $('.footer_profile').html(langNE[8]);
                            $('.settings-text').html(langNE[9]);
                            $('.settings-lang').html(langNE[10]);
                            $('.theme-text').html(langNE[11]);
                            localStorage.setItem('def', langNE[2]);
                            localStorage.setItem('lang', 2);
                            localStorage.setItem('home', langNE[5]);
                            localStorage.setItem('shops', langNE[6]);
                            localStorage.setItem('earn', langNE[7]);
                            localStorage.setItem('profile', langNE[8]); 
                            localStorage.setItem('settings-text', langNE[9]);
                            localStorage.setItem('settings-lang', langNE[10]);
                            localStorage.setItem('theme-text', langNE[11]);
                            localStorage.setItem('Currlangis', selectedValue);
                             }
                             else if (selectedValue === 'Dansk') {
                                $('.pw_main_content_default-notification_text').html(langDA[2]);
                                $('.footer_home').html(langDA[5]);
                                $('.footer_shops').html(langDA[6]);
                                $('.footer_earn').html(langDA[7]);
                                $('.footer_profile').html(langDA[8]);
                                $('.settings-text').html(langDA[9]);
                                $('.settings-lang').html(langDA[10]);
                                $('.theme-text').html(langDA[11]);
                                localStorage.setItem('def', langDA[2]);
                                localStorage.setItem('lang', 2);
                                localStorage.setItem('home', langDA[5]);
                                localStorage.setItem('shops', langDA[6]);
                                localStorage.setItem('earn', langDA[7]);
                                localStorage.setItem('profile', langDA[8]);
                                localStorage.setItem('settings-text', langDA[9]);
                                localStorage.setItem('settings-lang', langDA[10]);
                                localStorage.setItem('theme-text', langDA[11]);
                                localStorage.setItem('Currlangis', selectedValue);
                                 }
                                 else if (selectedValue === 'Svenska') {
                                   
                                    $('.pw_main_content_default-notification_text').html(langSV[2]);
                                    $('.footer_home').html(langSV[5]);
                                    $('.footer_shops').html(langSV[6]);
                                    $('.footer_earn').html(langSV[7]);
                                    $('.footer_profile').html(langSV[8]);
                                    $('.settings-text').html(langSV[9]);
                                    $('.settings-lang').html(langSV[10]);
                                   $('.theme-text').html(langSV[11]);
                                    localStorage.setItem('def', langSV[2]);
                                    localStorage.setItem('lang', 2);
                                    localStorage.setItem('home', langSV[5]);
                                    localStorage.setItem('shops', langSV[6]);
                                    localStorage.setItem('earn', langSV[7]);
                                    localStorage.setItem('profile', langSV[8]);
                                    localStorage.setItem('Currlangis', selectedValue);
                                     }
                                     else if (selectedValue === 'Polski') {
                                
                                        $('.pw_main_content_default-notification_text').html(langPL[2]);
                                        $('.footer_home').html(langPL[5]);
                                        $('.footer_shops').html(langPL[6]);
                                        $('.footer_earn').html(langPL[7]);
                                        $('.footer_profile').html(langPL[8]);
                                        $('.sign-in-button').html(langPL[9]);
                                        $('.register-button').html(langPL[10]);
                                        $('.login-text').html(langPL[11]);
                                        $('.settings-text').html(langPL[12]);
                                        $('.settings-lang').html(langPL[13]);
                                        $('.theme-text').html(langPL[14]);
                                        localStorage.setItem('def', langPL[2]);
                                        localStorage.setItem('lang', 2);
                                        localStorage.setItem('home', langPL[5]);
                                        localStorage.setItem('shops', langPL[6]);
                                        localStorage.setItem('earn', langPL[7]);
                                        localStorage.setItem('profile', langPL[8]);
                                        localStorage.setItem('settings-text', langPL[12]);
                                        localStorage.setItem('settings-lang', langPL[13]);
                                        localStorage.setItem('theme-text', langPL[14]);
                                        localStorage.setItem('Currlangis', selectedValue);
                                         }
                                         else if (selectedValue === 'Português (Brasil)') {
                                            
                                            $('.pw_main_content_default-notification_text').html(langPO[2]);
                                            $('.footer_home').html(langPO[5]);
                                            $('.footer_shops').html(langPO[6]);
                                            $('.footer_earn').html(langPO[7]);
                                            $('.footer_profile').html(langPO[8]);
                                            $('.settings-text').html(langPO[9]);
                                            $('.settings-lang').html(langPO[10]);
                                            $('.theme-text').html(langPO[11]);
                                            localStorage.setItem('def', langPO[2]);
                                            localStorage.setItem('lang', 2);
                                            localStorage.setItem('home', langPO[5]);
                                            localStorage.setItem('shops', langPO[6]);
                                            localStorage.setItem('earn', langPO[7]);
                                            localStorage.setItem('profile', langPO[8]);
                                            localStorage.setItem('settings-text', langPO[9]);
                                            localStorage.setItem('settings-lang', langPO[10]);
                                            localStorage.setItem('theme-text', langPO[11]);
                                            localStorage.setItem('Currlangis', selectedValue);
                                             }
                                             else if (selectedValue === 'Português (Portugal)') {
                                                
                                                $('.pw_main_content_default-notification_text').html(langPO[2]);
                                                $('.footer_home').html(langPO[5]);
                                                $('.footer_shops').html(langPO[6]);
                                                $('.footer_earn').html(langPO[7]);
                                                $('.footer_profile').html(langPO[8]);
                                                 $('.settings-text').html(langPO[9]);
                                                $('.settings-lang').html(langPO[10]);
                                                $('.theme-text').html(langPO[11]);
                                                localStorage.setItem('def', langPO[2]);
                                                localStorage.setItem('lang', 2);
                                                localStorage.setItem('home', langPO[5]);
                                                localStorage.setItem('shops', langPO[6]);
                                                localStorage.setItem('earn', langPO[7]);
                                                localStorage.setItem('profile', langPO[8]);
                                                localStorage.setItem('settings-text', langPO[9]);
                                                localStorage.setItem('settings-lang', langPO[10]);
                                                localStorage.setItem('theme-text', langPO[11]);
                                                localStorage.setItem('Currlangis', selectedValue);
                                                 }
                                                 else if (selectedValue === 'Română') {
                                                    
                                                    $('.pw_main_content_default-notification_text').html(langRO[2]);
                                                    $('.footer_home').html(langRO[5]);
                                                    $('.footer_shops').html(langRO[6]);
                                                    $('.footer_earn').html(langRO[7]);
                                                    $('.footer_profile').html(langRO[8]);
                                                    $('.settings-text').html(langRO[9]);
                                                    $('.settings-lang').html(langRO[10]);
                                                    $('.theme-text').html(langRO[11]);
                                                    localStorage.setItem('def', langRO[2]);
                                                    localStorage.setItem('lang', 2);
                                                    localStorage.setItem('home', langRO[5]);
                                                    localStorage.setItem('shops', langRO[6]);
                                                    localStorage.setItem('earn', langRO[7]);
                                                    localStorage.setItem('profile', langRO[8]);
                                                    localStorage.setItem('settings-text', langRO[9]);
                                                    localStorage.setItem('settings-lang', langRO[10]);
                                                    localStorage.setItem('theme-text', langRO[11]);
                                                    localStorage.setItem('Currlangis', selectedValue);
                                                     }
                                                else if (selectedValue === 'Tiếng Việt') {
                                                 
                                                    $('.pw_main_content_default-notification_text').html(langTI[2]);
                                                    $('.footer_home').html(langTI[5]);
                                                    $('.footer_shops').html(langTI[6]);
                                                    $('.footer_earn').html(langTI[7]);
                                                    $('.footer_profile').html(langTI[8]);
                                                    $('.settings-text').html(langTI[9]);
                                                    $('.settings-lang').html(langTI[10]);
                                                    $('.theme-text').html(langTI[11]);
                                                    localStorage.setItem('def', langTI[2]);
                                                    localStorage.setItem('lang', 2);
                                                    localStorage.setItem('home', langTI[5]);
                                                    localStorage.setItem('shops', langTI[6]);
                                                    localStorage.setItem('earn', langTI[7]);
                                                    localStorage.setItem('profile', langTI[8])
                                                    localStorage.setItem('settings-text', langTI[9]);
                                                    localStorage.setItem('settings-lang', langTI[10]);
                                                    localStorage.setItem('theme-text', langTI[11]);;
                                                    localStorage.setItem('Currlangis', selectedValue);
                                                     }
                                                else if (selectedValue === 'Türkçe') {
                                                   
                                                    $('.pw_main_content_default-notification_text').html(langTU[2]);
                                                    $('.footer_home').html(langTU[5]);
                                                    $('.footer_shops').html(langTU[6]);
                                                    $('.footer_earn').html(langTU[7]);
                                                    $('.footer_profile').html(langTU[8]);
                                                    $('.settings-text').html(langTU[9]);
                                                    $('.settings-lang').html(langTU[10]);
                                                    $('.theme-text').html(langTU[11]);
                                                    localStorage.setItem('def', langTU[2]);
                                                    localStorage.setItem('lang', 2);
                                                    localStorage.setItem('home', langTU[5]);
                                                    localStorage.setItem('shops', langTU[6]);
                                                    localStorage.setItem('earn', langTU[7]);
                                                    localStorage.setItem('profile', langTU[8]);
                                                    localStorage.setItem('settings-text', langTU[9]);
                                                    localStorage.setItem('settings-lang', langTU[10]);
                                                    localStorage.setItem('theme-text', langTU[11]);
                                                    localStorage.setItem('Currlangis', selectedValue);
                                                     }
                                              else if (selectedValue === 'Bahasa Indonesia') {
                                               
                                                $('.pw_main_content_default-notification_text').html(langBA[2]);
                                                $('.footer_home').html(langBA[5]);
                                                $('.footer_shops').html(langBA[6]);
                                                $('.footer_earn').html(langBA[7]);
                                                $('.footer_profile').html(langBA[8]);
                                                $('.settings-text').html(langBA[9]);
                                                $('.settings-lang').html(langBA[10]);
                                                $('.theme-text').html(langBA[11]);
                                                localStorage.setItem('def', langBA[2]);
                                                localStorage.setItem('lang', 2);
                                                localStorage.setItem('home', langBA[5]);
                                                localStorage.setItem('shops', langBA[6]);
                                                localStorage.setItem('earn', langBA[7]);
                                                localStorage.setItem('profile', langBA[8]);
                                                localStorage.setItem('settings-text', langBA[9]);
                                                localStorage.setItem('settings-lang', langBA[10]);
                                                localStorage.setItem('theme-text', langBA[11]);
                                                localStorage.setItem('Currlangis', selectedValue);
                                                     }
                                            else if (selectedValue === 'Русский') {
                                                
                                                $('.pw_main_content_default-notification_text').html(langRU[2]);
                                                $('.footer_home').html(langRU[5]);
                                                $('.footer_shops').html(langRU[6]);
                                                $('.footer_earn').html(langRU[7]);
                                                $('.footer_profile').html(langRU[8]);
                                                $('.settings-text').html(langRU[9]);
                                                $('.settings-lang').html(langRU[10]);
                                                $('.theme-text').html(langRU[11]);
                                                localStorage.setItem('def', langRU[2]);
                                                localStorage.setItem('lang', 2);
                                                localStorage.setItem('home', langRU[5]);
                                                localStorage.setItem('shops', langRU[6]);
                                                localStorage.setItem('earn', langRU[7]);
                                                localStorage.setItem('profile', langRU[8]);
                                                localStorage.setItem('settings-text', langRU[9]);
                                                localStorage.setItem('settings-lang', langRU[10]);
                                                localStorage.setItem('theme-text', langRU[11]);
                                                localStorage.setItem('Currlangis', selectedValue);
                                                     }
                                             else if (selectedValue === 'Українська') {
                                          
                                                $('.pw_main_content_default-notification_text').html(langUKR[2]);
                                                $('.footer_home').html(langUKR[5]);
                                                $('.footer_shops').html(langUKR[6]);
                                                $('.footer_earn').html(langUKR[7]);
                                                $('.footer_profile').html(langUKR[8]);
                                                $('.settings-text').html(langUKR[9]);
                                                $('.settings-lang').html(langUKR[10]);
                                                $('.theme-text').html(langUKR[11]);
                                                localStorage.setItem('def', langUKR[2]);
                                                localStorage.setItem('lang', 2);
                                                localStorage.setItem('home', langUKR[5]);
                                                localStorage.setItem('shops', langUKR[6]);
                                                localStorage.setItem('earn', langUKR[7]);
                                                localStorage.setItem('profile', langUKR[8]);
                                                localStorage.setItem('settings-text', langUKR[9]);
                                                localStorage.setItem('settings-lang', langUKR[10]);
                                                localStorage.setItem('theme-text', langUKR[11]);
                                                localStorage.setItem('Currlangis', selectedValue);
                                                     }
                                                 else if (selectedValue === 'ภาษาไทย') {
                                                    
                                                    $('.pw_main_content_default-notification_text').html(langTA[2]);
                                                    $('.footer_home').html(langTA[5]);
                                                    $('.footer_shops').html(langTA[6]);
                                                    $('.footer_earn').html(langTA[7]);
                                                    $('.footer_profile').html(langTA[8]);
                                                    $('.settings-text').html(langTA[9]);
                                                    $('.settings-lang').html(langTA[10]);
                                                    $('.theme-text').html(langTA[11]);
                                                    localStorage.setItem('def', langTA[2]);
                                                    localStorage.setItem('lang', 2);
                                                    localStorage.setItem('home', langTA[5]);
                                                    localStorage.setItem('shops', langTA[6]);
                                                    localStorage.setItem('earn', langTA[7]);
                                                    localStorage.setItem('profile', langTA[8]);
                                                    localStorage.setItem('settings-text', langTA[9]);
                                                    localStorage.setItem('settings-lang', langTA[10]);
                                                    localStorage.setItem('theme-text', langTA[11]);
                                                    localStorage.setItem('Currlangis', selectedValue);
                                                     }
                                                     else if (selectedValue === 'اردو<') {
                                                        
                                                        $('.pw_main_content_default-notification_text').html(langURD[2]);
                                                        $('.footer_home').html(langURD[5]);
                                                        $('.footer_shops').html(langURD[6]);
                                                        $('.footer_earn').html(langURD[7]);
                                                        $('.footer_profile').html(langURD[8]);
                                                        $('.settings-text').html(langURD[9]);
                                                        $('.settings-lang').html(langURD[10]);
                                                        $('.theme-text').html(langURD[11]);
                                                        localStorage.setItem('def', langURD[2]);
                                                        localStorage.setItem('lang', 2);
                                                        localStorage.setItem('home', langURD[5]);
                                                        localStorage.setItem('shops', langURD[6]);
                                                        localStorage.setItem('earn', langURD[7]);
                                                        localStorage.setItem('profile', langURD[8]);
                                                        $('.settings-text').html(langARB[9]);
                                                        $('.settings-lang').html(langARB[10]);
                                                        $('.theme-text').html(langARB[11]);
                                                        localStorage.setItem('Currlangis', selectedValue);
                                                         }
                                                         else if (selectedValue === '‏العربية‏') {
                                                          
                                                            $('.pw_main_content_default-notification_text').html(langARB[2]);
                                                            $('.footer_home').html(langARB[5]);
                                                            $('.footer_shops').html(langARB[6]);
                                                            $('.footer_earn').html(langARB[7]);
                                                            $('.footer_profile').html(langARB[8]);
                                                            $('.settings-text').html(langARB[9]);
                                                            $('.settings-lang').html(langARB[10]);
                                                            $('.theme-text').html(langARB[11]);
                                                            localStorage.setItem('def', langARB[2]);
                                                            localStorage.setItem('lang', 2);
                                                            localStorage.setItem('home', langARB[5]);
                                                            localStorage.setItem('shops', langARB[6]);
                                                            localStorage.setItem('earn', langARB[7]);
                                                            localStorage.setItem('profile', langARB[8]);
                                                            localStorage.setItem('settings-text', langARB[9]);
                                                            localStorage.setItem('settings-lang', langARB[10]);
                                                            localStorage.setItem('theme-text', langARB[11]);
                                                            localStorage.setItem('Currlangis', selectedValue);
                                                             }
                                                             else if (selectedValue === '‏فارسی‏') {
                                                                
                                                                $('.pw_main_content_default-notification_text').html(langPE[2]);
                                                                $('.footer_home').html(langPE[5]);
                                                                $('.footer_shops').html(langPE[6]);
                                                                $('.footer_earn').html(langPE[7]);
                                                                $('.footer_profile').html(langPE[8]);
                                                                $('.settings-text').html(langPE[9]);
                                                                $('.settings-lang').html(langPE[10]);
                                                                $('.theme-text').html(langPE[11]);
                                                                localStorage.setItem('def', langPE[2]);
                                                                localStorage.setItem('lang', 2);
                                                                localStorage.setItem('home', langPE[5]);
                                                                localStorage.setItem('shops', langPE[6]);
                                                                localStorage.setItem('earn', langPE[7]);
                                                                localStorage.setItem('profile', langPE[8]);
                                                                localStorage.setItem('settings-text', langPE[9]);
                                                                localStorage.setItem('settings-lang', langPE[10]);
                                                                localStorage.setItem('theme-text', langPE[11]);
                                                                localStorage.setItem('Currlangis', selectedValue);
                                                                 }
                                                                 else if (selectedValue === 'বাংলা') {
                                                                    
                                                                    $('.pw_main_content_default-notification_text').html(langBEN[2]);
                                                                    $('.footer_home').html(langBEN[5]);
                                                                    $('.footer_shops').html(langBEN[6]);
                                                                    $('.footer_earn').html(langBEN[7]);
                                                                    $('.footer_profile').html(langBEN[8]);
                                                                    $('.settings-text').html(langBEN[9]);
                                                                    $('.settings-lang').html(langBEN[10]);
                                                                    $('.theme-text').html(langBEN[11]);
                                                                    localStorage.setItem('def', langBEN[2]);
                                                                    localStorage.setItem('lang', 2);
                                                                    localStorage.setItem('home', langBEN[5]);
                                                                    localStorage.setItem('shops', langBEN[6]);
                                                                    localStorage.setItem('earn', langBEN[7]);
                                                                    localStorage.setItem('profile', langBEN[8])
                                                                    localStorage.setItem('settings-text', langBEN[9]);
                                                                    localStorage.setItem('settings-lang', langBEN[10]);
                                                                    localStorage.setItem('theme-text', langBEN[11]);
                                                                    localStorage.setItem('Currlangis', selectedValue);
                                                                     }
                                                                     else if (selectedValue === 'हिन्दी') {
                                                                        
                                                                        $('.pw_main_content_default-notification_text').html(langBEN[2]);
                                                                        $('.footer_home').html(langBEN[5]);
                                                                        $('.footer_shops').html(langBEN[6]);
                                                                        $('.footer_earn').html(langBEN[7]);
                                                                        $('.footer_profile').html(langBEN[8]);
                                                                        $('.settings-text').html(langBEN[9]);
                                                                        $('.settings-lang').html(langBEN[10]);
                                                                        $('.theme-text').html(langBEN[11]);
                                                                        localStorage.setItem('def', langBEN[2]);
                                                                        localStorage.setItem('lang', 2);
                                                                        localStorage.setItem('home', langBEN[5]);
                                                                        localStorage.setItem('shops', langBEN[6]);
                                                                        localStorage.setItem('earn', langBEN[7]);
                                                                        localStorage.setItem('profile', langBEN[8]);
                                                                        localStorage.setItem('settings-text', langBEN[9]);
                                                                        localStorage.setItem('settings-lang', langBEN[10]);
                                                                        localStorage.setItem('theme-text', langBEN[11]);
                                                                        localStorage.setItem('Currlangis', selectedValue);
                                                                         }
                                                                         else if (selectedValue === 'ਪੰਜਾਬੀ') {
                                                                            
                                                                            $('.pw_main_content_default-notification_text').html(langBEN[2]);
                                                                            $('.footer_home').html(langBEN[5]);
                                                                            $('.footer_shops').html(langBEN[6]);
                                                                            $('.footer_earn').html(langBEN[7]);
                                                                            $('.footer_profile').html(langBEN[8]);
                                                                            $('.settings-text').html(langBEN[9]);
                                                                            $('.settings-lang').html(langBEN[10]);
                                                                            $('.theme-text').html(langBEN[11]);
                                                                            localStorage.setItem('def', langBEN[2]);
                                                                            localStorage.setItem('lang', 2);
                                                                            localStorage.setItem('home', langBEN[5]);
                                                                            localStorage.setItem('shops', langBEN[6]);
                                                                            localStorage.setItem('earn', langBEN[7]);
                                                                            localStorage.setItem('profile', langBEN[8]);
                                                                            localStorage.setItem('settings-text', langBEN[9]);
                                                                            localStorage.setItem('settings-lang', langBEN[10]);
                                                                            localStorage.setItem('theme-text', langBEN[11]);
                                                                            localStorage.setItem('Currlangis', selectedValue);
                                                                             }
                                                                             else if (selectedValue === '日本語') {
                                                                                
                                                                                $('.pw_main_content_default-notification_text').html(langJAP[2]);
                                                                                $('.footer_home').html(langJAP[5]);
                                                                                $('.footer_shops').html(langJAP[6]);
                                                                                $('.footer_earn').html(langJAP[7]);
                                                                                $('.footer_profile').html(langJAP[8]);
                                                                                $('.settings-text').html(langJAP[9]);
                                                                                $('.settings-lang').html(langJAP[10]);
                                                                                $('.theme-text').html(langJAP[11]);
                                                                                localStorage.setItem('def', langJAP[2]);
                                                                                localStorage.setItem('lang', 2);
                                                                                localStorage.setItem('home', langJAP[5]);
                                                                                localStorage.setItem('shops', langJAP[6]);
                                                                                localStorage.setItem('earn', langJAP[7]);
                                                                                localStorage.setItem('profile', langJAP[8]);
                                                                                localStorage.setItem('settings-text', langJAP[9]);
                                                                                localStorage.setItem('settings-lang', langJAP[10]);
                                                                                localStorage.setItem('theme-text', langJAP[11]);
                                                                                localStorage.setItem('Currlangis', selectedValue);
                                                                                 }
                                                                                 else if (selectedValue === '中文（简体') {
                                                                                    
                                                                                    $('.pw_main_content_default-notification_text').html(langJAP[2]);
                                                                                    $('.footer_home').html(langJAP[5]);
                                                                                    $('.footer_shops').html(langJAP[6]);
                                                                                    $('.footer_earn').html(langJAP[7]);
                                                                                    $('.footer_profile').html(langJAP[8]);
                                                                                    $('.settings-text').html(langJAP[9]);
                                                                                    $('.settings-lang').html(langJAP[10]);
                                                                                    $('.theme-text').html(langJAP[11]);
                                                                                    localStorage.setItem('def', langJAP[2]);
                                                                                    localStorage.setItem('lang', 2);
                                                                                    localStorage.setItem('home', langJAP[5]);
                                                                                    localStorage.setItem('shops', langJAP[6]);
                                                                                    localStorage.setItem('earn', langJAP[7]);
                                                                                    localStorage.setItem('profile', langJAP[8]);
                                                                                    localStorage.setItem('settings-text', langJAP[9]);
                                                                                    localStorage.setItem('settings-lang', langJAP[10]);
                                                                                    localStorage.setItem('theme-text', langJAP[11]);
                                                                                    localStorage.setItem('Currlangis', selectedValue);
                                                                                     }
                                                                                     else if (selectedValue === '中文（簡體') {
                                                                                        $('.settings-text').html(langJAP[9]);
                                                                                        $('.settings-lang').html(langJAP[10]);
                                                                                        $('.theme-text').html(langJAP[11]);
                                                                                        $('.pw_main_content_default-notification_text').html(langJAP[2]);
                                                                                        $('.footer_home').html(langJAP[5]);
                                                                                        $('.footer_shops').html(langJAP[6]);
                                                                                        $('.footer_earn').html(langJAP[7]);
                                                                                        $('.footer_profile').html(langJAP[8]);
                                                                                        localStorage.setItem('def', langJAP[2]);
                                                                                        localStorage.setItem('lang', 2);
                                                                                        localStorage.setItem('home', langJAP[5]);
                                                                                        localStorage.setItem('shops', langJAP[6]);
                                                                                        localStorage.setItem('earn', langJAP[7]);
                                                                                        localStorage.setItem('profile', langJAP[8]);
                                                                                        localStorage.setItem('settings-text', langJAP[9]);
                                                                                        localStorage.setItem('settings-lang', langJAP[10]);
                                                                                        localStorage.setItem('theme-text', langJAP[11]);
                                                                                        localStorage.setItem('Currlangis', selectedValue);
                                                                                         }
                                                                                         else if (selectedValue === '한국어') {
                                                                                            $('.settings-text').html(langKOR[9]);
                                                                                            $('.settings-lang').html(langKOR[10]);
                                                                                            $('.theme-text').html(langKOR[11]);
                                                                                            $('.pw_main_content_default-notification_text').html(langKOR[2]);
                                                                                            $('.footer_home').html(langKOR[5]);
                                                                                            $('.footer_shops').html(langKOR[6]);
                                                                                            $('.footer_earn').html(langKOR[7]);
                                                                                            $('.footer_profile').html(langKOR[8]);
                                                                                            localStorage.setItem('def', langKOR[2]);
                                                                                            localStorage.setItem('lang', 2);
                                                                                            localStorage.setItem('home', langKOR[5]);
                                                                                            localStorage.setItem('shops', langKOR[6]);
                                                                                            localStorage.setItem('earn', langKOR[7]);
                                                                                            localStorage.setItem('profile', langKOR[8]);
                                                                                            localStorage.setItem('settings-text', langKOR[9]);
                                                                                            localStorage.setItem('settings-lang', langKOR[10]);
                                                                                            localStorage.setItem('theme-text', langKOR[11]);
                                                                                            localStorage.setItem('Currlangis', selectedValue);
                                                                                             }
});

const langES =[
    "Nuestras tiendas",
    "Ganar mas",
    "¡Ups! ¡No pudimos encontrar esta tienda en nuestra lista de socios!",
    "Ver a nuestros socios",
    "Tienda actual",
    "Tiendas",
    "Casa",
    "Ganar",
    "Perfil",
    "Ustawienia",
    "Zmień Język",
    "Tryb  Nocny"
];
const langEN =[
    "Our shops",
    "Earn more",
    "No cashback available for this shop",
    "See our partners",
    "Our shops",
    "Home",
    "Shops",
    "Earn",
    "Profile",
    "Settings",
    "Change language",
    "Night Mode"
];
const langDE =[
    "Unsere Geschäfte",
    "Mehr verdienen",
    "Hoppla! Wir konnten diesen Shop nicht in unserer Partnerliste finden!",
    "Siehe unsere Partner",
    "Unsere Geschäfte",
    "Heim",
    "Geschäfte",
    "Verdienen",
    "Profil",
    "Einstellungen",
    "Sprache ändern",
    "Nacht-Modus"
];
const langFR =[
    "Unsere Geschäfte",
    "Mehr verdienen",
    "Hoppla! Wir konnten diesen Shop nicht in unserer Partnerliste finden!",
    "Siehe unsere Partner",
    "Unsere Geschäfte",
    "Heim",
    "Geschäfte",
    "Verdienen",
    "Profil",
    "Paramètres",
    "Changer de langue",
    "Mode nuit"
];
const langNE =[
    "Onze winkels",
    "Verdien meer",
    "Oeps! We konden deze winkel niet vinden in onze partnerlijst!",
    "Bekijk onze partners",
    "Onze winkels",
    "Thuis",
    "Winkels",
    "Verdienen",
    "Profiel",
    "Paramètres",
    "Changer de langue",
    "Mode nuit"
];
const langIT =[
    "I nostri negozi",
    "Guadagna di più",
    "Oops! Non siamo riusciti a trovare questo negozio nell'elenco dei nostri partner!",
    "Vedi i nostri partner",
    "I nostri negozi",
    "Casa",
    "Negozi",
    "Guadagnare",
    "Profilo",
    "Impostazioni",
    "Cambia lingua",
    "Modalità notturna"
];
const langDA=[
    "I nostri negozi",
    "Guadagna di più",
    "Oops! Non siamo riusciti a trovare questo negozio nell'elenco dei nostri partner!",
    "Vedi i nostri partner",
    "I nostri negozi",
    "Casa",
    "Negozi",
    "Guadagnare",
    "Profilo",
    "Impostazioni",
    "Cambia lingua",
    "Modalità notturna"
];

const langSV=[
    "Våra butiker",
    "Tjäna mer",
    "Hoppsan! Vi kunde inte hitta den här butiken i vår partnerlista!",
    "Se våra partners",
    "Våra butiker",
    "Hem",
    "Butiker",
    "Tjäna",
    "Profil",
    "Inställningar",
    "Ändra språk",
    "Nattläge"
];
const langPL=[
    "Sklepy",
    "ZarabiaJ",
    "Ups! Nie mogliśmy znaleźć tego sklepu na naszej liście partnerów!",
    "Zobacz naszych partnerów",
    "Sklepy",
    "Dom",
    "Sklepy",
    "Zarabiaj",
    "Profil",
    "Zaloguj",
    "Zajerestruj",
    "Zaloguj się lub zarejestruj, aby korzystać z naszego rozszerzenia cashback",
    "Ustawienia",
    "Zmień Język",
    "Tryb  Nocny"
];

const langPO=[
    "As nossas lojas",
    "Ganhar mais",
    "Ops! Não encontramos esta loja em nossa lista de parceiros!",
    "Veja nossos parceiros",
    "As nossas lojas",
    "Lar",
    "Lojas",
    "Ganhar",
    "Perfil",
    "Configurações",
    "Mudar idioma",
    "Modo noturno"
];
const langRO=[
    "Magazinele noastre",
    "Castiga mai mult",
    "Hopa! Nu am putut găsi acest magazin în lista noastră de parteneri!",
    "Vezi partenerii noștri",
    "Magazinele noastre",
    "Acasă",
    "Magazine",
    "Câştiga",
    "Profil",
    "Configurações",
    "Mudar idioma",
    "Modo noturno"
];
const langTI=[
    "Cửa hàng của chúng tôi",
    "Kiếm nhiều hơn",
    "Rất tiếc! Chúng tôi không thể tìm thấy cửa hàng này trong danh sách đối tác của mình!",
    "Xem các đối tác của chúng tôi",
    "Cửa hàng của chúng tôi",
    "Trang chủ",
    "Cửa hàng",
    "Kiếm",
    "Hồ sơ",
    "Cài đặt",
    "Thay đổi ngôn ngữ",
    "Chế độ ban đêm"
];
const langBA=[
    "Toko kami",
    "Dapatkan lebih",
    "Ups! Kami tidak dapat menemukan toko ini di daftar mitra kami!",
    "Lihat mitra kami",
    "Toko kami",
    "Rumah",
    "Toko",
    "Menghasilkan",
    "Profil",
    "Pengaturan",
    "Ganti BAHASA",
    "Mode malam"
];
const langRU=[
    "Наши магазины",
    "Зарабатывать больше",
    "Ой! Мы не смогли найти этот магазин в нашем списке партнеров!",
    "Увидеть наших партнеров",
    "Наши магазины",
    "Дом",
    "Магазины",
    "Зарабатывать",
    "Профиль",
    "Настройки",
    "Изменение языка",
    "Ночной режим"
];
const langUKR=[
    "Наші магазини",
    "Заробляй більше",
    "Ой! Ми не змогли знайти цей магазин у списку наших партнерів!",
    "Подивитися наших партнерів",
    "Наші магазини",
    "Дім",
    "Магазини",
    "Заробити",
    "Профіль",
    "Налаштування",
     "Змінити мову",
     "Нічний режим"
];
const langTA=[
    "ร้านค้าของเรา",
    "หารายได้เพิ่มเติม",
    "อ๊ะ! เราไม่พบร้านค้านี้ในรายชื่อพันธมิตรของเรา!",
    "ดูพันธมิตรของเรา",
    "ร้านค้าของเรา",
    "บ้าน",
    "ร้านค้า",
    "ได้รับ",
    "ประวัติโดยย่อ",
    "การตั้งค่า",
     "เปลี่ยนภาษา",
     "โหมดกลางคืน"
];
const langURD=[
    "ہماری دکانیں",
    "زیادہ کمائیے",
    "افوہ! ہمیں اس اسٹور کو اپنے پارٹنر کی فہرست میں نہیں مل سکا!",
    "ہمارے شراکت داروں کو دیکھیں",
    "ہماری دکانیں",
    "گھر",
    "دکانیں",
    "کماؤ",
    "پروفائل",
    "ترتیبات",
    "زبان تبدیل کریں",
    "نائٹ موڈ"
];
const langARB=[
    "متاجرنا" ,
    "كسب المزيد",
    "عفوًا! لم نتمكن من العثور على هذا المتجر في قائمة شركائنا!" ,
    "انظر إلى شركائنا" ,
    "متاجرنا" ,
    "بيت",
    "محلات",
    "يكسب",
    "حساب تعريفي",
    "إعدادات",
    "تغيير اللغة",
    "الوضع الليلي"
];
const langPE=[
    "فروشگاه های ما",
    "بیشتر بدست آوردن",
    "اوه! ما نتوانستیم این فروشگاه را در لیست شرکای خود پیدا کنیم!",
    "شرکای ما را ببینید",
    "فروشگاه های ما",
    "خانه",
    "مغازه ها",
    "بدست آوردن",
    "مشخصات",
    "تنظیمات",
    "تغییر زبان",
    "حالت شب"
];
const langBEN=[
    "আমাদের দোকান",
    "আরো অর্জন",
    "ওহো! আমরা আমাদের অংশীদার তালিকায় এই দোকানটি খুঁজে পাইনি!",
    "আমাদের অংশীদারদের দেখুন",
    "আমাদের দোকান",
    "বাড়ি",
    "দোকান",
    "আয়",
    "প্রোফাইল",
    "সেটিংস",
    "ভাষা পরিবর্তন করুন",
    "রাত মোড"
];
const langKOR=[
    "우리 가게",
    "더 많이 이겨라",
    "앗! 파트너 목록에서 이 매장을 찾을 수 없습니다!",
    "파트너 보기",
    "현재 상점",
    "백화점",
    "집",
    "얻다",
    "프로필",
    "설정",
     "언어 변경",
     "야간 모드"
];

const langtext = [
    "English (United States)",
    "English (United Kingdom)",
    "Español",
    "Deutsch",
    "Français",
    "Italiano",
    "Nederlands",
    "Dansk",
    "Svenska",
    "Polski",
    "Português (Brasil)",
    "Português (Portugal)",
    "Română",
    "Tiếng Việt",
    "Türkçe",
    "Bahasa Indonesia",
    "Русский",
    "Українська",
    "ภาษาไทย",
    "اردو",
    "‏العربية‏",
    "‏فارسی‏",
    "বাংলা",
    "हिन्दी",
    "ਪੰਜਾਬੀ",
    "日本語",
    "中文（简体）",
    "中文（簡體）",
    "한국어"
];


// // Otwarcie lub utworzenie bazy danych IndexedDB
// const openRequest = indexedDB.open('myStoreDatabase', 1);

// // Obsługa zdarzenia otwarcia/utworzenia bazy danych
// openRequest.onupgradeneeded = function(event) {
//   const db = event.target.result;

//   // Utworzenie obiektu magazynu (store) danych
//   const store = db.createObjectStore('store', { keyPath: 'id', autoIncrement: true });

//   // Utworzenie indeksów dla tłumaczeń na inne języki
//   store.createIndex('nameTranslationsIndex', 'nameTranslations', { multiEntry: true });
//   store.createIndex('descriptionTranslationsIndex', 'descriptionTranslations', { multiEntry: true });

//   // Definicja schematu obiektu sklepu
//   store.put({ logo: 'path_to_logo.png', name: 'My Store', description: 'Store description', percent: '10', nameTranslations: { 'es': 'Mi Tienda', 'fr': 'Ma Boutique' }, descriptionTranslations: { 'es': 'Descripción de la tienda', 'fr': 'Description de la boutique' } });
//   store.put({ logo: 'path_to_logo.png', name: 'My Store', description: 'Store description', percent: '10', nameTranslations: { 'es': 'Mi Tienda', 'fr': 'Ma Boutique' }, descriptionTranslations: { 'es': 'Descripción de la tienda', 'fr': 'Description de la boutique' } });
// };

// // Obsługa zdarzenia sukcesu otwarcia/utworzenia bazy danych
// openRequest.onsuccess = function(event) {
//   const db = event.target.result;

//   // Odczytanie informacji o sklepie
//   const transaction = db.transaction('store', 'readonly');
//   const store = transaction.objectStore('store');

//   const getRequest = store.getAll();

//   getRequest.onsuccess = function(event) {
//     const stores = event.target.result;

//     if (stores && stores.length > 0) {
//       const firstStore = stores[0];
//       console.log('Logo:', firstStore.logo);
//       console.log('Nazwa:', firstStore.name);
//       console.log('Opis:', firstStore.description);
//       console.log('Liczba procentowa:', firstStore.percent);
//       console.log('Tłumaczenia na inne języki:');
//       console.log(firstStore.nameTranslations);
//       console.log(firstStore.descriptionTranslations);
//     } else {
//       console.log('Brak informacji o sklepie.');
//     }
//   };

//   getRequest.onerror = function(event) {
//     console.error('Błąd odczytu z bazy danych:', event.target.error);
//   };
// };

// // Obsługa zdarzenia błędu otwarcia/utworzenia bazy danych
// openRequest.onerror = function(event) {
//   console.error('Błąd otwarcia/utworzenia bazy danych:', event.target.error);

// }