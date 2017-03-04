import $ from 'jquery';

//ajax services to make Ajax request to API's
let ajaxService = {
	get : function(url){
		return new Promise((success,error)=>{
			$.ajax({
				type : 'GET',
				dataType:"json",
				url,
				success,
				error
			});
		});
	}
};

export default ajaxService;