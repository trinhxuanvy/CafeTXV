$(document).ready(function () {
    $('.btn-slide span:nth-child(2)').click(function (e) { 
        e.preventDefault();
        $('.banner-slide-content').css('left','-100%');
        $('.btn-slide span:nth-child(2)').css('background-color','#d6af55');
        $('.btn-slide span:nth-child(1)').css('background-color','#fff');
    });
    $('.header .fa-angle-right').click(function (e) { 
        e.preventDefault();
        $('.banner-slide-content').css('left','-100%');
        $('.btn-slide span:nth-child(2)').css('background-color','#d6af55');
        $('.btn-slide span:nth-child(1)').css('background-color','#fff');
    });
    $('.btn-slide span:nth-child(1)').click(function (e) { 
        e.preventDefault();
        $('.banner-slide-content').css('left','0');
        $('.btn-slide span:nth-child(2)').css('background-color','#fff');
        $('.btn-slide span:nth-child(1)').css('background-color','#d6af55');
    });
    $('.header .fa-angle-left').click(function (e) { 
        e.preventDefault();
        $('.banner-slide-content').css('left','0');
        $('.btn-slide span:nth-child(2)').css('background-color','#fff');
        $('.btn-slide span:nth-child(1)').css('background-color','#d6af55');
    });
    $('.nav-top_icon .col-3:nth-child(1)').hover(function () {
            // over
            $('.nav-top_icon .col-3 form').css('visibility','visible');
        }, function () {
            // out
            $('.nav-top_icon .col-3 form').css('visibility','hidden');
        }
    );
    $('.nav-top_icon .col-3:nth-child(3)').hover(function () {
        // over
        $('.nav-top_icon .col-3 .login').css('visibility','visible');
    }, function () {
        // out
        $('.nav-top_icon .col-3 .login').css('visibility','hidden');
    }
    );
    var position = $('.nav-top').position();
    var top = position.top;
    $(window).scroll(function () { 
        var pos = $(document).scrollTop();
        if(top < pos){
            $('.nav-top').css('background-color','#333');
            $('.nav-top').css('opacity','0.9');
        }
        else{
            $('.nav-top').css('background','');
            $('.nav-top').css('opacity','1');
        }
    });
    let cate = document.getElementById('categories-3_frame');
    var arr = [25.5,34,51.3];
    var item = [3,2,1];
    let len = 0;
    let count1 = 0;
    
    $('.categories-3 .slide-product .fa-angle-right').click(function (e) { 
        e.preventDefault();
        let widthCate = document.getElementById('categories-3').offsetWidth;
        if(widthCate > 975){
            if(count1 == item[2]){
                count1 = 0;
                len = 0;
            }
            else{
                count1++;
                len -= arr[0];
            }
            cate.style.left = len.toString() + '%';
        }
        else if(widthCate <= 975 && widthCate > 583){
            if(count1 == item[1]){
                count1 = 0;
                len = 0;
            }
            else{
                count1++;
                len -= arr[1];
            }
            cate.style.left = len.toString() + '%';
        }
        else if(widthCate <= 583){
            if(count1 == item[0]){
                count1 = 0;
                len = 0;
            }
            else{
                count1++;
                len -= arr[2];
            }
            cate.style.left = len.toString() + '%';
        }
        console.log(count1);
    });
    $('.categories-3 .slide-product .fa-angle-left').click(function (e) { 
        e.preventDefault();
        let widthCate = document.getElementById('categories-3').offsetWidth;
        if(widthCate > 975){
            if(count1 == 0){
                count1 = item[2];
                len = arr[0]*(-1);
            }
            else{
                count1--;
                len += arr[0];
            }
            cate.style.left = len.toString() + '%';
        }
        else if(widthCate <= 975 && widthCate > 583){
            if(count1 == 0){
                count1 = item[1];
                len = arr[1]*(-2);
            }
            else{
                count1--;
                len += arr[1];
            }
            cate.style.left = len.toString() + '%';
        }
        else if(widthCate <= 583){
            if(count1 == 0){
                count1 = item[0];
                len = arr[2]*(-3);
            }
            else{
                count1--;
                len += arr[2];
            }
            cate.style.left = len.toString() + '%';
        }
    });
    $(window).resize(function () {
        count1.valueOf();
        cate.style.left = '0%';
    });
    var btn_slide_4 = document.getElementsByClassName('btn-slide-4');
    var slide = document.getElementById('slide-4');
    let check = 0, left = 0;
    for(let i = 0; i < btn_slide_4.length; i++){
        btn_slide_4[i].onclick = function(){
            if(i == 0){
                left = 0;
            }
            else if(i == 1){
                left = -100;
            }
            else if(i == 2){
                left = -200;
            }
            slide.style.left = left.toString() + '%';
            let cur = document.getElementsByClassName('active-4');
            cur[0].className = cur[0].className.replace("active-4","");
            this.className += " active-4";
        }
    }
});
