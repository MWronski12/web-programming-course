const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const gender = document.getElementById("gender");
const phoneNumber = document.getElementById("phone-number");
const currentAddress = document.getElementById("current-address");
const permanentAddress = document.getElementById("permanent-address");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");

fetch("/profile")
    .then(res => res.json())
    .then(profile => {
        firstName.innerHTML = profile.firstName;
        lastName.innerHTML = profile.lastName;
        gender.innerHTML = profile.gender;
        phoneNumber.innerHTML = profile.phoneNumber;
        currentAddress.innerHTML = profile.currentAddress;
        permanentAddress.innerHTML = profile.permanentAddress;
        email.innerHTML = profile.email;
        birthdate.innerHTML = profile.birthdate;
    })
