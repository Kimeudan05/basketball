let homeScore = 0;
let awayScore = 0;

function addPoints(team, points) {
  if (team === "home") {
    homeScore += points;
    document.querySelector("#home").textContent = homeScore;
  } else if (team === "away") {
    awayScore += points;
    document.querySelector("#away").textContent = awayScore;
  }
}

function reset() {
  homeScore = 0;
  awayScore = 0;
  document.querySelector("#home").textContent = homeScore;
  document.querySelector("#away").textContent = awayScore;
}
