document.getElementById("greeting").textContent = "Hi There!";
document.getElementById("h1").textContent = "the header";

let items = document.getElementsByClassName("redclass");
for (let i = 0; i < items.length; i++)
{ 
    items[i].textContent = "Text change";
}