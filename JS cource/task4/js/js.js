let val1;
let val2;

button.addEventListener("click", getValues);

function getValues() {
    val1 = input1.value;
    val2 = input2.value;
    let json_data = JSON.stringify({value1: val1, value2: val2});
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/info", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.addEventListener("load", function () {
        let receivedData = JSON.parse(xhttp.response);
        document.getElementsByTagName("p")[0].innerHTML = receivedData.ConcatString;
    });
    xhttp.send(json_data);
}
