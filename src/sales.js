const sales = [
    { itemSold: 'Football', price: 19.99, dateSold: '2018-04-07', id: 'j_123' },
    { itemSold: 'Trainers', price: 159.95, dateSold: '2018-03-02', id: 't_acds1' },
    { itemSold: 'Cricket bat', price: 204.97, dateSold: '2018-04-05', id: 'j_456' },
    { itemSold: 'Rugby ball', price: 30.00, dateSold: '2017-04-22', id: 't_acds3' },
    { itemSold: 'Hockey stick', price: 54.95, dateSold: '2017-03-19', id: 'j_999' }
]

// 1. Return the sum of the price of all properties as a single value.

// creating totalPrice function 
function totalPrice() {

    // mapping over array to get the prices into an array 
    const priceArray = sales.map(item => {
        const prices = item.price

        return prices
    })
    // reducing the array to produce the total sum of the prices 
    var sum = priceArray.reduce(function (a, b) {
        return a + b;
    }, 0);

    // returning result of the total sum with minimal decimal places    
    return sum.toFixed(2)
}

// 2. Return the items which were sold in 2017.

// creating saleDate function 
function saleDate() {

    // filtering dateSold properties by 2017 date with startsWidth method
    const date = "2017"
    const items = sales.filter(o => o.dateSold.startsWith(date));

    // returning result which shows the two correct items
    return items
}

// 3.  Return an array of all of the itemsSold properties as strings, sorted alphabetically.    

// creating itemsSold function
function itemsSold() {
    // mapping over array to get the items sold into an array     
    const itemArray = sales.map(item => {
        const items = item.itemSold

        return items
    })
    // using the sort method to sort the array alphabetically.
    itemArray.sort();
    return itemArray
}