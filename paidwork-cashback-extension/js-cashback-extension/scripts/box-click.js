setTimeout(function() {
    document.querySelector('.pw_box').addEventListener('click', function() {
        document.querySelector('.pw_popup').classList.remove('hide');
        document.querySelector('.pw_popup').classList.add('show');
    });
},3000);