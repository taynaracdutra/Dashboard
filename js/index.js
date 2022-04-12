const form = document.getElementById('form');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

email.onblur = function () {
    checkInputs(email);
};

senha.onblur = function () {
    checkInputs(senha);
};

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


const setErrorFor = (input, message) => {
    const formItem = input.parentElement;
    const small = formItem.querySelector('.message');

    small.innerText = message;

    formItem.className = 'form-item error';
}


const setSuccessFor = (input) => {
    const formItem = input.parentElement;

    formItem.className = 'form-item success';
}



const checkInputs = (input) => {

    switch (input) {
        case email:
            const emailValue = email.value;

            if (emailValue === '') {
                setErrorFor(email, 'O email é obrigatório!');
            } else if (!validateEmail(emailValue)) {
                setErrorFor(email, 'O email é inválido!');
            }
            else {
                setSuccessFor(email);
            }
            break;
        case senha:
            const senhaValue = senha.value;
            if (senhaValue === '') {
                setErrorFor(senha, 'A senha é obrigatória!');
            } else if (senhaValue.length < 7) {
                setErrorFor(senha, 'A senha deve conter no mínimo 7 caracteres!');
            } else {
                setSuccessFor(senha);
            }
            break;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formItens = form.querySelectorAll('.form-item');

    const formIsValid = [...formItens].every((formItem) => {

        var elements = document.getElementsByTagName('input');

        for (let index = 0; index < elements.length; index++) {
            checkInputs(elements[index]);
        }

        return (formItem.className === "form-item success");
    })

    if (formIsValid) {
        alert('Enviado');
    } else {
        alert('Erro, não foi possível enviar');
    }
})