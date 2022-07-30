/**
 * @file
 * Behaviors for the link--show-more.
 */
!function (Drupal, $) {
  'use strict';
  /**
   * Set height to show more wrappers.
   * @param {Object} el the linkcontent wrapper
   * @returns {void}
   */

  function setHeightofShowMoreWrapper(el) {
    var $el = $(el);

    if ($el.hasClass('toggle-text')) {
      var heightCheckEnable = $el.hasClass('height-check');
      var height = $el.outerHeight(true);
      var lineHeight = $el.css('line-height');
      var numtoshow = $el.data('to-show');

      if (numtoshow === undefined) {
        numtoshow = 8;
      }

      var maxHeight = parseInt(lineHeight, 10) * numtoshow;

      if ($el.find('ol').length > 0) {
        height = height + 12;
      }

      if (heightCheckEnable) {
        if (height > maxHeight) {
          $el.attr('data-original-height', height);
          $el.attr('data-max-height', maxHeight);
          $el.css({
            height: maxHeight
          });
          $($el).closest('.gsb-show-more-wrapper').find('.show-more-link-wrapper').removeClass('hidden');
          $el.addClass('showmore-processed');
        } else {
          $($el).closest('.gsb-show-more-wrapper').find('.show-more-link-wrapper').addClass('hidden');
        }
      } else {
        $el.attr('data-original-height', height);
        $el.attr('data-max-height', maxHeight);
        $el.css({
          height: maxHeight
        });
        $el.addClass('showmore-processed');
      }
    } else if ($el.hasClass('toggle-list')) {
      var _height = $el.outerHeight(true);

      var $elList = $el.children();

      var _numtoshow = $el.data('to-show');

      if (_numtoshow === undefined) {
        _numtoshow = 5;
      }

      $el.attr('data-original-height', _height);
      var elHeight = 0;
      var i = 1;
      $elList.each(function (index, item) {
        if (i <= _numtoshow) {
          elHeight = parseInt(elHeight + $(item).outerHeight(true), 10);
          var allChildsHeight = 0;
          $(item).children().each(function () {
            allChildsHeight += parseInt($(this).outerHeight(true), 10);
          });

          if (allChildsHeight > elHeight) {
            elHeight = allChildsHeight;
          }

          i = i + 1;
        }
      });
      $el.attr('data-max-height', elHeight);
      $el.css({
        height: elHeight
      });
      $el.addClass('showmore-processed'); // Hiding children as per show number for toggle list.
      // Get first child element type

      var tagName = $el.children().first()[0].tagName.toLowerCase();
      $el.children(tagName + ':gt(' + (_numtoshow - 1) + ')').hide();
    }
  }
  /**
   * Initiate showmore wrappers height.
   * @param {Object} context the context received
   * @returns {void}
   */


  function initiateShowMore(context) {
    var $showMoreElements = $('.gsb-show-more-toggle', context); // Set Height of all show more elements in the page

    if ($showMoreElements.length) {
      $($showMoreElements).each(function (index, el) {
        setHeightofShowMoreWrapper(el);
      });
    }
  }
  /**
   * Reset showmore wrappers height.
   * @param {Object} context the context received
   * @returns {void}
   */


  function resetShowMoreHeights(context) {
    // Removing if alreay initialized
    $('.gsb-show-more-toggle', context).removeAttr('style');
    $('.gsb-show-more-toggle.showmore-processed').removeClass('active');
    var $toggleLinks = $('.link--show-more.has-toggle', context);
    $toggleLinks.each(function () {
      $(this).removeClass('expand');
      $(this).text($(this).data('showmore-text'));
    });
  }
  /**
   * Setup and attach the  link--show-more behaviors.
   *
   * @type {Drupal~behavior}
   */


  Drupal.behaviors.linkShowMoreTweaks = {
    attach: function attach(context) {
      var windowWidth = $(window).width();
      var previousWidth = windowWidth;
      var currentWidth = windowWidth;
      $(window).on('load', function () {
        setTimeout(function () {
          initiateShowMore(context);
        }, 300);
      });
      $('.link--show-more', context).on('click', function () {
        if ($(this).hasClass('has-toggle')) {
          $(this).toggleClass('expand');
          $(this).closest('.gsb-show-more-wrapper').find('.gsb-show-more-toggle.showmore-processed').toggleClass('active');
        }

        if ($(this).hasClass('has-toggle')) {
          var $elToggle = $(this).closest('.gsb-show-more-wrapper').find('.gsb-show-more-toggle');
          var numtoshow = $elToggle.data('to-show');
          var tagName = '';

          if ($elToggle.children().length > 0) {
            tagName = $elToggle.children().first()[0].tagName.toLowerCase();
          }

          if ($(this).hasClass('expand')) {
            $(this).text($(this).data('showless-text'));

            if ($(this).attr('data-aria-label')) {
              $(this).attr('aria-label', $(this).data('showless-text') + ' ' + $(this).attr('data-aria-label'));
            }

            $elToggle.css({
              height: $elToggle.data('original-height')
            }); // show all children after expand

            if ($elToggle.hasClass('toggle-list')) {
              $elToggle.children(tagName + ':gt(' + (numtoshow - 1) + ')').show();
            }
          } else {
            $(this).text($(this).data('showmore-text'));

            if ($(this).attr('data-aria-label')) {
              $(this).attr('aria-label', $(this).data('showmore-text') + ' ' + $(this).attr('data-aria-label'));
            }

            $elToggle.css({
              height: $elToggle.data('max-height')
            }); // show all children after expand

            if ($elToggle.hasClass('toggle-list')) {
              $elToggle.children(tagName + ':gt(' + (numtoshow - 1) + ')').hide();
            }
          }
        } // Trigger masonry adjustments explicitly.
        // if show more gets triggered inside of masonry-grid.


        if ($(this).parent().closest('.masonry-grid') && $.fn.masonry !== undefined) {
          setTimeout(function () {
            $('.masonry-grid').masonry();
          }, 250);
        }
      }); // Show hidden elements after click on show more link.

      $('.link--show-more', context).on('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
          if ($(this).hasClass('has-toggle')) {
            var $elToggle = $(this).closest('.gsb-show-more-wrapper').find('.gsb-show-more-toggle');
            var numtoshow = $elToggle.data('to-show');
            var tagName = $elToggle.children().first()[0].tagName.toLowerCase();

            if ($elToggle.hasClass('active')) {
              if ($elToggle.hasClass('toggle-list')) {
                $elToggle.children(tagName + ':eq(' + numtoshow + ')').removeAttr('tabindex');
              }
            } else {
              setTimeout(function () {
                // show all children after expand
                if ($elToggle.hasClass('toggle-list')) {
                  $elToggle.children(tagName + ':eq(' + numtoshow + ')').attr('tabindex', -1).focus();
                }
              }, 500);
            }
          }
        }
      });
      $(window).on('resize', function () {
        currentWidth = $(window).width();

        if (previousWidth !== currentWidth) {
          resetShowMoreHeights(context);
          initiateShowMore(context);
        }
      });
    }
  };
}(Drupal, jQuery);
//# sourceMappingURL=show-more.js.map
