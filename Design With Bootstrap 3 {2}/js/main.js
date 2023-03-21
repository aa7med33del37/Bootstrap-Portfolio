/*global $, window*/

$(function () {
    
    "use strict";
    
    $(window).scroll(function () {
        window.console.log($('.navbar').height());
        window.console.log($(window).scrollTop());
        
        var navBar = $('.navbar');
        if ($(window).scrollTop() >= navBar.height()) {
            navBar.addClass('scrolled');
        } else {
            navBar.removeClass('scrolled');
        }
    });
    
    //Deals with Tabs
    $('.tab-switch li').click(function () {
        
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.tabs-section .tabs-content > div').hide();
        $('.' + $(this).data('class')).show();
    });
    
});