function rpsls(pl1,pl2){
  if ((pl1 === "scissors") && ((pl2 === "paper") || (pl2 === "lizard"))){
    return "Player 1 Won!"
  }
  
  else if ((pl1 === "paper") && ((pl2 === "rock") || (pl2 === "spock"))){
    return "Player 1 Won!"
    }
  
  else if ((pl1 === "rock") && ((pl2 === "lizard") || (pl2 === "scissors"))){
    return "Player 1 Won!"
    }
  
  else if ((pl1 === "lizard") && ((pl2 === "spock") || (pl2 === "paper"))){
    return "Player 1 Won!"
    }
  
  else if ((pl1 === "spock") && ((pl2 === "rock") || (pl2 === "scissors"))){
    return "Player 1 Won!"
    }
  
  else if ((pl1 === "spock") && (pl2 === "spock")){
    return "Draw!"
    }
  
  else if ((pl1 === "rock") && (pl2 === "rock")){
    return "Draw!"
    }
  
  else if ((pl1 === "scissors") && (pl2 === "scissors")){
    return "Draw!"
    }
  
  else if ((pl1 === "lizard") && (pl2 === "lizard")){
    return "Draw!"
    }
  
  else if ((pl1 === "paper") && (pl2 === "paper")){
    return "Draw!"
    }
  
  else return "Player 2 Won!"
}
