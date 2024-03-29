function $$(dom){//eg:$$("id")
    return document.getElementById(dom);
}

function $$$(dom){//eg:$$$("class")
    return document.getElementsByClassName(dom);
}

function mo_ajax(url,method,boole,sfun,ffun,para) {//url字符串,method字符串,boole布尔值(是否异步),sfun成功函数,ffun失败函数,para参数字符串
    //eg:
    //function ssfun(text){alert(text);}
    //function fffun(){alert('fail');}
    //sendurl('http://a.com','post',true,ssfun,fffun,'a=1&b=2')
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttps = new XMLHttpRequest();
    }else{// code for IE6, IE5
        xmlhttps = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttps.onreadystatechange = function () {
        if (xmlhttps.readyState == 4 && xmlhttps.status == 200) {
            sfun(xmlhttps.responseText);
        }else if (typeof(ffun) != "undefined" && ffun != null){
            ffun();
        }
    }
    if (method == "get"){
        xmlhttps.open(method, url + "?" + para, boole);
        xmlhttps.send();
    }else if(method == "post"){
        xmlhttps.open(method, url, boole);
        xmlhttps.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttps.send(para);
    }else{
        console.log("error:方法名输入错误,应该为'post'或'get'");
    }
}
