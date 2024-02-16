
// This is where your state machines and game logic lives


class Controller {

    // This is the state we start with.
    constructor() {
        this.gameState = "START";

    }

    // This is called from draw() in sketch.js with every frame
    update() {

        // STATE MACHINE ////////////////////////////////////////////////
        // This is where your game logic lives
        /////////////////////////////////////////////////////////////////
        switch (this.gameState) {

            case "START":
                // Reset all necessary variables, objects, or arrays to their initial state
                // display.clear(); // Clear the display
                // display.clearColor();
                // index = 0
                // Other initialization logic as needed
                this.gameState = "PLAY"; // Transition to the "PLAY" state
                break;

            // This is the main game state, where the playing actually happens
            case "PLAY":

                // clear screen at frame rate so we always start fresh      
                // display.clear();

                //get colors from color buffer
                display.transferColorBuffer();


                // show all players in the right place, by adding them to display buffer
                display.setPixel(playerOne.position, playerOne.playerColor);
                display.setPixel(playerTwo.position, playerTwo.playerColor);
                display.setPixel(playerThree.position, playerThree.playerColor);

                //console.log(display.getColor(playerOne.position));


                /*
                if (keyCode === DOWN_ARROW) {
                    display.setColorBuffer(playerOne.position, playerOne.playerColor); 
                    display.synthsArray[playerOne.position].oscillator.type = 'triangle';
                    display.synthsArray[playerOne.position].triggerAttackRelease("C3", 0.5);
                }
                */

                //player 1_Red
                if (keyCode === DOWN_ARROW) {

                    let currentColor = display.getColor(playerOne.position);
                    //console.log(currentColor);

                    // If pixel color is 0_Black, set color buffer to 1_Red
                    if (currentColor.toString() === color(0, 0, 0).toString()) {
                        display.setColorBuffer(playerOne.position, playerOne.playerColor);
                        display.musicPlayerOne[playerOne.position] = 1; // Set music flag for player two
                        //console.log(display.musicPlayerOne);
                    }
                    //* If cancel on 1_Red, clear it to 0_Black
                    else if (currentColor.toString() === color(255, 173, 173).toString()) {
                        display.setColorBuffer(playerOne.position, color(0, 0, 0));
                        display.musicPlayerOne[playerOne.position] = 0;
                    }

                    // If add on 2_Yellow, change it to 4_Orange (1+2)
                    else if (currentColor.toString() === playerTwo.playerColor.toString()) {
                        display.setColorBuffer(playerOne.position, color(255, 214, 165));
                        display.musicPlayerOne[playerOne.position] = 1;
                    }

                    //* If cancel on 4_Orange(1+2), clear it to 2_Yellow
                    else if (currentColor.toString() === color(255, 214, 165).toString()) {
                        display.setColorBuffer(playerOne.position, playerTwo.playerColor);
                        display.musicPlayerOne[playerOne.position] = 0;
                    }

                    //* If add on 3_Blue, change it to 6_Purple(1+3)
                    else if (currentColor.toString() === playerThree.playerColor.toString()) {
                        display.setColorBuffer(playerOne.position, color(189, 178, 255));
                        display.musicPlayerOne[playerOne.position] = 1;
                    }

                    //* If cancel on 6_Blue(1+3), clear it to 3_Blue
                    else if (currentColor.toString() === color(189, 178, 255).toString()) {
                        display.setColorBuffer(playerOne.position, playerThree.playerColor);
                        display.musicPlayerOne[playerOne.position] = 0;
                    }

                    //* If add on 5_Green(2+3), change it to 7_Wihte(1+2+3)
                    else if (currentColor.toString() === color(202, 255, 191).toString()) {
                        display.setColorBuffer(playerOne.position, color(255, 255, 255));
                        display.musicPlayerOne[playerOne.position] = 1;
                    }
                    //* If cancel on 7_Wihte(1+2+3), clear it to 5_Green(2+3)
                    else if (currentColor.toString() === color(255, 255, 255).toString()) {
                        display.setColorBuffer(playerOne.position, color(202, 255, 191));
                        display.musicPlayerOne[playerOne.position] = 0;
                    }

                }


                //player2 2_Yellow
                if (key === 's' || key === 'S') {
                    let currentColor = display.getColor(playerTwo.position);

                    // If pixel color is 0_Black, set color buffer to 2_Yellow
                    if (currentColor.toString() === color(0).toString()) {
                        display.setColorBuffer(playerTwo.position, playerTwo.playerColor);
                        display.musicPlayerTwo[playerTwo.position] = 1;
                    }

                    //* If cancel on 1_Yellow, clear it to 0_Black
                    if (currentColor.toString() === playerTwo.playerColor.toString()) {
                        display.setColorBuffer(playerTwo.position, color(0));
                        display.musicPlayerTwo[playerTwo.position] = 0;
                    }

                    // If add on 1_Red, change it to 4_Orange (1+2)
                    else if (currentColor.toString() === playerOne.playerColor.toString()) {
                        display.setColorBuffer(playerTwo.position, color(255, 214, 165));
                        display.musicPlayerTwo[playerTwo.position] = 1;
                    }

                    // If cancle on 4_Orange (1+2), clear it to 1_Red
                    else if (currentColor.toString() === color(255, 214, 165).toString()) {
                        display.setColorBuffer(playerTwo.position, playerOne.playerColor);
                        display.musicPlayerTwo[playerTwo.position] = 0;
                    }

                    // If add on 3_Blue, change it to 5_Green (2+3)
                    else if (currentColor.toString() === playerThree.playerColor.toString()) {
                        display.setColorBuffer(playerTwo.position, color(202, 255, 191));
                        display.musicPlayerTwo[playerTwo.position] = 1;
                    }

                    // If cancle on 5_Green (2+3), clear it to 3_Blue
                    else if (currentColor.toString() === color(202, 255, 191).toString()) {
                        display.setColorBuffer(playerTwo.position, playerThree.playerColor);
                        display.musicPlayerTwo[playerTwo.position] = 0;
                    }

                    //* If add on 6_Purple(1+3), change it to 7_Wihte(1+2+3)
                    else if (currentColor.toString() === color(189, 178, 255).toString()) {
                        display.setColorBuffer(playerTwo.position, color(255, 255, 255));
                        display.musicPlayerTwo[playerTwo.position] = 1;
                    }

                    //* If cancle on 7_Wihte(1+2+3), clear it to 6_Purple(1+3)
                    else if (currentColor.toString() === color(255, 255, 255).toString()) {
                        display.setColorBuffer(playerTwo.position, color(189, 178, 255));
                        display.musicPlayerTwo[playerTwo.position] = 0;
                    }


                }

                //player 3_Blue
                if (key === 'k' || key === 'K') {
                    let currentColor = display.getColor(playerThree.position);

                    // If pixel color is 0_Black, set color buffer to 3_Blue
                    if (currentColor.toString() === color(0).toString()) {
                        display.setColorBuffer(playerThree.position, playerThree.playerColor);
                        display.musicPlayerThree[playerThree.position] = 1;
                    }

                    //* If cancel on 3_Blue, clear it to 0_Black
                    if (currentColor.toString() === playerThree.playerColor.toString()) {
                        display.setColorBuffer(playerThree.position, color(0));
                        display.musicPlayerThree[playerThree.position] = 0;
                    }

                    // If add on 1_Red, change it to 6_Purple(1+3)
                    else if (currentColor.toString() === playerOne.playerColor.toString()) {
                        display.setColorBuffer(playerThree.position, color(189, 178, 255));
                        display.musicPlayerThree[playerThree.position] = 1;
                    }

                    // If cancle on 6_Purple(1+3), clear it to 1_Red
                    else if (currentColor.toString() === color(189, 178, 255)) {
                        display.setColorBuffer(playerThree.position, playerOne.playerColor);
                        display.musicPlayerThree[playerThree.position] = 0;
                    }

                    // If add on 1_Yellow, change it to 5_Green (2+3)
                    else if (currentColor.toString() === playerTwo.playerColor.toString()) {
                        display.setColorBuffer(playerThree.position, color(202, 255, 191));
                        display.musicPlayerThree[playerThree.position] = 1;
                    }

                    // If cancle on 5_Green (2+3), clear it to 1_Yellow
                    else if (currentColor.toString() === color(202, 255, 191).toString()) {
                        display.setColorBuffer(playerThree.position,playerTwo.playerColor);
                        display.musicPlayerThree[playerThree.position] = 0;
                    }

                    //* If add on 4_Orange (1+2), change it to 7_Wihte(1+2+3)
                    else if (currentColor.toString() === color(255, 214, 165).toString()) {
                        display.setColorBuffer(playerThree.position, color(255, 255, 255));
                        display.musicPlayerThree[playerThree.position] = 1;
                    }
                    //* If cancle on 7_Wihte(1+2+3), clear it to 6_Purple(1+3)
                    else if (currentColor.toString() === color(255, 255, 255).toString()) {
                        display.setColorBuffer(playerThree.position,  color(255, 214, 165));
                        display.musicPlayerThree[playerThree.position] = 0;
                    }
                }
                break;
            // Not used, it's here just for code compliance
            default:
                break;
        }

    }
}

