const sales = require('../sales/sales')

// Declaring the sales array here as a way to show it on the test file, rather than importing.
const array = [
    { itemSold: 'Football', price: 19.99, dateSold: '2018-04-07', id: 'j_123' },
    { itemSold: 'Trainers', price: 159.95, dateSold: '2018-03-02', id: 't_acds1' },
    { itemSold: 'Cricket bat', price: 204.97, dateSold: '2018-04-05', id: 'j_456' },
    { itemSold: 'Rugby ball', price: 30.00, dateSold: '2017-04-22', id: 't_acds3' },
    { itemSold: 'Hockey stick', price: 54.95, dateSold: '2017-03-19', id: 'j_999' }
]

// Testing to check if totalPrice function works correctly.
test('totalPrice returns total prices', () => {
    expect(sales.totalPrice(array)).toBe("469.86")
})

// Testing to check saleDate function works correctly.
test('saleDate returns items sold in 2017', () => {
    const expected = [
     { "dateSold": "2017-04-22", "id": "t_acds3", "itemSold": "Rugby ball", "price": 30 }, 
     { "dateSold": "2017-03-19", "id": "j_999", "itemSold": "Hockey stick", "price": 54.95}
     ]
    expect(sales.saleDate(array)).toStrictEqual(expected)
})

// Testing to check if itemsSold function works correctly
test('itemsSold return items sold as an array', () => {
    const expected = [
        "Cricket bat", "Football", "Hockey stick", "Rugby ball", "Trainers"
        ]
    expect(sales.itemsSold(array)).toStrictEqual(expected)
})

// Testing to check if findSaleById function works correctly
test('findSaleById returns the sale from the id', () => {

    // Declaring value and id as arguments
    const value = 'j_999'
    const id = 'id'
    const expected = {
        "dateSold": "2017-03-19", "id": "j_999", "itemSold": "Hockey stick", "price": 54.95
        }

    // Declaring an const using the above arguments in the findSaleById function 
    const actual = sales.findSaleById(array, id, value)
    expect(actual).toStrictEqual(expected)
})

