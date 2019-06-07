const data = {
  customers: {
    Moe: {
      Foo: 2,
      Bar: 3,
      Bazz: 0
    },
    Larry: {
      Foo: 1,
      Bar: 0,
      Bazz: 0
    },
    Curly: {
      Foo: 1,
      Bar: 2,
      Bazz: 3
    }
  },
  prizes: {
    Foo: 1,
    Bar: 3,
    Bazz: 5
  }
};

// Build HTML for "prizes" div from data object

function buildPrizes(){

  const prizeDiv = document.getElementById('prizes');
  let prizeNameArr = Object.keys(data.prizes);
  let prizeCountArr = Object.values(data.prizes);
  let prizeNameAndCountArr = [];

  for(let i=0; i<prizeNameArr.length; i++){
    prizeNameAndCountArr.push(`<div id="prizeName">${prizeNameArr[i]}</div>
                               <div id="prizeCount">${prizeCountArr[i]}</div>`)
  }

  let prizeNameAndCountDiv = prizeNameAndCountArr.map(item => `<div id="prizeAndCount">${item}</div>`);
  prizeDiv.innerHTML = `${prizeNameAndCountDiv.join(' ')}`
  }

  buildPrizes()

// build HTML for "customers" div from data object

const customerDiv = document.getElementById('customers');

function buildCustomers(){

  let names= [];
  let arr2= [];
  let arr3=[];

  for(let key in data.customers){
    names.push(key);
    arr2.push(Object.keys(data.customers[key]));
    arr3.push(Object.values(data.customers[key]));
  }

  const prizesCountsButtonsArr = [];

  // let namesDiv = names.map((item, idx) => `<div id=${idx}>${item}</div>`)
  // customerDiv.innerHTML = `${namesDiv.join(' ')}`
  
  

  for(let i=0;i<arr2.length;i++){
    prizesCountsButtonsArr.push([]);
      for(let j=0;j<arr2.length;j++){
        console.log(arr2[i][j],arr3[i][j]);
        prizesCountsButtonsArr[i].push(`<div id="customerPrizesCounts"><div id = "${names[i]}" class = "names"><div id = //"prizeInfo"><button id="${arr2[i][j]}">+</button><div>${arr2[i][j]}   ${arr3[i][j]}</div><button id=${arr2[i][j]}>-</button></div></div>`)
        
      }
      

      //customerDiv.innerHTML = `${prizesCountsButtonsArr.join(' ')}`
  }

  
    let namesDiv = names.map((item, idx) => `<div>${item}<div>${prizesCountsButtonsArr[idx].join(' ')}</div>`)
      customerDiv.innerHTML = `${namesDiv.join(' ')}`
    

  console.log(prizesCountsButtonsArr);
}


buildCustomers();

// Button functionality

function updatePrizeCount(e){

  if(e.target.innerHTML === "+"){
    let selectedPrize = e.target.id;
    let selectingCustomer = e.target.parentElement.parentElement.id;
    data.customers[selectingCustomer][selectedPrize]+=1;
    data.prizes[selectedPrize]-=1;
    buildPrizes();
    buildCustomers();
  }

  else if(e.target.innerHTML === "-"){
    let selectedPrize = e.target.id;
    let selectingCustomer = e.target.parentElement.parentElement.id;
    console.log(data.customers[selectingCustomer]);
    data.customers[selectingCustomer][selectedPrize]-=1;
    data.prizes[selectedPrize]+=1;
    buildPrizes();
    buildCustomers();
  }
}

customerDiv.addEventListener('click', updatePrizeCount);










  