class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar() {
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataques[this.tipo]}`)
    }
}

const heroes = [
    new Hero("Merlin", 100, "mago"),
    new Hero("Arthos", 30 , "guerreiro"),
    new Hero("Li Mei", 28, "monge"),
    new Hero("Naruto", 22 , "ninja")
]

heroes.forEach(hero => hero.atacar())