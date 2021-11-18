# Convert-Coin
## 🚀 O projeto

<img src="https://raw.githubusercontent.com/vitorrsousaa/Convert-Coin/main/ConvertCoin%20-%20Logo.png" alt="logo-convert-coin"/> 

<p>
  O objetivo deste projeto é construir um conversor de criptomoedas, que consome uma API e converte as criptomoedas em tempo real.

Coloquei como objetivo do projeto realizar a construção sem utilizar nenhum button para realizar a conversão. A conversão tem que ser feita automaticamente conforme o usuário seleciona os dados do conversor. Fazendo com que o conversor seja dinâmico para o usuário e totalmente autentico.<br>
  
  Todo o game foi construido dentro de um objeto, e decidi explorar muito bem os escopos de cada ambiente e variável. Afim de construir um aprendizado muito grande com relação aos escopos globais e locais.
  </p>

## 📫 Contribuindo para Convert-Coin
1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 📝 Documentário das funções

### Version 1.0
<p> 
url:
  - Recebe como parametro o ticker da criptomoeda que queremos requisitar, e retorna a url pronta para a requisição;
  
request:
  - Recebe a url que queremos requisitar como parametro;
  - Faz a requisição,  obtém os dados que precisamos para realizar a conversão, e converter para um número decimal. Afim de que seja possível realizar a conversão;
  
getOption;
  - Retorna o value que foi selecionado na box que o usuário escolhe a criptomoeda que ele deseja realizar a conversão;
  
setOption:
  - Recebe como parametro um box de option;
  - Confere se o valor da box é diferente de vazio, se for, atualiza a chave da option que esta dentro do objeto com o valor que esta setado na box;
  
addEventText;
  - Adiciona um eventListener do tipo keyup na box text;
  - Para cada tecla pressionada pelo usuário, a function vai verificar se o valor digitado é igual ao anterior, caso não seja, vai atualizar uma chave do objeto com o valor escrito pelo usuário na box;
  
printResult:
  - Atualiza a box do resultado da conversão;
  
convert:
  - Utiliza todas as function anteriores para realizar a conversão da criptomoeda; </p>

</p>
