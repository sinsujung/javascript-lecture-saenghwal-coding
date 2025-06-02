// 엘레베이터

// 닫힘버튼 열림버튼
    // 해당 버튼 클릭 시 바로 문이 열리고 닫히게
// 도형 뒤에 이미지 넣어서 층마다 다른 캐릭터 보여지게

let currentFloorDisplay = document.getElementById("currentFloor");

let currentFloor = 1

let direction = null;

let isMoving = false;

const pressedFloor =[];

const openedButton = document.getElementById("open-button");
const closedButton = document.getElementById("close-button");

closedButton.addEventListener("click", function() {
    console.log("문이 닫힙니다.");

    closedButton.style.backgroundColor = "rgb(226, 75, 75)";
});

// 시작 층
currentFloorDisplay.textContent = `${currentFloor}`;

const pushButton = document.getElementById("pushButton");

for (i = 10; i >= 1; i --) {
    const button = document.createElement("button");
    button.textContent = i;
    button.style.margin = "5px";
    
    document.getElementById("pushButton").appendChild(button);
    
    button.addEventListener("click", function () {
        console.log('현재층 : '+ currentFloor);
        
        const targetFloor = Number(button.textContent);
        
        if (direction === "up" && targetFloor < currentFloor) {
            console.log("올라가는 중에는 아랫방향으로 이동할 수 없습니다.")
            return;
        }
        
        if (direction === "down" && targetFloor > currentFloor) {
            console.log("내려가는 중에는 윗 방향으로 이동할 수 없습니다.")
            return;
        }
        
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

        openedButton.addEventListener("mousedown", function() {
        openDoor();
        });

    function openDoor() {
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
    };
        
        if(currentFloor < targetFloor) {
            direction = "up";
            currentFloor ++;
            currentFloorDisplay.textContent = `${currentFloor}`;
        } else if (currentFloor > targetFloor) {
            direction = "down";
            currentFloor --;
            currentFloorDisplay.textContent = `${currentFloor}`;
        } 
        
        if (currentFloor === targetFloor) {
            clearInterval(interval);
            
            console.log(`${targetFloor}층 도착!`);
            
            openDoor();

            currentFloorDisplay.textContent = `${currentFloor}`;
            
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
                        direction = null;
                        isMoving = false;
                        moveToFloor();
                }, 5000);
            };
        }, 2000);
    }

    // 누른 버튼들 현재층에서 가까운 순으로 정렬
    function stopClosestFloor() {
        const directionFloors = pressedFloor.filter(floor =>
            direction === "up" ? floor > currentFloor:
            direction === "down" ? floor < currentFloor : true
        );
        if (directionFloors.length === 0) {
            direction = null;
        }
        let closest = directionFloors[0];
        let minDistance = Math.abs(currentFloor - closest);
        for (let floor of directionFloors) {
            const distance = Math.abs(currentFloor - floor);
            if (distance < minDistance) {
                minDistance = distance;
                closest = floor;
            }
        }
        return closest;
    }