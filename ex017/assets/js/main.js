class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');

        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', evento => {
            this.handleSubmit(evento);
        });
    }

    handleSubmit(evento) {
        evento.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.validaSenha();

        if (camposValidos && senhasValidas) {
            alert('Formulario enviado!');
            this.formulario.submit();
        }
    }

    camposSaoValidos() {
        let valido = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.valida')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `${label} não pode ser vazio.`)
                valido = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCpf(campo)) valido = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.verificaUsuario(campo)) valido = false;
            }           
        }

        return valido;
    }

    validaSenha() {
        let valido = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if (senha.value !== repetirSenha.value) {
            this.criaErro(senha, 'Senhas não coincidem');
            this.criaErro(repetirSenha, 'Senhas não coincidem');
            valido = false;
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, 'Senha deve conter entre 6 e 12 carecteres');
            valido = false;
        }

        return valido;
    }

    verificaUsuario(campo) {
        let valido = true;
        const usuario = campo.value;
        
        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valido = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/)) {
            this.criaErro(campo, 'Usuário deve conter letras e números');
            valido = false;
        }

        return valido;
    }

    validaCpf(campo) {
        const cpf = new CPF(campo.value);

        if (!cpf.validaCpf()) {
            this.criaErro(campo, 'CPF Inválido');
            return false;
        }

        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario();