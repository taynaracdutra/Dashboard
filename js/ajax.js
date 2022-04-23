let content = document.getElementById('ajax-content');





function newColumn(value) {

    let newColumn = document.createElement("td");
    let span = document.createElement('span');
    span.innerHTML = value;

    newColumn.appendChild(span);

    return newColumn;
}

function newColumnBtn(value) {

    let newColumn = document.createElement("td");
    let span = document.createElement('span');
    let btn_edit = document.createElement('button');
    span.className = "material-icons-outlined btn-control";
    span.innerHTML = value;

    btn_edit.appendChild(span);
    newColumn.appendChild(btn_edit);

    return newColumn;
}

function fetchContent(el) {

    let view = el.getAttribute('a-view');
    let folder = el.getAttribute('a-folder');
    fetch(`/ajax/${folder}/${view}.html`).then(response => {
        let html = response.text();
        return html
    }).then(
        html => {
            content.innerHTML = html;

            /* ------- */

            let filterSelect = document.getElementById('select-filter');
            fetch('https://fakestoreapi.com/products/categories')
                .then(res => res.json())
                .then(function (categories) {
                    categories.forEach(function (category) {
                        let newOption = new Option(category, category);
                        filterSelect.add(newOption, undefined);

                    })
                });

            /* ------- */

            let table = document.getElementById('tbody');
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(function (products) {
                    products.forEach(function (product) {

                        let newLine = document.createElement("tr");
                        table.appendChild(newLine);
                        newLine.appendChild(newColumn(product.id));
                        newLine.appendChild(newColumn(product.title));
                        newLine.appendChild(newColumn(product.category));
                        newLine.appendChild(newColumn(product.price));
                        newLine.appendChild(newColumnBtn("edit"));
                        newLine.appendChild(newColumnBtn("delete"));
                    })
                });
        }
    )
}


