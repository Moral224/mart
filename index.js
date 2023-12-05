var arrayItem = []
var pass = "./music/p.mp3"
var songOn = new Audio(pass)

function check(){
    var take = document.getElementById('mart').value;
    if(take !== ""){
        //songOn.play()
        showErr.innerHTML = ""
        arrayItem.push(take);
        mart.value = "";
        displayloop()
    }
    else{
        showErr.innerHTML = `<p  class="alert alert-danger ms-5 me-5 mt-2">Fill me please</p>`
    }
}


    function typeU(){
    var take = document.getElementById('mart').value;
    if(take !== ""){
    showErr.innerHTML = ""
    arrayItem.unshift(take);
    mart.value = "";
    displayloop()
    }
    else{
        showErr.innerHTML = `<p>Fill me please</p>`
    }
}

    function typeE() {
    arrayItem.pop();
    displayloop()
}

    function typeI() {
    var sola = Number(prompt('Enter the number you want to delete'))
    arrayItem.splice(sola-1, 1)
    displayloop()
}

    function typeV () {
var check = confirm('Are you sure you want to delete, bad thing will happen oo if your are not sure')
console.log(check);


if (check==true) {
    arrayItem.splice(0,arrayItem.length)
    displayloop()

}else{
    console.log(arrayItem);
}
}



function typeQ() {
var userInp = Number(prompt('Enter the number you want to edit'))
var userEdit = prompt("What do you want to change it to?")
arrayItem[userInp-1] = userEdit;
        displayloop()

}

function displayloop(){
    displayOutput.innerHTML = ""
    for(i=0; i<arrayItem.length; i++)
    {
        displayOutput.innerHTML += `<h3 class="text-light"> ${i+1} ${arrayItem[i]}</h3>`
    }
}