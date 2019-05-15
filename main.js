const data = {
    customers: {
      Moe: {
        Foo: 0,
        Bar: 0,
        Bazz: 0
      },
      Larry: {
        Foo: 0,
        Bar: 0,
        Bazz: 0
      },
      Curly: {
        Foo: 0,
        Bar: 0,
        Bazz: 0
      }
    },
    prizes: {
      Foo: 1,
      Bar: 3,
      Bazz: 5
    }
  };

const prize = document.getElementById('prizes');
const customer = document.getElementById('customers');
const customerPrize = document.getElementById('customerPrizeData');

const prizeNameArr = [];
const customerNames = [];
const customerPrizeData = [];

function displayPrizeData(){
    for(let key in data.prizes){
        prizeNameArr.push(`<div>${key} ${data.prizes[key]}</div>`);
    }
    return prizeNameArr.join(' ');
}

function displayCustomerNames(){
   for(let key in data.customers){
    customerNames.push(key);
    customerPrizeData.push(data.customers[key]);
   }
   console.log(customerNames, customerPrizeData);
   let toStringLit = customerNames.map(item => `${item}`);
   return toStringLit.join(' ');
}

// function displayCustomerData(){
//     let toStringLit = customerPrizeData.map(item => )
// }

prize.innerHTML = `${displayPrizeData()}`
customer.innerHTML = `${displayCustomerNames()}`
customerPrizeInfo.innerHTML = `${displayCustomerData()}`







  