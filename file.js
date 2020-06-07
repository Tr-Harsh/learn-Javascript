let patterns = {
	username: /^[a-z\d]{5,10}$/i,
	password: /^[\w@-]{8,10}$/i,
	mobile: /\d{10}/,
	email: /^([a-z\d\.-]+)@([a-z\d])\.([a-z]{2,3})?$/

}

document.getElementById('f1').onsubmit = (e)=>{
	e.preventDefault();

	if(!patterns.username.test(e.target.username.value)){
		alert('wrong username');
	}

}