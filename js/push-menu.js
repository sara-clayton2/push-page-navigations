// Needs latest version of jQuery to run
$(function(){ 
	// Shows button when JS runs
	$('body').removeClass('noscript');
 
	// Sets buttons to toggle data-state
	$('.toggle-btn, .close-btn').click(function(){
		toggleNav();
		
	});
});


function toggleNav() { 
	if ($('.site-wrapper').attr('data-state') == 'slide-closed') { 
		// Display when closed 
		$('.site-wrapper').attr('data-state', 'slide-open');
	
	// Hiden nav when open
	} else { 
		$('.site-wrapper').attr('data-state', 'slide-closed');
	}
}