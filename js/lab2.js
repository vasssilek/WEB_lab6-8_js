let fruitsList = [];

function addFruit(event) {
    if (event.key === "Enter") {
        event.preventDefault();

        let fruitSelect = document.getElementById("fruit_select");
        let fruitPrice = document.getElementById("fruit_price");

        let fruit = fruitSelect.value;
        let price = fruitPrice.value;

        if (!fruit) {
            alert("Оберіть фрукт");
            return;
        }

        if (isNaN(price) || price <= 0) {
            alert("Введіть коректну ціну");
            return;
        }

        // чи фрукт уже існує
        let existingIndex = fruitsList.findIndex(item => item.fruit === fruit);

        if (existingIndex !== -1) {
            // оновлюємо ціну
            fruitsList[existingIndex].price = price;
        } else {
            fruitsList.push({ fruit, price });
        }

        fruitPrice.value = "";

        showFruits();
    }
}

function showFruits() {
    let html = "<h3>Список фруктів та їх вартість:</h3><ul>";

    for (let i = 0; i < fruitsList.length; i++) {
        html += `<li>${fruitsList[i].fruit} — ${fruitsList[i].price} грн</li>`;
    }

    html += "</ul>";

    document.getElementById("result_text").innerHTML = html;
}

document.getElementById("sum_btn").onclick = function () {
    let table = document.getElementById("numbers_table");
    let rows = table.rows;
    let colCount = rows[0].cells.length;

    let sums = new Array(colCount).fill(0);

    // Обчислюємо суму кожного стовпця
    for (let r = 0; r < rows.length; r++) {
        for (let c = 0; c < colCount; c++) {
            sums[c] += Number(rows[r].cells[c].innerText);
        }
    }

    // новий рядок
    let newRow = table.insertRow();

    for (let i = 0; i < colCount; i++) {
        let cell = newRow.insertCell();
        cell.innerText = sums[i];
    }

    this.disabled = true;
    this.innerText = "Зсумовано!";
};
