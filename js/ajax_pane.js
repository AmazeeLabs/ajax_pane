/**
 * Handles AJAX panes.
 */
var AJAXPaneLoad = function (id, URL) {
  var el = jQuery('#' + id);

  if (el.length == 1 && URL) {
    jQuery.ajax({
      url: URL,
      type: 'GET',
      dataType: 'html',
      success: function (res) {
        el.after(res);
        el.remove();
      }
    });
  }
}
