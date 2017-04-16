

$(document).ready(function(){
    $('ul.tabs').tabs();
  });


$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
        

function go_to_home_screen()
{
	document.getElementById('main_screen_2').style.display="block";
	document.getElementById('summary_plan').style.display="none";

} 

 function show_hdfc_starting_screen() 
{
	document.getElementById('main_frame').style.height=window.innerHeight+'px';
	document.getElementById('main_frame').style.width=window.innerWidth+'px';
	

	setTimeout(function(){	

		document.getElementById('starting_screen_home_page').style.display="none";
		document.getElementById('login_slides').style.display="block";

	},2000);	
}

function after_login()
{
			document.getElementById('login_slides').style.display="none";
			document.getElementById('main_screen_2').style.display="block";
}


function show_policy()
{
	

}

function get_policy_life_easy()
{
	document.getElementById('main_screen_2').style.display="none";
	document.getElementById('after_easy_life_selected').style.display="block";

}

function get_chat_box()
{
	document.getElementById('after_easy_life_selected').style.display="none";
	document.getElementById('thirdScreen').style.display="block";	

}

function get_summary()
{
	document.getElementById('summary_plan').style.display="block";
	document.getElementById('thirdScreen').style.display="none";	

}



function remove_faq()
{
	document.getElementById('faqs_screen').style.display="none";

}

function get_back_main_screen_2()
{
	document.getElementById('after_easy_life_selected').style.display="none";
	document.getElementById('main_screen_2').style.display="block";	
}

function get_faq_bar()
{
	document.getElementById('faqs_screen').style.display="block";
}

function get_back_to_after_easy_life_selected()
{
	document.getElementById('thirdScreen').style.display="none";
	document.getElementById('after_easy_life_selected').style.display="block";

}

function get_dictionary()
{
		document.getElementById('dictionary').style.display="block";
}

function remove_dictionary()
{
		document.getElementById('dictionary').style.display="none";
}






var inc_ment=1;

function abc()
{
	inc_ment=inc_ment+1;
	var str="Step " +inc_ment+"/9";
	document.getElementById('incremetnt').innerHTML=str;
}


 // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();



