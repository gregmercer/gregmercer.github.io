/**
 * @file
 * Behaviors for the search.
 */
!function (Drupal, $) {
  'use strict';
  /**
   * Update element accessability
   * @param {Object} el the element received t oset accessibility
   * @param {boolean} status the element received t oset accessibility
   * @returns {void}
   */

  function updateElementAriaHidden(el) {
    var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    document.querySelector(el).inert = status;
    $(el).attr('aria-hidden', "".concat(status));
  }
  /**
   * Setup and attach the  search behaviors.
   *
   * @type {Drupal~behavior}
   */


  Drupal.behaviors.searchTweaks = {
    attach: function attach(context) {
      var windowWidth = $(window).width();
      var previousWidth = windowWidth;
      var currentWidth = windowWidth;
      var mainContentEl = '#main-content';
      $('a.icon--search', context).once().on('click', function (e) {
        currentWidth = $(window).width();

        if ($(this).hasClass('open')) {
          $(this).attr('aria-label', 'Open Search');
          $(this).focus();
          updateElementAriaHidden(mainContentEl, false);
        } else {
          $(this).attr('aria-label', 'Close Search');

          if (currentWidth >= 1190) {
            updateElementAriaHidden(mainContentEl, true);
          } else {
            updateElementAriaHidden(mainContentEl, false);
          }
        }

        var $searchInput = $(this).closest('.global-search').find('form .form-search-input');
        $searchInput.focus(function () {
          $(this).closest('.form-search-input').addClass('search-focus');
        });
        $('body').toggleClass('search-open');
        $(this).parents('header').toggleClass('search-open');
        $(this).closest('.global-search').find('.form-search-wrapper').toggleClass('open');
        $(this).toggleClass('open');
        $(this).closest('.global-search').find('form .form-search-input').focus();
        e.preventDefault();
      });
      $(window).on('resize', function () {
        currentWidth = $(window).width();

        if (previousWidth !== currentWidth) {
          if (currentWidth >= 1190 && $('body').hasClass('search-open')) {
            updateElementAriaHidden(mainContentEl, true);
          } else {
            updateElementAriaHidden(mainContentEl, false);
          }

          previousWidth = currentWidth;
        }
      });
    }
  };
}(Drupal, jQuery);
//# sourceMappingURL=search.js.map
