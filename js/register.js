const form = document.getElementById('form');
const nome = document.getElementById('nome');
const dtNascimento = document.getElementById('dtNascimento');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senhaConfirmacao = document.getElementById('senhaConfirmacao');

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
});

form.addEventListener('reset', (e) => {
    e.preventDefault();

    const formItens_list = form.querySelectorAll('.form-item');
    const formItens = [...formItens_list];

    formItens.forEach(element => {
        element.classList.remove("error");
        element.classList.remove("success");
    });

});

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


const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


const checkInputs = (input) => {

    switch (input) {
        case nome:
            if (!nome.value) {
                setErrorFor(nome, 'O nome é obrigatório!');

            } else {
                setSuccessFor(nome);
            }
            break;
        case dtNascimento:
            if (!dtNascimento.value) {
                setErrorFor(dtNascimento, 'A data de nascimento é obrigatória!');
            } else {
                setSuccessFor(dtNascimento);
            }
            break;
        case email:
            if (!email.value) {
                setErrorFor(email, 'O email é obrigatório!');
            } else if (!validateEmail(email.value)) {
                setErrorFor(email, 'O email é inválido!');
            }
            else {
                setSuccessFor(email);
            }
            break;
        case senha:
            if (!senha.value) {
                setErrorFor(senha, 'A senha é obrigatória!');
            } else {
                setSuccessFor(senha);
            }
            break;
        case senhaConfirmacao:
            if (!senhaConfirmacao.value) {
                setErrorFor(senhaConfirmacao, "A confirmação da senha é obrigatória!");
            } else if (senha.value !== senhaConfirmacao.value) {
                setErrorFor(senhaConfirmacao, "As senhas não são iguais!");
            } else {
                setSuccessFor(senhaConfirmacao);
            }
            break;
    }
}

nome.onblur = (() => {
    checkInputs(nome);
});

dtNascimento.onblur = (() => {
    checkInputs(dtNascimento);
});

email.onblur = (() => {
    checkInputs(email);
});

senha.onblur = (() => {
    checkInputs(senha);
});

senhaConfirmacao.onblur = (() => {
    checkInputs(senhaConfirmacao);
});


