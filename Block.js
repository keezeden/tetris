class Block {

    constructor(x, shape) {
        this.x = x
        this.shape = shape
    }

    x = 0
    y = -grid_size * 2
    shape = [
        [0,0,0],
        [0,1,0],
        [0,0,0],
    ]
    //refactor draw and collision check to use same method
    draw() {
        ctx.fillStyle = "white"
        for(var i = 0; i < this.shape.length; i++) {
            for(var j = 0; j < this.shape[i].length; j++) {
                if(this.shape[i][j] > 0) {
                    ctx.fillRect(this.x + j * grid_size, this.y + i * grid_size, grid_size, grid_size)
                }
            }
        }
    }

    colliding() {
        for(var i = 0; i < this.shape.length; i++) {
            for(var j = 0; j < this.shape[i].length; j++) {
                
            }   
        }
    }

    rotate() {
        var newShape = [
            [0,0,0],
            [0,1,0],
            [0,0,0],
        ]
        newShape[0][0] = this.shape[2][0] 
        newShape[0][1] = this.shape[1][0]
        newShape[0][2] = this.shape[0][0]
        newShape[1][2] = this.shape[0][1]
        newShape[2][2] = this.shape[0][2]
        newShape[2][1] = this.shape[1][2]
        newShape[2][0] = this.shape[2][2]
        newShape[1][0] = this.shape[2][1]
        this.shape = newShape
        draw()
    }
}