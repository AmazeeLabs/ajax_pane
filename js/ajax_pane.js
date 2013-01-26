(function ($) {

  /**
   * Load Panels panes via ajax.
   */
  Drupal.behaviors.ajaxPaneLoad = {
    attach: function (context, settings) {

      $('.ajax-pane').once('ajax-pane-processed', function() {

        var element = jQuery(this);
        var url = element.attr('src');
        var time = element.attr('rt');
        update_ajax_pane(element, url);
        // If we have to refresh the panel content, then set a time interval.
        if (time) {
          setInterval(function(){ update_ajax_pane(element, url); }, time * 1000);
        }
      });

    }
  };
  
  function update_ajax_pane(element, url) {
	jQuery.ajax({
	  url: url,
	  type: 'GET',
	  dataType: 'html',
	  success: function (response) {
		// @todo: would be nice if we could use replaceWith() and not html().
	    // element.replaceWith(response);
	    element.html(response);
	  }
	});
  }

})(jQuery);
