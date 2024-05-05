//GOOD WORK

//these are all the tiles that initially are accesible
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

//This function returns the directions to which the pacman can move excluding the one in which currently moving in an Array
const directionsArray = (currentPositionGhost, currentDirection) => {
  let allDirections = {
    East: playableTiles.includes(currentPositionGhost + 1),
    South: playableTiles.includes(currentPositionGhost + 28),
    West: playableTiles.includes(currentPositionGhost - 1),
    North: playableTiles.includes(currentPositionGhost - 28),
  };

  let movableDirections = [];

  let count_ = 0;
  Object.keys(allDirections).forEach((key) => {
    if (
      allDirections[key] === true &&
      key !== oppoDirections[currentDirection] //to check that we are not counting the current direction in which Ghost is headed
    ) {
      movableDirections[count_] = key;
      count_++;
    }
  });

  return movableDirections;
};

const findAllPaths = (
  initialPositionGhost,
  currentPositionGhost,
  currentDirection,
  pacmanPosition,
  finalArrayOfPaths
) => {
  let movablePositions = directionsArray(
    currentPositionGhost,
    currentDirection
  );

 


  if (movablePositions.length === 0) {
    console.log(finalArrayOfPaths , "dead end reached \n")
    return;
  }

  movablePositions.forEach((direction) => {
    if (
      finalArrayOfPaths.length !== 0 &&
      currentPositionGhost !== initialPositionGhost &&
      currentPositionGhost !== pacmanPosition
    ) {
      let arr = finalArrayOfPaths[finalArrayOfPaths.length - 1];
      arr = [ ...arr , currentPositionGhost + incrementForDirections[direction] ];
      finalArrayOfPaths[finalArrayOfPaths.length - 1] = arr;

      findAllPaths(
        initialPositionGhost,
        currentPositionGhost + incrementForDirections[direction],
        direction,
        pacmanPosition,
        finalArrayOfPaths
      );

    } else if (finalArrayOfPaths.length === 0) {
      let arr = [];
      arr.push(currentPositionGhost + incrementForDirections[direction]);
      finalArrayOfPaths.push(arr);
      findAllPaths(
        initialPositionGhost,
        currentPositionGhost + incrementForDirections[direction],
        direction,
        pacmanPosition,
        finalArrayOfPaths
      );
    } else if ( currentPositionGhost === pacmanPosition ) {
      return;
    }
  });

  
};

console.log(findAllPaths(119, 119, "East", 311, [], 0));
