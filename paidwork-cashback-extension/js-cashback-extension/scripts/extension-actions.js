function addHomeContent() {

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){

        let currentURL = tabs[0].url;
        
        for (let i = 0; i < tabShops.length; i++) {
            let isPartner = currentURL.search(tabShops[i][0].toLowerCase());
            
            if (isPartner != -1) {
                let cashBack = tabCashbacks[i]*100;

                $('.pw_main_content').remove();
                $('.pw_main').prepend('<div class="pw_main_content"></div>');
                // $('.cashback_buttons').show();
                $('.pw_main_content').prepend(
                    '<div class="pw_main_content_cashback-notification"><p class="pw_main_content_cashback-notification_text">Cashback for this shop : '+cashBack.toFixed(2)+'%</p></div>'+
                    '<div class="pw_main_content_shop-elements"></div>'+
                    '<button class="pw_main_button" hidden>Activate Cashback</button>'+
                    '<button class="pw_main_button_ac" hidden>Cashback Activated</button>'

                );
                $('.pw_main_content_shop-elements').append(
                    '<div class="pw_main_content_shop-elements_shop-image"><img src="'+tabImages[i]+'"></div>'+
                    '<div class="pw_main_content_shop-elements_categories"><div id="category_1">'+tabShops[i][1].toUpperCase()+'</div></div>'
                );
                $('.pw_main_content').append(
                    '<div class="pw_main_content_cashback-description">'+
                    '<div class="pw_main_content_section_box"><p class="pw_main_content_section_box_text">1. Add your <b>favorite products</b> to the cart and move to the payment section.</p></div>'+
                    '<div class="pw_main_content_section_box"><p class="pw_main_content_section_box_text">2. Activate the code on your favorite website and buy your product with a <b>discount.</b></p></div>'+
                    '<div class="pw_main_content_section_box"><p class="pw_main_content_section_box_text">3. Get your favorite product and wait a few days for the saved money to reach your <b> bank account!</b></p></div>'+
                    '</div>'
                ); 

                $('#CurLang').html(i);
                $('.profile').hide();
                
                chrome.storage.local.get(['opened'], function(result) {
                    var callback = result.opened;
                 
                if  (callback == '1')  {
                    $('.pw_main_button_ac').show();
                    $('.pw_main_button').hide();
                } else if   (callback == '2') {
                    $('.pw_main_button').show();
                    $('.pw_main_button_ac').hide();
                } else if   (callback === undefined) {
                    $('.pw_main_button').show();
                    $('.pw_main_button_ac').hide();
                }   else if(callback === null) {
                    $('.pw_main_button').show();
                    $('.pw_main_button_ac').hide();
                } else if(callback == '0') {
                    $('.pw_main_button').show();
                    $('.pw_main_button_ac').hide();
                }
            });   
            var User_id = localStorage.getItem('User_id');
                var url = shopslink[i];
                $('.pw_main_button').on('click', function() {
                    window.open(url+"&epi="+User_id);
                   chrome.storage.local.set({ 'used': 1 });
                });   
                $('.pw_main_search_text').remove();
                 
                i = tabShops.length;
            } 
            else if (isPartner == -1) {
                $('.pw_main_content').remove();
                $('.pw_main').prepend('<div class="pw_main_content"></div>');
                $('.pw_main_button_ac').hide();
                $('.pw_main_button').hide();
                $('.cashback_buttons').hide();
                $('.profile').hide();
                $('.pw_main_content').html(
                    '<div class="pw_main_content_default-notification"><p class="pw_main_content_default-notification_text">No cashback available for this shop</p></div>'+
                    '<div class="pw_main_content_section">'+
                        '<div class="pw_main_content_section_main-text"><p class="pw_main_content_section_main-text_headline">Welcome to <br>paidwork.com.</p><p class="pw_main_content_section_main-text_sub-headline">Buy cheaper with cashback.</p></div>'+
                        '<div class="pw_main_content_section_box"><p class="pw_main_content_section_box_text">1. Go to your favorite shop and see the popup with the <b>cashback.</b></p></div>'+
                        '<div class="pw_main_content_section_box"><p class="pw_main_content_section_box_text">2. Add your <b>favorite products</b> to the cart and move to the payment section.</p></div>'+
                        '<div class="pw_main_content_section_box"><p class="pw_main_content_section_box_text">3. Activate the code on your favorite website and buy your product with a <b>discount.</b></p></div>'+
                        '<div class="pw_main_content_section_box"><p class="pw_main_content_section_box_text">4. Get your favorite product and wait a few days for the saved money to reach your <b> bank account!</b></p></div>'+
                    '</div>'
                    );
        
            }
        }  
    });

}


