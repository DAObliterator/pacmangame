


let playableTiles_ = [
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

const findOnePossiblePath = (
  initialPositionMonster,
  currentPositionMonster,
  currentDirection,
  currentPathArray,
  allPossiblePaths,
  pacmanPosition
) => {

  console.log(currentPathArray , "--currentPathArray \n")
  
  if (currentPositionMonster === pacmanPosition) {
    //one way to reach the pacman
    allPossiblePaths.push(currentPathArray);
    return allPossiblePaths;
  }

  if (currentPositionMonster === initialPositionMonster && currentPathArray.length > 0) {
    //reinitialize the currentPath to an empty array

    allPossiblePaths.push(currentPathArray);
    return allPossiblePaths;
  }

  if (
    playableTiles_.includes(currentPositionMonster + 1) &&
    currentDirection !== "West"
  ) {
    if (!currentPathArray.includes(currentPositionMonster + 1)) {
      currentPathArray.push(currentPositionMonster + 1);
      currentDirection = "East";
      document.getElementById((currentPositionMonster + 1).toString()).style.backgroundColor = "red";
       setInterval( () => {
         findOnePossiblePath(
           initialPositionMonster,
           currentPositionMonster + 1,
           currentDirection,
           currentPathArray,
           allPossiblePaths,
           pacmanPosition
         );
       } , 1000);
    } else {
      console.log(currentPositionMonster + 1 ,"already been here  \n");
      allPossiblePaths.push(currentPathArray);
      return allPossiblePaths;
    }
      
  }
  if (
    playableTiles_.includes(currentPositionMonster - 1) &&
    currentDirection !== "East"
  ) {
    if (!currentPathArray.includes(currentPositionMonster - 1)) {
      currentPathArray.push(currentPositionMonster - 1);
      currentDirection = "West";
      document.getElementById(
        (currentPositionMonster - 1).toString()
      ).style.backgroundColor = "red";
       setInterval(() => {
         findOnePossiblePath(
           initialPositionMonster,
           currentPositionMonster - 1,
           currentDirection,
           currentPathArray,
           allPossiblePaths,
           pacmanPosition
         );
       }, 1000);
    } else {
      console.log( currentPositionMonster - 1 , "already been here  \n");
      allPossiblePaths.push(currentPathArray);
      return allPossiblePaths;
    }
      
  }

  if (
    playableTiles_.includes(currentPositionMonster - 28) &&
    currentDirection !== "South"
  ) {
    if (!currentPathArray.includes(currentPositionMonster - 28)) {
      currentPathArray.push(currentPositionMonster - 28);
      currentDirection = "North";
      document.getElementById(
        (currentPositionMonster - 28).toString()
      ).style.backgroundColor = "red";
     setInterval(() => {
       findOnePossiblePath(
         initialPositionMonster,
         currentPositionMonster - 28,
         currentDirection,
         currentPathArray,
         allPossiblePaths,
         pacmanPosition
       );
     }, 1000);
    } else {
      console.log(currentPositionMonster - 28, "already been here  \n");
      allPossiblePaths.push(currentPathArray);
      return allPossiblePaths;
    }
     
  }

  if (
    playableTiles_.includes(currentPositionMonster + 28)  &&
    currentDirection !== "North"
  ) {
    if (!currentPathArray.includes(currentPositionMonster + 28)) {
      currentPathArray.push(currentPositionMonster + 28);
      currentDirection = "South";
      document.getElementById(
        (currentPositionMonster + 28).toString()
      ).style.backgroundColor = "red";

      setInterval(() => {
        findOnePossiblePath(
          initialPositionMonster,
          currentPositionMonster + 28,
          currentDirection,
          currentPathArray,
          allPossiblePaths,
          pacmanPosition
        );
      }, 1000);
     
    } else {
      console.log(currentPositionMonster + 28, "already been here  \n");
      allPossiblePaths.push(currentPathArray);
      return allPossiblePaths;
    }
     
  }


  if (
    !(playableTiles_.includes(currentPositionMonster + 1))  &&
    !(playableTiles_.includes(currentPositionMonster - 1)) &&
    !(playableTiles_.includes(currentPositionMonster - 28)) &&
    !(playableTiles_.includes(currentPositionMonster + 28)) 
  ) {
    allPossiblePaths.push(currentPathArray);
    console.log("dead end reached \n");
    return allPossiblePaths;
  }

};
console.log(findOnePossiblePath(227, 227, "East", [] , [] , 311));
