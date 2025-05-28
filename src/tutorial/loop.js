// 엘레베이터

// 엘레베이터에 뜨는 층 수와 눌린 버튼의 숫자가 같을 때 5초 정지 후 다시 움직이기
// 정지 이후 버튼 겉 선 다시 검정으로 변하게
// 버튼이 여러 개 눌렀을 때도 생각할 것


let currentFloorDisplay = document.getElementById("currentFloor");

let currentFloor = 1

currentFloorDisplay.textContent = `현재 층: ${currentFloor}`;

for (i = 0; i < 10; i ++) {
    const button = document.createElement("button");
    let clickButton = (button.textContent = i + 1);
    button.style.margin = "5px";
    
    button.addEventListener("click", function () {
        console.log('현재층 : ' + currentFloor);
        console.log('누른 층 : ' + clickButton);
        
        alert(`${clickButton}층 선택`);
        moveToFloor(currentFloor, clickButton);
        currentFloor = clickButton;
    });
    
    function moveToFloor (currentFloor, targetFloor) {
    const interval = setInterval(() => {
        if(currentFloor < targetFloor) {
            currentFloor ++;
            currentFloorDisplay.textContent = `현재 층: ${currentFloor}`;
        } else if (currentFloor > targetFloor) {
            currentFloor --;
            currentFloorDisplay.textContent = `현재 층: ${currentFloor}`;
        } else {
            clearInterval(interval);
            alert(`${targetFloor}층 도착!`);
        };
    }, 1000);
}

    document.getElementById("pushButton").appendChild(button);
}


