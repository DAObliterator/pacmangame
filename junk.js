if (
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
}
