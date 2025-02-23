let player = 1;
let score1 = 0;
let score2 = 0;

      const gridBoxArray = document.querySelectorAll(".js-grid-box");

      gridBoxArray.forEach((gridBox) => {
        gridBox.addEventListener("click", () => {
          const gridBoxId = gridBox.dataset.gridBoxId;
          console.log(gridBoxId);

          const gridBoxWithId = document.querySelector(
            `.js-grid-box-${gridBoxId}`
          );

          if (gridBoxWithId.innerHTML !== "") {
            alert("Invalid Move");
          } 
          else {
            if (player === 1) {
              gridBoxWithId.innerHTML = "X";
              gridBoxWithId.style.backgroundColor = 'red'
              gridBoxWithId.style.color = 'white'
            } else {
              gridBoxWithId.innerHTML = "O";
              gridBoxWithId.style.backgroundColor = 'green'
              gridBoxWithId.style.color = 'white'
            }

            let result = checkWinner() || false;
            console.log(result)

            if (result) {
              alert(`Player ${player} has won the game. Reset to play again.`)
              updateScore(player);
            }

            /*
            if (result){
              alert('Game already over. Please reset to play again')
            }
            */

            player === 1 ? (player = 2) : (player = 1);

            document.querySelector('.js-player-turn').innerHTML = `Player ${player}'s turn`
          }
        });
      });

      /*
      const gridBoxArray = document.querySelectorAll(".js-grid-box");
      gridBoxArray.forEach((gridBox) => {
        gridBox.addEventListener(
          "click",
          displayPlayerMove(gridBox.dataset.gridBoxId)
        );
      });

      function displayPlayerMove(id) {
        document.querySelector(".js-grid-box").innerHTML = "";
      }
      */

      function checkWinner() {
        let winCombinationsAll = [
          ["1_1", "1_2", "1_3"],
          ["2_1", "2_2", "2_3"],
          ["3_1", "3_2", "3_3"],
          ["1_1", "2_1", "3_1"],
          ["1_2", "2_2", "3_2"],
          ["1_3", "2_3", "3_3"],
          ["1_1", "2_2", "3_3"],
          ["1_3", "2_2", "3_1"],
        ];

        let result = "";

        /*
        winCombinationsAll.forEach((winCombination) => {

          document.querySelector(`.js-grid-box-${winCombination[0]}`)

          if ()
        })
      */

        for (let i = 0; i < winCombinationsAll.length; i++) {
          let winCombination = winCombinationsAll[i];

          let winBox1 = document.querySelector(
            `.js-grid-box-${winCombination[0]}`
          );
          let winBox2 = document.querySelector(
            `.js-grid-box-${winCombination[1]}`
          );
          let winBox3 = document.querySelector(
            `.js-grid-box-${winCombination[2]}`
          );

          if (
            winBox1.innerHTML === winBox2.innerHTML &&
            winBox2.innerHTML === winBox3.innerHTML &&
            winBox1.innerHTML !== "" &&
            winBox2.innerHTML !== "" &&
            winBox3.innerHTML !== ""
          ) {
            result = true;
            return result;
          } 
        }
      }

      function updateScore(playerNumber) {
          const scoreELement = document.querySelector(`.js-p${playerNumber}-score`);
          if (playerNumber === 1) { 
            score1++; 
          scoreELement.innerHTML = `Player ${playerNumber}: ${score1}`
          } else {
            score2++;
            scoreELement.innerHTML = `Player ${playerNumber}: ${score2}`
          }
          
          
          
        }

      document.querySelector('.js-reset-button').addEventListener('click', () => {
        gridBoxArray.forEach((gridBox) => {
          gridBox.innerHTML = '';
          gridBox.style.backgroundColor = 'white';
        })
      })