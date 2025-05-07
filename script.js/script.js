function emailJs(form){
    const formEl = document.querySelector(".form")
    formEl.addEventListener("submit", async (input) => {
        input.preventDefault()

        const request = {
            nombre: input.target.nombre.value,
            email: input.target.email.value,
            numero: input.target.numero.value,
            asunto: input.target.asunto.value,
            mensaje: input.target.mensaje.value
        }

        var serviceID = "service_egk121w";
        var templateID = "template_hf9phkg";
        try{
            await emailjs.send(serviceID, templateID, request)
            alert("Gracias por contactarme")
        }catch(err){
            console.log(err)
        }
    })
}

    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector(".navbar");

    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });

emailJs()