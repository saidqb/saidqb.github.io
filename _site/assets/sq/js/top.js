async function sqFetch(method = 'GET', url = '', data = '') {

	conf = {
		method: method,
		headers: {
			'Content-Type': 'application/json'
		},
	};

	conf.headers['token'] = ''; 

	method = method.toLowerCase();
	if(method == 'post' && data != ''){
		conf.body = JSON.stringify(data);
	}

	if(method == 'put' && data != ''){
		conf.body = JSON.stringify(data);
	}


	if(method == 'get' && data != ''){
		url = url + '?' + sq_obj_query_uri(data);
	}

	const response = await fetch(url, conf);
	return await response.json()
}


function sq_alert(){
	return {
		error : function(){
			let html= `<div class="alert alert-danger" role="alert" data-sqalert-content>
			</div>`;
			$('[data-sqalert]').html(html).fadeIn(100);
		},
		success : function(){
			let html= `<div class="alert alert-success" role="alert" data-sqalert-content>
			</div>`;
			$('[data-sqalert]').html(html).fadeIn(100);
		}, 
		content : function(html){
			$('[data-sqalert-content]').html(html);
		},
		remove : function(html){
			$('[data-sqalert]').html('');
		},
		
	}


}

function random_string(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}