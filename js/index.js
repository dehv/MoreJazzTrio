$(document).ready(function() {
	var varDel=2500;
	var varFade=500;
	function headerTextChange() {
		$("#text-fade").delay(varDel).fadeOut(varFade).queue(function(n) {
			$(this).html("private Anlässe"); n();
		}).fadeIn(varFade);
		$("#text-fade").delay(varDel).fadeOut(varFade).queue(function(n) {
			$(this).html("Festivals"); n();
		}).fadeIn(varFade);
		$("#text-fade").delay(varDel).fadeOut(varFade).queue(function(n) {
			$(this).html("Firmenveranstaltungen"); n();
		}).fadeIn(varFade);
		$("#text-fade").delay(varDel).fadeOut(varFade).queue(function(n) {
			$(this).html("Ausstellungen"); n();
		}).fadeIn(varFade);
		$("#text-fade").delay(varDel).fadeOut(varFade).queue(function(n) {
			$(this).html("Dinner- und Hintergrundmusik"); n();
		}).fadeIn(varFade);
		$("#text-fade").delay(varDel).fadeOut(varFade).queue(function(n) {
			$(this).html("Jubiläen"); n();
		}).fadeIn(varFade);
		$("#text-fade").delay(varDel).fadeOut(varFade).queue(function(n) {
			$(this).html("Hochzeiten"); n();
		}).fadeIn(varFade);
		$("#text-fade").delay(varDel).fadeOut(varFade).queue(function(n) {
			$(this).html("Konzerte"); n();
		}).fadeIn(varFade);

		x = setTimeout(function() {
			headerTextChange()
		}, varDel);
	};
	headerTextChange();
});
