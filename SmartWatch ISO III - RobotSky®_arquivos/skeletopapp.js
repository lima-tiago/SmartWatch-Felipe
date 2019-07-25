if( $("#customform_data").length ){  
  var id = $("#customform_data").attr('data-id');
  if(id != ''){
    $("#customform_data").append('<iframe src="https://contactform.hulkapps.com/corepage/contact?id='+id+'" id="frame_'+id+'" frameborder="0" width="100%">');
    frame_resize();  
  }  
}

// Resize the iframes when the window is resized
$( window ).resize( function () {
  frame_resize();
}).resize();

function frame_resize(){
  var iframes = $( "#customform_data iframe" );
  iframes.each( function() {
      var width = $( this ).parent().width();
      $( this ).width( width );
      var divId = $(this).attr('id');
      var zino_resize = function (event) {
          if (event.origin !== "https://contactform.hulkapps.com") {
              return;
          }
          var zino_iframe = document.getElementById(divId);
          if (zino_iframe) {
              zino_iframe.style.height = event.data + "px";
          }
      };
      if (window.addEventListener) {
          window.addEventListener("message", zino_resize, false);
      } else if (window.attachEvent) {
          window.attachEvent("onmessage", zino_resize);
      }
  });
}