function addShopsContent() {


    
    $('.pw_main').prepend('<div class="pw_main_content"</div>');
    $('.pw_main').prepend(
        '<div class="pw_main_search">'+
            '<label class="pw_main_search_label">'+
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="7" stroke="#404040" stroke-width="2"/><path d="M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11" stroke="#404040" stroke-width="2" stroke-linecap="round"/><path d="M20 20L17 17" stroke="#404040" stroke-width="2" stroke-linecap="round"/></svg>'+
                '<input type="text" placeholder="Search for shop..." class="pw_main_search_text" id="search_input">'+
            '</label>'+
        '</div>');   
    $('.pw_main_content').html('<div class="pw_main_content_shops"></div>');
    $('.pw_main').prepend(
        '<div class="choose-category">'+
                '<select class="choose-category_select">'+
                    '<option value="all">All categories</option>'+
                    '<option value="technology">Technology</option>'+
                    '<option value="health&beauty">Health & Beauty</option>'+
                    '<option value="sport">Sport</option>'+
                    '<option value="services">Services</option>'+
                    '<option value="animals">For animals</option>'+
                    '<option value="fashion">Fashion</option>'+
                    '<option value="automotive">Automotive</option>'+
                    '<option value="house">House</option>'+
                    '<option value="travel">Travel</option>'+
                    '<option value="food">Food</option>'+
                '</select>'+
        '</div>'
    );
    $('.pw_main').append('.scroll-down');
    $('.scroll-down').show();
    
    let select = $('.choose-category_select');
    //Search
    $('.pw_main_search_text').on('keyup', function() {

        let searchValue = document.getElementById("search_input").value;
        $('.pw_main_content_shops').html("");

        if (searchValue.length > 0) {

            for (let i = 0; i < tabShops.length; i++) {
                if (tabShops[i][0].indexOf(searchValue) >= 0) {
                    let cashBack = tabCashbacks[i]*100;
                    $('.pw_main_content_shops').append('<div class="shop_label"><div class="shop_label_shopimage"><img src="'+ tabImages[i] + '" alt="shop_image"></div><p class="shop_label_shopname"><i>' + tabShops[i][0] + '</i><br>Cashback for this shop: ' + cashBack.toFixed(2) +'%</p></div>');
                }
            }
        }
        if (searchValue.length == 0) {
     
            for (let i = 0; i < tabShops.length; i++) {
                let cashBack = tabCashbacks[i]*100;
                $('.pw_main_content_shops').append('<div class="shop_label"><div class="shop_label_shopimage"><img src="'+ tabImages[i] + '" alt="shop_image"></div><p class="shop_label_shopname"><i>' + tabShops[i][0] + '</i><br>Cashback for this shop: ' + cashBack.toFixed(2) +'%</p></div>');
            } 
        }
    }); 
    //Default (all shops after loaded)

    for (let i = 0; i < tabShops.length; i++) {
        let cashBack = tabCashbacks[i]*100;
        $('.pw_main_content_shops').append('<div class="shop_label"><div class="shop_label_shopimage"><img src="'+ tabImages[i] + '" alt="shop_image"></div><p class="shop_label_shopname"><i>' + tabShops[i][0] + '</i><br>Cashback for this shop: ' + cashBack.toFixed(2) +'%</p></div>');
    }  

    changeSelect();

    //Changing the select
    function changeSelect() {
    
        select.on('change', function() {
            $('.pw_main_content_shops').html("");
            let selectValue = select.val();    
            switch (selectValue) {
                case 'all': 
            
                    for (let i = 0; i < tabShops.length; i++) {
                        let cashBack = tabCashbacks[i]*100;
                        $('.pw_main_content_shops').append('<div class="shop_label"><div class="shop_label_shopimage"><img src="'+ tabImages[i] + '" alt="shop_image"></div><p class="shop_label_shopname"><i>' + tabShops[i][0] + '</i><br>Cashback for this shop: ' + cashBack.toFixed(2) +'%</p></div>');
                      
                    }
                    break;
        
                    case 'technology': 
                    for (let i = 0; i < tabShops.length; i++) {
        
                        if (tabShops[i][1] == 'technology') {
                            let cashBack = tabCashbacks[i]*100;
                            $('.pw_main_content_shops').append('<div class="shop_label"><div class="shop_label_shopimage"><img src="'+ tabImages[i] + '" alt="shop_image"></div><p class="shop_label_shopname"><i>' + tabShops[i][0] + '</i><br>Cashback for this shop: ' + cashBack.toFixed(2) +'%</p></div>');
                        }
        
                    }
                    break;
    
                case 'health&beauty': 
                    for (let i = 0; i < tabShops.length; i++) {
        
                        if (tabShops[i][1] == 'health&beauty') {
                            let cashBack = tabCashbacks[i]*100;
                            $('.pw_main_content_shops').append('<div class="shop_label"><div class="shop_label_shopimage"><img src="'+ tabImages[i] + '" alt="shop_image"></div><p class="shop_label_shopname"><i>' + tabShops[i][0] + '</i><br>Cashback for this shop: ' + cashBack.toFixed(2) +'%</p></div>');
                        }
        
                    }
                    break;
    
                case 'sport': 
                    for (let i = 0; i < tabShops.length; i++) {
        
                        if (tabShops[i][1] == 'sport') {
                            let cashBack = tabCashbacks[i]*100;
                            $('.pw_main_content_shops').append('<div class="shop_label"><div class="shop_label_shopimage"><img src="'+ tabImages[i] + '" alt="shop_image"></div><p class="shop_label_shopname"><i>' + tabShops[i][0] + '</i><br>Cashback for this shop: ' + cashBack.toFixed(2) +'%</p></div>');
                        }
        
                    }
                    break;
    
                case 'services': 
                    for (let i = 0; i < tabShops.length; i++) {
        
                        if (tabShops[i][1] == 'services') {
                            let cashBack = tabCashbacks[i]*100;
                            $('.pw_main_content_shops').append('<div class="shop_label"><div class="shop_label_shopimage"><img src="'+ tabImages[i] + '" alt="shop_image"></div><p class="shop_label_shopname"><i>' + tabShops[i][0] + '</i><br>Cashback for this shop: ' + cashBack.toFixed(2) +'%</p></div>');
                        }
        
                    }
                    break;
    
                    case 'animals': 
                    for (let i = 0; i < tabShops.length; i++) {
        
                        if (tabShops[i][1] == 'animals') {
                            let cashBack = tabCashbacks[i]*100;
                            $('.pw_main_content_shops').append('<div class="shop_label"><div class="shop_label_shopimage"><img src="'+ tabImages[i] + '" alt="shop_image"></div><p class="shop_label_shopname"><i>' + tabShops[i][0] + '</i><br>Cashback for this shop: ' + cashBack.toFixed(2) +'%</p></div>');
                        }
        
                    }
                    break;
    
                case 'fashion': 
                    for (let i = 0; i < tabShops.length; i++) {
        
                        if (tabShops[i][1] == 'fashion') {
                            let cashBack = tabCashbacks[i]*100;
                            $('.pw_main_content_shops').append('<div class="shop_label"><div class="shop_label_shopimage"><img src="'+ tabImages[i] + '" alt="shop_image"></div><p class="shop_label_shopname"><i>' + tabShops[i][0] + '</i><br>Cashback for this shop: ' + cashBack.toFixed(2) +'%</p></div>');
                        }
        
                    }
                    break;
    
                case 'automotive': 
                    for (let i = 0; i < tabShops.length; i++) {
        
                        if (tabShops[i][1] == 'automotive') {
                            let cashBack = tabCashbacks[i]*100;
                            $('.pw_main_content_shops').append('<div class="shop_label"><div class="shop_label_shopimage"><img src="'+ tabImages[i] + '" alt="shop_image"></div><p class="shop_label_shopname"><i>' + tabShops[i][0] + '</i><br>Cashback for this shop: ' + cashBack.toFixed(2) +'%</p></div>');
                        }
        
                    }
                    break;     
    
                case 'house': 
                    for (let i = 0; i < tabShops.length; i++) {
        
                        if (tabShops[i][1] == 'house') {
                            let cashBack = tabCashbacks[i]*100;
                            $('.pw_main_content_shops').append('<div class="shop_label"><div class="shop_label_shopimage"><img src="'+ tabImages[i] + '" alt="shop_image"></div><p class="shop_label_shopname"><i>' + tabShops[i][0] + '</i><br>Cashback for this shop: ' + cashBack.toFixed(2) +'%</p></div>');
                        }
        
                    }
                    break; 
                    
                case 'travel': 
                    for (let i = 0; i < tabShops.length; i++) {
        
                        if (tabShops[i][1] == 'travel') {
                            let cashBack = tabCashbacks[i]*100;
                            $('.pw_main_content_shops').append('<div class="shop_label"><div class="shop_label_shopimage"><img src="'+ tabImages[i] + '" alt="shop_image"></div><p class="shop_label_shopname"><i>' + tabShops[i][0] + '</i><br>Cashback for this shop: ' + cashBack.toFixed(2) +'%</p></div>');
                        }
        
                    }
                    break; 
    
                case 'food': 
                    for (let i = 0; i < tabShops.length; i++) {
        
                        if (tabShops[i][1] == 'food') {
                            let cashBack = tabCashbacks[i]*100;
                            $('.pw_main_content_shops').append('<div class="shop_label"><div class="shop_label_shopimage"><img src="'+ tabImages[i] + '" alt="shop_image"></div><p class="shop_label_shopname"><i>' + tabShops[i][0] + '</i><br>Cashback for this shop: ' + cashBack.toFixed(2) +'%</p></div>');
                        }
        
                    }
                    break; 
            }
        });
    
    }


}

