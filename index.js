const scuberHqBlock = 42;

function distanceFromHqInBlocks(pickUpBlock){
   if(pickUpBlock > scuberHqBlock){
    return pickUpBlock - scuberHqBlock
   } else if (pickUpBlock < scuberHqBlock){
    return scuberHqBlock - pickUpBlock;
   }
}

function distanceFromHqInFeet(pickUpBlock){
    return distanceFromHqInBlocks(pickUpBlock)*264
}

function distanceTravelledInFeet(starting, destination){
    if(starting > destination){
        return (starting - destination)*264
    } else if (starting < destination){
        return (destination - starting)*264
    }
}

function calculatesFarePrice(starting, destination) {
    let distTravelled = distanceTravelledInFeet(starting, destination)
    if(distTravelled < 400){
        return 0;
    }else if (distTravelled > 400 && distTravelled < 2000){
        return (distTravelled - 400)* 0.02;
    }else if (distTravelled > 2000 && distTravelled < 2500){
        return 25;
    }else if (distTravelled > 2500){
        return 'cannot travel that far'
    }
}

