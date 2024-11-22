
const diag = document.querySelector('.card');


if(window.innerWidth > 1000){

	const image = document.querySelector('.card-image img');

	image.src="assets/images/illustration-sign-up-desktop.svg";

}

const form = document.getElementById('form');

dialog = document.getElementById("dialog");

/* validate form*/ 

function validate(e){

	const emailField  = document.getElementById('Email');
	const helpText  = document.getElementById('help_text');
	e.preventDefault();
	
	if(emailField.value === ""){
		
		emailField.style.backgroundColor = "hsl(4, 100%, 67%)";
		emailField.style.border="hsl(4, 100%, 67%)";
		helpText.removeAttribute('hidden');
		helpText.textContent = "Please Enter an Email address";
		helpText.style.color = "red";
		return false;
	}

	
	return true;

}

function close_modal(){
	
	dialog = document.getElementById('dialog');
	dialog.close();
	

}

form.addEventListener("submit",validate)

form.addEventListener("submit",(e)=>{
	
	if(validate(e) != false){
		
		dialog = document.getElementById('dialog');
		dialog.showModal();
		//perform fetch
		
		if(dialog.open){
		
			const close_btn = document.querySelector("#modal-button");
			close_btn.addEventListener("click",close_modal); 
		
		}
	
	}
	
	
		

});




