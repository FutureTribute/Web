document.getElementById("id4").addEventListener("click", consoleOutput);

function consoleOutput() {
    let ids = ["id1", "id2", "id3"];
    for (let i = 0; i < ids.length; i++)
        console.log(document.getElementById(ids[i]).value);
}
