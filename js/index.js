$(document).ready(function() {
	function headerTextChange() {
		$("#text-fade").delay(3000).fadeOut(500).queue(function(n) {
			$(this).html("private Anlässe"); n();
		}).fadeIn(500);
		$("#text-fade").delay(3000).fadeOut(500).queue(function(n) {
			$(this).html("Festivals"); n();
		}).fadeIn(500);
		$("#text-fade").delay(3000).fadeOut(500).queue(function(n) {
			$(this).html("Firmenveranstaltungen"); n();
		}).fadeIn(500);
		$("#text-fade").delay(3000).fadeOut(500).queue(function(n) {
			$(this).html("Ausstellungen"); n();
		}).fadeIn(500);
		$("#text-fade").delay(3000).fadeOut(500).queue(function(n) {
			$(this).html("Dinner- und Hintergrundmusik"); n();
		}).fadeIn(500);
		$("#text-fade").delay(3000).fadeOut(500).queue(function(n) {
			$(this).html("Jubiläen"); n();
		}).fadeIn(500);
		$("#text-fade").delay(3000).fadeOut(500).queue(function(n) {
			$(this).html("Hochzeiten"); n();
		}).fadeIn(500);
		$("#text-fade").delay(3000).fadeOut(500).queue(function(n) {
			$(this).html("Konzerte"); n();
		}).fadeIn(500);
		
		x = setTimeout(function() {
			headerTextChange()
		}, 3000);
	};
	headerTextChange();
});

