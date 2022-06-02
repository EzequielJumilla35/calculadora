class Display {
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorAnterior = displayValorAnterior
        this.displayValorActual = displayValorActual
        this.calculadora = new Calculadora()
        this.TipoOperacion = undefined
        this.valorActual = ''
        this.valorAnterior = ''
        this.signos = {
            sumar : '+',
            restar : '-',
            multiplicar: '*',
            dividir: '%'

        }
    }
    borrarTodo(){
        this.valorActual = ''
        this.valorAnterior = ''
        this.TipoOperacion = undefined
        this.imprimirValores()
    }
    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores()
    }

    computar(tipo){
        this.TipoOperacion !== 'igual' && this.calcular()
        this.TipoOperacion = tipo 
        this.valorAnterior = this.valorActual || this.valorAnterior
        this.valorActual = ''
        this.imprimirValores()

    }
    agregarNumero (numero){
        if (numero === '.' && this.valorActual.includes('.') ) return 
        this.valorActual = this.valorActual.toString() + numero
        this.imprimirValores()
    }
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.TipoOperacion] || ''}`
    }
    calcular (){
        const valorAnterior = parseFloat(this.valorAnterior)
        const valorActual = parseFloat(this.valorActual)

        if ( isNaN(valorActual) || isNaN(valorAnterior) )return
        this.valorActual = this.calculadora[this.TipoOperacion](valorActual,valorAnterior)
    }
}

