
const sameHorizontalLine = ( currentPosition , targetPosition) => {
    if (targetPosition - currentPosition < 28) {
      return true;
    } else {
        return false;
    } 
}


const sameVerticalLine = (currentPosition, targetPosition) => {
  if ((targetPosition - currentPosition) % 2 === 0) {
    return true;
  } else {
    return false;
  }
};


const findShortestPath = ( currentPosition , targetPosition , pathArray ) => {


    if ( (targetPosition - currentPosition) < 28 ) {
        console.log("same horizontal line")
    } 

    if ( ( targetPosition - currentPosition)%2 === 0 ) {
        console.log("same vertical line")
    }

    let targetRow = Math.floor(targetPosition/28) + 1;
    let currentRow = Math.floor(currentPosition/ 28) + 1;

    let corner1 =  currentPosition +   (targetPosition - (currentPosition + (targetRow - currentRow)*28));
    let corner2 = currentPosition + (targetRow - currentRow) * 28;

    let allCorners = [ corner1 , corner2 , targetPosition , currentPosition ];

    console.log(  currentPosition , " -currentPosition " , targetPosition , " -targetPosition " ,  corner1 , " -corner1  " , corner2, " -corner2 " );

    if ( currentPosition > corner1 ) {
        console.log("corner 1 is towards west");
        let i = currentPosition;
        while ( i > corner1) {
            if ( playableTiles.includes(i)) {
                 i = i - 1;
                 pathArray.push(i);
            } else {
                break;
            }
        }
        if ( i === corner1 + 1) {

        
            let nextTarget = "";
            allCorners.forEach((element) => {
                if ( sameVerticalLine( i , element)) {
                    nextTarget = element;
                }
            });

            

            
        }
    } else {
        console.log("corner 1 is towards east");
        let i = currentPosition;
        while (i < corner1) {
          if (playableTiles.includes(i)) {
            i = i + 1;
          } else {
            break;
          }
        }
    }

    if (currentPosition > corner2) {
      console.log("corner 2 is towards north");
    } else {
      console.log("corner 2 is towards south");
    }

}

console.log(findShortestPath(119,237,[]))