/**
 * @file
 * Behaviors for the mini finder.
 */
!function (Drupal, $) {
  'use strict'; // Image dimensions override.

  Drupal.behaviors.imageDimensionOverride = {
    attach: function attach(context) {
      $('article.media', context).each(function () {
        if ($(this).attr('data-height')) {
          $(this).css('height', $(this).attr('data-height'));
        }

        if ($(this).attr('data-width')) {
          $(this).css('width', $(this).attr('data-width'));
        }

        if ($(this).attr('data-hspace-left')) {
          $(this).css('margin-left', $(this).attr('data-hspace-left'));
        }

        if ($(this).attr('data-hspace-right')) {
          $(this).css('margin-right', $(this).attr('data-hspace-right'));
        }

        if ($(this).attr('data-vspace-top')) {
          $(this).css('margin-top', $(this).attr('data-vspace-top'));
        }

        if ($(this).attr('data-vspace-bottom')) {
          $(this).css('margin-bottom', $(this).attr('data-vspace-bottom'));
        }
      });
    }
  }; // Twitter hide card in tablet, mobile & on width basis.

  Drupal.behaviors.twitterHideCardOverride = {
    attach: function attach(context) {
      var maxWidth;
      $('article.media--type-twitter', context).each(function () {
        if ($(window).width() < 992 || $(this).hasClass('align-center')) {
          $(this).find('blockquote').attr('data-cards', 'hidden');
        } // Media content or content group - Twitter media
        // if max-width is equal to 611 then hide card.


        maxWidth = $($(this)).width();

        if (maxWidth === 611) {
          $($(this), context).find('blockquote').attr('data-cards', 'hidden');
        }
      });
    }
  };
}(Drupal, jQuery);
//# sourceMappingURL=image-dimension-override.js.map
