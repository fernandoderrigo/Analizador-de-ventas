const salesData = [
  { date: "2024-03-01", product: "Laptop", amount: 1200, salesperson: "Alice" },
  { date: "2024-03-02", product: "Phone", amount: 800, salesperson: "Bob" },
  { date: "2024-03-02", product: "Laptop", amount: 1200, salesperson: "Alice" },
  { date: "2024-03-03", product: "Tablet", amount: 500, salesperson: "Charlie" },
  { date: "2024-03-04", product: "Phone", amount: 800, salesperson: "Bob" },
  { date: "2024-03-05", product: "Laptop", amount: 1200, salesperson: "Alice" }
];


const getProductSales = (data) => {
  return data.reduce((acc, sale) => {
    acc[sale.product] = (acc[sale.product] || 0) + sale.amount;
    return acc;
  }, {});
};


const getProductSalesCount = (data) => {
  return data.reduce((acc, sale) => {
    acc[sale.product] = (acc[sale.product] || 0) + 1;
    return acc;
  }, {});
};

const getSalespersonSales = (data) => {
  return data.reduce((acc, sale) => {
    acc[sale.salesperson] = (acc[sale.salesperson] || 0) + sale.amount;
    return acc;
  }, {});
};

// producto mas vendido
const getMostSoldProduct = (data) => {
  const productSalesCount = getProductSalesCount(data);
  const mostSold = Object.entries(productSalesCount).sort((a, b) => b[1] - a[1])[0];
  return `${mostSold[0]} (cantidad: ${mostSold[1]})`;
};

// producto menos vendido
const getLeastSoldProduct = (data) => {
  const productSalesCount = getProductSalesCount(data);
  const leastSold = Object.entries(productSalesCount).sort((a, b) => a[1] - b[1])[0];
  return `${leastSold[0]} (cantidad: ${leastSold[1]})`;
};

// mayor ventas
const getTopSalesperson = (data) => {
  const salespersonSales = getSalespersonSales(data);
  const topSalesperson = Object.entries(salespersonSales).sort((a, b) => b[1] - a[1])[0];
  return `${topSalesperson[0]} (monto: $${topSalesperson[1]})`;
};

// menor ventas
const getLeastSalesperson = (data) => {
  const salespersonSales = getSalespersonSales(data);
  const leastSalesperson = Object.entries(salespersonSales).sort((a, b) => a[1] - b[1])[0];
  return `${leastSalesperson[0]} (monto: $${leastSalesperson[1]})`;
};

// producto mas caro
const getMostExpensiveProduct = (data) => {
  const mostExpensive = data.sort((a, b) => b.amount - a.amount)[0];
  return `${mostExpensive.product} (precio: $${mostExpensive.amount})`;
};

// producto mas barato
const getCheapestProduct = (data) => {
  const cheapest = data.sort((a, b) => a.amount - b.amount)[0];
  return `${cheapest.product} (precio: $${cheapest.amount})`;
};


const updateResult = () => {
  const analysisType = document.getElementById('analysisType').value;
  const resultElement = document.getElementById('resultado');
  let result = '';

  switch (analysisType) {
    case 'mostSoldProduct':
      result = `El producto más vendido es: ${getMostSoldProduct(salesData)}`;
      break;
    case 'leastSoldProduct':
      result = `El producto menos vendido es: ${getLeastSoldProduct(salesData)}`;
      break;
    case 'topSalesperson':
      result = `El vendedor que más vendió es: ${getTopSalesperson(salesData)}`;
      break;
    case 'leastSalesperson':
      result = `El vendedor que menos vendió es: ${getLeastSalesperson(salesData)}`;
      break;
    case 'mostExpensiveProduct':
      result = `El producto más caro vendido es: ${getMostExpensiveProduct(salesData)}`;
      break;
    case 'cheapestProduct':
      result = `El producto más barato vendido es: ${getCheapestProduct(salesData)}`;
      break;
    default:
      result = 'Selecciona una opción válida.';
  }

  resultElement.textContent = result;
};

document.getElementById('analysisType').addEventListener('change', updateResult);
