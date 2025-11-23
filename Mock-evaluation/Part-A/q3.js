function sumAll(...numbers){
    let sum=0;
    for(let num of numbers){
        sum+=num;
    }
    return sum;
}
console.log(sumAll(1,2,3,4))