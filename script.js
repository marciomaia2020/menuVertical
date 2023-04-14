window.alert("Márcio Fernanando Maia");



//JavaScript é a linguagem de programação mais popular do mundo.
//JavaScript é a linguagem de programação da Web.
//JavaScript é fácil de aprender.
//Este tutorial ensinará JavaScript do básico ao avançado.

//Exemplo adicione no HTML o código abaixo

/*<button type="button"onclick="document.getElementById('demo').innerHTML = Date()">
Clique em mim para ver eu funcionando</button>*/


/*
Por que estudar JavaScript?
JavaScript é uma das 3 linguagens que todos os desenvolvedores web devem aprender:
   1. HTML para definir o conteúdo das páginas da web
   2. CSS para especificar o layout das páginas da web
   3. JavaScript para programar o comportamento das páginas da web
*/


/*
O JavaScript pode "exibir" dados de diferentes maneiras:

Gravando em um elemento HTML, usando .innerHTML
Gravando na saída HTML usando o .document.write()
Gravando em uma caixa de alerta, usando o .window.alert()
Gravando no console do navegador, usando o .console.log()
Gravando o comando para impressão, usando o window.print()
*/



/*
Para acessar um elemento HTML, o JavaScript pode usar o método. document.getElementById(id)
O atributo define o elemento HTML. A propriedade define o conteúdo HTML:idinnerHTML */
/*ADICIONE UM DEMO NO HTML e habilite o código abaixo
document.getElementById("demo").innerHTML = 5 + 6; */





/*
Para fins de teste, é conveniente usar:document.write() */
/*O uso de document.write() depois que um documento HTML for carregado, excluirá todo o HTML:*/
/*document.write(5 + 6);*/
/*O método document.write() só deve ser usado para teste.*/
/*Pode ser usado como um botão no HTML*/
/* <button type="button" onclick="document.write(5 + 6)">Tente isso...</button> */



/*
window.alert(5 + 6);/*
Você pode pular a palavra-chave.window
Em JavaScript, o objeto window é o objeto de escopo global. 
Isso significa que variáveis, propriedades e métodos, por padrão, pertencem ao objeto window. 
Isso também significa que especificar a palavra-chave é opcional:window*/
/*alert(5 + 6);*/



/*
F12 no teclado ativará a depuração.
Em seguida, selecione "Console" no menu do depurador.
Em seguida, clique em Executar novamente.*/
/*console.log(5 + 6);*/



/*
Impressão JavaScript
JavaScript não tem nenhum objeto de impressão ou métodos de impressão.
Não é possível acessar dispositivos de saída a partir do JavaScript.
A única exceção é que você pode chamar o método em o navegador para imprimir o conteúdo da janela atual.window.print()
*/
/*Adicione o código para impressão no HTML
<button onclick="window.print()">Imprima esta página</button>
*/


/*
JavaScript Variables

4 maneiras de declarar uma variável JavaScript:
Usando var
Usando let
Usando const
Usando nada

O que são Variáveis?
As variáveis ​​são contêineres para armazenar dados (armazenar valores de dados).

Neste exemplo, x, ye z, são variáveis, declaradas com a varpalavra-chave:

Exemplo
var x = 5;
var y = 6;
var z = x + y;

Vamos usar a conlole para mostar os valores...
ou pode ser usado tbm o 
document.getElementById("demo").innerHTML = "The value of z is: " + z; (não esqueçendo de colocar o ) <p id="demo"></p> no html

Neste exemplo, x, ye z, são variáveis, declaradas com a letpalavra-chave:
let x = 5;
let y = 6;
let z = x + y;

Neste exemplo, x, y, e z, são variáveis ​​não declaradas:
x = 5;
y = 6;
z = x + y;


De todos os exemplos acima, você pode adivinhar:

x armazena o valor 5
y armazena o valor 6
z armazena o valor 11

Quando usar JavaScript var?
Sempre declare variáveis ​​JavaScript com var, letou const.
A varpalavra-chave é usada em todo o código JavaScript de 1995 a 2015.
As palavras-chave lete constforam adicionadas ao JavaScript em 2015.
Se você deseja que seu código seja executado em navegadores mais antigos, você deve usar var.


Quando usar JavaScript const?
Se você quer uma regra geral: sempre declare variáveis ​​com const.
Se você acha que o valor da variável pode mudar, use let.
Neste exemplo, preco1, preco2, e total, são variáveis:

Exemplo
const preco1 = 5;
const preco2 = 6;
let total = preco1 + preco2;

As duas variáveis preco1 ​​e preco2 são declaradas com a const (((palavra-chave)).
Estes são valores constantes e não podem ser alterados.
A variável totalé declarada com a let palavra-chave.
Este é um valor que pode ser alterado.

..Assim como álgebra continua... (https://www.w3schools.com/js/js_variables.asp)






//Fonte: (https://www.w3schools.com/js/default.asp)


/* CODIGO PARA O EXERCÍCIO - 
<h2>Meu segundo código em JavaScript</h2>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Clique aqui par aparecer a hora atual</button>

<p id="demo"></p>
*/


/*
Aula dia 20-04
G:\Meu Drive\Escolas\CelioRodriguesAlves\SegundoAnoTI\Preparação para aula dia 20-04
Seguir ordem 
a)
b)
c)
Reforçar Fork, E Pull Requeste
Explicar usando TV
Exercícios
*/

