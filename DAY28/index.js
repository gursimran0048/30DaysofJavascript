let players = []

function setItems(players = []) {
    const leaderBoard = document.querySelector('.leaderBoard');
    while (leaderBoard.firstChild) {
        leaderBoard.removeChild(leaderBoard.firstChild)
    }
    players.forEach((player) => {
        const item = document.createElement('div');
        item.className = 'item'
        const left = document.createElement('div');
        left.className = 'left'
        const leftName = document.createElement('div');
        leftName.className = 'leftName'
        const name = document.createElement('div');
        name.className = 'name'
        name.textContent = player.fname + ' ' + player.lname;
        const time = document.createElement('div');
        time.className = 'time'
        time.textContent = player.createdAt;

        leftName.appendChild(name)
        leftName.appendChild(time)

        const country = document.createElement('div');
        country.className = 'country'
        country.textContent = player.country;
        const score = document.createElement('div');
        score.className = 'score'
        score.textContent = player.score;

        left.appendChild(leftName)
        left.appendChild(country)
        left.appendChild(score)

        const right = document.createElement('div');
        right.className = 'right'
        const btn1 = document.createElement('button');
        const btn2 = document.createElement('button');
        const btn3 = document.createElement('button');

        btn1.textContent = 'DEL'
        btn2.textContent = '+5'
        btn3.textContent = '-5'
        btn1.style.color = 'red'
        right.appendChild(btn1)
        right.appendChild(btn2)
        right.appendChild(btn3)

        btn1.onclick = () => deleteItem(player.id)
        btn2.onclick = () => addFive(player.id)
        btn3.onclick = () => subFive(player.id)

        item.appendChild(left)
        item.appendChild(right)

        document.querySelector('.leaderBoard').appendChild(item)

    })
}


function addItem(event) {


    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const country = document.getElementById('country').value;
    const score = document.getElementById('score').value;

    if (fname && lname && country && score) {
        document.getElementById('err').style.display = 'none'
        const player = {
            id: Date.now(),
            fname,
            lname,
            country,
            score,
            createdAt: new Date().toDateString()
        }
        players.push(player)
        setItems(players)
        document.getElementById('fname').value = ''
        document.getElementById('lname').value = ''
        document.getElementById('country').value = ''
        document.getElementById('score').value = ''
    } else {
        console.log('All fields are required!!')
        document.getElementById('err').style.display = 'block'
    }

}


function deleteItem(id) {
    players = players.filter((p) => p.id !== id)
    setItems(players)
}

function addFive(id) {
    const index = players.findIndex((p) => p.id === id);
    players[index].score = (parseInt(players[index].score) + 5).toString()
    setItems(players)
}
function subFive(id) {
    const index = players.findIndex((p) => p.id === id);
    players[index].score = (parseInt(players[index].score) - 5).toString()
    setItems(players)
}