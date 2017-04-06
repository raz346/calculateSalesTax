var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(companyData, taxRates) {
  var output ={};
    for (var i = 0; i < companyData.length; i++) {
      var allSales = companyData[i].sales.reduce(add, 0);
        function add(a,b) {
        return a+b;
        }
      var name = companyData[i].name;
    if (name in output){
          output[name]["totalSales"] += allSales
          var province = companyData[i].province
      for ( var provanceCode in taxRates){
        var rate = taxRates[provanceCode];
          if (province === provanceCode) {
            output[name]["totalTaxes"] += allSales * rate
          }
        }
    }

    else {
      output[name] = {};
      output[name]["totalSales"] = allSales
      var province = companyData[i].province
    for ( var provanceCode in taxRates){
        var rate = taxRates[provanceCode];
          if (province === provanceCode) {
            output[name]["totalTaxes"] = allSales * rate
          }
        }
    }

  }
  console.log(output)
}

calculateSalesTax(companySalesData, salesTaxRates)



