document.body.innerHTML=`<section class="container">
    
    </section>`;
    
var arr=["https://http.cat/100","https://http.cat/101","https://http.cat/102",
          "https://http.cat/200","https://http.cat/201","https://http.cat/202",
         "https://http.cat/203","https://http.cat/204","https://http.cat/206",
          "https://http.cat/201","https://http.cat/300","https://http.cat/301",
        "https://http.cat/302","https://http.cat/303","https://http.cat/304",
    "https://http.cat/305","https://http.cat/307","https://http.cat/308","https://http.cat/400",
     "https://http.cat/401","https://http.cat/402","https://http.cat/403","https://http.cat/404",
    "https://http.cat/405","https://http.cat/406","https://http.cat/407","https://http.cat/408",
    "https://http.cat/409","https://http.cat/410","https://http.cat/411","https://http.cat/412",
     "https://http.cat/413","https://http.cat/414","https://http.cat/415","https://http.cat/416",
    "https://http.cat/417","https://http.cat/418","https://http.cat/420","https://http.cat/421",
"https://http.cat/422","https://http.cat/423","https://http.cat/424","https://http.cat/425",
"https://http.cat/426","https://http.cat/429","https://http.cat/431","https://http.cat/444",
"https://http.cat/450","https://http.cat/451","https://http.cat/497","https://http.cat/498",
"https://http.cat/499","https://http.cat/500","https://http.cat/501","https://http.cat/502","https://http.cat/503",
"https://http.cat/504","https://http.cat/506","https://http.cat/507","https://http.cat/508",
"https://http.cat/509","https://http.cat/510","https://http.cat/511","https://http.cat/521",
"https://http.cat/523","https://http.cat/525","https://http.cat/599"]

for(var i=0;i<arr.length;i++){
document.querySelector(".container").innerHTML+=`
                                                  <div">
                                                       <img src="${arr[i]}.jpg" alt="cat">
                                                  </div>
                                           `
}
