/*
 * 選太君 共通JavaScript
 */

//Enter押下によるsubmitを抑止する
$(function(){

	$(document).keydown(function(e){
		if(e.which==13){
			return false;
		};
	});

});
