function OnSubmitButtonClick()
{
    http = new XMLHttpRequest();
    url = "https://jsonplaceholder.typicode.com/posts";
    http.open("GET", url);
    http.send();

    http.onreadystatechange = (e) =>
    {
        document.getElementById("OutputText").textContent = http.responseText;
    }

    //1. Get information from the fields
    //2. Validate information
    //3. If validated, generate a request (create a json, etc.)
    //4. POST request and handle success and failure
    //5. That's it.
    //The rest is just design

    //Previous test output
    //document.getElementById("OutputText").textContent = "Submitted!";
}

function OnClearButtonClick()
{
    document.getElementById("OutputText").textContent = "Cleared!";
}