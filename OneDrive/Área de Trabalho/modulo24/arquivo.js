// Classe abstrata (base)
class Animal {
constructor(nome) {
    if (new.target === Animal) {
    throw new Error("Não pode instanciar Animal direto, é abstrata");
    }
    this.nome = nome;
}
    falar() {
    console.log(`${this.nome} está fazendo um som.`);
}
}

// Herdeira 1
class Cachorro extends Animal {
    falar() {
    console.log(`${this.nome} diz: Au Au!`);
}
}

// Herdeira 2
class Gato extends Animal {
    falar() {
    console.log(`${this.nome} diz: Miau!`);
}
}

// Instâncias
const dog1 = new Cachorro("Rex");
const cat1 = new Gato("Mimi");
const dog2 = new Cachorro("Bolt");

dog1.falar();
cat1.falar();
dog2.falar();
