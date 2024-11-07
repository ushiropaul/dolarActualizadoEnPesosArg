const USDtypes = ["oficial", "blue", "cripto", "bolsa", "contadoconliqui", "mayorista", "tarjeta"];
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

function formatDate(fechaISO) {
    const fecha = new Date(fechaISO);
    const opciones = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    return fecha.toLocaleString('es-AR', opciones);
}

function displayValueUSDblue(data, type) {
    const usdCard = document.createElement('div');
    usdCard.classList.add('usd-card'); 
    usdCard.innerHTML = `
        <ul>
            <li><strong>Tipo:</strong> <span>${type}</span></li>
            <li><strong>Moneda:</strong> <span>${data.moneda}</span></li>
            <li><strong>Valor de compra:</strong> <span>$${data.compra} en pesos ARG</span></li>
            <li><strong>Valor promedio:</strong> <span>$${((data.venta + data.compra).toFixed(2) / 2)} en pesos ARG</span></li>
            <li><strong>Valor de venta:</strong> <span>$${data.venta} en pesos ARG</span></li>
            <li><strong>Fecha de actualización:</strong> <span>${formatDate(data.fechaActualizacion)}</span></li>
        </ul>
    `;
    containerCard.appendChild(usdCard);
}
