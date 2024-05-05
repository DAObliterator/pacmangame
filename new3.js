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

const allAccesiblePositions = ( currentPosition , currentDirection ) => {

    let accesiblePositions = [];


    if ( playableTiles.includes(currentPosition + 1 )) {
        accesiblePositions.push({ nextPosition: currentPosition + 1 , nextDirection: "East" })
    }

    if (playableTiles.includes(currentPosition - 1)) {
        accesiblePositions.push({
          nextPosition: currentPosition - 1,
          nextDirection: "West",
        });
    }

    if (playableTiles.includes(currentPosition + 28)) {

        accesiblePositions.push({
          nextPosition: currentPosition + 28,
          nextDirection: "North",
        });
    }

    if (playableTiles.includes(currentPosition - 28)) {
        accesiblePositions.push({
          nextPosition: currentPosition - 28,
          nextDirection: "South",
        });
    }


    accesiblePositions = accesiblePositions.filter((element) => {
        if ( element.nextDirection !== oppoDirections[currentDirection]) {
            return element;
        }
    })

    console.log(accesiblePositions , "accesiblePositions  \n");

    return accesiblePositions;


} 

const allPossiblePaths = ( initialPosition , currentPosition , targetPosition , currentDirection , currentPath , allPaths ) => {

    

    if ( initialPosition === currentPosition && allPaths.length === 0 ) {

        const movablePositions =  allAccesiblePositions( currentPosition , currentDirection);

        for ( const i of movablePositions) {
            let newArr = currentPath;
            newArr.push( i.nextPosition);
            allPaths.push(newArr);
            allPossiblePaths(initialPosition , i.nextPosition , targetPosition , i.nextDirection , newArr , allPaths);
        }

        

    } else if ( initialPosition !== currentPosition && targetPosition !== currentPosition) {

        const movablePositions = allAccesiblePositions(
          currentPosition,
          currentDirection
        );

        if ( movablePositions.length === 0 ) {
            console.log("reached  a dead end ")//here instead of going back to all the functions in call stack that has been paused the function just ends abrubtly
           return; //this fucking thing is not going to the functions paused in call stack
        } else if ( movablePositions.length === 3 ) {
            console.log(`${currentPosition} reached a +`);
        } else if ( movablePositions.length === 2) {
            console.log(`${currentPosition} reached a T`);
        } else {
            if ( movablePositions[0] === currentDirection) {
                console.log("moving in a straight line towards " , currentDirection );

            } else {
                console.log("taking  a turn from " , currentDirection , " to " , movablePositions[0]);
            }
        }

        console.log(movablePositions);


        for ( const i of allPaths ){

            if ( i[i.length - 1] === currentPosition) {

                i.push(movablePositions[0].nextPosition);
                console.log( "allPaths" , allPaths , "\n");
                allPossiblePaths(
                  initialPosition,
                  movablePositions[0].nextPosition,
                  targetPosition,
                  movablePositions[0].nextDirection,
                  allPaths
                ); // here since function keeps on getting recursively called when exactly do we move on to the next i in movablePositions 

            }


        }




    } else {
        
        return allPaths;
    }




}

console.log(allPossiblePaths(119, 119, 181  , "East" , [] , []));

