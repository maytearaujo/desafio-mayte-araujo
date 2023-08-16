class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let item, arr, preco, valorCompra = 0;
        var codigo = [], qtd = [];

        var j = 0;
        for (var i = 0; i < itens.length; i++) {

            item = itens[i];
            arr = item.split(',');

            codigo[i] = arr[j];

            if ((codigo[i] !== 'cafe') && (codigo[i] !== 'chantily') && (codigo[i] !== 'suco') && (codigo[i] !== 'sanduiche') && (codigo[i] !== 'queijo') && (codigo[i] !== 'salgado') && (codigo[i] !== 'combo1') && (codigo[i] !== 'combo2')) {
                return ('Item inválido!')
            }
            qtd[i] = arr[j + 1];

            if (qtd[i] == 0) {
                return ('Quantidade inválida!')
            }
        }

        if (codigo.length === 0) {
            return ('Não há itens no carrinho de compra!');
        } else {
            for (var i = 0; i < codigo.length; i++) {
                if (codigo[i] == 'cafe') {
                    preco = qtd[i] * 3;
                } else {
                    if (codigo[i] == 'chantily') {
                        if (codigo.includes('cafe')) {
                            preco = qtd[i] * 1.5;
                        } else {
                            return ('Item extra não pode ser pedido sem o principal');
                        }
                    } else {
                        if (codigo[i] == 'suco') {
                            preco = qtd[i] * 6.20;
                        } else {
                            if (codigo[i] == 'sanduiche') {
                                preco = qtd[i] * 6.5;
                            } else {
                                if (codigo[i] == 'queijo') {
                                    if (codigo.includes('sanduiche')) {
                                        preco = qtd[i] * 2;
                                    } else {
                                        return ('Item extra não pode ser pedido sem o principal')
                                    }
                                } else {
                                    if (codigo[i] == 'salgado') {
                                        preco = qtd[i] * 7.25;
                                    } else {
                                        if (codigo[i] == 'combo1') {
                                            if ((codigo.includes('cafe')) || (codigo.includes('suco')) || (codigo.includes('sanduiche')) || (codigo.includes('salgado'))) {
                                                preco = qtd[i] * 9.5;
                                            } else {
                                                return ('Item extra não pode ser pedido sem o principal')
                                            }
                                        } else {
                                            if (codigo[i] == 'combo2') {
                                                if ((codigo.includes('cafe')) || (codigo.includes('suco')) || (codigo.includes('sanduiche')) || (codigo.includes('salgado'))) {
                                                    preco = qtd[i] * 7.5;
                                                } else {
                                                    return ('Item extra não pode ser pedido sem o principal')
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                valorCompra = valorCompra + preco;
            }

        }

        if ((metodoDePagamento !== 'dinheiro') && (metodoDePagamento !== 'debito') && (metodoDePagamento !== 'credito')) {
            return ('Forma de pagamento inválida!');
        } else {
            switch (metodoDePagamento) {

                case 'credito': {

                    valorCompra = valorCompra + (valorCompra * 0.03);
                    break;
                }

                case 'dinheiro': {

                    valorCompra = valorCompra - (valorCompra * 0.05);
                    break;
                }
                default: 'erro';
            }

        }
        var valor;
        
        valor = parseFloat(valorCompra.toFixed(2));

        return(valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    }return

}

export { CaixaDaLanchonete };

