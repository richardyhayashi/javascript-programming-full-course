let countEl = document.getElementById("count-el");

console.log(countEl);

let count =0;

function increment() {
    count += 1;
    countEl.innerHTML = count;
}
