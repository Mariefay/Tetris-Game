export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[y].length; x++) {
      //check we re on a cell that is not zero
      if (player.tetromino[y][x] !== 0) {
        if (
          //check we re not outside game area (height y) + shouldn't go through bottom
          !stage[y + player.pos.y + moveY] || //if the cell number doesn't exist in the stage
          //check we re not outside game area (width x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          //check cell we re moving into isn't set to 'clear'
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
