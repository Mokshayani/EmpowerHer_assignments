let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
let {
    address: {
        city:c,
        geo: {lat:latitude, lng:longitude}
    }
}=user;
console.log(c);
console.log(latitude);
console.log(longitude)