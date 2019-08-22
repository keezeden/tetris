const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const frame_rate = 500
const spawn_rate = 2000
const grid_size = 25

var shapesOnScreen = []


document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 32:
            shapesOnScreen[shapesOnScreen.length - 1].rotate()
            draw()
            break
        case 37:
            shapesOnScreen[shapesOnScreen.length - 1].x -= grid_size
            draw()
            break
        case 39:
            shapesOnScreen[shapesOnScreen.length - 1].x += grid_size
            draw()
            break
        case 40:
            shapesOnScreen[shapesOnScreen.length - 1].y += grid_size
            draw()
            break
    }
})

function update() {
    for (var i = 0; i < shapesOnScreen.length; i++) {
        if(shapesOnScreen[i].y < 525) {
            shapesOnScreen[i].y += grid_size
        }
    }
}

function draw() {
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, 300, 600)
    ctx.fillStyle = "white"
    for (var i = 0; i < shapesOnScreen.length; i++) {
        shapesOnScreen[i].draw()
    }
}

function newBlock() {
    switch (Math.floor(Math.random() * 4) + 1) {
        case 1:
            return new Block((Math.floor(Math.random() * 12) + 1) * grid_size,
                [
                    [0, 1, 0],
                    [0, 1, 0],
                    [0, 1, 1],
                ])
            break
        case 2:
            return new Block((Math.floor(Math.random() * 12) + 1) * grid_size,
                [
                    [0, 1, 0],
                    [0, 1, 0],
                    [0, 1, 0],
                ])
            break
        case 3:
            return new Block((Math.floor(Math.random() * 12) + 1) * grid_size,
                [
                    [0, 0, 0],
                    [0, 1, 1],
                    [0, 1, 1],
                ])
            break
        case 4:
            return new Block((Math.floor(Math.random() * 12) + 1) * grid_size,
                [
                    [0, 1, 0],
                    [0, 1, 0],
                    [1, 1, 0],
                ])
            break

    }
}

setInterval(() => {
    update()
    draw()
}, frame_rate)

setInterval(() => {
    shapesOnScreen.push(newBlock())
}, spawn_rate)