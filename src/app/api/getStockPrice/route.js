//1. import area



//2. defination area
async function GET(){
    //await 

    const min = 124;
    const max = 126;

    var stockprice = (Math.random() * (max - min) + min).toFixed(2);
    
    stockprice = parseFloat(stockprice)

    //every function return somehing
    return Response.json({
        price: stockprice
    });
};

//3. export area
module.exports = {GET:GET}