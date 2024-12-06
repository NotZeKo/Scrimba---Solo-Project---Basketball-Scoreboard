let home = document.getElementById("home")
let guest = document.getElementById("guest")
let homeScore = 0
let guestScore = 0

function score1() {
    homeScore += 1
    home.textContent = homeScore
}

function score2() {
    homeScore += 2
    home.textContent = homeScore
}

function score3() {
    homeScore += 3
    home.textContent = homeScore
}




function guestScore1() {
    guestScore += 1
    guest.textContent = guestScore
}

function guestScore2() {
    guestScore += 2
    guest.textContent = guestScore
}

function guestScore3() {
    guestScore += 3
    guest.textContent = guestScore
}


function reset() {
    Score = 0
    home.textContent = Score
    guest.textContent = Score
}


