console.log('start')
function contactUs(){
let name = document.getElementById('name')
let surname = document.getElementById('surname')
let email = document.getElementById('email')
let website = document.getElementById('website')
	if(name == ''){
		alert('Name is required.')	
	}
	if(surname==''){
		alert('Surname is required.')	
	}
	if(email==''){
		alert('Email is required.')	
	}
	if(website==''){
		alert('Website is required.')	
	}
	window.location = `https://wa.me/+919618185563?text=Name%3A%20${name}%0ASurname%3A%20${surname}%0AEmail%3A%20${email}%0AWebsite%3A%20${website}`
}