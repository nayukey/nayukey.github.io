//Content Js for nayukey.github.io
//Created By 爱游戏的酱油猫
//2012.7.9
//Any question, @爱游戏的酱油猫（新浪微博）

var data = {
	'img': '',
	'link': window.location.href,
	'desc': '',
	'title': ''
};

(function(){
	var $ = new H5lab();
	var num = $.getContentUrl("c");
	var url = Links.content.contentUrl + num + '.txt';
	$.ajax("get",url,callbacks);
	function callbacks(json){
		//nav
		if(json.selectedNav != undefined) {
			var navlis = document.getElementById("nav-list").getElementsByTagName("li");
			navlis[json.selectedNav].className = 'selected';
		}

		//topic
		document.title = json.title;
		document.getElementById("topic-title").innerHTML = json.title;
		document.getElementById("topic-content").innerHTML = json.content;

		var callback = function() {
			document.getElementById("topic-content").innerHTML = json.weixin;
			console && console.log(argument);
		};

		try{
			data.title = json.title;
			data.img = json.wximg;
			data.desc = json.desc;
			wechat('timeline', data, callback);
			document.getElementById("nav-list").style.display = "none";
		}catch (e){

		}
		
	}
	
})();