Tone.Transport.scheduleRepeat(repeat, "8n");
let index = 0;

function repeat(time) {
    if (index >= 30 * 3) { // Assuming one row of 20 pixels and repeat 5 times
        Tone.Transport.stop();
        return;
    }

    let pixelIndex = index % 30; // Calculate the current pixel index

    // Check if the pixel contains sounds for player one
    if (display.musicPlayerOne[pixelIndex] !== 0) {
        // Iterate over each sound stored in the pixel for player one
        display.synthsArray[pixelIndex].triggerAttackRelease("C3", 0.01, time + 0.0001 * index);
    }
    // Check if the pixel contains sounds for player two
    if (display.musicPlayerTwo[pixelIndex] !== 0) {
        // Iterate over each sound stored in the pixel for player two
        display.synthsArray[pixelIndex].triggerAttackRelease("A4", 0.01, time + 0.0002 * index);
    }
    // Check if the pixel contains sounds for player three
    if (display.musicPlayerThree[pixelIndex] !== 0) {
        // Iterate over each sound stored in the pixel for player two
        display.synthsArray[pixelIndex].triggerAttackRelease("E2", 0.01, time + 0.0003 * index);
    }

    index++;
}

let toneStarted = false;

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) { // Check for the spacebar key
        event.preventDefault();
        if (!toneStarted) {
            // Start Tone.js and the Transport
            Tone.start().then(() => {
                console.log("AudioContext is activated by space key");
                Tone.Transport.start();
                toneStarted = true;
            }).catch(error => {
                console.error("Failed to start Tone.js:", error);
            });
        } else {
            // If Tone.js has already started, simply start the Transport
            Tone.Transport.start();
        }
    }
});


