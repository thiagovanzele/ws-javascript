class CPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            configurable: false,
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, ''),
            writable: false
        })

    }

    repetido() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        let novoCpf = this.cpfLimpo.slice(0, -2);
        const primeiroDigito = this.geraDigito(novoCpf);
        const segundoDigito = this.geraDigito(novoCpf + primeiroDigito);
        return novoCpf + primeiroDigito + segundoDigito;
    }

    geraDigito(cpf) {
        let contador = cpf.length + 1;
        let soma = 0;
        for (let stringNumero of cpf) {
            soma += contador * Number(stringNumero);
            contador--;
        }

        let total = 11 - (soma % 11);
        return total > 9 ? '0' : String(total);
    }

    validaCpf() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.repetido()) return false;
        const cpfFormado = this.geraNovoCpf();
        return this.cpfLimpo === cpfFormado;
    }
}

const cpfValido = new CPF('424.774.149-95');
console.log(cpfValido.validaCpf());