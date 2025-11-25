let products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
];

let productnames = products.map(function(item){
    return item.name;
});
console.log(productnames);

products.forEach(function(item){
    if(item.price > 50){
        console.log(item.name + " is above $50");
    } else {
        console.log(item.name + " is below $50");
    }
});
