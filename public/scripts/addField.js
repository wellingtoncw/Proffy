//Procurar o botão
document.querySelector('#add-time')
//Quando clicar no botão
.addEventListener('click', cloneField);


//Executar uma ação
function cloneField() {
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true); // true é um tipo de dado boolean ( verdadeiro ou falso - true or false)

    //pegar os campos: quais campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pega o field do momento e limpa ele
        field.value = ""
    })

    //Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
    