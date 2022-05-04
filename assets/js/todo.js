import { addTask, getAllTasks } from "./utils/domFunctions.js";


//   // exemplo de array
//   const frutas = ["maçã", "banana", "abacaxi", "abacate"];

//   // frutas[3];
//   // frutas.length;
//   // frutas[frutas.length - 1];

//   console.log(frutas.at(-1));

//   //TypeScript
//   //Criando um objeto literal
//   //JavaScript Object Notation - JSON

//   const dados = {
//     nome: "Glaucio Daniel",
//     idade: 36,
//     programador: true,
//     acao: () => {
//       console.log("Executando uma ação");
//     },
//   };

//   //Objeto é um conjuto de atributos(propriedades ou valores) e métodos(ações ou funçõs)
//   console.log(dados.nome);
//   console.log("Idade: ", dados.idade);

// dados.acao();
// console.log(db[0].steps[2].step)
// objeto é um conjunto de atributos(ou Propriedades) e métodos(ou funções ou ações)

const db =
  [
    {
      id: 1,
      title: "Concluir App Conexão Arte",
      steps: [
        { step: "Ajustar textos" },
        { step: "Trocar imagens para imagens públicas" },
        { step: "Publicar no Expo" },
        { step: "Publicar no Expo Store Connect" },
      ],
      done: false,
      dueDate: "2022-05-06",
      reminder: "2022-05-02 10:00",
    },

    {
      id: 2,
      title: "Aula 4 Fiap - Avanade",
      steps: [{ step: "Atributos Globais" }, { step: "Estrutura CSS" }],
      done: true,
      dueDate: "2022-05-06",
    },

  ];

getAllTasks(db);

// console.log(db[0].title)
// DOM - Document Object Model - é o JS acessando o HTML e Manipulandos ele.
// HTML ele é compilado pelo navegador em uma arvore de comanddos, chama DOM.


const newTask = document.querySelector("#inputTxtNewTask");

const form = document.querySelector('#addNewTask');

form.addEventListener('submit', (e) => 
{
  e.preventDefault();
});

newTask.addEventListener('keyup', (e) => 
{
  e.preventDefault();
  e.stopPropagation();
  if (e.key == 'Enter') 
  {
    if (!newTask.value) 
    {
      alert("Digite uma nova tarefa");
    }
    else 
    {
      //alert(newTask.value);

      const date = new Date();
      const today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

      // db.push([])
      //   ({
      //     id: Number(db.length) + 1,
      //     title: newTask.value,
      //     done: false,
      //     dueDate: today,
      //   });

      const task = 
      {
        id: Number(db.length) + 1,
        title: newTask.value,
        done: false,
        dueDate: today,
      };
      db.push(task);

      addTask(task, newTask.value);


      //addTask(db, newTask.value);

      // document.querySelector(".tasks").innerHTML='';
      // getAllTasks(db);

      // newTask.value = '';

      console.log(db);
      // console.log(newTask.value);
    }
  }
});
