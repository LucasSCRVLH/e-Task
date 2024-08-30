console.log("Application is running")


const botao = document.querySelector("#button_create")
const input = document.querySelector("#task")
const ul = document.querySelector(".task-list")


botao.addEventListener('click', (event) => {
    event.preventDefault();
    if (!input.value) {
        return alert("Ta errado")
    }
   const check = `<input type="checkbox">`
    const li = `<li class="task-item">${check}<p>${input.value}</p></li>`
    ul.innerHTML += li
   
} 

)

