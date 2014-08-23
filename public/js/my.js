$(function() {
var flag=true;
	
	//this will detect if is a window on desktop or mobile
	var window_screen=window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;
	console.log("Available Width: " + window_screen);

	// -- Moving SUPERMAN
	//calculate sofa position to move hero there
	var hero,offset_hero;
	function whereissofa(){
		 hero = $( "#sofa" );
		 offset_hero = hero.offset();
		console.log( "SOFA left: " + offset_hero.left + ", top: " + offset_hero.top );
	}


	function check_hero_animations(scrollon){
		//$("#superhero").css('top', scrollon+50+'px');
			whereissofa();

			if (scrollon>=150 && scrollon<510){
				$("#superhero").addClass('hero_on_city');
			}
			if (scrollon>=510 && scrollon<1291){
				$("#superhero").addClass('hero_on_solution');
			}

		
			if (scrollon>=1291 && scrollon<1870 ){ 
				$("#superhero").addClass('hero_tosofa');
				if (flag) {
					$( "#superhero" ).animate({
					    
					    left: offset_hero.left-15,
					    top: offset_hero.top-30 
					    
					  },2000);
					  	
					    //alert(flag);
					    flag = false;
					  
				}

				setTimeout(function(){
					$("#superhero").addClass('hero_playing');
				},2000);
				setTimeout(function(){
						
						$("#howto .mobile3").removeClass("show");
				},1200);
				
				
				
			
			}
			if (scrollon>=2000){ //going to games
				$("#superhero").css({
					   'top': '',
					   'left': ''
					});
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
		if (window_screen>=700){
		    var el=window;

		    if(el.addEventListener){
		    	el.addEventListener('scroll', onScrollEventHandler, false);
		    }else if (el.attachEvent){
		    	el.attachEvent('onscroll', onScrollEventHandler);
		    }
		}else{
			$("#intro .pennant").addClass("show");
			$("#howto img").addClass("show")
			$("#howto .last .tv").addClass("move");

			$("#superhero").addClass('gototitle hero_on_city hero_on_solution hero_tosofa hero_playing');

			setTimeout(function(){

				whereissofa();
					$( "#superhero" ).animate({
							    
							    left: offset_hero.left-25,
							    top: offset_hero.top-50 
							    
							  },2000);
			},1500);

		}

	        

	//*  -------   MOVING THE HERO ON START-------*// 
		/*setTimeout(function(){
	   		
	   		$('body').fadeIn(300);
		},1000);*/

	   setTimeout(function(){
		   	if (window_screen>=700){
		   		$("#superhero").addClass('gototitle');
		   	}
	   		
	   		$('.mainlogo').addClass('rotate');
		},1500);

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

		
		$("#saveform").click(function() {
			if($('#contactform').parsley( 'validate' )){
				/*Sending email*/
					var myheaders={
					  	"Kuasars-Secret-Key": "8024ee73-f84b-49f3-9710-590cf5b70121",
						"Kuasars-App-Id": "52f22033e4b047d9c8d03ede",
						"Content-Type": "application/json"
					  };

				/*Take data from FORM*/
					var mydata={
						fullname:$("#name").val(),
				  		email:$("#email").val(),
				  		subject:$("#subject").val()
					};
						
					
					var mydataEmail={
						"templateType":"general",
						"language":"en",
						"subject":"Push Pop website",
						"bodyMessage":" <h2>Push Pop Games</h2> <p><b>From "+mydata.fullname+"</b></p> <p>"+mydata.subject+"</p>",
						"receivers":["atreliz@gmail.com"]
					};

					var userdataEmail={
						"templateType":"general",
						"language":"en",
						"subject":"Contact from Push Pop website",
						"bodyMessage":" <h2>Push Pop Games</h2><p>Thank you for contacting us.</p><p> We will keep you updated<p>",
						"receivers":[mydata.email]
					};

			  	 console.log("Email sent");
			 	 console.log(mydata);

			 	 /*Show hide verify mesagge*/
			 	 $("#saveform").text('Sending..').delay(300).text('DONE !').delay(500).text('DONE !').delay(300).text('Send');

			 	 $("#footer .dates").slideUp('slow').delay(500).slideDown('slow');
			 	 
			 	 $('#footer input').val("");
			 	 $('#footer textarea').val("");
			 	 //alert("GRacias Master");

			 	 //Save Entity
					$.ajax({
						  url: "https://api-pre.kuasars.com/v1/entities/contacts",
						  type: "POST",
						  headers: myheaders,
						  dataType:"json",
						   data: JSON.stringify(mydata),
						  processData: false
						 
						})
						.success(function( data ) {
						      console.log( "success -- Sample of data:", data );
						  })
						.fail(function( data ) {
						      console.log( "FAIL -- Sample of data:", data.responseText );
						  });
		
					//Send Email to me
					$.ajax({
						  url: "http://api-pre.kuasars.com/v1/emails/send",
						  type: "POST",
						  headers: myheaders,
						  dataType:"json",
						   data: JSON.stringify(mydataEmail),
						  processData: false
						 
						})
						.success(function( data ) {
						      console.log( "success -- Sample of data:", data );
						  })
						.fail(function( data ) {
						      console.log( "FAIL -- Sample of data:", data.responseText );
						  });

					//Send Email verify email to user
					
					$.ajax({
						  url: "http://api-pre.kuasars.com/v1/emails/send",
						  type: "POST",
						  headers: myheaders,
						  dataType:"json",
						  data: JSON.stringify(userdataEmail),
						  processData: false
						 
						})
						.success(function( data ) {
						      console.log( "success -- Sample of data:", data );
						  })
						.fail(function( data ) {
						      console.log( "FAIL -- Sample of data:", data.responseText );
						  });
				}
		});



});//closing document ready