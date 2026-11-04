$(function () {
  $('[data-toggle="popover"]').popover({
    html: true,
    content: function () {
      return '<img class="img-fluid" width="100px" src="'+$(this).data('img') + '" />';
    }
  })

  // Phones: close the opened nav menu once a link in it is tapped
  $('.navbar-collapse .nav-link').on('click', function () {
    $('.navbar-collapse.show').collapse('hide');
  });
})
