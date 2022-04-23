let table = document.getElementById('tbody');

export function loadProducts() {
    alert('ola');
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(function (products) {
            products.forEach(function (product) {
                console.log(product);

                let newLine = document.createElement("tr");
                table.appendChild(newLine);
                newLine.appendChild(newColumn(product.id));
                newLine.appendChild(newColumn(product.title));
                newLine.appendChild(newColumn(product.category));
                newLine.appendChild(newColumn(product.price));
            })
        });
}


function newColumn(value) {

    let newColumn = document.createElement("td");
    let span = document.createElement('span');
    span.innerHTML = value;

    newColumn.appendChild(span);

    return newColumn;
}
