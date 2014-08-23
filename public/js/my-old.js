$(function() {

	// -- Moving SUPERMAN
	function check_hero_animations(scrollon){
		//$("#superhero").css('top', scrollon+50+'px');

			if (scrollon>=150 || scrollon<280){
				$("#superhero").addClass('hero_on_city');
			}
			if (scrollon>=280 || scrollon<510){
				$("#superhero").addClass('hero_warning');
			}
			if (scrollon>=510 || scrollon<610){
				$("#superhero").addClass('hero_on_solution');
			}
			if (scrollon>=610){
				$("#superhero").addClass('hero_ok');
			}
			if (scrollon>=1291 && scrollon<1870 ){ 
				$("#superhero").addClass('hero_tosofa');
				setTimeout(function(){
					$("#superhero").addClass('hero_playing');
				},2000);
				setTimeout(function(){
						
						$("#howto .mobile3").removeClass("show");
				},1200);
				
				
				//calculate hero position and set as absolute
				/*var hero = $( "#superhero" );
				var offset_hero = hero.offset();
				console.log( "left: " + offset_hero.left + ", top: " + offset_hero.top );*/	
			}
			if (scrollon>=2000){ //going to games
				$("#superhero").addClass('hero_out_sofa');
			}

			if (scrollon>=3100){ //going to games
				$("#superhero").addClass('hero_in_games');
			}

			if (scrollon>=3430){ //going to games
				$("#superhero").addClass('hero_out_games');
			}

			if (scrollon>=3960){ //going to games
				$("#superhero").addClass('hero_in_form');
			}



	};

	//-- Moving ELEMENTS onsite
	function check_elements_animations(scrollon){

			if (scrollon>=420){
				console.log("arrows appear");
				$("#intro .pennant").addClass("show");
			}
			if(scrollon>=1180){
				console.log("mobiles add");
				//mobiles adn staff
						$("#howto .first .mobile1").addClass("show");
						$("#howto .first .mobile2").addClass("show");
						if(!$("#superhero").hasClass('hero_tosofa')){
							$("#howto .first .mobile3").addClass("show");
						}
						
					setTimeout(function(){
						$("#howto .middle img").addClass("show");
						$("#howto .middle .wifi").addClass("show");
					},300);
					setTimeout(function(){
						$("#howto .last img").addClass("show");
						if( !$("#howto .last .tv").hasClass("move") ){
							$("#howto .last .tv").addClass("show");
						}
						
					},600);	

					setTimeout(function(){
						$("#howto .middle .wifi").addClass("move");
						$("#howto .middle .wifi").removeClass("show");

						$("#howto .last .tv").addClass("move");
						$("#howto .last .tv").removeClass("show");
					},2300);			
			}
			
	};
 
   // ------- Detecting  SCROLL 
	function onScrollEventHandler(ev){
	        var scrollon = window.pageYOffset || document.documentElement.scrollTop;
			console.log(scrollon);
			check_hero_animations(scrollon);
			check_elements_animations(scrollon);
	}; 

	//define scroll
	    var el=window;

	    if(el.addEventListener){
	    	el.addEventListener('scroll', onScrollEventHandler, false);
	    }else if (el.attachEvent){
	    	el.attachEvent('onscroll', onScrollEventHandler);
	    }
	        

	//*  -------   MOVING THE HERO ON START-------*// 
		/*setTimeout(function(){
	   		
	   		$('body').fadeIn(300);
		},1000);*/

	   setTimeout(function(){
	   		$("#superhero").addClass('gototitle');
	   		$('.mainlogo').addClass('rotate');
		},1000);

		/*add likes*/
	   $( "#friends_likes" ).one( "click", function() {
			  var num=parseInt($("#friends_likes span").text());
			  $("#friends_likes span").text(num+1);
				  $.get( "/addlikesFriends", function( data ) {
					  console.log( "added." );
					});
		});

	   $( "#family_likes" ).one( "click", function() {
			  var num=parseInt($("#family_likes span").text());
			  $("#family_likes span").text(num+1);
			  	$.get( "/addlikesFamily", function( data ) {
					  console.log( "added." );
					});
		});

	   /*bring likes*/
	    $.get( "/likesFriends", function( data ) {
				$("#friends_likes span").text(data.likes);
		});

	    $.get( "/likesFamily", function( data ) {
				$("#family_likes span").text(data.likes);
		});

		/* ---- PRELOAD IMAGES ------ 
		function preloader() {
			if (document.getElementById) {
				document.getElementById("preload-00").style.background = "url(../images/sky.png) no-repeat -9999px -9999px";
				document.getElementById("preload-01").style.background = "url(../images/hero/1.png) no-repeat -9999px -9999px";
				document.getElementById("preload-02").style.background = "url(../images/hero/2.png) no-repeat -9999px -9999px";
				document.getElementById("preload-03").style.background = "url(../images/hero/3.png) no-repeat -9999px -9999px";
				document.getElementById("preload-04").style.background = "url(../images/hero/4.png) no-repeat -9999px -9999px";
				document.getElementById("preload-05").style.background = "url(../images/hero/5.png) no-repeat -9999px -9999px";
				document.getElementById("preload-06").style.background = "url(../images/hero/6.png) no-repeat -9999px -9999px";
				document.getElementById("preload-07").style.background = "url(../images/hero/hero-sprite.png) no-repeat -9999px -9999px";
			}
		}
		function addLoadEvent(func) {
			var oldonload = window.onload;
			if (typeof window.onload != 'function') {
				window.onload = func;
			} else {
				window.onload = function() {
					if (oldonload) {
						oldonload();
					}
					func();
				}
			}
		}
		addLoadEvent(preloader);*/








});//closing document ready