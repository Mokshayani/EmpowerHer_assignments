function createCounter() {
    let count = 0;  

    return {
        increment: function() {
            count++;
            console.log("Incremented:", count);
        },
        decrement: function() {
            count--;
            console.log("Decremented:", count);
        },
        getCount: function() {
            console.log("Current Count:", count);
        }
    };
}

const counter = createCounter();

counter.increment();   
counter.increment();   
counter.getCount();    
counter.decrement();   
counter.getCount();    
