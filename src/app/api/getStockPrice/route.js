//1. import area



//2. defination area
async function GET(req){
    //await 
    var searchParams = req.nextUrl.searchParams
    var stockName = searchParams.get('stockName');

    var min,max,stockprice, resData;

    switch(stockName) {
        case 'HDFC':
          // code block
          min = 1500;
          max = 1700;
          stockprice = (Math.random() * (max - min) + min).toFixed(2);
          stockprice = parseFloat(stockprice)
          resData = {
            // stockName:stockName,
            stockName,
            price: stockprice
          } 
          break;
        case 'IDFC':
          // code block
          min = 120;
          max = 130;
          stockprice = (Math.random() * (max - min) + min).toFixed(2);
          stockprice = parseFloat(stockprice)
          resData = {
            // stockName:stockName,
            stockName,
            price: stockprice
          } 
          break;
        case 'ICICI':
          // code block
          min = 900;
          max = 1000;
          stockprice = (Math.random() * (max - min) + min).toFixed(2);
          stockprice = parseFloat(stockprice)
          resData = {
            // stockName:stockName,
            stockName,
            price: stockprice
          } 
          break;
        case 'KOTAK':
          // code block
          min = 1700;
          max = 1800;
          stockprice = (Math.random() * (max - min) + min).toFixed(2);
          stockprice = parseFloat(stockprice)
          resData = {
            // stockName:stockName,
            stockName,
            price: stockprice
          } 
          break;
        case 'ARTEL':
          // code block
          min = 900;
          max = 1000;
          stockprice = (Math.random() * (max - min) + min).toFixed(2);
          stockprice = parseFloat(stockprice)
          resData = {
            // stockName:stockName,
            stockName,
            price: stockprice
          } 
          break;
        default:
          // code block
          resData = {
            price:'invalide stocks'
          } 
      }

    //every function return somehing
    return Response.json(resData);
};

//3. export area
module.exports = {GET:GET}