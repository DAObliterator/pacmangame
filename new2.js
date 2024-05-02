//GOOD WORK


const checkIfJunction = (currentPositionMonster, currentDirection) => {
  let allDirections = {
    East: playableTiles.includes(currentPositionMonster + 1),
    South: playableTiles.includes(currentPositionMonster + 28),
    West: playableTiles.includes(currentPositionMonster - 1),
    North: playableTiles.includes(currentPositionMonster - 28),
  };

  let movableDirections = [];

  let count_ = 0;
  Object.keys(allDirections).forEach((key) => {
    if (
      allDirections[key] === true &&
      key !== oppoDirections[currentDirection] //to check that we are not counting the current direction in which monster is headed
    ) {
      movableDirections[count_] = key;
      count_++;
    }
  });

  if (movableDirections.length >= 2) {
    console.log(`The Monster Has Reached a Junction`);
  }

  return movableDirections;
};

let playableTiles = [
  114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 128, 129, 130,
  131, 132, 133, 134, 135, 136, 137, 138, 139, 142, 147, 153, 156, 162, 167,
  170, 175, 181, 184, 190, 195, 198, 203, 209, 212, 218, 223, 226, 227, 228,
  229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243,
  244, 245, 246, 247, 248, 249, 250, 251, 254, 259, 262, 271, 274, 279, 282,
  287, 290, 299, 302, 307, 310, 311, 312, 313, 314, 315, 318, 319, 320, 321,
  324, 325, 326, 327, 330, 331, 332, 333, 334, 335, 343, 349, 352, 358, 371,
  377, 380, 386, 399, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 414,
  427, 430, 439, 442, 455, 458, 467, 470, 477, 478, 479, 480, 481, 482, 483,
  484, 485, 486, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 511, 514,
  523, 526, 539, 542, 551, 554, 567, 570, 571, 572, 573, 574, 575, 576, 577,
  578, 579, 582, 595, 598, 607, 610, 623, 626, 635, 638, 646, 647, 648, 649,
  650, 651, 652, 653, 654, 655, 656, 657, 660, 661, 662, 663, 664, 665, 666,
  667, 668, 669, 670, 671, 674, 679, 685, 688, 694, 699, 702, 707, 713, 716,
  722, 727, 730, 731, 732, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744,
  745, 746, 747, 748, 749, 750, 753, 754, 755, 760, 763, 766, 775, 778, 781,
  788, 791, 794, 803, 806, 809, 814, 815, 816, 817, 818, 819, 822, 823, 824,
  825, 828, 829, 830, 831, 834, 835, 836, 837, 838, 839, 842, 853, 856, 867,
  870, 881, 884, 895, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908,
  909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923,
];

let oppoDirections = {
  East: "West",
  West: "East",
  North: "South",
  South: "North",
};

let incrementForDirections = {
  East: 1,
  West: -1,
  South: 28,
  North: -28,
};

const findAllPaths = (
  initialPosition,
  currentPositionMonster,
  currentDirection,
  pacmanPosition,
  finalArrayOfPaths,
  count
) => {
  console.log( count );
  if (
    (count !== 0 && currentPositionMonster === initialPosition) ||
    currentPositionMonster === pacmanPosition
  ) {
    return finalArrayOfPaths;
  } else {
    
    let movableDirections = checkIfJunction( currentPositionMonster, currentDirection);

    for (const i of movableDirections) {
      if (
        finalArrayOfPaths.length === 0 &&
        currentPositionMonster === initialPosition &&
        count === 0
      ) {
        let array = [];
  
        let nextPositionMonster =
          i === currentDirection
            ? currentPositionMonster + incrementForDirections[currentDirection]
            : i === oppoDirections[currentDirection]
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
                : (i === oppoDirections[currentDirection]
                ? currentPositionMonster +
                  incrementForDirections[currentDirection]
                : currentPositionMonster + incrementForDirections[i]);

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
};

console.log(findAllPaths(119, 119, "East", 311, [], 0));

