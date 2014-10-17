(function ($) {

  /**
   * Load Panels panes via ajax.
   */
  Drupal.behaviors.ajaxPaneLoad = {
    attach: function (context, settings) {
	  $('.ajax-pane').trigger('click');
    }
  };

})(jQuery);
