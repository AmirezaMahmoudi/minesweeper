export default {
    randomIntgers(n,min,max){
        let randomNumber = null;
        const result = [];
        randomNumber = Math.round(min+Math.random()*(max-min))
        while(n>0){
            randomNumber = Math.round(min+Math.random()*(max-min))
            if(result.indexOf(randomNumber)===-1){
                result.push(randomNumber)
                n--
            }
        }
        return result;
    },
    neighbors(index,colCount,rowCount){
        const neighbors = [];
       const {i,j} = this.convert2D(index, colCount)
    //   right side
       if(i+1<colCount){
            // right
            neighbors.push(index+1)
            // right down
            if(j+1<rowCount){
                neighbors.push(index+1+colCount)
            }
            // right up
            if(j>0){
                neighbors.push(index+1-colCount)
            }
       }
    // left side
        if(i>0){
            // left
            neighbors.push(index-1)
            //  left down
            if(j+1>rowCount){
                neighbors.push(index-1+colCount)
            }
            //  left up
            if(j>0){
                neighbors.push(index-1-colCount)

              }
        }
        // top row
        if(j>0){
            neighbors.push(index-colCount)
        }
        // bottom row
        if(j+1 < rowCount){
            neighbors.push(index+colCount)
        }
        return  neighbors;
    },
    convert2D(index, colCount){
        return {
            'i' : index % colCount,
            'j' : (index - (index % colCount))/colCount
        }
    }

}