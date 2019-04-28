'use strict';

function Phone(brand, price, color, os) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.os = os;
    };

Phone.prototype.printInfo = function () {
    console.log("The phone brand is " +this.brand + ", colour is " + this.color + " and the price is " + this.price + ".")
    
}
Phone.prototype.systemInfo = function () {
    console.log("In model: " + this.brand + "standard system version is:" + this.os + ".")
}
console.log(Phone.prototype.printInfo);


var LG_V30 = new Phone("LG V30", 1600, "blue", "Android 9.0");
var Xiaomi_Mi9 = new Phone ("Xiaomi Mi9", 1900, "silver", "Android 8.6 Global");
var Huawei_P30 = new Phone("Huawei P30", 2400, "red", "Android 9.2");

LG_V30.printInfo();
Xiaomi_Mi9.printInfo();
Huawei_P30.printInfo();

LG_V30.systemInfo();
Xiaomi_Mi9.systemInfo();
Huawei_P30.systemInfo();
