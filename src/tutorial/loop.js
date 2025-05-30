// 엘레베이터

// 닫힘버튼 열림버튼
// 높은 층을 먼저 누르고 낮은 층 눌렀을 때 낮은 층이 아직 안지났으면 해당층에서 먼저 멈추도록

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
            const leftDoor = document.getElementById("opened-left-door");
            const rightDoor = document.getElementById("opened-right-door");

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
                
                leftDoor.classList.remove("close-left");
                rightDoor.classList.remove("close-right");

                leftDoor.classList.add("open-left");
                rightDoor.classList.add("open-right");
                
                console.log("문이 열립니다.");

                setTimeout(() => {
                leftDoor.classList.remove("open-left");
                rightDoor.classList.remove("open-right");

                leftDoor.classList.add("close-left");
                rightDoor.classList.add("close-right");
                
                console.log("문이 닫힙니다.");
                }, 5000);

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

        }, 2000);
    }
       