class Person {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName() { return this._firstName; }
    set firstName(fname) {
        let nameRegex = new RegExp("^[A-Z]{1}[a-z]{3,}$");
        if (nameRegex.test(fname)) {
            this._firstName = fname;
        }
        else {
            throw " First Name is incorrect format";
        }
    }
    get lastName() { return this._lastName; }
    set lastName(lname) {
        let nameRegex = new RegExp("^[A-Z]{1}[a-z]{3,}$");
        if (nameRegex.test(lname)) {
            this._lastName = lname;
        }
        else {
            throw " Last Name is incorrect format";
        }
    }
    get address() { return this._address;}
    set address(add) {
        let addRegex = new RegExp("^[A-Za-z]{4,}$");
        if( addRegex.test(add)){
            this._address = add;
        }
        else{
            throw "Address is incorrect format";
        }
    }
    
    get city() { return this._city;}
    set city(cityName) {
        let cityRegex = new RegExp("^[A-Za-z]{4,}$");
        if( cityRegex.test(cityName)){
            this._city = cityName;
        }
        else{
            throw "City is incorrect format";
        }
    }

    get state() { return this._state;}
    set state(stateName) {
        let stateRegex = new RegExp("^[A-Za-z]{4,}$");
        if( stateRegex.test(stateName)){
            this._state = stateName;
        }
        else{
            throw "State is incorrect format";
        }
    }

    get zip(){return this._zip;}
    set zip(zipNo){
        let zipRegex = new RegExp("^[1-9][0-9]{5}$");
        if(zipRegex.test(zipNo)){
            this._zip = zipNo;
        }else{
            throw "zip code is incorrect format";
        }
    }
    get phoneNumber(){ return this._phoneNumber;}
    set phoneNumber(phoneNo){
        let phoneRegex = new RegExp("^[0-9]{2}[0-9]{10}$");
        if(phoneRegex.test(phoneNo)){
            this._phoneNumber = phoneNo;
        }else{
            throw "PhoneNumber is incorrect format";
        }
    }
    get email(){ return this._email;}
    set email(e){
        let emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*");
        if(emailRegex.test(e)){
            this._email = e;
        }else{
            console.log("Email is incorrect format");
        }
    }

    toString() {
        return "First Name =" + this.firstName + ", Last Name = " + this.lastName + ",Address = " + this.address + ",City = " + this.city + ",State = " + this.state + ",Zip = " + this.zip + ",PhoneNumber = " + this.phoneNumber + ",Email = " + this.email;
    }
}

let person = new Person("Priyanka","More","Adsfsd","Xsfsdfe","Sfdgfr","454432","981254857445","priya123@gmail.com");
console.log(person.toString());
try {

    person.firstName = "p";
}
catch (e) {
    console.error(e);
}
try {
    person.lastName = "l";
    
}
catch (e) {
    console.error(e);
}

try {
    person.address = "a";
    console.log(person.address);
}
catch (e) {
    console.error(e);
}

try {
    person.city = "a";
}
catch (e) {
    console.error(e);
}
try {
    person.state = "a";
    
}
catch (e) {
    console.error(e);
}
try {
    person.zip = "454";
    
}
catch (e) {
    console.error(e);
}
try {
    person.phoneNumber = "56765845";
}
catch (e) {
    console.error(e);
}
try {
    person.email = "ngf";
   
}
catch (e) {
    console.error(e);
}
let newPerson = new Person("Swarali","More","Afgred","Bdsget","Sfdfsfd","154432","919885485745","swara23@gmail.com");
console.log(newPerson.toString());
let addressBookArray = [];
addressBookArray[0] = newPerson;
addressBookArray[1] = person;
console.log(addressBookArray);

