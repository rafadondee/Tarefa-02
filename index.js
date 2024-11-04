// Importa o inquirer e o chalk usando a sintaxe ES6
import inquirer from 'inquirer';
import chalk from 'chalk';

// Pergunta o nome e a idade do usuário
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Qual é o seu nome?'
  },
  {
    type: 'input',
    name: 'age',
    message: 'Quantos anos você tem?'
  }
])
.then((answers) => {
  // Formata a resposta com fundo amarelo e texto preto
  console.log(chalk.bgYellow.black(`Nome: ${answers.name}, Idade: ${answers.age}`));
})
.catch((error) => {
  console.error('Erro:', error);
});
