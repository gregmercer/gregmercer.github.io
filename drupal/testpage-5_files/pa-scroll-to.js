/**
 * @file
 * Behaviors for the PA Scroll To.
 */
!function (Drupal, $) {
  'use strict';
  /**
   * Scrolls browser to position of paragraph.
   * @param {string} paragraphId the id or anchor
   * @returns {void}
   */

  function scrollToParagraph(paragraphId) {
    var paList = document.getElementsByClassName(paragraphId);

    if (paList.length > 0) {
      paList[0].scrollIntoView();
    }
  }

  Drupal.behaviors.paScrollTo = {
    attach: function attach(context) {
      // Handle urls with this syntax:
      // /alumni/reunions/mba-class-1970#!moreinfo
      var hashString = window.location.hash;

      if (hashString.length > 0 && hashString.indexOf('#!') != -1) {
        var paragraphAnchor = hashString.replace('#!', '');
        setTimeout(function () {
          if (typeof paragraphAnchor !== 'number') {
            scrollToParagraph('paragraph-anchor-' + paragraphAnchor.toLowerCase());
          } else {
            scrollToParagraph('paragraph-id-' + paragraphAnchor);
          }
        }, 1000);
      } // Handle links in text block pa with either of these syntax:
      // <a class="go-to-paragraph" data-pa-anchor="schedule">Test</a>
      // <a class="go-to-paragraph" data-pa-id="517022">Test</a>


      $('.go-to-paragraph', context).on('click', function () {
        if ($(this).attr('data-pa-id')) {
          scrollToParagraph('paragraph-id-' + $(this).attr('data-pa-id'));
        }

        if ($(this).attr('data-pa-anchor')) {
          scrollToParagraph('paragraph-anchor-' + $(this).attr('data-pa-anchor'));
        }
      }); // Handle CTA links with this syntax:
      // /alumni/reunions/mba-class-1970#!moreinfo

      var ctaLinks = $('.c-cta__link');

      for (var index = 0; index < ctaLinks.length; index++) {
        if (ctaLinks[index].hash.length > 0) {
          var hashPart = ctaLinks[index].hash;

          if (hashPart.indexOf('#!') != -1) {
            $(ctaLinks[index], context).on('click', function () {
              var paragraphAnchor = $(this)[0].hash.replace('#!', '');
              scrollToParagraph('paragraph-anchor-' + paragraphAnchor.toLowerCase());
            });
          }
        }
      }
    }
  };
}(Drupal, jQuery);
//# sourceMappingURL=pa-scroll-to.js.map
