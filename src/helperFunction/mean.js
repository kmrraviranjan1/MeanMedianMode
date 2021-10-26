 export const mean = (data)=>{
    const sum=data.reduce((acc,curr)=>{
        return acc+curr
    },0)
    const noOfData=data.length;
    // mean is simple average of data set
    const mean = sum/noOfData
    // console.log('mean:', mean)
    return mean
}

