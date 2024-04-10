import axios from "axios";

export const handleChange = (e, stateSetter) => {
    const { name, value } = e.target;
// Perform validation based on the field name
    let isValid = true;
    if (
        [
            "sem1CGPA", "sem2CGPA", "sem3CGPA", "sem4CGPA", "sem5CGPA", "sem6CGPA", "sem7CGPA", "sem8CGPA",
            "sem1FD", "sem2FD", "sem3FD", "sem4FD", "sem5FD", "sem6FD", "sem7FD", "sem8FD",
            "sem1SD", "sem2SD", "sem3SD", "sem4SD", "sem5SD", "sem6SD", "sem7SD", "sem8SD",
            "sem1TD", "sem2TD", "sem3TD", "sem4TD", "sem5TD", "sem6TD", "sem7TD", "sem8TD",
            "sem1FND", "sem2FND", "sem3FND", "sem4FND", "sem5FND", "sem6FND", "sem7FND", "sem8FND"
        ].includes(name)
    ) {
        // Accepts decimal or float numbers
        isValid = /^\d*\.?\d*$/.test(value);
    } else if (name === "uid" || name === "phoneNo") {
        isValid = /^\d{0,10}$/.test(value); // Accepts up to 15 digits
    } else if (name === "studentName") {
        isValid = /^[a-zA-Z ]{0,20}$/.test(value); // Accepts up to 12 characters including alphabets and spaces
    } else if (name === "tempAddress" || name === "permAddress"){
        isValid = /^[a-zA-Z ]{0,50}$/.test(value);    
    }

    // Update state only if the value is valid or empty
    if (isValid || value === "") {
        stateSetter(value);
    }

};

export const handleSubmit = async (formData, resetFormState) => {
    try {
        const response = await axios.post("http://localhost:5000/students", formData);
        console.log("Form Submitted Successfully", response.data);
        resetFormState(); // Reset form fields after successful submission
    } catch (error) {
        console.error("Error submitting student data:", error);
    }
};
