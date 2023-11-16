console.log('start')
document.getElementById('contact-us').addEventListener('click',()=>{
let name = document.getElementById('name').value
let surname = document.getElementById('surname').value
let email = document.getElementById('email').value
let website = document.getElementById('website').value
	if(name == ''){
		alert('Name is required.')
		return;	
	}
	if(surname==''){
		alert('Surname is required.')	
		return;
	}
	if(email==''){
		alert('Email is required.')
		return;	
	}
	if(website==''){
		alert('Website is required.')
		return;	
	}
	window.location.href = `https://api.whatsapp.com/send?phone=919618185563&text=Name%3A%20${encodeURI(name)}%0ASurname%3A%20${encodeURI(surname)}%0AEmail%3A%20${encodeURI(email)}%0AWebsite%3A%20${encodeURI(website)}`;
})
