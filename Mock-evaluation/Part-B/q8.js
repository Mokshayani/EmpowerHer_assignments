let nums = [10, 3, 7, 20, 13, 2];
let squares=nums.map(num=>num*num);
console.log(squares);

let primes=nums.filter(num=>{
    if(num<2)
        return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0)
            return false;
    }
    return true;
});
console.log(primes);

let sum=nums.reduce((acc,current)=>acc+current,0);
console.log(sum);

let descending=nums.sort((a,b)=>b-a);
console.log(descending);