$(document).ready(function() {
   
    
    let isButtonChecked = localStorage.getItem("isButtonChecked");
    var kolor = localStorage.getItem('kolor');
    var kolor2 = localStorage.getItem('kolor2');
    var kolor3 = localStorage.getItem('kolor3');
    var kolor4 = localStorage.getItem('kolor4');
    var kolor5 = localStorage.getItem('kolor5');
    var kolor6 = localStorage.getItem('kolor6');
    const toggleLogo = document.getElementById("pw_header_logo1");
    const toggleButton = document.getElementById("toggleButton");
    var theme=localStorage.getItem('theme');;
    if (theme==1) {
        setTimeout(function() {
   
        $('.pw_main_content').css('background-color', kolor2);
        $('.pw_main_content_shop-elements').css('background-color', kolor2);
        $('.pw_header').css('background-color', kolor);
        $('.pw_footer').css('background-color', kolor3);
        $('.pw_container_popup').css('background-color',kolor2);
        $('.langCont').css('background-color', kolor2);
        $('.themeCont').css('background-color', kolor2);
        $('.pw_main_content').css('color',kolor4 );
        $('.shop_label_shopname').css('color', kolor4);
        $('.pw_main_search_text').css('background-color', kolor2);
        $('.pw_main_content_cashback-notification').css('color', kolor4);
        $('.pw_main_content_cashback-notification').css('background-color', kolor5);
        $('.profile-content-page').css('background-color', kolor2);
        $('.pw_main_content_shops').css('background-color', kolor5);
        $('.pw_main_content_earn_boxes').css('background-color', kolor2);
        $('.pw_main_content_earn_boxes').css('color', kolor6);
        $('.profile-content ').css('color', kolor6);
        $('.profile').css('color', kolor6);
        
        if (isButtonChecked=== "1") {
            toggleButton.checked = true;
            toggleButton.nextElementSibling.classList.add("checked");
            toggleLogo.classList.add("theme");
        } else {
            toggleButton.checked = false;
            toggleButton.nextElementSibling.classList.remove("checked");
            toggleLogo.classList.remove("theme");
        }
    },500); 
    }else if(theme == 0 || theme == 2) {
   
        $('.pw_main_content').css('background-color', kolor2);
        $('.pw_main_content_shop-elements').css('background-color', kolor2);
        $('.pw_header').css('background-color', kolor);
        $('.pw_footer').css('background-color', kolor3);
        $('.pw_container_popup').css('background-color',kolor2);
        $('.langCont').css('background-color', kolor2);
        $('.themeCont').css('background-color', kolor2);
        $('.pw_main_content').css('color',kolor4 );
        $('.shop_label_shopname').css('color', kolor4);
        $('.pw_main_search_text').css('background-color', kolor2);
        $('.pw_main_content_cashback-notification').css('color', kolor4);
        $('.pw_main_content_cashback-notification').css('background-color', kolor5);
        $('.profile-content-page').css('background-color', kolor2);
        $('.pw_main_content_shops').css('background-color', kolor5);
        $('.pw_main_content_earn_boxes').css('background-color', kolor2);
        $('.pw_main_content_earn_boxes').css('color', kolor6);
        $('.profile-content ').css('color', kolor6);
        $('.profile').css('color', kolor6);
        if (isButtonChecked=== "1") {
            toggleButton.checked = true;
            toggleButton.nextElementSibling.classList.add("checked");
            toggleLogo.classList.add("theme");
        } else {
            toggleButton.checked = false;
            toggleButton.nextElementSibling.classList.remove("checked");
            toggleLogo.classList.remove("theme");
        }
    }

}); 

$('.slider').on('click', function() {
        let isButtonChecked = localStorage.getItem("isButtonChecked");
        const toggleLogo = document.getElementById("pw_header_logo1");
        const toggleButton = document.getElementById("toggleButton");
        var clicks=0+isButtonChecked
        
        if(clicks==0){
        $('.pw_header').css("background-color", "#3F454E");
        $('.pw_main_content').css('background-color', '#2C3037');
        $('.pw_main_content_shop-elements').css('background-color', '#2C3037');
        $('.pw_container_popup').css('background-color',"#2C3037");
        $('.pw_footer').css("background-color", "#3F454E");
        $('.langCont').css('background-color', '#2C3037');
        $('.themeCont').css('background-color', '#2C3037');
        $('.pw_main_search_text').css('background-color', '#2C3037');
        $('.pw_main_content').css('color', 'white');
        $('.shop_label_shopname').css('color', 'white');
        $('.pw_main_content_cashback-notification').css('color', 'white');
        $('.pw_main_content_cashback-notification').css('background-color', '#2C3037');
        $('.profile-content-page').css('background-color', '#2C3037');
        $('.pw_main_content_shops').css('background-color', '#2C3037');
        $('.pw_main_content_earn_boxes').css('background-color', '#2C3037');
        $('.pw_main_content_earn_boxes').css('color', 'white');
        $('.profile-content ').css('color', 'white');
        $('.profile').css('color', 'white');
        localStorage.setItem('kolor', '#3F454E');
        localStorage.setItem('kolor2', '#2C3037');
        localStorage.setItem('kolor3', '#3F454E');
        localStorage.setItem('kolor4', 'white');
        localStorage.setItem('kolor5', '#2C3037');
        localStorage.setItem('theme', 1);
        localStorage.setItem('kolor6', 'white');
        localStorage.setItem("isButtonChecked", 1);
        toggleButton.nextElementSibling.classList.add("checked");
        toggleLogo.classList.add("theme");
        clicks++;

        } else if (clicks == 1 || clicks == 2) {

        $('.pw_header').css("background-color", "white");
        $('.pw_main_content').css("background-color", "white");
        $('.pw_container_popup').css('background-color',"white");
        $('.pw_footer').css("background-color", "#3171FE");
        $('.langCont').css('background-color', 'white');
        $('.themeCont').css('background-color', 'white');
        $('.pw_main_search_text').css('background-color', 'white');
        $('.pw_main_content').css('color', '#404040');
        $('.shop_label_shopname').css('color', '#404040');
        $('.pw_main_content_shop-elements').css('background-color', 'white');
        $('.pw_main_content_cashback-notification').css('color', 'black');
        $('.pw_main_content_cashback-notification').css('background-color', '#E2CFDA');
        $('.profile-content-page').css('background-color', 'white');
        $('.pw_main_content_shops').css('background-color', 'white');
        $('.pw_main_content_earn_boxes').css('background-color', 'white');
        $('.pw_main_content_earn_boxes').css('color', 'black');
        $('.profile-content ').css('color', 'black');
        $('.profile').css('color', 'black');
        localStorage.setItem('kolor', 'white');
        localStorage.setItem('kolor2', 'white');
        localStorage.setItem('kolor3', '#3171FE');
        localStorage.setItem('kolor4', '#404040');
        localStorage.setItem('kolor5', '#E2CFDA');
        localStorage.setItem('kolor6', 'black');
        
        localStorage.setItem('theme', 0);
        localStorage.setItem("isButtonChecked", 0);
        toggleLogo.classList.remove("theme");
        toggleButton.nextElementSibling.classList.remove("checked");
        clicks = 0;   
    }
});