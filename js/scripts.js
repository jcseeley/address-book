// Business Logic for AddressBook ---------------------
function AddressBook() {
  this.contacts = {};
}

// Buinsess Logic for Contacts ------------------------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

