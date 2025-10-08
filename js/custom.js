/*global $, window, WOW*/

$(function () {
    
    "use strict";
    
    var win = $(window),
        htmlBody = $("html, body"),
        scrollToTop = $(".scroll-top"),
        header = $(".header");

    /*========== Add Class To Main Nav  ==========*/
    $(".header .header-inner .mobile-button").on("click", function () {
        $(this).toggleClass("active");
        $(".header .header-inner .main-nav").toggleClass("slidedown");
    });

    /*========== Slide Toggle Sub Menu  ==========*/
    $(".header .header-inner .main-nav .menu li a").on("click", function () {
        $(".header .header-inner .main-nav .sub-menu").not($(this).parent().find(".sub-menu")).slideUp();
        $(this).parent().find(".sub-menu").slideToggle();
    });

    /*========== Add Class To Main Nav Link  ==========*/
    $(".header .header-inner .main-nav .menu li.menu-item-has-children > a").on("click", function () {
        $(".header .header-inner .main-nav .menu li.menu-item-has-children > a").not($(this)).removeClass("slidedown");
        $(this).toggleClass("slidedown");
    });
    
    /*========== Navbar Animation On Scroll  ==========*/
    function activeNavbar() {
        
        if (win.scrollTop() > 30) {
            header.addClass("active-nav");
        } else {
            header.removeClass("active-nav");
        }

        if (win.scrollTop() > 150) {
            header.addClass("nav-effect");
        } else {
            header.removeClass("nav-effect");
        }
        
    }
    
    activeNavbar();
    
    win.on("scroll", function () {
        activeNavbar();
    });
    
    /*========== Mobile Menu  ==========*/
    $(".header-inner .menu-toggle").on("click", function () {
        headerInner.toggleClass("menu-active");
    });
    
	/*========== Ajax Contact Form  ==========*/
	$('.contact-form').on("submit", function () {
		
		var myForm = $(this),
			data = {};
		
		myForm.find('[name]').each(function() {
			
			var that = $(this),
				name = that.attr('name'),
				value = that.val();
			
			data[name] = value;
			
		});
		
		$.ajax({
			
			url: myForm.attr('action'),
			type: myForm.attr('method'),
			data: data,
			success: function (response) {
				
				if (response == "success") {
								
					$(".contact-form").find(".form-message").addClass("success");
					$(".form-message span").text("Message Sent!");
					
				} else {
					
					$(".contact-form").find(".form-message").addClass("error");
					$(".form-message span").text("Error Sending!");
					
				}
			}
			
		});
		
		return false;
		
	});
	
	/*========== Scroll To Top  ==========*/
    function scrollUp() {
        if (win.scrollTop() >= 1100) {
            scrollToTop.addClass("active");
        } else {
            scrollToTop.removeClass("active");
        }
    }
    
    scrollUp();
    
    win.on("scroll", function () {
        scrollUp();
    });
    
    scrollToTop.on("click", function (e) {
        e.preventDefault();
        htmlBody.animate({
            scrollTop: 0
        }, 800);
    });
	
});