var xmlhttp = new XMLHttpRequest();




xmlhttp.onreadystatechange = function()
{
    if (xmlhttp.readyState===4 && xmlhttp.status===200)
    {
        alert(xmlhttp.responseText);
    } else if (xmlhttp.status === 422) {
       //TODO: use the array to highlight the missing information as per the client validation.
    } else {
        alert("There was an unexpected problem posting your message");
    }
}

xmlhttp.open("POST", "http://localhost:3000/api/submit?email=email&message=message", true);
xml.send("email=" + document);
