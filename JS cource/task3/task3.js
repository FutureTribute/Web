document.getElementById("id4").addEventListener("click", consoleOutput);

function consoleOutput() {
    let ids = ["id1", "id2", "id3"];
    for (let i = 0; i < ids.length; i++)
        console.log(document.getElementById(ids[i]).value);
}

let current, current2;
let time;
let x = 0;

function checker() {
    if (!current)
        current = Date.now();
    else {
        current2 = Date.now();
        if (current2 - current > time) {
            throw new Error("Infinite loop, execution stopped")
        } else {
            current = current2;
        }
    }

}

function catch_lags() {
    current = undefined;
	time = Number.MAX_SAFE_INTEGER;
	x = 0;
    try {
        while (true) {
			if (x === 0)
				time = Date.now();
            console.log("Working");
            checker();
			if (x === 0) {
				time = 20 * (Date.now() - time);
				x = 1;
			}
        }
    } catch (e) {
        return e.toString();
    }
}