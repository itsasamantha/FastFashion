let bgMusic = new Howl({
    src:["townMusic.mp3"],
    autoplay: true,
    volume: .15,
    loop: true
})



let money = 0.00;
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

let increaseamount = 30;



function addMoney() {
    money += increaseamount;
    moneyTracker.innerText = "Money: $" + money.toFixed(2); 
}
function subtractMoney(decreaseeAmount) {
    money = money - decreaseeAmount;
    moneyTracker.innerText = "Money: $" + money.toFixed(2);
}
function addEmployee(){
    employCost = employCost + employnum ** 2;
    if(money >= employCost){
        if(employnum >= (warenum * 4)){
            alert("You can't hire more employees you dont have enough space.")
        }else{
            subtractMoney(employCost);
            employnum++;
            employCost = employCost + employnum**2;
            employTrack.innerText = employnum;
            costempl.innerText = "Cost = " + employCost.toFixed(0);
            increaseamount++;
        }
    }

}
function addWarehouse(){
    if(money>= wareCost){
        if(warenum >= 20){
            alert("There is no more space to expand :(")
            costware.innerText = "You don't have space.";
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
    if(money >= publCost){
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
    money = money + (0.2 * publnum) + (0.4 * employUpNum) + (0.4 * publUpNum);
    moneyTracker.innerText = "Money: $" + money.toFixed(2);
    if(money < employCost){
        document.getElementById("hireE").disabled = true;
    }else{
        document.getElementById("hireE").disabled = false;
    }

    if(money < wareCost){
        document.getElementById("addW").disabled = true;
    }else{
        document.getElementById("addW").disabled = false;
    }

    if(money < publCost){
        document.getElementById("hireP").disabled = true;
    }else{
        document.getElementById("hireP").disabled = false;
    }

    if(money < employUpCost){
        document.getElementById("upgradeE").disabled = true;
    }else{
        document.getElementById("upgradeE").disabled = false;
    }

    if(money < PublUpCost){
        document.getElementById("upgradeP").disabled = true;
    }else{
        document.getElementById("upgradeP").disabled = false;
    }

}

setInterval(gameLoop, 1000)