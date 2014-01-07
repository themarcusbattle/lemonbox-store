(function($){

	$(document).ready(function(){

		$('#lemonbox-shop-settings select[name="stripe_mode"]').val( $('#lemonbox-shop-settings select[name="stripe_mode"]').data('value') );

		$('#lemonbox-shop-settings button[type="submit"]').on('click', function(e){
			e.preventDefault();

			var button = $(this);
			var button_text = $(this).text();

			$(this).attr('disabled','true').text('...');

			$.ajax({
				type: 'POST',
			  	url: lemonbox.ajaxurl,
			  	data: $('#lemonbox-shop-settings').serialize() + '&action=lemonbox_update_shop_settings'
			}).done(function( data ) {
				$(button).text(button_text).removeAttr('disabled');

				alert('Done!');
			});

		});

	});

})(jQuery);