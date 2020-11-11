{
    //Class reference
    const MethodReference = require("./Methods");
    //Regex patterns
    const NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}$');
    const ADDRESS_CITY_STATE_REGEX = RegExp('^[A-Za-z]{4,}$');
    const PINCODE_REGEX_REGEX = RegExp('^[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{2}\\s[0-9]{3}');
    const PHONE_NUMBER_REGEX = RegExp('^[6-9]{1}[0-9]{9}$');
    const EMAIL_REGEX_REGEX = RegExp('^[a-zA-Z0-9]+(((\\.[0-9])|(\\-[0-9])|(\\+[0-9])|[0-9]){0,})@[a-z0-9]{1,}(.)(([a-z0-9]{2,}(.))|([a-z0-9]{2,}(,)))[a-z0-9]{0,}$');
    const prompt = require('prompt-sync')();
    class ContactData {
        //Property
        firstName;
        lastName;
        address;
        city;
        state;
        zip;
        phoneNumber;
        email;

        constructor(...params) {
            if (!NAME_REGEX.test(params[0])) throw "Invalid first Name provided"
            {
                this.firstName = params[0];
            }
            if (!NAME_REGEX.test(params[1])) throw "Invalid last Name provided"
            {
                this.lastName = params[1];
            }
            if (!ADDRESS_CITY_STATE_REGEX.test(params[2])) throw "Invalid address  provided"
            {
                this.address = params[2];
            }
            if (!ADDRESS_CITY_STATE_REGEX.test(params[3])) throw "Invalid city Name provided"
            {
                this.city = params[3];
            }
            if (!ADDRESS_CITY_STATE_REGEX.test(params[4])) throw "Invalid satate Name provided"
            {
                this.state = params[4];
            }
            if (!PINCODE_REGEX_REGEX.test(params[5])) throw "Invalid pin code provided"
            {
                this.zip = params[5];
            }
            if (!PHONE_NUMBER_REGEX.test(params[6])) throw "Invalid phone number provided"
            {
                this.phoneNumber = params[6];
            }
            if (!EMAIL_REGEX_REGEX.test(params[7])) throw "Invalid email Id provided"
            {
                this.email = params[7];
            }
        }
        //toString() method
        toString() {
            return "First Name: " + this.firstName + ", Last Name: " + this.lastName + ", Address: " + this.address + ", City: " + this.city +
                ", State: " + this.state + ", Zip: " + this.zip + ", Phone Number: " + this.phoneNumber + ", Email: " + this.email;
        }
    }

    //Create an array to store contacts
    let ContactsArray = new Array();
    //Adding a new contact to Contact array check duplicate entry before adding to array
    let addContactsToAddressBook = () => {
        let firstName = prompt("Enter First Name: ");
        let lastName = prompt("Enter Last Name: ");

        if (ContactsArray.find((contact) => (contact.firstName == firstName && contact.lastName == lastName))) {
            console.log("Warning!!! Given contact already present in address book");
            return;
        }
        let address = prompt("Enter Address: ");
        let city = prompt("Enter City Name: ");
        let state = prompt("Enter State Name: ");
        let zip = prompt("Enter Zip Code: ");
        let phoneNumber = prompt("Enter Phone Number: ");
        let emailId = prompt("Enter Email id: ");
        try {
            let contact = new ContactData(firstName, lastName, address, city, state, zip, phoneNumber, emailId);
            ContactsArray.push(contact);
            console.log("Contact Added successfully to array:0\n" + contact.toString());
        } catch (e) {
            console.error(e);
        }
    }

    //view All Contacts available in Array
    let viewContacts = () => {
        console.log(ContactsArray.toString() + "\n");
    }
    let editContact = () => {
        console.log(ContactsArray.length);
        if (ContactsArray.length == 0) {
            console.log("No contacts Available in Array");
            return;
        }
        let firstNameEdit = prompt("Enter the first name whose contact you want to edit: ");
        let newFirstName = prompt("Enter new first name: ");
        let check = ContactsArray.find((contact) => contact.firstName == firstNameEdit);
        if (check == undefined) {
            console.log("No contact with given first name");
            return;
        }
        else {
            ContactsArray.find((contact) => contact.firstName == firstNameEdit).firstName = newFirstName;
        }
    }

    //Delete a contact
    let deleteContact = () => {
        //console.log(ContactsArray.length);
        if (ContactsArray.length == 0) {
            console.log("No contacts Available in Array");
            return;
        }
        let firstNamedelete = prompt("Enter the first name whose contact you want to delete: ");
        let check = ContactsArray.find((contact) => contact.firstName == firstNamedelete);
        if (check == undefined) {
            console.log("No contact with given first name");
            return;
        }
        else {
            //Filtering out contacts whose doesnt matches with given FirstName
            ContactsArray = ContactsArray.filter((contact) => contact.firstName != firstNamedelete);
        }
    }
    //Find total number of contacts
    let countOfContacts = () => {
        console.log("Total Number of contacts are : " + ContactsArray.reduce((totalCount, contact) => totalCount += 1, 0));
    }
    //Searching a given contact in Satate
    let searchContactInState = () => {
        let stateName = prompt("Enter state name: ");
        let firstName= prompt("Enter contact first name: ")
        let serachcontactByState = ContactsArray.filter(contact => contact.state == stateName).find(contact => contact.firstName == firstName);
        console.log("First contact found in given state: \n" +serachcontactByState);
    }

    console.log("Welcome To AddressBook Program through JavaScript");
    let choice = 0;
    //calling addContactsToAddressBook method to add new contact to Array
    do {
        choice = prompt("Enter \n1 : Add contact \n2 : Edit a Contact \n3 : Delete a contact \n4 : Total Number of contacts available" +
            "\n5 : Search contacts in given State \n6 : View all Contacts \n0 : Exit: ");
        switch (parseInt(choice)) {
            case 1:
                addContactsToAddressBook();
                break;
            case 2:
                editContact();
                break;
            case 3:
                deleteContact();
                break;
            case 4:
                countOfContacts();
                break;
            case 5:
                searchContactInState();
                break;
            case 6:
                viewContacts();
                break;
            default:
                console.log("Please! Try again...");
                break;
        }

    } while (choice != 0);

    exports.ContactData = ContactData;
}