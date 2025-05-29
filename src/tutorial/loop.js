// 엘레베이터


// 멈춘 층에서 문 열렸다 닫히게

let currentFloorDisplay = document.getElementById("currentFloor");

let currentFloor = 1

const pressedFloor =[];

let isMoving = false;

// 시작 층
currentFloorDisplay.textContent = `현재 층: ${currentFloor}`;

const pushButton = document.getElementById("pushButton")

for (i = 10; i >= 1; i --) {
    const button = document.createElement("button");
    button.textContent = i;
    button.style.margin = "5px";
    
    document.getElementById("pushButton").appendChild(button);

    button.addEventListener("click", function () {
        console.log('현재층 : ' + currentFloor);
        
        const targetFloor = Number(button.textContent);
        
        if (!pressedFloor.includes(targetFloor)) {
            pressedFloor.push(targetFloor);
            button.style.backgroundColor = "rgb(226, 75, 75)";
            console.log(`${targetFloor}층 선택!`);
            moveToFloor();
        }
    });
}

    function moveToFloor () {
        if (isMoving || pressedFloor.length === 0) {
            return;
        }

        const targetFloor = pressedFloor[0];
        isMoving = true;

        const interval = setInterval(() => {
            if(currentFloor < targetFloor) {
                currentFloor ++;
                currentFloorDisplay.textContent = `현재 층: ${currentFloor}`;
            } else if (currentFloor > targetFloor) {
                currentFloor --;
                currentFloorDisplay.textContent = `현재 층: ${currentFloor}`;
            } 
            
            if (currentFloor === targetFloor) {
                clearInterval(interval);
                
                console.log(`${targetFloor}층 도착!`);
                
                    currentFloorDisplay.textContent = `현재 층: ${currentFloor}`;
                        
                    const buttonsColor = document.querySelectorAll("#pushButton button");
                    buttonsColor.forEach(btn => {
                        if(Number(btn.textContent) === targetFloor) {
                            btn.style.backgroundColor = "";
                        }
                    });
                    
                    setTimeout(() => {
                        pressedFloor.shift();
                        isMoving = false;
                        moveToFloor();
                    }, 5000);
                };

        }, 1000);
    }
       