//  1. Declare uma variável de nome weight 
    let weight 

// 2. Que tipo de dado é a variável acima?
    console.log(typeof weight)

/* 
  3. Declare uma variável e atribua valores para cada um dos dados:
      * name: String
      * age: Number (integer)
      * stars: Number (float)
      * isSubscribed: Boolean
*/

    let name = "Sebastião"
    let age: 23
    let weight: 12.5
    let isSubscribed: false

/*
    4. A variável student abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> e <weight> pelos valores de cada propriedade do objeto
*/

    let student = {
        name: "Sebastião",
        age: 23,
        weight: 12.5,
        isSubscribed: false
    };
    console.log(´${sudent.name} de idade ${student.age} pesa ${student.weight} kg.´)

    console.log(typeof student)


/* 
      5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/
      let student = []
      

/* 

      6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
      students = [
          student
      ]

      console.log(students)

/* 
      7. Coloque no console o valor da posição zero do Array acima
*/
      console.log(student[0])


/* 
      8. Crie um novo student e coloque na posição 1 do Array students
*/
      const john = {
        name: "John",
        age: 30,
        weight: 58.8,
        isSubscribed: true
      }

      students = [
        student,
        john
      ]
         // ou
      students[1] = john

      console.log(student[1])

/*  
      9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

      console.log(a)
      var a = 1
*/