// console.log("Hello World")
// alert("ada Notifikasi")
// prompt("pinjam seratus")

// var promnet = "coding is easy"
// console.log(promnet)--bisa 2 kali

// let promnet = "coding is fun"
// console.log(promnet)--tidak bisa 2kali

// const promnet ="coding is my life"
// console.log(promnet)

// let totalpoin = prompt("masukkan poin anda")
//     if (totalpoin > 100){
//         document.write("congratulation");
//         }else{
//         document.write("keep trying");
//     }

// let x=6;
// let y=3;

// console.log(x<10 && y>1);
// console.log(x<10 && y < 1);
// console.log(x==5||y==5);
// console.log(x==y);

// document.write(x<10 && y>1);
// document.write("<br>");
// document.write(x<10 && y < 1);

// let p= document.querySelector("p")
// let button=document.querySelector("button")
// let input=document.querySelector("input")
// button.addEventListener('click', function(){
//     let isi= input.value
//     console.log(isi)
//     p.innerHTML==isi
// });

document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('todoForm');
    let input = document.getElementById('newTask');
    let todoList = document.getElementById('todoList');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        addTask(input.value);
        input.value = '';
        value.type = 'none';
    });

    function addTask(task) {
        let listItem = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        let label = document.createElement('label');
        label.textContent = task;

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '&#215;';
        deleteButton.addEventListener('click', function () {
            listItem.remove();
        });

        checkbox.addEventListener('change', function () {
            // Jika checkbox dicentang, tambahkan garis melintang pada teks
            if (checkbox.checked) {
                label.style.textDecoration = 'line-through';
            } else {
                label.style.textDecoration = 'none';
            }
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
    }
});