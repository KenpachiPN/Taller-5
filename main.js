
addEventListener("DOMContentLoaded", (e) => {
    let numbers = 0;
    addEventListener("submit", (e) => {
        e.preventDefault();
        if (e.submitter.dataset.operacion != "Limpiar") {
            let data = Object.fromEntries(new FormData(e.target));
            if (data.numeros > 0) {
                numbers += Number(data.numeros);
                e.target.reset();
            }
            else {
                e.submitter.disabled = true;
                document.querySelector('[id="controls"]').value = numbers;
            }
        } 
        else {
            location.reload();
        }
    })
});



    
