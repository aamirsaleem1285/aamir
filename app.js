//q1
var Arrayitems = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }];

for (var i = 0; i < Arrayitems.length; i++) {
var priceOfall = Arrayitems[i].price * Arrayitems[i].quantity
    console.log(itemsArray[i].name + ": " + priceOfall)
    var totalPrices = (priceOfall + priceOfall);
}
console.log(totalPrices)

//q 2
const persondetail = { name: "Aamir", email: "aamirsaleem1286@gmail.com", password: "123456", age:21, gender: "male", country: "Pakistan" };
if ('age' || 'country' in Object) {
    console.log("available");
} else {
    console.log("not avaiable");
}

if ('firstName' && 'lastName' in Object) {
    console.log("name was found")
} else {
    console.log("Sorry name was not found")
}

//q 3
var arr = [];
function information(name, age, gender, county) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.gender = gender;
    this.country= country;
}
array[] = new information("Aamir", 19, "@gmail.com", "male","pakistan");
array[1] = new information("Ahmed", 19, "@gmail.com", "male", "pakistan");
array[2] = new information("Ahsan", 19, "@gmail.com", "male", "pakistan");
array[3] = new information("raza", 19, "@gmail.com", "male", "pakistan");
for (var i = 0; i < arr.length; i++) {
    console.log(array[i])
}

//q 4
function information(name,email, gender, address) {
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.address = address;
    this.country = country
}
var info = new information("Aamir", "aamirsaleem1286@gmail.com", "male", "gulshan e iqbal", "pakistan")
document.write(info);




















