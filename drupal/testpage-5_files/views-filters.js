/**
 * @file
 * Behaviors for the views-filters.
 */
!function (Drupal, $) {
  'use strict';
  /**
   * Get url params
   * @param {url} the url.
   * @returns {object} return url params.
   */

  function getUrlParams(url) {
    if (url.indexOf('?') === -1) {
      return {};
    }

    var qs = url.substring(url.indexOf('?') + 1).split('&');

    for (var i = 0, result = {}; i < qs.length; i++) {
      qs[i] = qs[i].split('=');
      result[qs[i][0]] = decodeURIComponent(qs[i][1]);
    }

    return result;
  }
  /**
   * Hide FormActions.
   * @param {object} el The element.
   * @returns {null} return nothing
   */


  function hideFormActions(el) {
    var $el = el;
    $el.parents('form').find('.form-actions').removeClass('show').addClass('hidden');
  }
  /**
   * Show FormActions.
   * @param {object} el The element.
   * @returns {null} return nothing
   */


  function showFormActions(el) {
    var $el = el;
    $el.parents('form').find('.form-actions').removeClass('hidden').addClass('show');
  }
  /**
   * Hide/Show done button based on checkboxes.
   * @param {Object} $checks selected checkboxes.
   * @returns {void}
   */


  function hideShowDoneButton($checks) {
    var countCheckedCheckboxes = $checks.filter(':checked').length;

    if (countCheckedCheckboxes > 0 || $('.selected-filters-wrapper .pills .filter-button').length > 0) {
      $('.views-exposed-form-wrapper .form-actions .form-submit').removeClass('hideMe');
    } else {
      $('.views-exposed-form-wrapper .form-actions .form-submit').addClass('hideMe');
    }
  }
  /**
   * If checkbox is checked length is more than 0 then
   * show submit button.
   * @param {object} el The element.
   * @returns {null} return nothing
   */


  function checkboxOnChange() {
    var $checks = $('.details-wrapper .form-item .form-checkbox:checkbox');
    $checks.each(function () {
      $checks.change(function () {
        hideShowDoneButton($checks);
      });
    });
  }
  /**
   * Clear All filters on mobile/tablet.
   * @param {object} el The element.
   * @returns {null} return nothing
   */


  function clearMobileFilters() {
    $('<input type="reset" value="Clear All" class="button clear-filters" />').insertAfter($('#filterWrapper .views-exposed-form-wrapper .form-actions .form-submit'));
    $('#filterWrapper .views-exposed-form-wrapper .form-actions .clear-filters').on('click', function () {
      $('.selected-filters-wrapper .clear-filters').trigger('click');
    });
  }
  /**
   * Check if Pills have data.
   * @param {object} el The element.
   * @returns {null} return nothing
   */


  function pillsCheck() {
    if ($('.selected-filters-wrapper .pills .filter-button').length > 0) {
      $('.views-exposed-form-wrapper .form-actions .form-submit').removeClass('hideMe');
    } else {
      $('.views-exposed-form-wrapper .form-actions .form-submit').addClass('hideMe');
    }
  }

  function addSearchTextPills() {
    if ($('.views-exposed-form-wrapper .form-item-bef-search input').val()) {
      var searchText = $('.views-exposed-form-wrapper .form-item-bef-search input').val();
      $('.selected-filters-wrapper').show();
      $('.selected-filters-wrapper .pills .search-term').once().prepend('<span class="filter-button search-filter"><span class="term">' + searchText + '</span><a class="filter-exit clear-search">Clear</a></span>');
    }
  }

  function getUrlParameterName(name, url) {
    if (!url) {
      url = window.location.href;
    }

    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);

    if (!results) {
      return null;
    }

    if (!results[2]) {
      return '';
    }

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  /**
   * Setup and attach the views filters form elements.
   *
   * @type {Drupal~behavior}
   */


  Drupal.behaviors.viewsFiltersTweaks = {
    attach: function attach(context) {
      // Show empty filter results, if that is current state.
      $('.has-empty-view').show();
      var $checks = $('.details-wrapper .form-item .form-checkbox:checkbox');
      hideShowDoneButton($checks);
      var $formActions = $('.views-exposed-form-wrapper .form-actions', context);
      var $summaryWrapper = $('.views-exposed-form-wrapper summary', context);
      var isSummaryExpanded = $summaryWrapper.attr('aria-expanded'); // Hiding by default form action buttons inside BEF form

      if (isSummaryExpanded === 'true') {
        $formActions.removeClass('hidden').addClass('show');
      } else {
        $formActions.removeClass('show').addClass('hidden');
      } // Show or Hide form actions based on BEF secondary expansion


      $('.views-exposed-form-wrapper summary', context).on('click', function () {
        var isOpen = $(this).attr('aria-expanded');
        isOpen = isOpen === 'false' ? true : false;

        if (isOpen) {
          showFormActions($(this));
        } else {
          hideFormActions($(this));
        } // If No Search and Keyword field selected.


        if ($('.view .views-exposed-form-wrapper .form-item-bef-search').length < 1) {
          $('.view .views-exposed-form-wrapper .bef--secondary').addClass('no-search');
        }
      }); // Trigger form submit when BEF search button click.

      $('.views-exposed-form-wrapper .form-item-bef-search .search-icon', context).on('click', function () {
        $(this).parents('form').find('.form-actions .form-submit').trigger('click');
      }); // Check if infinite scroll exits.

      if ($('.view-coaches div, .view-faculty.view-display-id-main_list div').hasClass('views-infinite-scroll-content-wrapper')) {
        $('.view-coaches .view-content,.view-faculty.view-display-id-main_list .view-content').addClass('infinite-exists');
      } // Check if voices view has inifinite scroll


      if ($('.view-voices .voicelisting__card-container > div').hasClass('views-infinite-scroll-content-wrapper')) {
        $('.view-voices .voicelisting__card-container').addClass('infinite-exists');
      }

      if ($('.view-voices .voicelisting__card-container div').hasClass('views-infinite-scroll-content-wrapper')) {
        $('.view-voices .voicelisting__card-container').addClass('infinite-exists');
      }

      if ($('.view-coaches div').hasClass('views-infinite-scroll-content-wrapper') && $('.view-coaches .views-infinite-scroll-content-wrapper').children('.wrapRowSection').length > 0) {
        $('.view-coaches .views-infinite-scroll-content-wrapper').addClass('infinite-exists');
      }

      if ($('.view-msx-fellows div').hasClass('views-infinite-scroll-content-wrapper')) {
        $('.view-msx-fellows .view-content').addClass('show-infinite');
      } // Check if paragraph view contains CTA


      if ($('.paragraph--type--view-item').length) {
        // get all program views in the page.
        $($('.view-programs, .view-idea-stories-search, .view-school-story-news-search, .view-faculty.view-display-id-list, .view-publication-search.view-display-id-list, .view-display-id-admission_main_list, .view-display-id-main_list, .view-id-event_list_search.view-display-id-list, .view-act-project.view-id-act_project, .view-cases-search.view-display-id-list', context)).each(function (index, el) {
          // Check each view has a CTA or not.
          var $parent = $(el).closest('.paragraph--type--view-item');

          if ($($parent).children('.field--name-field-cta-link').length > 0) {
            $($parent).addClass('add-border');
          }
        });
      } // Wrap filters related to case availability in a
      // single wrapper & prepend label.


      if (window.matchMedia('(max-width: 1189px)').matches && document === context) {
        if ($('.availability-group').length === 0) {
          $('.form-item-field-free-case, .form-item-field-has-harvard-link, .form-item-field-has-case-center', context).wrapAll('<div class="availability-group form-checkboxes bef-checkboxes"></div>');
          $('.availability-group', context).wrapAll('<div id="edit-field-availability" class="form-item--checkboxes"></div>');
          $('.availability-group', context).before('<div class="view-cases-title label">Availability</div>');
        }
      } else if (window.matchMedia('(min-width: 1190px)').matches) {
        if ($('.availability-group').length === 0) {
          $('.form-item-field-free-case, .form-item-field-has-harvard-link, .form-item-field-has-case-center', context).wrapAll('<div class="availability-group form-checkboxes bef-checkboxes"></div>');
          $('.availability-group', context).wrapAll('<div id="edit-field-availability" class="form-item--checkboxes"></div>');
          $('.availability-group', context).before('<div class="view-cases-title label">Availability</div>');
        }
      } // Show and Hide Done Button on selected checkboxes count.


      $('.bef-tree input[type=checkbox], .bef-checkboxes input[type=checkbox]').once().change(function () {
        hideShowDoneButton($('.details-wrapper .form-item .form-checkbox:checkbox'));
      });

      if (context === document || $(context).hasClass('view')) {
        addSearchTextPills();
      }
    }
  };
  Drupal.behaviors.viewAzFilters = {
    attach: function attach(context) {
      // When user click on az filter letter, then
      // set params to have exposed filters and az filter 'custom_az_filter=X'
      $('.custom-a-z-filters a').click(function (event) {
        event.preventDefault();
        var input_link_box = $('input.link-box');
        var input_link_box_str = $(input_link_box).val();
        var new_state_url = '';

        if (input_link_box_str != undefined && input_link_box_str !== '') {
          var az_value = event.target.innerHTML;
          var current_url = window.location.href;
          var queryIndex = current_url.indexOf('?');
          queryIndex = queryIndex === -1 ? current_url.length : queryIndex;
          var base_url = current_url.substring(0, queryIndex);
          var url_params = getUrlParams(current_url);
          var first_param = true;
          var isEmpty = Object.keys(url_params).length === 0;

          if (!isEmpty) {
            for (var property in url_params) {
              if ("".concat(property) !== 'custom_az_filter') {
                base_url = first_param ? base_url + '?' : base_url + '&';
                base_url += "".concat(property, "=").concat(url_params[property]);
                first_param = false;
              }
            }
          }

          if (first_param) {
            new_state_url = base_url + '?custom_az_filter=' + az_value;
          } else {
            new_state_url = base_url + '&custom_az_filter=' + az_value;
          }

          window.history.replaceState('', null, new_state_url);
        }

        if (new_state_url !== '') {
          window.location = new_state_url;
        }
      });
      $('.view-filters .custom-a-z-filters .item-list li').not('.slick-initialized').slick({
        infinite: false,
        slidesToShow: 20,
        slidesToScroll: 10,
        variableWidth: true,
        prevArrow: '<button class="slick-prev" aria-label="Previous group of letters" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next group of letters" type="button">Next</button>',
        responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 20,
            slidesToScroll: 20,
            infinite: false
          }
        }, {
          breakpoint: 1024,
          settings: {
            slidesToShow: 15,
            slidesToScroll: 5,
            infinite: false
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 10,
            infinite: false
          }
        }]
      });

      if ($('.view').length > 0) {
        if (context === $('.view')[0]) {
          // Scroll the a-z filter to end if filter value greater than 'R'.
          var url_params = getUrlParams(window.location.href);

          if (url_params.hasOwnProperty('custom_az_filter')) {
            if (url_params.custom_az_filter > 'R') {
              $('.slick-next').trigger('click');
            }
          }
        }
      }
    } // end of attach.

  }; // MMenu for Views Filters.

  Drupal.behaviors.viewsMobileFilters = {
    attach: function attach(context) {
      /**
       * As per pill available check the checkbox
       * if user back/close using Norrow your results
       * of MMenu back.
       * @param {object} el The element.
       * @returns {null} return nothing
       */
      function checkboxCheck() {
        if ($('.selected-filters-wrapper .checkbox-term .filter-button', context).length) {
          $('.selected-filters-wrapper .checkbox-term .filter-button', context).each(function () {
            var childFilterExitEl = $(this).children('.filter-exit');
            var filteredPillsAttr = childFilterExitEl.attr('data-filter-name');
            $('.details-wrapper .form-item .form-checkbox').each(function () {
              if ($(this).attr('name') === filteredPillsAttr) {
                $(this).prop('checked', true);
              }
            });
          });
        }
      }

      if (window.matchMedia('(max-width: 1189px)').matches) {
        if (context === document) {
          // Wrap up the filters to be put into the side tray.
          $('.view .view-filters', context).wrap('<div id="filterWrapper"></div>');
        } else if ($(context).find('.view-filters').length > 0) {
          $('#filterWrapper .view-filters').html($(context).find('.view-filters').clone().html());
          $('#filterWrapper .view-filters').prepend('<div class="mm-navbar mm-navbar_sticky"><a class="mm-navbar__title"><span>Narrow your results</span></a></div>');
          $(context).find('.view-filters').remove();
          Drupal.attachBehaviors();
        } // Create the side tray.


        var filterWrapper = $('#filterWrapper');
        filterWrapper.mmenu({
          // Options.
          navbar: {
            add: true,
            title: 'Narrow your results',
            titleLink: parent
          },
          offCanvas: {
            position: 'right'
          },
          extensions: ['position-right']
        }); //Add aria-label for filter title.

        if ($('#filterWrapper .mm-navbar .mm-navbar__title').length) {
          $('#filterWrapper .mm-navbar .mm-navbar__title').attr('aria-label', 'Close Narrow Your Results');
        } // Have the Filters link open the side tray.


        $('#viewsFilters').click(function () {
          $('#filterWrapper').data('mmenu').open();
          $('.views-exposed-form-wrapper .bef--secondary').attr('open', 'open');
        }); // Set up the Close for the side tray.

        $('input[type=submit][value=Done]').click(function () {
          $('#filterWrapper').data('mmenu').close();
        }); // Set up the Close for the side tray.

        $('.mm-navbar .mm-navbar__title', context).click(function () {
          $('#filterWrapper').data('mmenu').close();
          checkboxCheck();
        });
        $('.mm-wrapper__blocker', context).on('click mousedown touchstart', function () {
          checkboxCheck();
        });
      }
    }
  }; // Views filters date selector and add in Pills.

  Drupal.behaviors.viewsDateFilter = {
    attach: function attach(context) {
      var startDate = '';
      var endDate = '';
      var dateRange = '';

      if ($('[id^="edit-field-event-date-range-value"]').length > 0) {
        $('[id^="edit-field-event-date-range-value"], [id^="edit-field-event-date-range-end-value"]').datepicker({
          changeMonth: true,
          changeYear: true,
          minDate: new Date(),
          maxDate: '+3y',
          dateFormat: 'M dd yy',
          onSelect: function onSelect() {
            $('.views-exposed-form-wrapper .form-actions .form-submit').removeClass('hideMe');
          },
          onClose: function onClose() {
            if ($('[id^="edit-field-event-date-range-value"]').val() && $('[id^="edit-field-event-date-range-end-value').val()) {
              $('.views-exposed-form-wrapper .form-actions .form-submit').removeClass('hideMe');
            } else if ($('[id^="edit-field-event-date-range-value"]').val()) {
              $('.views-exposed-form-wrapper .form-actions .form-submit').removeClass('hideMe');
            } else if ($('[id^="edit-field-event-date-range-end-value').val()) {
              $('.views-exposed-form-wrapper .form-actions .form-submit').removeClass('hideMe');
            } else {
              $('.views-exposed-form-wrapper .form-actions .form-submit').addClass('hideMe');
              checkboxOnChange();
              pillsCheck();
            }
          }
        });

        if ($('[id^="edit-field-event-date-range-value"]').length > 0) {
          startDate = $('[id^="edit-field-event-date-range-value"]').val();
        }

        if ($('[id^="edit-field-event-date-range-end-value"]').length > 0) {
          endDate = $('[id^="edit-field-event-date-range-end-value"]').val();
        }

        if (startDate !== '' && endDate !== '') {
          dateRange = startDate + ' - ' + endDate;
          $('.selected-filters-wrapper').show();
          $('.selected-filters-wrapper .pills .date-term').once().prepend('<span class="filter-button date-filter"><span class="term">' + dateRange + '</span><a class="filter-exit clear-date">Clear</a></span>');
          $('.views-exposed-form-wrapper .form-actions .form-submit').removeClass('hideMe');
        } else if (startDate !== '') {
          dateRange = startDate;
          $('.selected-filters-wrapper').show();
          $('.selected-filters-wrapper .pills .date-term').once().prepend('<span class="filter-button date-filter"><span class="term">' + dateRange + '</span><a class="filter-exit clear-date">Clear</a></span>');
          $('.views-exposed-form-wrapper .form-actions .form-submit').removeClass('hideMe');
        } else if (endDate !== '') {
          dateRange = endDate;
          $('.selected-filters-wrapper').show();
          $('.selected-filters-wrapper .pills .date-term').once().prepend('<span class="filter-button date-filter"><span class="term">' + dateRange + '</span><a class="filter-exit clear-date">Clear</a></span>');
          $('.views-exposed-form-wrapper .form-actions .form-submit').removeClass('hideMe');
        }
      }
    }
  };
  Drupal.behaviors.setExposedFilters = {
    attach: function attach(context) {// Nothing to see here. Move along.
      // These are not the droids you are looking for.
    }
  };
  $(document).ready(function () {
    if ($('.view-filters').length > 0) {
      var q = $(location).attr('href').split('?');

      if (q.length > 1) {
        var queryParts = q[1].split('=');

        if (queryParts.length > 1) {
          $('.view-filters input[type="submit"]').trigger('click');
        }
      }

      var $checks = $('.details-wrapper .form-item .form-checkbox:checkbox');
      var countCheckedCheckboxes = $checks.filter(':checked').length;

      if (countCheckedCheckboxes > 0) {
        $('.selected-filters-wrapper').show();
        var arr = $('.details-wrapper .form-item .form-checkbox:checkbox:checked').map(function () {
          var labelText = $(this).next().html();
          var inputVal = $(this).val();
          var inputName = $(this).attr('name');
          return '<span class="filter-button"><span class="term">' + labelText + '</span><a href="javascript:void(0)" class="filter-exit" aria-label="Clear filter for ' + labelText + '" data-filter-value="' + inputVal + '" data-filter-name="' + inputName + '">Clear</a></span>';
        }).get();
        $('.selected-filters-wrapper .pills .checkbox-term').once().prepend(arr.join(''));
      }

      if ($('.selected-filters-wrapper .filter-button').length >= 2) {
        $('.selected-filters-wrapper .clear-filters').show();
      }
    } // Checkbox click handle onSubmit to get Pills list.


    $('.views-exposed-form-wrapper .form-actions .form-submit').on('click', function () {
      $(document).ajaxComplete(function () {
        var $checks = $('.details-wrapper .form-item .form-checkbox:checkbox');
        var countCheckedCheckboxes = $checks.filter(':checked').length;

        if (countCheckedCheckboxes > 0) {
          $('.selected-filters-wrapper').show();
          var arr = $('.details-wrapper .form-item .form-checkbox:checkbox:checked').map(function () {
            var labelText = $(this).next().html();
            var inputVal = $(this).val();
            var inputName = $(this).attr('name');
            return '<span class="filter-button"><span class="term">' + labelText + '</span><a class="filter-exit" data-filter-value="' + inputVal + '" data-filter-name="' + inputName + '">Clear</a></span>';
          }).get();
          $('.selected-filters-wrapper .pills .checkbox-term').once().prepend(arr.join(''));
        } else if (countCheckedCheckboxes === 0) {
          checkboxOnChange();
        } else {
          $('.selected-filters-wrapper').hide();
        }

        addSearchTextPills();

        if ($('.selected-filters-wrapper .filter-button').length >= 2) {
          $('.selected-filters-wrapper .clear-filters').show();
        }

        if (window.matchMedia('(max-width: 1170px)').matches) {
          $('#filterWrapper').data('mmenu').close();
        } // Pills check.


        pillsCheck(); // Clear All btn mobile.

        clearMobileFilters(); // If No Search and Keyword field selected.

        if ($('.view .views-exposed-form-wrapper .form-item-bef-search').length < 1) {
          $('.view .views-exposed-form-wrapper .bef--secondary').addClass('no-search');
        } // Stop body scroll onSubmit.
        // Accessibility for views filters.


        var text = Drupal.t('The content has been updated.');
        Drupal.announce(text);
        jQuery('body, html').stop();
      });
    }); // Done btn hide.

    $('.views-exposed-form-wrapper .form-actions .form-submit').addClass('hideMe');
    checkboxOnChange(); // Search filter Pills click - To remove it.

    $(document).on('click', '.selected-filters-wrapper .filter-button .clear-search', function (e) {
      e.stopImmediatePropagation();
      $(this).parent('.filter-button').remove();
      $('.views-exposed-form-wrapper .form-item-bef-search input').val('');
      $('.views-exposed-form-wrapper .form-actions .form-submit').trigger('click');

      if ($('.selected-filters-wrapper .filter-button .filter-exit').parent('.filter-button').length === 0) {
        $('.selected-filters-wrapper').hide();
      }
    }); // Date filter Pills click - To remove it.

    $(document).on('click', '.selected-filters-wrapper .filter-button .clear-date', function (e) {
      e.stopImmediatePropagation();
      $(this).parent('.filter-button').remove();
      $('[id^="edit-field-event-date-range-value"]').val('');
      $('[id^="edit-field-event-date-range-end-value').val('');
      $('.views-exposed-form-wrapper .form-actions .form-submit').trigger('click');

      if ($('.selected-filters-wrapper .filter-button .filter-exit').parent('.filter-button').length === 0) {
        $('.selected-filters-wrapper').hide();
      }
    }); // Checkbox filter Pills click - To remove one by one.

    $(document).on('click', '.selected-filters-wrapper .filter-button .filter-exit', function () {
      var filterExitDataValue = $(this).attr('data-filter-value');
      var filterExitParent = $(this).parent('.filter-button');
      $('.details-wrapper .form-item .form-checkbox:checkbox:checked').each(function () {
        if ($(this).val() === filterExitDataValue) {
          filterExitParent.remove();
          $(this).prop('checked', false);
          $('.views-exposed-form-wrapper .form-actions .form-submit').trigger('click');
        }
      });
      $('[id^="edit-field-event-date-range-value"]').val('');
      $('[id^="edit-field-event-date-range-end-value').val('');

      if ($('.selected-filters-wrapper .filter-button .filter-exit').parent('.filter-button').length === 0) {
        $('.selected-filters-wrapper').hide();
      }
    }); // Clear All filter click - To remove all Pills.

    $(document).on('click', '.selected-filters-wrapper .clear-filters', function () {
      $('.details-wrapper .form-item .form-checkbox:checkbox').prop('checked', false);
      $('.views-exposed-form-wrapper .form-item-bef-search input').val('');
      $('[id^="edit-field-event-date-range-value"]').val('');
      $('[id^="edit-field-event-date-range-end-value').val('');
      $('.selected-filters-wrapper').remove();
      $('.views-exposed-form-wrapper .form-actions .form-submit').trigger('click');
    }); // Clear All btn mobile.

    clearMobileFilters(); // Page history checking and setting filter values.

    if (window.history && window.history.pushState) {
      var url = $('.link-box').val(); //fetching text box filter values.

      var $combine = getUrlParameterName('combine', url);
      var $search = getUrlParameterName('search', url);
      var $keywords = getUrlParameterName('keywords', url);
      var $field_tag_target_id = getUrlParameterName('field_tag_target_id', url);
      var $field_date_year_value = getUrlParameterName('field_date_year_value', url);
      var $field_tag = getUrlParameterName('field_tag', url);
      var site_url = location.protocol + '//' + location.hostname + location.pathname;

      if (site_url !== url && url != undefined && url != null) {
        checkboxOnChange();

        if ($combine != '' && $combine != undefined) {
          $('input[name=combine]').val($combine);
        }

        if ($search != '' && $search != undefined) {
          $('input[name=search]').val($search);
        }

        if ($keywords != '' && $keywords != undefined) {
          $('input[name=keywords]').val($keywords);
        }

        if ($field_tag_target_id != '' && $field_tag_target_id != undefined) {
          $('input[name=field_tag_target_id]').val($field_tag_target_id);
        }

        if ($field_date_year_value != '' && $field_date_year_value != undefined) {
          $('input[name=field_date_year_value]').val($field_date_year_value);
        }

        if ($field_tag != '' && $field_tag != undefined) {
          $('input[name=field_tag]').val($field_tag);
        }

        var $checks = $('.details-wrapper .form-item .form-checkbox:checkbox');
        hideShowDoneButton($checks);
        var $formActions = $('.views-exposed-form-wrapper .form-actions');
        var $summaryWrapper = $('.views-exposed-form-wrapper summary');
        var isSummaryExpanded = $summaryWrapper.attr('aria-expanded');

        if (isSummaryExpanded === 'true') {
          $formActions.removeClass('hidden').addClass('show');
        } else {
          $formActions.removeClass('show').addClass('hidden');
          setTimeout(function () {
            if ($('.views-exposed-form-wrapper .search-icon').length > 0) {
              $('.views-exposed-form-wrapper .search-icon').trigger('click');
            } else {
              $('.views-exposed-form-wrapper .form-actions .form-submit').trigger('click');
            }
          }, 300);
        }
      }
    }

    $(document).on('click', '.view-filters .custom-a-z-filters .slick-slide', function () {
      var site_url = location.protocol + '//' + location.hostname;
      var href_data = $(this).attr('href');
      site_url = site_url + href_data;
      var $custom_az_filter = getUrlParameterName('custom_az_filter', site_url);

      if ($custom_az_filter != '' && $custom_az_filter != undefined) {
        setTimeout(function () {
          var url = '?custom_az_filter=' + $custom_az_filter;
          window.history.replaceState(null, null, url);
        }, 50);
      }
    });
  });
}(Drupal, jQuery);
//# sourceMappingURL=views-filters.js.map
