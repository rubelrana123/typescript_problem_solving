const findSimilarNumber = (arr1 : number[], arr2 : number[]) : number[] => {
    const similarElement : number [] = [];

    for   (const num of arr1) {
        if(arr2.includes(num)) {
            similarElement.push(num)
        }
        
        
    }
        return similarElement;   
             
        
}
const arr1 : number []  = [1,2,3,4,5,6];
const arr2 : number[] = [2,4,6,7,8,9];
console.log( findSimilarNumber(arr1, arr2)
)