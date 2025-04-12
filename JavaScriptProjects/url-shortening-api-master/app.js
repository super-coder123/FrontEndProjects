 let btn=document.getElementById("shortbtn");

// async function short() {
//     console.log("clicked");
//     let longurl=document.getElementById("longurl").value;
//     const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${longurl}`);
//     const data=await res.json();
//     longurl.value=data.res.short_link2;
// }

// btn.addEventListener("click",short);


// let button = document.getElementById("shortbtn");

// button.addEventListener("click", function () {
//     console.log("Clicked");
// });


function shortenUrl() {
    console.log("button clicked");
    var url = document.getElementById("longurl").value; // Get the URL to shorten
    console.log(url);
    if (url.trim() == '') {
       // document.getElementById("result").innerHTML = "Ple
       
       console.log("enter a valid url");
       return;
    }

    // Display processing message

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var resultObject = JSON.parse(xhr.responseText);
            var myUrl = "https://" + resultObject.shortened_url;
            //document.getElementById("result").innerHTML = "Your Shortened URL: <a href='" + myUrl + "' target='_blank'>" + resultObject.shortened_url + "</a>";
          //  document.getElementById("generatedUrl").value = resultObject.shortened_url;
        }
        xhr.open("POST", "https://s.squizee.in/short/formResponse?url=" + encodeURIComponent(url) + "&email=&format=json&suffix=", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
    }
};


btn.addEventListener("click",shortenUrl);