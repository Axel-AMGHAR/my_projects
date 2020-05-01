$(function () {

    let nbRows = 10;
    let nbCols = 10;

    // pallete from http://eastfarthing.com/blog/2016-05-06-palette/
    let pallete = ["#ffffff", "#3f32ae", "#e30ec2", "#baaaff", "#ff949d", "#e80200", "#7a243d", "#000000", "#195648",
              "#6a8927", "#16ed75", "#32c1c3", "#057fc1", "#6e4e23", "#c98f4c", "#efe305"];

    let map;

    let buttons = [];
    let foreColor = 1;

    let editorX = 50;
    let editorY = 0;

    function initMap() {
        map = new Array(nbRows);
        for (var i = 0; i < nbRows; i++) {
            var row = new Array(nbCols);
            for (var j = 0; j < nbCols; j++) {
                row[j] = 0;
            }
            map[i] = row;
        }
    }

    function enter() {
        addButtons();
        initMap();
    }

    function loop() {
        clear();

        drawButtons();
        displayMap();
        displayInstructions();

        handleButtons();
        handleCellClick();
    }

    function keyPressed() {
        showNumbers = (key.toUpperCase() === "Z") & !showNumbers;
    }

    function handleCellClick() {
        if (!mouseIsPressed)
            return;

        var col = floor((mouseX - editorX) / squareSize);
        var row = floor((mouseY - editorY) / squareSize);

        if (col < 0 || col >= noCols ||
            row < 0 || row >= noRows)
            return;

        var color = mouseButton == LEFT ? foreColor : backColor;
        map[row][col] = color;
    }

    function displayMap() {
        for (var row = 0; row < noRows; row++) {
            for (var col = 0; col < noCols; col++) {
                var cellX = editorX + col * squareSize;
                var cellY = editorY + row * squareSize;
                var color = map[row][col];

                fill(pallete[color]);
                stroke(0);
                rect(cellX, cellY, squareSize, squareSize);

                if (showNumbers) {
                    textAlign(CENTER, CENTER);
                    fill(0);
                    noStroke();

                    text(color, cellX + squareSize / 2, cellY + squareSize / 2);
                }
            }
        }
    }


    function displayInstructions() {
        noStroke();
        fill(0);
        textAlign(LEFT, LEFT);

        text("Use LEFT / RIGHT mouse buttons to draw.", editorX, height - 10);
    }

    function addButtons() {
        var w = Math.floor(200 / pallete.length);

        for (i = 0; i < pallete.length; i++) {
            var color = pallete[i];
            addButton(1, i * w, w, w, color);
        }
    }

    function addButton(x, y, w, h, color) {
        var btn = {
            x: x,
            y: y,
            w: w,
            h: h,
            color: color
        };

        buttons.push(btn);

        return btn;
    }

    function handleButtons() {
        if (!mouseIsPressed)
            return;

        for (var i = 0; i < buttons.length; i++) {
            var btn = buttons[i];

            if (collisionPointRect(mouseX, mouseY, btn.x, btn.y, btn.w, btn.h)) {
                if (mouseButton == LEFT)
                    foreColor = i;
                else
                    backColor = i;
            }
        }
    }

    function drawButtons() {
        for (var btn of buttons) {
            drawButton(btn);
        }
    }

    function drawButton(btn) {
        stroke(0);
        strokeWeight(1);

        fill(btn.color);
        rect(btn.x, btn.y, btn.w, btn.h);

        writeLabel(btn);
    }

    function writeLabel(btn) {
        var t = "";

        if (btn.color == pallete[foreColor]) {
            t = "FG";
        }
        if (btn.color == pallete[backColor]) {
            t = t == "" ? "BG" : "F/BG";
        }

        fill("white");
        stroke("black")

        textAlign(CENTER, CENTER);
        text(t, btn.x + btn.w / 2, btn.y + btn.h / 2)
    }

    $('.in_validate').click(() => {
        let row = $('#row').val();
        nbRows = (row !== '' ? row : 10);
        let col = $('#col').val();
        nbCols = (col !== '' ? col : 10);
        enter();
        cl(buttons)
    });
});
