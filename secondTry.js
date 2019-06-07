const data = {
    customers: {
      Moe: {
        Foo: 2,
        Bar: 3,
        Bazz: 3
      },
      Larry: {
        Foo: 5,
        Bar: 3,
        Bazz: 3
      },
      Curly: {
        Foo: 3,
        Bar: 0,
        Bazz: 0
      }
    },
    prizes: {
      Foo: 3,
      Bar: 3,
      Bazz: 3
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

    console.log(arr3);

    const buttonsArr = [];

    for(let i=0;i<arr2.length;i++){
      buttonsArr.push([]);
        for(let j=0;j<arr2.length;j++){
          buttonsArr[i].push(`<div id = "prizeInfo"><button id="${arr2[i][j]}">+</button><button>-</button></div>`)
          console.log(buttonsArr);
        }
    }

    for(let i=0;i<prizesCountsButtonsArr.length;i++){
      let completeDivs = names.map(item => `<div id="customerPrizesCounts"><div id = "${item}" class = "names">${item}${prizesCountsButtonsArr[i].join(' ')}</div></div>`)
      customerDiv.innerHTML = `${completeDivs.join(' ')}`
      console.log(completeDivs);
    }
}

buildCustomers();

// Button functionality

  function updatePrizeCount(e){
    if(e.target.innerHTML === "+"){
      let selectedPrize = e.target.id;
      let selectingCustomer = e.target.parentElement.parentElement.id
      // buildPrizes();
      // buildCustomers();
      console.log(data.customers[selectingCustomer][selectedPrize]);
        --data.prizes[selectedPrize]
        ++data.customers[selectingCustomer][selectedPrize];
         buildPrizes();
      buildCustomers();
    }
  }

  customerDiv.addEventListener('click', updatePrizeCount);

  






  
