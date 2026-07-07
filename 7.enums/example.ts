enum Direction{
    Up,
    Down,
    Left,
    Right
}

function move(direction : Direction){
    console.log(` Moving ${Direction[direction].toLowerCase()}`);
    
}
console.log(Direction);

move(Direction.Left);