function keyPressed() {

    Tone.start();
    // Handle player movement
    if (keyCode === LEFT_ARROW) {
        playerOne.move(-1);
    } else if (keyCode === RIGHT_ARROW) {
        playerOne.move(1);
    } else if (keyCode === DOWN_ARROW) {
        display.synthsArray[playerOne.position].oscillator.type = 'triangle';
        display.synthsArray[playerOne.position].triggerAttackRelease("C3", 0.01);
    }


    if (key === 'a' || key === 'A') {
        playerTwo.move(-1);
    } else if (key === 'd' || key === 'D') {
        playerTwo.move(1);
    } else if (key === 's' || key === 'S') {
        display.synthsArray[playerTwo.position].oscillator.type = 'sine';
        display.synthsArray[playerTwo.position].triggerAttackRelease("A4", 0.01);
    }

    if (key === 'j' || key === 'J') {
        playerThree.move(-1);
    } else if (key === 'l' || key === 'L') {
        playerThree.move(1);
    } else if (key === 'k' || key === 'K') {
        display.synthsArray[playerThree.position].oscillator.type = 'sine';
        display.synthsArray[playerThree.position].triggerAttackRelease("G5", 0.01);
    }



    // Reset game state to "PLAY" when R is pressed
    if (key === 'r' || key === 'R') {
        Tone.Transport.stop();
        // Clear all sounds
        for (let i = 0; i < displaySize; i++) {
            display.synthsArray[i].triggerRelease();
        }
        playerOne.position = 0;
        playerTwo.position = 0;
        playerThree.position = 0;
        controller.gameState = "START";
        display.musicPlayerOne = new Array(displaySize).fill(0);
        display.musicPlayerTwo = new Array(displaySize).fill(0);
        display.musicPlayerThree = new Array(displaySize).fill(0);

    }
}