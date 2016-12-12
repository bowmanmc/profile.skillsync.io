'use strict';

import jQuery from 'jquery';

const ANIMATE_TIME = 250; // milliseconds

// Setup navigation event listeners. <a class="scroll__link" ... /> tags
jQuery('.scroll__link').each(function() {
    const link = jQuery(this).first();
    const hash = this.hash;
    link.click(function() {
        jQuery('html, body').animate({
            scrollTop: jQuery(hash).offset().top
        }, ANIMATE_TIME);
    });
});
