const openMoldalButton = document.querySelector("#link3");
const closeModalButton = document.querySelector("#fecharModal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () =>{
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[openMoldalButton, closeModalButton, fade].forEach((el)=>{
    el.addEventListener("click", () => toggleModal() )
})