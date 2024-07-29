function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    }

    this.pressionaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        })
    }

    this.clearDisplay = () => {
        this.display.value = '';
    }

    this.deletaNum = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.realizaConta = () => {
        let conta = this.display.value;

        try {

            conta = eval(conta);

            if (!conta) {
                alert('Conta inválida!')
                this.clearDisplay();
            }

            this.display.value = conta;

        } catch (e) {
            alert('Conta inválida');
            this.clearDisplay();
            return;
        }
    }


    this.cliqueBotoes = () => {
        document.addEventListener('click', event => {
            const elemento = event.target;

            if (elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);

            if (elemento.classList.contains('btn-clear')) this.clearDisplay();

            if (elemento.classList.contains('btn-del')) this.deletaNum();

            if (elemento.classList.contains('btn-eq')) this.realizaConta();
        })
    }

    this.addNumDisplay = el => {
         this.display.value += el.innerText;
         this.display.focus();
    }
    
};

const calculadora = new Calculadora();
calculadora.inicia();