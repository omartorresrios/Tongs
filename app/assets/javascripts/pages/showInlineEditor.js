var ShowInlineEditor = {
  init: function() {
    $("#clikme").click(function(e) {
      e.preventDefault();
      $('#showInlineEditor').css("display", "block");
    });
  }
};

$(document).ready( ShowInlineEditor.init );
$(document).on( 'page:load', ShowInlineEditor.init );

