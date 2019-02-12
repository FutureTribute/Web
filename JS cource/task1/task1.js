let seconds = 234245645335;
let seconds_from_last = seconds % 3600;
console.log("Секунд з останньої повної години:", seconds_from_last);


let s = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at.";
let sub = "a";
let arr = [];
for (let i = 0; i < s.length; i++) {
    if (s[i] === sub)
        arr.push(i);
}
console.log('Індекси "' + sub + '":', arr);