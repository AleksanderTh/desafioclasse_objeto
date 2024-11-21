class heroAventura {
    // enviar para o github
     constructor(nome, idade, tipo) {
         this.nome = nome;
         this.idade = idade;
 
         this.tipos = ["guerreiro", "mago", "monge", "ninja"];
         this.ataques = ["espada", "magia", "lutas marciais", "espada mortal"]
         this.tipo = tipo % this.tipos.length;
     }
     gettipo() {
         return this.tipos[this.tipo];
     }
     getataques() {
         return this.ataques[this.tipo];
     }
     ataque() {
         console.log(`O ${this.gettipo()} atacou usando ${this.getataques()}`);
     }
     info() {
         console.log(`Nome: ${this.nome}, idade: ${this.idade}, Tipo: ${this.gettipo()}`);
     }
 }   
 for(let i = 0; i < 4; i++) {
     let cesarms = new heroAventura("cesarms", 0, i);
     cesarms.ataque();
 
 }
 