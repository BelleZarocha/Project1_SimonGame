var pink = new Audio("sound1.wav");
var green = new Audio("sound2.wav");
var yellow = new Audio("sound3.wav");
var blue = new Audio("sound4.wav");
var purple = new Audio("sound5.wav");
var orange = new Audio("sound6.wav");

var simonGame = function() {
  sequence = [];
  playerResponse = [];
  strict = false;

  initiateGame = function() {
    sequence = [];
    playerResponse = [];
    sequence.push(Math.floor(Math.random() * 4) + 1);
    $(".countRound").html("Start Game");
    animate();
    $(".countRound").css("color", "black");
    $("#pink").hover(function() {
      $(this).css("cursor", "pointer");
    });
    $("#green").hover(function() {
      $(this).css("cursor", "pointer");
    });
    $("#yellow").hover(function() {
      $(this).css("cursor", "pointer");
    });
    $("#blue").hover(function() {
      $(this).css("cursor", "pointer");
    });
    $("#purple").hover(function() {
        $(this).css("cursor", "pointer");
    });
    $("#orange").hover(function() {
        $(this).css("cursor", "pointer");
    });
  };
  this.buttonClick = function(button) {
    playerResponse.push(button);
    checkState();
  };
  nextRound = function() {
    playerResponse = [];
    sequence.push(Math.floor(Math.random() * 6) + 1);
    $(".countRound").html("Next Round");
    animate();
  };
  animate = function() {
    i = -1;
    var id = setInterval(frame, 1400);
    function frame() {
      if (i > sequence.length - 1) {
        clearInterval(id);
        $(".countRound").html("Turn " + sequence.length);
      } else {
        setTimeout(function() {
          switch (sequence[i]) {
            case 1:
                $("#pink").addClass("pressed");
                pink.play();
                break;
            case 2:
                $("#green").addClass("pressed");
                green.play();
                break;
            case 3:
                $("#yellow").addClass("pressed");
                yellow.play();
                break;
            case 4:
                $("#blue").addClass("pressed");
                blue.play();
                break;
            case 5:
                $("#purple").addClass("pressed");
                purple.play();
                break;
            case 6:
                $("#orange").addClass("pressed");
                orange.play();
                break;
          }
        }, 500);

        setTimeout(function() {
          $("#pink").removeClass("pressed");
          $("#green").removeClass("pressed");
          $("#yellow").removeClass("pressed");
          $("#blue").removeClass("pressed");
          $("#purple").removeClass("pressed");
          $("#orange").removeClass("pressed");
        }, 800);

        i++;
      }
    }
  };

  this.startbutton = function() {
    initiateGame();
  };
  this.toggleStrict = function() {
    if (strict === true) {
      strict = false;
      $(".toggleStrict").html("Strict Off<br><i class='fa fa-toggle-off'></i>");
    } else {
      strict = true;
      $(".toggleStrict").html("Strict On<br><i class='fa fa-toggle-on'></i>");
    }
  };

  checkState = function() {
    i = this.playerResponse.length - 1;
    if (this.playerResponse[i] == sequence[i]) {
      if (this.playerResponse.length == sequence.length) {
        if (this.playerResponse.length === 10) {
          $(".countRound").html("You Win!");
          // setTimeout(function() {
          //   this.initiateGame();
          // }, 500);
        } else {
          nextRound();
        }
      }
    } else {
      if (strict === true) {
        $(".countRound").html("Game Over");
        setTimeout(function() {
          // this.initiateGame();
        }, 1000);
      } else {
        $(".countRound").html("Try Again");
        playerResponse = [];
        animate();
      }
    }
  };

};



// Start simonGame
var sGame = new simonGame();
$(".start").on("click", function() {
  sGame.startbutton();
  // simonGame.initiateGame()
  // console.log(simonGame.initiateGame)
  $(".playBtn").on("click", function() {
    switch (this.id) {
        case "pink":
            pink.play();
            sGame.buttonClick(1);
        break;
        case "green":
            green.play();
            sGame.buttonClick(2);
        break;
        case "yellow":
            yellow.play();
            sGame.buttonClick(3);
        break;
        case "blue":
            blue.play();
            sGame.buttonClick(4);
        break;
        case "purple":
            purple.play();
            sGame.buttonClick(5);
        break;
        case "orange":
            orange.play();
            sGame.buttonClick(6);
        break;
    
    }
  });
  
});

$(".toggleStrict").on("click", function() {
  sGame.toggleStrict();
});