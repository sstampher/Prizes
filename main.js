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

// Variables
const prizes = document.getElementById('prizes');
const customer = document.getElementById('customers');

// Functions
function displayPrizeNames(){
    let prizeNames = Object.keys(data.prizes);
    let toStringLit = prizeNames.map(item => `<div>${item}</div>`);
    return toStringLit.join(' ');
}

function displayPrizeCounts(){
    let prizeCounts = Object.values(data.prizes);
    let toStringLit = prizeCounts.map(item => `<div>${item}</div>`);
    return toStringLit.join(' ');
}

function displayCustomerNames(){
    let customerNames = Object.keys(data.customers);
    let toStringLit = customerNames.map(item => `<div>${item}</div>`);
    return toStringLit.join(' ');
}

function displayCustomerPrizeInfo(){
    let customerPrizeInfo = Object.values(data.customers);
    let customerPrizeNames = [];
    let customerPrizeCounts = [];
    let namesAndCounts = [];
    let divIds = [];

    customerPrizeInfo.forEach(item => customerPrizeNames.push(Object.keys(item)));
    customerPrizeInfo.forEach(item => customerPrizeCounts.push(Object.values(item)));
    for(let i=0;i<customerPrizeNames.length;i++){
            namesAndCounts.push([]);
            divIds.push([]);
        for(let j=0;j<customerPrizeNames[i].length; j++){
            divIds[i].push(`${customerPrizeNames[i][j]}`)
            namesAndCounts[i].push(`<button>+</button>${customerPrizeNames[i][j]} ${customerPrizeCounts[i][j]}<button>-</button>`);
        }
    }
    console.log(divIds);
    console.log(namesAndCounts);
   
   
    for(let i=0;i<divIds.length; i++){
        let toStringLit = namesAndCounts.map(item => `<div id='${item}'>${item.join(' ')}</div>`);
        return toStringLit.join(' ');
        }

}


prizes.innerHTML = `<div id = 'prizeNames'>${displayPrizeNames()}</div>
                        
                    <div id = 'prizeCounts'>${displayPrizeCounts()}</div><br><br>`

customer.innerHTML = `<div id = 'customerNames'>${displayCustomerNames()}</div><br>

                        <div id = 'customerPrizeInfo'>${displayCustomerPrizeInfo()}</div>`







  