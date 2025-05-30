// 엘레베이터

// 닫힘버튼 열림버튼
// 올라갈 때는 올라가는 방향만 / 내려갈 때 내겨가는 방향만

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
        
        isMoving = true;
        
        const interval = setInterval(() => {
            const targetFloor = stopClosestFloor();

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
                    const index = pressedFloor.indexOf(targetFloor);
                        if (index > -1) {
                            pressedFloor.splice(index, 1)
                        };
                    isMoving = false;
                    moveToFloor();
                }, 5000);
            };

        }, 2000);
    }
       
    // 누른 버튼들 현재층에서 가까운 순으로 정렬
    function stopClosestFloor() {
        let closest = pressedFloor[0];
        let minDistance = Math.abs(currentFloor - closest);
        for (let floor of pressedFloor) {
            const distance = Math.abs(currentFloor - floor);
            if (distance < minDistance) {
                minDistance = distance;
                closest = floor;
            }
        }
        return closest;
    }