import prompt from "prompt-sync";
let nome = "Jon";

class Person {
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {}
}

let teclado = prompt();
let option = 0;
let sansa: Person;
sansa = new Person("sansa", 50, 60, 80, 90);
console.log("person :>>", sansa);

while (option != 9) {
  console.log("+======== Person ========+");
  console.log("|1. Treinar Ataque       |");
  console.log("|2. Treinar Defesa       |");
  console.log("|3. Imprimir atributos   |");
  console.log("|9. Sair                 |");
  console.log("+========================+");

  option = +teclado("Escolha uma opção: -->  ");

  switch (option) {
    case 1:
      sansa.ataque += 2;
      break;
    case 2:
      sansa.defesa += 2;
      break;
    case 3:
      console.log(" Sansa -->>", sansa);
      break;
    default:
      break;
  }
}
