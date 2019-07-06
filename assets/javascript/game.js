
//Program generates a random number between 19 and 120 to be shown at the start of the game

    var random= Math.floor(Math.random()*101+19)
          console.log("random: " + random); 
  
    // Appending random number to the randomNumber class in the html doc
    $(".randomGenNumber").text(random); 
   
    // Each crystal has a random hidden value between 1 & 12 
    var gemOne= Math.floor(Math.random()*11+1)
    var gemTwo= Math.floor(Math.random()*11+1)
    var gemThree= Math.floor(Math.random()*11+1)
    var gemFour= Math.floor(Math.random()*11+1)
    
  
    //  Decaring variables for counters
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  $(".winCounter").text("Wins: " + wins);
  $(".lossCounter").text("Losses: " + losses);
  
   // resets the game
  
  function reset(){
        random= Math.floor(Math.random()*101+19);
        console.log(random)
        $(".randomGenNumber").text(random);
        gemOne= Math.floor(Math.random()*11+1);
        gemTwo= Math.floor(Math.random()*11+1);
        gemThree= Math.floor(Math.random()*11+1);
        gemFour= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $(".scoreOutput").text(userTotal);
        } 
  
  // Adds the wins to the userTotal
  function yay(){
  alert("You won!");
    wins++; 
    $(".scoreOutput").text(wins);
    reset();
  }
  //Adds the losses to the userTotal
  function loser(){
  alert ("You lose!");
    losses++;
    $('.scoreOutput').text(losses);
    reset()
  }
  //sets up click for jewels & win/lose conditions
  //script determines if player wins or loses and outcome recorded in winsLosses
  


  $('.imageOne').on('click', function(){
    userTotal = userTotal + gemOne;
    console.log("New userTotal= " + userTotal);
    $('.scoreOutput').text(userTotal); 
        if (userTotal == random){
          yay();
        }
        else if ( userTotal > random){
          loser();
        }   
  })  

  $('#imageTwo').on ('click', function(){
    userTotal = userTotal + gemTwo;
    console.log("New userTotal= " + userTotal);
    $('.scoreOutput').text(userTotal); 
        if (userTotal == random){
          yay();
        }
        else if (userTotal > random){
          loser();
        } 
  })  
  $('#imageThree').on ('click', function(){
    userTotal = userTotal + gemThree;
    console.log("New userTotal= " + userTotal);
    $('.scoreOutput').text(userTotal);
          if (userTotal == random){
          yay();
        }
        else if (userTotal > random){
          loser();
        } 
  })  
  $('#imageFour').on ('click', function(){
    userTotal = userTotal + gemFour;
    console.log("New userTotal= " + userTotal);
    $('.scoreOutput').text(userTotal); 
      
          if (userTotal == random){
          yay();
        }
        else if (userTotal > random){
          loser();
        }

    });   
 
  
  
  