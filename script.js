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
document.getElementById("demo").innerHTML = 5 + 6; 
*/




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