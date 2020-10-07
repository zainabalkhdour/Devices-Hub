const table=document.getElementById('devices-table');

//object constractor 


Divce.all=[];
function Divce (name,quantity,category){
    randomPrice();
    this.name=name;
    this.quantity=quantity;
    this.category=category;
    this.price=[];
    this.tprice=0;
    Divce.all.push(this);

 }

//
function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function randomPrice(){
    let price=randomNumber(350,750);
    Divce.price.push(price);
}

let form=document.getElementById('form');
form.addEventListener('submit',submitHandler);

function submitHandler (event){
  event.prevetDefault();

  let name =event.target.name.value;
  let category= event.target.category.value;
  let quantity=event.target.deviceList.value;

  new Divce(name,quantity,category);

  
}



//table header /body /footer

function headerRender(){
let headerRow=document.createElement('tr');
table.appendChild(headerRow);

let firstCol=document.createElement('th');
headerRow.appendChild(firstCol);
firstCol.textContent='divce name';

let secCol=document.createElement('th');
headerRow.appendChild(secCol);
secCol.textContent='quantity';

let thirCol=document.createElement('th');
headerRow.appendChild(thirCol);
thirCol.textContent='price';

let fourtCol=document.createElement('th');
headerRow.appendChild(fourtCol);
fourtCol.textContent='category';



}

function bodyRender(){
    let tprice=0
    for(let i=0 ; i<Divce.all.length[i];i++){
        let bodyRow=document.createElement('tr');
        table.appendChild(bodyRow);

        let name=document.createElement('td');
        bodyRow.appendChild(name);
        name.textContent=Divce.all.name[i];

        let quantity=document.createElement('td');
        bodyRow.appendChild(quantity);
        quantity.textContent=Divce.all.quantity[i];

        let price=document.createElement('td');
        bodyRow.appendChild(price);
        price.textContent=Divce.all.price[i];

        let category=document.createElement('td');
        bodyRow.appendChild(category);
        category.textContent=Divce.all.category[i];

         tprice += Divce.all.price[i];

        
    }
    Divce.tprice= tprice;

    let h5=document.getElementById('total');
    let total=document.createElement('tr');
    table.appendChild(total);
    let totalcell= document.createElement('td');
    total.appendChild(totalcell);
        totalcell.textContent=Divce.tprice;
}


function tableRender (){
headerRender();
bodyRender();


}
tableRender();
