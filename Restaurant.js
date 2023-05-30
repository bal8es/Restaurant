"use strict";



let x = 999;
let y=0
function getId(x) {
    y += 1;
    return x+y;
}

function fType(name, type, price) {
    this.id = getId(x);
    this.name = name;
    this.type = type;
    this.price = price;
}



fType.prototype.render = function () {
    let tb = document.getElementById("tBody");
    let tr = document.createElement("tr");

    let td=document.createElement("td")
    td.textContent=this.id;
    tr.appendChild(td)

    let td1=document.createElement("td")
    td1.textContent=this.name;
    tr.appendChild(td1)

    let td2=document.createElement("td")
    td2.textContent=this.type;
    tr.appendChild(td2)

    let td3=document.createElement("td")
    td3.textContent=this.price;
    tr.appendChild(td3)

    tb.appendChild(tr);

}

let fForm=document.getElementById("foodType")

fForm.addEventListener("submit",function(e){
    e.preventDefault();
    let f1 = new fType(
        
        document.getElementById('name').value,
        document.getElementById('types').value,
        document.getElementById('price').value
    )
    f1.render()
})


