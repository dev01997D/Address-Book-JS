{
    //Regex patterns
    const NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}$');
    const ADDRESS_CITY_STATE_REGEX = RegExp('^[A-Za-z]{4,}$');
    const PINCODE_REGEX_REGEX = RegExp('^[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{2}\\s[0-9]{3}');
    const PHONE_NUMBER_REGEX = RegExp('^[6-9]{1}[0-9]{9}$');
    const EMAIL_REGEX_REGEX = RegExp('^[a-zA-Z0-9]+(((\\.[0-9])|(\\-[0-9])|(\\+[0-9])|[0-9]){0,})@[a-z0-9]{1,}(.)(([a-z0-9]{2,}(.))|([a-z0-9]{2,}(,)))[a-z0-9]{0,}$');
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
    try {
        let contact = new ContactData("Dev", "Nandan", "Barkatha", "Hazaribagh", "Jharkhand", 825323, 7870752948, "devnandan01997@gmail.com");
        console.log((contact.toString()));
    } catch (error) {
        console.error(error);
    }
}