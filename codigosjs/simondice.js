const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 10
class Juego {
    constructor() {
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
    }
    inicializar() {
        this.toggleBtnEmpezar()
        this.elegirColor = this.elegirColor.bind(this)
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.perdioElJuego = this.perdioElJuego.bind(this)
        this.ganoElJuego = this.ganoElJuego.bind(this)
        this.nivel = 1
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }
    toggleBtnEmpezar() {
        if (btnEmpezar.classList.contains('hide')) {
            btnEmpezar.classList.remove('hide')
        } else {
            btnEmpezar.classList.add('hide')
        }
    }
    generarSecuencia() {
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
    }
    siguienteNivel() {
        this.subnivel = 0

        swal("Nivel " + this.nivel, "Ánimo, eres muy pilo/a", "info")
            .then(() => {
                setTimeout(() => {
                    this.iluminarSecuencia()
                    this.agregarEventosClick()
                }, 500)
            })
    }
    transformarNumeroAColor(num) {
        if (num === 0) return 'celeste'
        if (num === 1) return 'violeta'
        if (num === 2) return 'naranja'
        if (num === 3) return 'verde'
    }
    transformarColorANumero(color) {
        if (color === 'celeste') return 0
        if (color === 'violeta') return 1
        if (color === 'naranja') return 2
        if (color === 'verde') return 3
    }
    iluminarSecuencia() {
        for (let i = 0; i < this.nivel; i++) {
            const color = this.transformarNumeroAColor(this.secuencia[i])
            setTimeout(() => this.iluminarColor(color), 750 * i)
        }
    }
    iluminarColor(color) {
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350)
    }
    apagarColor(color) {
        this.colores[color].classList.remove('light')
    }
    agregarEventosClick() {
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
    }
    eliminarEventosClick() {
        this.colores.celeste.removeEventListener('click', this.elegirColor)
        this.colores.verde.removeEventListener('click', this.elegirColor)
        this.colores.violeta.removeEventListener('click', this.elegirColor)
        this.colores.naranja.removeEventListener('click', this.elegirColor)
    }
    elegirColor(ev) {
        const nombreColor = ev.target.dataset.color
        const numeroColor = this.transformarColorANumero(nombreColor)
        this.iluminarColor(nombreColor)
        if (numeroColor === this.secuencia[this.subnivel]) {
            // Adivinó el color
            this.subnivel++
            if (this.subnivel === this.nivel) {
                this.nivel++
                this.eliminarEventosClick()
                if (this.nivel === (ULTIMO_NIVEL + 1)) {
                    this.ganoElJuego()
                } else {
                    setTimeout(this.siguienteNivel, 1000)
                }
            }
        } else {
            setTimeout(this.perdioElJuego, 500)
        }
    }
    ganoElJuego() {
        swal("Muy bien", "Ganaste este juego, ¡Felicitaciones!", "success")
            .then(() => this.inicializar())
    }
    perdioElJuego() {
        swal("Outsh", "Por poco, intenta nuevamente.", "error")
            .then(() => {
                this.eliminarEventosClick()
                this.inicializar()
            })
    }
}
function empezarJuego() {
    window.juego = new Juego()
}