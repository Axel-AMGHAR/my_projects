$(function () {


    const sizePicker = $('.size-picker');
    const pixelCanvas = $('.pixel-canvas');
    const quickFill = $('.quick-fill');
    const eraseMode = $('.erase-mode');
    const drawMode = $('.draw-mode');

    function makeGrid() {
        let gridHeight = $('.input-height').val();
        let gridWidth = $('.input-width').val();
        // If grid already present, clears any cells that have been filled in

        pixelCanvas.children().remove();

        // Creates rows and cells
        for (let i = 1; i <= gridHeight; i++) {
            let gridRow = $('<tr>');
            pixelCanvas.append(gridRow);
            for (let j = 1; j <= gridWidth; j++) {
                let gridCell = $('<td>');
                gridRow.append(gridCell);
                // Fills in cell with selected color upon mouse press ('mousedown', unlike 'click', doesn't also require release of mouse button)
                gridCell.on('mousedown', function () {
                    $(this).css("background-color", $('.color-picker').val());
                });
            }
        }
    }

    makeGrid();

    // Upon user's submitting height and width selections, callback function (inside method) calls makeGrid function. But event method preventDefault() first intercepts the 'submit' event, which would normally submit the form and refresh the page, preventing makeGrid() from being processed
    sizePicker.on('submit', function (e) {
        e.preventDefault();
        makeGrid();
    });

    // Listens for mouse pointer press and release on grid. Changes value to true when pressed, but sets it back to false as soon as released
    pixelCanvas.on('mousedown', function (e) {
        e.preventDefault();

        // Enables color dragging with selected color (code for filling in single cell is above). (No click on 'draw' mode needed; this is default mode)
        pixelCanvas.on('mouseover', function (e) {
            // 'color' defined here rather than globally so JS checks whether user has changed color with each new mouse press on cell
            cl(e.target)
            e.target.css('background-color',  $('.color-picker').val());
            
        });
    });
    
    pixelCanvas.on('mouseup',() => pixelCanvas.unbind('mouseover'));

    // Ensures cells won't be colored if grid is left while pointer is held down
    pixelCanvas.on('mouseleave',() => pixelCanvas.unbind('mouseover'));

    // Adds color-fill functionality. e.preventDefault(); intercepts page refresh on button click
    quickFill.on('click', function (e) {
        e.preventDefault();
        const color = document.querySelector('.color-picker').value;
        pixelCanvas.querySelectorAll('td').forEach(td => td.style.backgroundColor = color);
    });

    // Removes color from cell upon double-click
    pixelCanvas.on('dblclick', e => {
        e.target.style.backgroundColor = null;
    });

    // NONDEFAULT DRAW AND ERASE MODES:

    // Allows for drag and single-cell erasing upon clicking 'erase' button. Code for double-click erase functionality (Without entering erase mode) is above. Also note 'down' was set to false in variable above
    eraseMode.on('click', function () {
        // Enables drag erasing while in erase mode
        pixelCanvas.on('mousedown', function (e) {
            down = true;
            pixelCanvas.on('mouseup', function () {
                down = false;
            });
            // Ensures cells won't be erased if grid is left while pointer is held down
            pixelCanvas.on('mouseleave', function () {
                down = false;
            });
            pixelCanvas.on('mouseover', function (e) {
                // While mouse pointer is pressed and within grid boundaries, empties cell contents. Inner if statement fixes bug that fills in entire grid
                if (down) {
                    if (e.target.tagName === 'TD') {
                        e.target.style.backgroundColor = null;
                    }
                }
            });
        });
        // Enables single-cell erase while in erase mode
        pixelCanvas.on('mousedown', function (e) {
            e.target.style.backgroundColor = null;
        });
    });

    // Allows user to return to (default) draw mode after using 'erase' button. Note 'down' was set to false in variable above
    drawMode.on('click', function () {
        pixelCanvas.on('mousedown', function (e) {
            down = true;
            pixelCanvas.on('mouseup', function () {
                down = false;
            });
            // Ensures cells won't be colored if grid is left while pointer is held down
            pixelCanvas.on('mouseleave', function () {
                down = false;
            });
            pixelCanvas.on('mouseover', function (e) {
                const color = document.querySelector('.color-picker').value;
                // While mouse pointer is pressed and within grid boundaries, fills cell with selected color. Inner if statement fixes bug that fills in entire grid
                if (down) {
                    if (e.target.tagName === 'TD') {
                        e.target.style.backgroundColor = color;
                    }
                }
            });
        });
        // Enables single-cell coloring while in draw mode
        pixelCanvas.on('mousedown', function (e) {
            if (e.target.tagName !== 'TD') return;
            const color = document.querySelector('.color-picker').value;
            e.target.style.backgroundColor = color;
        });
    });
});
