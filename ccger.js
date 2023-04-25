const readline = require('readline-sync');

// Função que gera um número de cartão de crédito válido
function gerarNumeroCartaoCredito() {
    // Inicializando variáveis
    let numeroCartao;
    let dataValidade;
    let codigoSeguranca;
    let nomeBanco;

    // Objeto que mapeia a bandeira à instituição financeira correspondente
    const bancos = {
        'Visa': 'Banco do Brasil',
        'Mastercard': 'Itaú',
        'American Express': 'Santander',
        'Elo': 'Bradesco',
        'Diners Club': 'Banco Inter',
        'Discover': 'Caixa Econômica Federal'
    };

    // Selecionando uma bandeira aleatória
    const bandeiras = Object.keys(bancos);
    const bandeira = bandeiras[Math.floor(Math.random() * bandeiras.length)];

    // Definindo o número de dígitos de acordo com a bandeira
    switch (bandeira) {
        case 'Visa':
            numeroCartao = Math.floor(Math.random() * 9999999999999999 + 1000000000000000);
            break;
        case 'Mastercard':
            numeroCartao = Math.floor(Math.random() * 9999999999999999 + 1000000000000000);
            break;
        case 'American Express':
            numeroCartao = Math.floor(Math.random() * 99999999999999 + 10000000000000);
            break;
        case 'Elo':
            numeroCartao = Math.floor(Math.random() * 9999999999999999 + 1000000000000000);
            break;
        case 'Diners Club':
            numeroCartao = Math.floor(Math.random() * 999999999999999 + 100000000000000);
            break;
        case 'Discover':
            numeroCartao = Math.floor(Math.random() * 9999999999999999 + 1000000000000000);
            break;
    }

    // Obtendo o nome do banco a partir da bandeira
    nomeBanco = bancos[bandeira];

    // Gerando a data de validade aleatória
    let dataAtual = new Date();
    let anoValidade = Math.floor(Math.random() * (2030 - dataAtual.getFullYear()) + dataAtual.getFullYear());
    let mesValidade = Math.floor(Math.random() * 12) + 1;
    if (mesValidade < 10) {
        mesValidade = `0${mesValidade}`;
    }
    dataValidade = `${mesValidade}/${String(anoValidade).slice(2)}`;

    // Gerando o código de segurança aleatório
    codigoSeguranca = Math.floor(Math.random() * 999 + 100);

    // Retornando os dados gerados
    return {
        numeroCartao,
        dataValidade,
        codigoSeguranca,
        nomeBanco
    };
}

// Função que exibe o menu e processa a escolha do usuário
function exibirMenu() {
    // Exibindo o menu
    let ascii = (`

    \u001b[33m     _________________________________________________
        /   $ ITAU BLACK $                                |
        |                                                 |
        |                                   MASTERCARD    |
        |                                                 |
        |                                                 |
        |     ___                                         |
        |     |__|                                        |            by: diwalker
        |                                                 |                     
        |                                                 |
        |                                                 |
        |      DIEGO PEREIRA                              |
        |     8123 0919 9524 9973                         |
        |                   07/26                         |
        |_________________________________________________/    
       \u001b[0m
     
  `)
    console.log(`${ascii}`)
    console.log('\u001b[31m[1]\u001b[0m Gerar novo cartão');
    console.log('\u001b[31m[2]\u001b[0m Sair');

// Processando a escolha do usuário
while (true) {
    const opcao = readline.question('Escolha uma opcao: ');
    switch (opcao) {
        case '1':
            const cartao = gerarNumeroCartaoCredito();
            console.log(`\u001b[36mNúmero do cartão:\u001b[0m ${cartao.numeroCartao}`);
            console.log(`\u001b[36mValidade:\u001b[0m ${cartao.dataValidade}`);
            console.log(`\u001b[36mCVV:\u001b[0m ${cartao.codigoSeguranca}`);
            console.log(`\u001b[36mBanco:\u001b[0m ${cartao.nomeBanco}\n`);
            break;
        case '2':
            console.log('Saindo...');
            return;
        default:
            console.log('Opção inválida, tente novamente.');
            break;
    }
}}

exibirMenu()