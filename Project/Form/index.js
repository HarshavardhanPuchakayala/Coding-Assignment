const reset=document.getElementById("resetButton")
const submit=document.getElementById("submitButton")
submit.addEventListener("click", function(e) {
    e.preventDefault(); 
    if (document.getElementById("SurveyForm").checkValidity()) {
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let dob = document.getElementById("dob").value;
        let country = document.getElementById("country").value;
        let gender = "";
        let genderCheckboxes = document.getElementsByName("gender");
        for (let i = 0; i < genderCheckboxes.length; i++) {
            if (genderCheckboxes[i].checked) {
                gender += genderCheckboxes[i].value + " ";
            }
        }
        let profession = document.getElementById("profession").value;
        let email = document.getElementById("email").value;
        let mobile = document.getElementById("mobile").value;

        document.getElementById("popupFirstName").textContent = firstName;
        document.getElementById("popupLastName").textContent = lastName;
        document.getElementById("popupDob").textContent = dob;
        document.getElementById("popupCountry").textContent = country;
        document.getElementById("popupGender").textContent = gender;
        document.getElementById("popupProfession").textContent = profession;
        document.getElementById("popupEmail").textContent = email;
        document.getElementById("popupMobile").textContent = mobile;
        document.getElementById("popup").style.display = "block";
    }
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("SurveyForm").reset();
});
reset.addEventListener("click", function() {
    document.getElementById("SurveyForm").reset();
});

/*copy rights year*/
document.getElementById("year").innerHTML = (new Date().getFullYear());