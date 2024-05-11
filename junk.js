/*if (
  (count !== 0 && currentPositionMonster === initialPosition) ||
  currentPositionMonster === pacmanPosition
) {
  return finalArrayOfPaths;
} else {
  let movableDirections = directionsArray(
    currentPositionMonster,
    currentDirection
  );

  for (const i of movableDirections) {
    // if this is true then it means the monster has not made any move
    if (
      finalArrayOfPaths.length === 0 &&
      currentPositionMonster === initialPosition &&
      count === 0
    ) {
      let array = [];

      let nextPositionMonster =
        i === currentDirection
          ? currentPositionMonster + incrementForDirections[currentDirection]
          : currentPositionMonster + incrementForDirections[i];

      array.push(currentPositionMonster);
      array.push(nextPositionMonster);
      finalArrayOfPaths.push(array);

      count = count + 1;
      findAllPaths(
        initialPosition,
        nextPositionMonster,
        i,
        pacmanPosition,
        finalArrayOfPaths
      );
    } else {
      for (const j of finalArrayOfPaths) {
        let lastIndex = j.length - 1;

        if (j[lastIndex] === currentPositionMonster) {
          let nextPositionMonster =
            i === currentDirection
              ? currentPositionMonster +
                incrementForDirections[currentDirection]
              : currentPositionMonster + incrementForDirections[i];

          if (currentDirection === i) {
            j.push(nextPositionMonster);
          } else {
            let newArr = j;
            newArr.push(nextPositionMonster);
            finalArrayOfPaths.push(newArr);
          }
          count = count + 1;
          findAllPaths(
            initialPosition,
            nextPositionMonster,
            i,
            pacmanPosition,
            finalArrayOfPaths,
            count
          );
        }
      }
    }
  }
}*/


let arr = [
  120, 121, 122, 123, 124, 125, 153, 181, 209, 237, 238, 239, 240, 241, 242,
  243, 244, 245, 246, 247, 248, 249, 250, 251, 279, 307, 335, 334, 333, 332,
  331, 330, 358, 386, 414, 442, 470, 498, 499, 500, 501, 502, 503, 504,
];
