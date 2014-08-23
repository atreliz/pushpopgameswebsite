$("#sendmail").click(function() {
			/*Take data from FORM*/
				var mydata={};
					mydata.fullname="Pepe"; //$("#name").val();
			  		mydata.email="alex.trebolle@glass.u-tad.com"; //$("#email").val();
			  		mydata.subject="esto es un email tipo"; //$("#subject").val();
				
				var mydataEmail={
					"templateType":"general",
					"language":"en",
					"subject":"Push Pop website",
					"bodyMessage":" <h2>From "+mydata.fullname+"</h2><p>"+mydata.subject+"</p>",
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

		 	 //Save Entity
				/*$.ajax({
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
				/*$.ajax({
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
					  });*/

				//Send Email verify email to user
				/*$.ajax({
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
					  });*/
		});

		setTimeout(function(){
			$("#sendmail").trigger( "click" );
		},1000);
		$("body").hide();
