/**
 * @file
 * Behaviors for the show-more-aria-attriutes.
 */
!function (Drupal, $) {
  'use strict';
  /**
   * Setup and attach the show-more-aria-attriutes.
   *
   * @type {Drupal~behavior}
   */

  /*eslint no-unused-vars: [1, { "args": "none" }]*/

  Drupal.behaviors.updateAriaAttriutes = {
    attach: function attach(context) {
      if ($('.c-node-faculty__school-news-wrapper .gsb-show-more-wrapper .link--show-more').length > 0) {
        var ariaLabel = $('.c-node-faculty__school-news-wrapper .c-node-faculty__section-title').text().trim();
        $('.c-node-faculty__school-news-wrapper .gsb-show-more-wrapper .link--show-more').attr('data-aria-label', ariaLabel).attr('aria-label', 'Show More ' + ariaLabel);
      }
    }
  };
}(Drupal, jQuery);
//# sourceMappingURL=node-faculty.js.map
