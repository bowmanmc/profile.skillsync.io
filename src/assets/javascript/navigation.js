'use strict';

import jQuery from 'jquery';

const ANIMATE_TIME = 250; // milliseconds

// Setup navigation event listeners... for ids, look in views/partials/navigation.ejs
jQuery('#nav-introduction').click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery('#profile-introduction').offset().top
    }, ANIMATE_TIME);
});
