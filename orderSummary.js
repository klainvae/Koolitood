var tellimus = { 
    id: 2113, 
    orderNumber: "E210126001", 
    createdAt: "2021-01-26 16:04:24", 
    clientName: "Kalle Tali", 
    deliveryType: "Omniva smartpost", 
    deliveryValue: 178, 
    rows: [ 
      { 
        article_id: 31, 
        name: "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W", 
        product_code: "257549", 
        price: 49.1666666667, 
        amount: 1, 
        vat: 0.2 
      }, 
      { 
        article_id: 23420, 
        name: "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk", 
        product_code: "355836", 
        price: 5.0666666667, 
        amount: 2, 
        vat: 0.2 
      }, 
      { 
        article_id: 23421, 
        name: "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk", 
        product_code: "000000000501267301", 
        price: 5.825, 
        amount: 1, 
        vat: 0.2 
      } 
    ] 
  } 

  const row1 = tellimus.rows[0]
  const row2 = tellimus.rows[1]
  const row3 = tellimus.rows[2]
  const rowDesc1 = ('Name: ' + row1.name + ', amount: ' + row1.amount + ', price: ' + row1.price)
  const rowDesc2 = ('Name: ' + row2.name + ', amount: ' + row2.amount + ', price: ' + row2.price)
  const rowDesc3 = ('Name: ' + row3.name + ', amount: ' + row3.amount + ', price: ' + row3.price)
  const koguSumma = ((tellimus.rows[0].amount * tellimus.rows[0].price + tellimus.rows[1].amount * tellimus.rows[1].price + tellimus.rows[2].amount * tellimus.rows[2].price) * 1.2)
  
  console.log(rowDesc1)
  console.log(rowDesc2)
  console.log(rowDesc3)
  console.log('Kogusumma on: ' + koguSumma)