function addEarnContent() {    

    $('.pw_main').append('<div class="pw_main_content_earn"></div>');
    $('.pw_main_content_earn').append(
        '<div class="pw_main_content_earn_main-text">'+
            '<p class="earn_headline">Earn more with paidwork</p>'+ 
        '</div>'+
        '<div class="pw_main_content_earn_boxes">'+
            '<div class="pw_main_content_earn_box" id="play-games"><img src="img/play-games.png"><p class="pw_main_content_earn_box_text">Play Games</p><button class="pw_main_content_earn_box_earn-button">EARN</button></div>'+
            '<div class="pw_main_content_earn_box" id="fill-out-surveys"><img src="img/fill-out-surveys.png"><p class="pw_main_content_earn_box_text">Fill Out Surveys</p><button class="pw_main_content_earn_box_earn-button">EARN</button></div>'+
            '<div class="pw_main_content_earn_box" id="online-shopping"><img src="img/online-shopping.png"><p class="pw_main_content_earn_box_text">Online Shopping</p><button class="pw_main_content_earn_box_earn-button">EARN</button></div>'+
            '<div class="pw_main_content_earn_box" id="watch-videos"><img src="img/watch-videos.png"><p class="pw_main_content_earn_box_text">Watch Videos</p><button class="pw_main_content_earn_box_earn-button">EARN</button></div>'+
            '<div class="pw_main_content_earn_box" id="services"><img src="img/services.png"><p class="pw_main_content_earn_box_text">Services</p><button class="pw_main_content_earn_box_earn-button">EARN</button></div>'+
        '</div>'
    );
    $('.pw_main').append('<div class="scroll-down"></div>');

    $('.earn_headline').click(function (){
        window.open("https://www.paidwork.com/earn");
    });

    $('#play-games').click(function() {
        window.open("https://www.paidwork.com/earn/playing-games/");
    });
    $('#fill-out-surveys').click(function() {
        window.open("https://www.paidwork.com/earn/filling-out");
    });
    $('#online-shopping').click(function() {
        window.open("https://www.paidwork.com/earn/shopping");
    });
    $('#watch-videos').click(function() {
        window.open("https://www.paidwork.com/earn/watching-videos");
    });
    $('#services').click(function() {
        window.open("https://www.paidwork.com/earn/services");
    });

}

