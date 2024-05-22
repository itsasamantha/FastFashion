let money = 0;
let moneyTracker = document.getElementById("moneyTracker");

let employnum = 0;
let employCost = 10;
let employTrack = document.getElementById("employTrack");
let costempl = document.getElementById("costempl");

let warenum = 1;
let wareCost = 100;
let wareTrack = document.getElementById("wareTrack");
let costware = document.getElementById("costware");

let publnum = 0;
let publCost = 40;
let publTrack = document.getElementById("publTrack");
let costpubl = document.getElementById("costpubl");

let employUpNum = 0;
let employUpCost = 20;
let employUpTrack = document.getElementById("employUpTrack");
let costupem = document.getElementById("costupem");

let publUpNum = 0;
let PublUpCost = 20;
let publUpTrack = document.getElementById("publUpTrack");
let costuppb = document.getElementById("costuppb");

let increaseamount = 20;



function addMoney() {
    money += increaseamount;
    moneyTracker.innerText = "Money: $" + money;
}
function subtractMoney(decreaseeAmount ) {
    money = money - decreaseeAmount;
    moneyTracker.innerText = "Money: $" + money;
}
function addEmployee(){
    if(money >= employCost){
        if(employnum >= warenum*3){
            alert("You can't hire more employees you dont have enough space.")
        }else{
            subtractMoney(employCost);
            employnum++;
            employCost *= 2;
            employTrack.innerText = employnum;
            costempl.innerText = "Cost = " + employCost;
        }
    }
    else{
        alert("You don't have the funds to buy-- hire people.")
    }
}
function addWarehouse(){
    if(money>= wareCost){
        if(warenum >= 10){
            alert("There is no more space to expand :(")
        }else{
            subtractMoney(wareCost);
            warenum++; 
            wareCost *= 3; 
            wareTrack.innerText = warenum;
            costware.innerText = "Cost = " + wareCost;
        }
    }
}
function addPublicist(){

}
function upEmployee(){

}
function upPublicist(){

}