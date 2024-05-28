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

let increaseamount = 333333334;



function addMoney() {
    money += increaseamount;
    moneyTracker.innerText = "Money: $" + money.toFixed(2); 
}
function subtractMoney(decreaseeAmount) {
    money = money - decreaseeAmount;
    moneyTracker.innerText = "Money: $" + money.toFixed(2);
}
function addEmployee(){
    if(money >= employCost){
        if(employnum >= (warenum*3)){
            alert("You can't hire more employees you dont have enough space.")
        }else{
            subtractMoney(employCost);
            employnum++;
            employCost += 12;
            employTrack.innerText = employnum;
            costempl.innerText = "Cost = " + employCost;
            increaseamount++;
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
            costware.innerText = "Cost = You don't have space.";
        }else{
            subtractMoney(wareCost);
            warenum++; 
            wareCost *= 2; 
            wareTrack.innerText = warenum;
            costware.innerText = "Cost = " + wareCost;
            
        } 
    }
}
function addPublicist(){
    if(money>= publCost){
        subtractMoney(publCost);
        publnum++;
        publCost += 24;
        costpubl.innerText = "Cost = " + publCost;
        publTrack.innerText = publnum;
    }
}
function upEmployee(){
    if(money >= employUpCost){
        if(employnum >= 1){
            subtractMoney(employUpCost);
            employUpNum++;
            employUpCost *=2;
            costupem.innerText = "Cost = " + employUpCost;
            employUpTrack.innerText = employUpNum;
        }else{
            alert("You need employees first")
        }
    }
}

function upPublicist(){
    if(money >= PublUpCost){
        if(publnum >= 1){
            subtractMoney(PublUpCost);
            publUpNum++;
            PublUpCost *=2;
            publUpTrack.innerText = publUpNum;
            costuppb.innerText = "Cost = " + PublUpCost;
            
        }else{
            alert("You need publicists first")
        }
    }
}



function gameLoop(){
    money = money + (0.2 * publnum) + (0.3 * employUpNum) + (0.3 * publUpNum);
    moneyTracker.innerText = "Money: $" + money.toFixed(2);

}

setInterval(gameLoop, 1000)