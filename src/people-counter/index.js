// Grab the count-el element, store it in a countEl variable.
let count = 0;

function increment() {
    count += 1;
    // Set countEl's innerText to the count.
    document.getElementById("count-el").innerText = count;
}
