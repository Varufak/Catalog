let priceList = [
    {id: '0', name: 'Молоко', price: 79},
    {id: '1', name: 'Яйца', price: 49},
    {id: '2', name: 'Хлеб', price: 56},
    {id: '3', name: 'Чебупели', price: 169}
]
let totalPrice = 0;

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    const tableElement = document.querySelector('#catalog');
    for (let productItem of priceList) {
        // Создание ячеек
        const nameCell = document.createElement('td');
        const priceCell = document.createElement('td');
        const buttonsCell = document.createElement('td');
    
        // Заполнение атрибутов ячеек
        nameCell.className = 'product-name';
        priceCell.className = 'product-price';
        buttonsCell.className = 'product-buttons';
        buttonsCell.align = 'center';

        nameCell.innerHTML = productItem.name;
        priceCell.innerHTML = productItem.price;

    
        // Кнопка добавления в корзину
        const addToBasketButton = document.createElement('button');
        addToBasketButton.dataset.id = productItem.id;
        addToBasketButton.innerHTML = '+';
        addToBasketButton.addEventListener('click', addToBasketHandler);
        
        
        // Текст "Добавить в корзину"
        const buttonText = document.createElement('div');
        buttonText.innerHTML = 'Добавить в корзину';
        
        // Добавление кнопок в ячейки для кнопок
        buttonsCell.append(addToBasketButton);
        buttonsCell.append(buttonText);

        // Создание строки
        const newRow = document.createElement('tr');
        newRow.append(nameCell);
        newRow.append(priceCell);
        newRow.append(buttonsCell);

        tableElement.append(newRow);
    }
}

function addToBasketHandler(event) {
    const tableElement = document.querySelector('#basket');

    const button = event.target;
    const itemId = button.dataset.id;
    const product = getProduct(itemId);

    const itemName = product.name;
    const itemPrice = product.price;

    const nameCell = document.createElement('td');
    const priceCell = document.createElement('td');

    nameCell.className = 'product-name';
    priceCell.className = 'product-price';

    nameCell.innerHTML = itemName;
    priceCell.innerHTML = itemPrice;

    const newRow = document.createElement('tr');
    newRow.append(nameCell);
    newRow.append(priceCell);

    tableElement.append(newRow);

    let total = document.querySelector('#total');
    totalPrice += itemPrice;
    total.innerHTML = totalPrice;
}

function getProduct(itemId) {
    let item = priceList.find(element => element.id === itemId);
    return item;
}