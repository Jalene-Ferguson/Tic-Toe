// ensures that nothing will start until the html is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // selects all cells 
    const cells = document.querySelectorAll(".cell");
    // players team
    let currentPlayer = "X";
    // the blanks spaces on the board
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    // if the game is active or not
    let gameActive = true;
    // adds an event listener to each cell
    cells.forEach(cell => {
        // adds the click event listener
        cell.addEventListener("click", () => {
            // checks if the game is active and if the clicked cell
        if (gameActive && !cell.textContent) {
            // gets the index for the cell from the data-index
            const index = cell.dataset.index;
            // marks the cell with the users team
            cell.textContent = currentPlayer;
            // updates the game board array
            gameBoard[index] = currentPlayer;
            // checks the winner
            checkWinner();
            // switches to the next move
            currentPlayer = currentPlayer === "X" ? "0" : "X";
        };
    });
}); 
        // checks if any of the players entered a winning combo
        function checkWinner() {
            // winning combos
            const winningCombos = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];
            for (const combo of winningCombos) {
            // reveals the winner and ends the game
            const [a, b, c] = combo;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                alert(`Player ${gameBoard[a]} wins!`);
                gameActive = false;
                break;
            }
            }
           // checks for a draw
            if (!gameBoard.includes("") && gameActive) {
                alert("It\'s a draw!");
                gameActive = false;
            }
        };
        });