 

/* Form Validations  */
function check_numerics(evt){
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if ((charCode < 48 || charCode > 57) && charCode!=46){	return false;	}
	else{	return true;	}
}

function validate_form(form_name)
{
	var form_no = cust_name = mobile_no = email_id = course_name = message = "";
	//var course_name = "NA";
	var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if(form_name == "Early_Bird" || form_name == "Contact_Us"){
		if(form_name == "Early_Bird"){		
			cust_name = $('#stu_name1').val();
			email_id = $('#stu_email_id1').val();
			mobile_no = $('#stu_mobile_no1').val();
			message = $('#stu_message1').val();
			form_no = '1';
		}
		else if(form_name == "Contact_Us"){	
			cust_name = $('#stu_name2').val();
			email_id = $('#stu_email_id2').val();
			mobile_no = $('#stu_mobile_no2').val();
			course_name = $('#course_name').val();
			message = $('#stu_message2').val();
			form_no = '2';
		}
 		cust_name = cust_name.trim();
		email_id = email_id.trim();
		mobile_no = mobile_no.trim();
		message = message.trim();
	
		$('#'+form_name+'_error').css('color', '#F00');
		
		if(cust_name == ""){
			$('#'+form_name+'_error').html('Please enter your name.');
			$('#stu_name'+form_no).css('background-color', '#F9B8B8');
			$('#stu_name'+form_no).focus();
		}
		else if(cust_name.length < 3){
			$('#'+form_name+'_error').html('Please enter minimum 3 character name.');
			$('#stu_name'+form_no).css('background-color', '#F9B8B8');
			$('#stu_name'+form_no).focus();
		}
		else if(email_id == ""){
				$('#stu_name'+form_no).css('background-color', '#FFF');
			$('#'+form_name+'_error').html('Please enter your email id.');
			$('#stu_email_id'+form_no).css('background-color', '#F9B8B8');
			$('#stu_email_id'+form_no).focus();
		}
		else if(pattern.test(email_id) == false){
				$('#stu_name'+form_no).css('background-color', '#FFF');
			$('#'+form_name+'_error').html('Please enter valid email id.');
			$('#stu_email_id'+form_no).css('background-color', '#F9B8B8');
			$('#stu_email_id'+form_no).focus();
		}
		else if(mobile_no == ""){
				$('#stu_name'+form_no).css('background-color', '#FFF');
				$('#stu_email_id'+form_no).css('background-color', '#FFF');
			$('#'+form_name+'_error').html('Please enter your mobile no.');
			$('#stu_mobile_no'+form_no).css('background-color', '#F9B8B8');
			$('#stu_mobile_no'+form_no).focus();
		}
		else if(mobile_no.length != 10){
				$('#stu_name'+form_no).css('background-color', '#FFF');
				$('#stu_email_id'+form_no).css('background-color', '#FFF');
			$('#'+form_name+'_error').html('Please enter 10 digit mobile no.');
			$('#stu_mobile_no'+form_no).css('background-color', '#F9B8B8');
			$('#stu_mobile_no'+form_no).focus();
		}
		else if(mobile_no.substring(0,1) != '6' && mobile_no.substring(0,1) != '7' && mobile_no.substring(0,1) != '8' && mobile_no.substring(0,1) != '9'){
				$('#stu_name'+form_no).css('background-color', '#FFF');
				$('#stu_email_id'+form_no).css('background-color', '#FFF');
			$('#'+form_name+'_error').html('Please enter valid mobile no.');
			$('#stu_mobile_no'+form_no).css('background-color', '#F9B8B8');
			$('#stu_mobile_no'+form_no).focus();
		}
		/* else if(message == ""){
				$('#stu_name'+form_no).css('background-color', '#FFF');
				$('#stu_email_id'+form_no).css('background-color', '#FFF');
				$('#stu_mobile_no'+form_no).css('background-color', '#FFF');
			$('#'+form_name+'_error').html('Please enter your message.');
			$('#stu_message'+form_no).css('background-color', '#F9B8B8');
			$('#stu_message'+form_no).focus();
		} */
		else{
		
			$('#stu_name'+form_no).css('background-color', '#FFF');
			$('#stu_mobile_no'+form_no).css('background-color', '#FFF');
			$('#stu_email_id'+form_no).css('background-color', '#FFF');
			//$('#stu_message'+form_no).css('background-color', '#FFF');
			
			//$('#'+form_name+'_error').html(form_name+', '+cust_name+', '+mobile_no+', '+email_id+', '+message);
			//return false;
			
			$.post("contact_us.php", {form_name: form_name, cust_name: cust_name, mobile_no: mobile_no, email_id: email_id, message: message, course_name: course_name}, function(result){
				//$("span").html(result);
				if(result == "Error"){
					$('#'+form_name+'_error').html('Please check your details.');
				}
				else if(result == "Data Inserted"){
					$('#stu_name'+form_no).val('');
					$('#stu_mobile_no'+form_no).val('');
					$('#stu_email_id'+form_no).val('');
					$('#stu_message'+form_no).val('');
					
					$('#'+form_name+'_error').html('');

					$('#'+form_name+'_error').css('color', '#17ec0b');
					$('#'+form_name+'_error').html('Thanks for Contacting Us. We will get back to you soon.');
				}
			}); 
		}
	}
	else{}
	return false;
}
 
 

 