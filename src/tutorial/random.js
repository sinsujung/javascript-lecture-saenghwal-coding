const handleClick = () => {
    var randomNumber = [];

    while (randomNumber.length < 6) {
        var num = Math.floor(Math.random() * 45 + 1);
        if(!randomNumber.includes(num)) {
            randomNumber.push(num);
        }
    }

    document.getElementById("result").textContent = randomNumber.join(", ");
}


//includes
//push
