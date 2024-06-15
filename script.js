// script.js
function calculate() {
    // Obter valores dos campos de entrada
    var cost = parseFloat(document.getElementById('cost').value);
    var freight = parseFloat(document.getElementById('freight').value);
    var packaging = parseFloat(document.getElementById('packaging').value);
    var salePrice = parseFloat(document.getElementById('sale-price').value);

    // Verificar se os valores são números válidos
    if (isNaN(cost) || isNaN(freight) || isNaN(packaging) || isNaN(salePrice) || cost <= 0 || salePrice <= 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    // Calcular o custo total considerando frete e embalagens
    var totalCost = cost + freight + packaging;

    // Calcular lucro, margem de lucro e markup
    var profit = salePrice - totalCost;
    var profitMargin = (profit / totalCost) * 100;
    var markup = ((salePrice / totalCost) - 1) * 100;

    // Exibir resultados
    document.getElementById('profit').textContent = 'Lucro: R$ ' + profit.toFixed(2);
    document.getElementById('profit-margin').textContent = 'Margem de Lucro: ' + profitMargin.toFixed(2) + '%';
    document.getElementById('markup').textContent = 'Markup: ' + markup.toFixed(2) + '%';
}

