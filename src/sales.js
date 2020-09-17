const sales = [
    { itemSold: 'Football', price: 19.99, dateSold: '2018-04-07', id: 'j_123' },
    { itemSold: 'Trainers', price: 159.95, dateSold: '2018-03-02', id: 't_acds1' },
    { itemSold: 'Cricket bat', price: 204.97, dateSold: '2018-04-05', id: 'j_456'},
    { itemSold: 'Rugby ball', price: 30.00, dateSold: '2017-04-22', id: 't_acds3' },
    { itemSold: 'Hockey stick', price: 54.95, dateSold: '2017-03-19', id: 'j_999' }
    ]
    
    /* creating totalPrice function */
    function totalPrice() {

    /* mapping over array to get the prices into an array */
    const priceArray = sales.map(item => {
        const prices = item.price  
        
        return prices
    })
    /* reducing the array to produce the total sum of the prices */
        var sum = priceArray.reduce(function(a, b){
            return a + b;
        }, 0);
    
    return sum.toFixed(2)
    }