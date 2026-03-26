document.getElementById("shrek").addEventListener('click', function(event) {
  counter();
})

if (localStorage.counter) {
  document.getElementById("shrekocounter").innerHTML = localStorage.getItem("counter");
} else {
  document.getElementById("shrekocounter").innerHTML = 0;
}
let i = Number(document.getElementById("shrekocounter").innerHTML)

function counter(){
    i ++;
    document.getElementById("shrekocounter").innerHTML = i;
    localStorage.setItem("counter", i);
}

console.log("Hello, World! said the newborn website")
//alert("Hello, World!")ˇ

while (KeyboardEvent.ctrlKey) {
    counter();
}