function addProfileContent() {

}

function removeContent() {
    $('.pw_main_search').remove();
    $('.choose-category').remove();
    $('.pw_main_content_earn').remove();
}

$('document').ready(function () {
    var User_id = localStorage.getItem('User_id');

    if (User_id === null){
        $('.pw_main_button_ac').hide();
        $('.pw_main_button').hide();
        $('.profile').hide();
        $('html, body').css('height', '400px');
        $('.pw_header').css('height', '20%');
        $('#Login').show();
        $('.pw_main_content').hide();
        $('.pw_main').hide();
        $('.pw_main_content_button').hide();
        $('.pw_main_search').hide();
        $('.scroll-down').hide();
        $('.pw_header_icons').hide();
    } else {
        addHomeContent();
        $('html, body').css('height', '600px'); 
        $('.pw_header').css('height', '13%');
        $('.pw_header_icons').show();

    }

    $('.pw_footer_navigation_home').click(function() {
        
        if (User_id === null) {
            alert("Nie jesteś Zalogowany");
            $('.profile').hide();
          
        }
        else {
            removeContent();
            $('.pw_main').prepend('<div class="pw_main_content"></div>');
            addHomeContent();
            $('.profile').hide();
        }
       
    });

    $('.load_shops').click(function() {
        $( "#Settings_modal" ).hide();
        removeContent();
        addShopsContent();
        $('.profile').hide();
        $('.pw_main_button_ac').hide();
        $('.pw_main_button').hide();
    });

    $('.pw_footer_navigation_earn').click(function() {
        $('.pw_main').html("");
        removeContent();
        addEarnContent();
        $('.profile').hide();
        $('.pw_main_button_ac').hide();
        $('.pw_main_button').hide();
    });

    $('.pw_footer_navigation_profile').click(function() {
        $('.pw_main').html("");
        removeContent();
        $('.profile').show();
        $('.pw_main_button_ac').hide();
        $('.pw_main_button').hide();
    });
    $('.pw_header_logo').on('click', function () {
        chrome.tabs.update(undefined, {url: 'https://www.paidwork.com/'});
    })
    $('.settings').on('click', function () {
        $('#Settings_modal').show("slow");  
    })
    $('.backgroundfilter').on('click', function () {
        $( "#Settings_modal" ).hide("slow");
    })
    $('#close_popup').on('click', function () {
        $( "#Settings_modal" ).hide("slow");
    })
});
