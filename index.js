const USDtypes = ["oficial", "blue", "cripto", "bolsa" ,"contadoconliqui", "mayorista", "tarjeta"];

const containerCard = document.getElementById("containerCard");


USDtypes.forEach(type => {
    fetch(`https://dolarapi.com/v1/dolares/${type}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayValueUSDblue(data, type); 
        })
        .catch(error => console.error('Error fetching data:', error));
});


function displayValueUSDblue(data, type) {
    const usdCard = document.createElement('div');
    usdCard.classList.add('usd-card'); 
    usdCard.innerHTML = `
        <ul>
            <li><strong>Tipo:</strong> <span>${type}</span></li>
            <li><strong>Moneda:</strong> <span>${data.moneda} ${data.casa}</span></li>
            <li><strong>Valor de compra:</strong> <span>$${data.compra} en pesos ARG</span></li>
            <li><strong>Valor promedio:</strong> <span>$${((data.venta + data.compra).toFixed(2) / 2)} en pesos ARG</span></li>
            <li><strong>Valor de venta:</strong> <span>$${data.venta} en pesos ARG</span></li>
            <li><strong>Fecha de actualización:</strong> <span>${data.fechaActualizacion}</span></li>
        </ul>
    `;
    containerCard.appendChild(usdCard);
}

