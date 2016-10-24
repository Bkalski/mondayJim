console.log('window is loaded')


function getFormValues(){
	var formObject ={
		username: $('input[name=username]').val(),
		email: $('input[name=email]').val()
	}
	return formObject;
}

$('button').on('click', function(event){
event.preventDefault(); //we will run into this problem if we dont see data

$.ajax({
	url: '/firstone/hopeItWorks', 
	type: 'Post',
	data: getFormValues(), 
	dataType: 'json',
	success: function(responseFromServer){
		console.log(responseFromServer)
	},
	error: function(err){
		console.log(err)
	}
})
})


