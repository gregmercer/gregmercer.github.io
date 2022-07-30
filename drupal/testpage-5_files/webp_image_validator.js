(function ($, Drupal) {
    Drupal.behaviors.imageValidation = {
        attach: function (context, settings) {

            var ua = navigator.userAgent;
            var msie = ua.indexOf("MSIE ");

            if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
            {
                if (isNaN(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))))) {
                    var messenger = new Drupal.Message();
                    message = messenger.add('We‘re sorry, but we no longer support IE 11! Try using Chrome, Firefox, or another browser to enjoy our website.', {
                        type: 'warning'
                    });
                }
            }

        }
    };
    // Hide the deadline time within datetime field.
    $("input[id*='subform-field-deadline-0-value-time']").each(function() {
        $(this).hide();
    });
    $(document).ajaxComplete(function(event, response, settings) {
        $("input[id*='subform-field-deadline-0-value-time']").each(function() {
            $(this).hide();
        });
    });
})(jQuery, Drupal);
