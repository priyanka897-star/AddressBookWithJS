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
let newPerson = new Person("Swarali","More","Afgred","Sdghurr","Sfdfsfd","154432","919885485745","swara23@gmail.com");
console.log(newPerson.toString());
let addressBookArray = [];
addressBookArray[0] = newPerson;
addressBookArray[1] = person;
console.log(addressBookArray);
//Uc4-Editing City which has firstName = "Swarali"
let objIndex = addressBookArray.findIndex((obj => obj.firstName == "Swarali"))
console.log("Before Update : " + addressBookArray[objIndex]);
addressBookArray[objIndex].city = "Mumbai";
console.log("After Update : " + addressBookArray[objIndex]);

//Uc5-Remove contact based on FirstName
let person3 = new Person("Prachi", "Kadam", "Bgrfd", "Hyderabad", "Maharastra", "564763", "999876789654", "prachi43@gmail.com" );
addressBookArray[2] = person3;
console.log(addressBookArray);
let index = addressBookArray.findIndex((obj => obj.firstName == "Prachi"));
addressBookArray.splice(index, 1);
console.log("After Deletion");
console.log(addressBookArray);

//Uc6-Ability to find Number of Contacts in AddressBook
let count = addressBookArray.reduce((counter, person) => counter + 1, 0);
console.log(count);

//Uc7-Duplicate Check on Person Name
let person4 = new Person("Swarali","More","Afgred","Sdghurr","Sfdfsfd","154432","919885485745","swara23@gmail.com");

if(addressBookArray.findIndex(contact => contact.firstName == person4.firstName) == -1){
    addressBookArray[3] = person4;
}
else{
    console.log("Duplicate Entry");
}
console.log(addressBookArray);

//Uc8-Search Person in particular State
let person5 = new Person("Varnika", "Shetty", "Defds", "Chennai", "Tamilnadu", "654773", "767866748967", "varnika40@gmail.com");
addressBookArray[3] = person5;
console.log(addressBookArray);

let contacts = addressBookArray.filter(person => person.city == "Chennai");
console.log("Contacts from city 'Chennai' are : ")
console.log(contacts);
//UC9
let personFromState = addressBookArray.filter(person => person.state == "Tamilnadu");
console.log("Contacts from State 'Tamilnadu' are : ");
console.log(personFromState);

let contact = addressBookArray.filter(person5 => person5.city == "Chennai" || person5.state == "Tamilnadu" );
console.log("Contacts from city 'Chennai' or State tamilnadu  are : ")
console.log(contacts);

//UC10 count person state and City.

console.log("No.of Persons from city = 'Chennai' and state = 'Tamilnadu' : ");
let countByCity = addressBookArray.filter(person5 => person5.city =="chennai" ).reduce((count, person5) => count + 1,0);
console.log(countByCity);