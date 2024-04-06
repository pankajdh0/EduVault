import React, { Component } from "react";
import axios from "axios";
import logo from "../assets/Spit.png"
import "../components/styles.css";

class StudentInformation extends React.Component {
    state = {
        sem: "",
        class: "",
        uid: "",
        studentName: "",
        photograph:"",
        branch: "",
        dob: "",
        bloodGroup: "",
        tempAddress: "",
        permAddress: "",
        fatherPhone: "",
        motherPhone: "",
        studentPhone: "",
        fatherOccupation: "",
        motherOccupation: "",
        hobbies: "",
        strengthAndWeaknesses: "",
        Result:"",
        sem1CGPA: "",
        sem2CGPA: "",
        sem3CGPA: "",
        sem4CGPA: "",
        sem5CGPA: "",
        sem6CGPA: "",
        sem7CGPA: "",
        sem8CGPA: "",
        sem1FA: "",
        sem2FA: "",
        sem3FA: "",
        sem4FA: "",
        sem5FA: "",
        sem6FA: "",
        sem7FA: "",
        sem8FA: "",
        sem1SA: "",
        sem2SA: "",
        sem3SA: "",
        sem4SA: "",
        sem5SA: "",
        sem6SA: "",
        sem7SA: "",
        sem8SA: "",
        sem1TA: "",
        sem2TA: "",
        sem3TA: "",
        sem4TA: "",
        sem5TA: "",
        sem6TA: "",
        sem7TA: "",
        sem8TA: "",
        sem1FrA: "",
        sem2FrA: "",
        sem3FrA: "",
        sem4FrA: "",
        sem5FrA: "",
        sem6FrA: "",
        sem7FrA: "",
        sem8FrA: "",
        sem1FD: "",
        sem2FD: "",
        sem3FD: "",
        sem4FD: "",
        sem5FD: "",
        sem6FD: "",
        sem7FD: "",
        sem8FD: "",
        sem1SD: "",
        sem2SD: "",
        sem3SD: "",
        sem4SD: "",
        sem5SD: "",
        sem6SD: "",
        sem7SD: "",
        sem8SD: "",
        sem1TD: "",
        sem2TD: "",
        sem3TD: "",
        sem4TD: "",
        sem5TD: "",
        sem6TD: "",
        sem7TD: "",
        sem8TD: "",
        sem1FND: "",
        sem2FND: "",
        sem3FND: "",
        sem4FND: "",
        sem5FND: "",
        sem6FND: "",
        sem7FND: "",
        sem8FND: "",
        areaOfInterest: "",
        goalsFuturePlans: "",
        date1: "",
        award1: "",
        collegeStateNationalInternational1: "",
        date2: "",
        award2: "",
        collegeStateNationalInternational2: "",
        date3: "",
        award3: "",
        collegeStateNationalInternational3: "",
        date4: "",
        award4: "",
        collegeStateNationalInternational4: "",
        anyOther: "",
        signature: "",
        errors:{}
    };


    // Error messages mapping
    errorMessages = {
        sem: 'Semester is required.',
        class: 'Class is required.',
        uid: 'UID is required.',
        studentName: 'Name is required.',
        photograph:'Photograph is required. ',
        branch: "Branch is required. ",
        dob: "DOB is required. ",
        bloodGroup: "BloodGroup is required. ",
        tempAddress: "Address is required. ",
        permAddress: "Address is required. ",
        fatherPhone: "Phone no is required. ",
        motherPhone: "Phone no is required. ",
        studentPhone: "Phone no is required. ",
        fatherOccupation: "Occupation is required. ",
        motherOccupation: "Occupation is required. ",
        hobbies: "hobbies is required",
        strengthAndWeaknesses: "Strength and weakness is required. ",
        Result:"Result is required. ",
        areaOfInterest: " Area of Interest is reuired. ",
        goals: "Goals is required. ",
        anyOther: "This is required (type NA if not). ",
        signature: "Signature is required. ",
        // Add other fields and their error messages here
    };

    handleChange = (e) => {
        const { name, value } = event.target;
           
        // Error validation for empty fields
        const errors = { ...this.state.errors };
        if (value.trim() === '') {
            errors[name] = this.errorMessages[name] || 'This field is required.';
        } else {
            errors[name] = ''; // Clear error if field is not empty
        }

        this.setState({
            [name]: value,
            errors
        });

    // Validate UID field
       if (name === 'uid') {

        if (!/[a-zA-Z]/.test(value)) {
            this.setState({ [name]: value });
        }else {
            this.setState({ [name]: '' });
        } 
       }
       else{
        this.setState({ [name]: value });
       }
        
        
    
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        
        // Error validation for empty fields
    const errors = {};
    for (const key in this.state) {
        if (this.state.hasOwnProperty(key) && key !== 'errors') {
            let value = this.state[key];
            if (typeof value !== 'string') {
                value = String(value); // Convert non-string values to string
            }
            if (value.trim() === '') {
                errors[key] = this.errorMessages[key] || 'This field is required.';
            }
        }
    }
    if (Object.keys(errors).length > 0) {
        this.setState({ errors });
      //  console.log('Please fill in all required fields.');
        return; // Exit submission if any field is empty
    }

        try {
            const response = await axios.post("http://localhost:5000/students", this.state);
            console.log("Student data submitted successfully:", response.data);
            // TO Reset form fields after successful submission 
            this.setState({
                sem: "",
                class: "",
                uid: "",
                studentName: "",
                branch: "",
                dob: "",
                bloodGroup: "",
                tempAddress: "",
                permAddress: "",
                fatherPhone: "",
                motherPhone: "",
                studentPhone: "",
                fatherOccupation: "",
                motherOccupation: "",
                hobbies: "",
                strengthAndWeaknesses: "",
                sem1CGPA: "",
                sem2CGPA: "",
                sem3CGPA: "",
                sem4CGPA: "",
                sem5CGPA: "",
                sem6CGPA: "",
                sem7CGPA: "",
                sem8CGPA: "",
                sem1FA: "",
                sem2FA: "",
                sem3FA: "",
                sem4FA: "",
                sem5FA: "",
                sem6FA: "",
                sem7FA: "",
                sem8FA: "",
                sem1SA: "",
                sem2SA: "",
                sem3SA: "",
                sem4SA: "",
                sem5SA: "",
                sem6SA: "",
                sem7SA: "",
                sem8SA: "",
                sem1TA: "",
                sem2TA: "",
                sem3TA: "",
                sem4TA: "",
                sem5TA: "",
                sem6TA: "",
                sem7TA: "",
                sem8TA: "",
                sem1FrA: "",
                sem2FrA: "",
                sem3FrA: "",
                sem4FrA: "",
                sem5FrA: "",
                sem6FrA: "",
                sem7FrA: "",
                sem8FrA: "",
                sem1FD: "",
                sem2FD: "",
                sem3FD: "",
                sem4FD: "",
                sem5FD: "",
                sem6FD: "",
                sem7FD: "",
                sem8FD: "",
                sem1SD: "",
                sem2SD: "",
                sem3SD: "",
                sem4SD: "",
                sem5SD: "",
                sem6SD: "",
                sem7SD: "",
                sem8SD: "",
                sem1TD: "",
                sem2TD: "",
                sem3TD: "",
                sem4TD: "",
                sem5TD: "",
                sem6TD: "",
                sem7TD: "",
                sem8TD: "",
                sem1FND: "",
                sem2FND: "",
                sem3FND: "",
                sem4FND: "",
                sem5FND: "",
                sem6FND: "",
                sem7FND: "",
                sem8FND: "",
                areaOfInterest: "",
                goalsFuturePlans: "",
                date1: "",
                award1: "",
                collegeStateNationalInternational1: "",
                date2: "",
                award2: "",
                collegeStateNationalInternational2: "",
                date3: "",
                award3: "",
                collegeStateNationalInternational3: "",
                date4: "",
                award4: "",
                collegeStateNationalInternational4: "",
                anyOther: "",
                signature: ""
            });
            
        } catch (error) {
            console.error("Error submitting student data:", error);
        }
    };
        

    

    render() {


        const { errors } = this.state;

        return (

            <>

                <div className="container-fluid" style={{ height: "100%", backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', backgroundSize: 'inherit' }}>
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-md-8" style={{ boxShadow: "white 0px 1px 70px", margin: "20px" }}>

                            <div className="" style={{ color: "white", border: " 10px solid black", backgroundColor: "#1d1919" }}>

                                <div className=" d-flex justify-content-center align-items-center mt-4">
                                    <img src={logo} alt="spit logo" className="img-fluid" style={{ width: "900px" }} />
                                </div>

                                <div className="text-center mt-3">
                                    <h2 className="mt-3 fs-4 fw-bold underline" >DEPARTMENT OF COMPUTER ENGINEERING</h2>
                                    <h2 className="fs-4 fw-bolder underline">STUDENT INFORMATION FORM</h2>
                                </div>
                            </div>

                            <form onSubmit={this.handleSubmit} className="custom-form" style={{ margin: "7px" }}>
                                <div className=" mt-4 row mb-3 bg-light" >
                                    <div className="row mb-3 justify-content-center">
                                        <div className="col-md-4">
                                            <label className="col-form-label text-end">SEM:</label>
                                            <input type="text" className="form-control" name="sem" value={this.state.sem} onChange={this.handleChange} />
                                            {errors.sem && <div className="text-danger">{errors.sem}</div>}
                                            
                                        </div>

                                        <div className="col-md-4">
                                            <label className="col-form-label text-end">CLASS:</label>
                                            <input type="text" className="form-control" name="class" value={this.state.class} onChange={this.handleChange} />
                                            {errors.class && <div className="text-danger">{errors.class}</div>}

                                        </div>

                                        <div className="col-md-4">
                                            <label className="col-form-label text-end">UID NO:</label>
                                            <input type="text" className="form-control" name="uid" value={this.state.uid} onChange={this.handleChange} maxLength={10}/>
                                            {errors.uid && <div className="text-danger">{errors.uid}</div>}

                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <label className="col-form-label text-end">Name of the Student:</label>
                                            <input type="text" className="form-control" name="studentName" value={this.state.studentName} onChange={this.handleChange} />
                                            {errors.studentName && <div className="text-danger">{errors.studentName}</div>}

                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <label className="col-form-label text-end" >Photograph:</label>
                                            <input type="file" className="form-control" name="photograph" value={this.state.photograph} accept=".pdf,.jpg,.jpeg" onChange={this.handleChange}/>
                                            {errors.photograph && <div className="text-danger">{errors.photograph}</div>}


                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-end ">Date of Birth:</label>
                                            <input type="text" className="form-control" name="dob" value={this.state.dob} onChange={this.handleChange} />
                                            {errors.dob && <div className="text-danger">{errors.dob}</div>}

                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-end">Blood Group:</label>
                                            <input type="text" className="form-control" name="bloodGroup" value={this.state.bloodGroup} onChange={this.handleChange} />
                                            {errors.bloodGroup && <div className="text-danger">{errors.bloodGroup}</div>}

                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <label className="col-form-label text-end">Branch:</label>
                                            <input type="text" className="form-control" name="branch" value={this.state.branch} onChange={this.handleChange} />
                                            {errors.branch && <div className="text-danger">{errors.branch}</div>}

                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <label className="col-form-label text-end">Temporary Address:</label>
                                            <input type="text" className="form-control" name="tempAddress" value={this.state.tempAddress} onChange={this.handleChange} />
                                            {errors.tempAddress && <div className="text-danger">{errors.tempAddress}</div>}

                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <label className="col-form-label text-end">Permanent Address:</label>
                                            <input type="text" className="form-control" name="permAddress" value={this.state.permAddress} onChange={this.handleChange} />
                                            {errors.permAddress && <div className="text-danger">{errors.permAddress}</div>}

                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <label className="col-form-label text-end">Father's Occupation:</label>
                                            <input type="text" className="form-control" name="fatherOccupation" value={this.state.fatherOccupation} onChange={this.handleChange} />
                                            {errors.fatherOccupation && <div className="text-danger">{errors.fatherOccupation}</div>}

                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <label className="col-form-label text-end">Mother's Occupation:</label>
                                            <input type="text" className="form-control" name="motherOccupation" value={this.state.motherOccupation} onChange={this.handleChange} />
                                            {errors.motherOccupation && <div className="text-danger">{errors.motherOccupation}</div>}

                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <label className="col-form-label text-end">Hobbies:</label>
                                            <input type="text" className="form-control" name="hobbies" value={this.state.hobbies} onChange={this.handleChange} />
                                            {errors.hobbies && <div className="text-danger">{errors.hobbies}</div>}

                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <label className="col-form-label text-end">Strength and Weaknesses:</label>
                                            <input type="text" className="form-control" name="strengthAndWeaknesses" value={this.state.strengthAndWeaknesses} onChange={this.handleChange} />
                                            {errors.strengthAndWeaknesses && <div className="text-danger">{errors.strengthAndWeaknesses}</div>}

                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <label className="col-form-label text-end">Result: Final Mark (with percentage):</label>
                                            <input type="text" className="form-control" name="Result" value={this.state.Result} onChange={this.handleChange} />
                                            {errors.Result && <div className="text-danger">{errors.Result}</div>}

                                        </div>
                                    </div>
                                    <div className="row mb-3 justify-content-center">
                                        <div className="col-md-12">
                                            <table className="table table-bordered" style={{ marginTop: "20px" }}>
                                                <thead>

                                                    <tr>
                                                        <th></th>
                                                        <th>SEM I</th>
                                                        <th>SEM II</th>
                                                        <th>SEM III</th>
                                                        <th>SEM IV</th>
                                                        <th>SEM V</th>
                                                        <th>SEM VI</th>
                                                        <th>SEM VII</th>
                                                        <th>SEM VIII</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>CGPA</td>
                                                        <td>
                                                            <input type="text" name="sem1CGPA" className=" col-md-11" value={this.state.sem1CGPA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem2CGPA" className=" col-md-11" value={this.state.sem2CGPA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem3CGPA" className=" col-md-11" value={this.state.sem3CGPA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem4CGPA" className=" col-md-11" value={this.state.sem4CGPA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem5CGPA" className=" col-md-11" value={this.state.sem5CGPA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem6CGPA" className=" col-md-11" value={this.state.sem6CGPA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem7CGPA" className=" col-md-11" value={this.state.sem7CGPA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem8CGPA" className=" col-md-11" value={this.state.sem8CGPA} onChange={this.handleChange} />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Form part 2*/}
                                    <div className=" row mb-3">
                                        <div className=" col-md-12">
                                            <label className="col-form-label text-end">KT information: Write name of subject(s) only</label>
                                        </div>
                                    </div>

                                    <div className="row mb-3 justify-content-center">
                                        <div className=" col-md-12">
                                            <table className="table table-bordered" style={{ marginTop: "20px" }}>
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>SEM I</th>
                                                        <th>SEM II</th>
                                                        <th>SEM III</th>
                                                        <th>SEM IV</th>
                                                        <th>SEM V</th>
                                                        <th>SEM VI</th>
                                                        <th>SEM VII</th>
                                                        <th>SEM VIII</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>First Attempt</td>
                                                        <td>
                                                            <input type="text" name="sem1FA" className="col-md-11" value={this.state.sem1FA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem2FA" className="col-md-11" value={this.state.sem2FA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem3FA" className="col-md-11" value={this.state.sem3FA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem4FA" className="col-md-11" value={this.state.sem4FA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem5FA" className="col-md-11" value={this.state.sem5FA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem6FA" className="col-md-11" value={this.state.sem6FA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem7FA" className="col-md-11" value={this.state.sem7FA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem8FA" className="col-md-11" value={this.state.sem8FA} onChange={this.handleChange} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Second Attempt</td>
                                                        <td>
                                                            <input type="text" name="sem1SA" className="col-md-11" value={this.state.sem1SA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem2SA" className="col-md-11" value={this.state.sem2SA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem3SA" className="col-md-11" value={this.state.sem3SA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem4SA" className="col-md-11" value={this.state.sem4SA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem5SA" className="col-md-11" value={this.state.sem5SA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem6SA" className="col-md-11" value={this.state.sem6SA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem7SA" className="col-md-11" value={this.state.sem7SA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem8SA" className="col-md-11" value={this.state.sem8SA} onChange={this.handleChange} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Third Attempt</td>
                                                        <td>
                                                            <input type="text" name="sem1TA" className="col-md-11" value={this.state.sem1TA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem2TA" className="col-md-11" value={this.state.sem2TA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem3TA" className="col-md-11" value={this.state.sem3TA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem4TA" className="col-md-11" value={this.state.sem4TA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem5TA" className="col-md-11" value={this.state.sem5TA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem6TA" className="col-md-11" value={this.state.sem6TA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem7TA" className="col-md-11" value={this.state.sem7TA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem8TA" className="col-md-11" value={this.state.sem8TA} onChange={this.handleChange} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fourth Attempt</td>
                                                        <td>
                                                            <input type="text" name="sem1FrA" className="col-md-11" value={this.state.sem1FrA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem2FrA" className="col-md-11" value={this.state.sem2FrA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem3FrA" className="col-md-11" value={this.state.sem3FrA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem4FrA" className="col-md-11" value={this.state.sem4FrA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem5FrA" className="col-md-11" value={this.state.sem5FrA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem6FrA" className="col-md-11" value={this.state.sem6FrA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem7FrA" className="col-md-11" value={this.state.sem7FrA} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem8FrA" className="col-md-11" value={this.state.sem8FrA} onChange={this.handleChange} />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className=" col-md-12">
                                            <label>Defaulter’s subject wise/total attendance details:</label>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <table className="table table-bordered" style={{ marginTop: "20px" }}>
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>SEM I</th>
                                                        <th>SEM II</th>
                                                        <th>SEM III</th>
                                                        <th>SEM IV</th>
                                                        <th>SEM V</th>
                                                        <th>SEM VI</th>
                                                        <th>SEM VII</th>
                                                        <th>SEM VIII</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Attendance After First Defaulters</td>
                                                        <td>
                                                            <input type="text" name="sem1FD" className=" col-md-11" value={this.state.sem1FD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem2FD" className=" col-md-11" value={this.state.sem2FD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem3FD" className=" col-md-11" value={this.state.sem3FD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem4FD" className=" col-md-11" value={this.state.sem4FD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem5FD" className=" col-md-11" value={this.state.sem5FD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem6FD" className=" col-md-11" value={this.state.sem6FD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem7FD" className=" col-md-11" value={this.state.sem7FD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem8FD" className=" col-md-11" value={this.state.sem8FD} onChange={this.handleChange} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Attendance After Second Defaulters</td>
                                                        <td>
                                                            <input type="text" name="sem1SD" className=" col-md-11" value={this.state.sem1SD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem2SD" className=" col-md-11" value={this.state.sem2SD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem3SD" className=" col-md-11" value={this.state.sem3SD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem4SD" className=" col-md-11" value={this.state.sem4SD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem5SD" className=" col-md-11" value={this.state.sem5SD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem6SD" className=" col-md-11" value={this.state.sem6SD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem7SD" className=" col-md-11" value={this.state.sem7SD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem8SD" className=" col-md-11" value={this.state.sem8SD} onChange={this.handleChange} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Attendance After Third Defaulters</td>
                                                        <td>
                                                            <input type="text" name="sem1TD" className=" col-md-11" value={this.state.sem1TD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem2TD" className=" col-md-11" value={this.state.sem2TD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem3TD" className=" col-md-11" value={this.state.sem3TD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem4TD" className=" col-md-11" value={this.state.sem4TD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem5TD" className=" col-md-11" value={this.state.sem5TD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem6TD" className=" col-md-11" value={this.state.sem6TD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem7TD" className=" col-md-11" value={this.state.sem7TD} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem8TD" className=" col-md-11" value={this.state.sem8TD} onChange={this.handleChange} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Attendance After Final Defaulters</td>
                                                        <td>
                                                            <input type="text" name="sem1FND" className=" col-md-11" value={this.state.sem1FND} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem2FND" className=" col-md-11" value={this.state.sem2FND} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem3FND" className=" col-md-11" value={this.state.sem3FND} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem4FND" className=" col-md-11" value={this.state.sem4FND} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem5FND" className=" col-md-11" value={this.state.sem5FND} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem6FND" className=" col-md-11" value={this.state.sem6FND} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem7FND" className=" col-md-11" value={this.state.sem7FND} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="sem8FND" className=" col-md-11" value={this.state.sem8FND} onChange={this.handleChange} />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className=" col-md-12">
                                            <label className="col-form-label text-end">Area of interest:</label>
                                            <input type="text" className=" form-control" name="AreaOfInterest" />
                                            {errors.areaOfInterest && <div className="text-danger">{errors.areaOfInterest}</div>}

                                            <label className="col-form-label text-end">Goals/Future Plans (After BE):</label>
                                            <input type="text" className="form-control" name="goalsFuturePlans" />
                                            {errors.goals && <div className="text-danger">{errors.goals}</div>}
                                        </div>
                                    </div>

                                    <div className="row mb-3 mt-2">
                                        <div className=" col-md-12">
                                            <label>Achievements:</label>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className=" col-md-12">
                                            <table className="table table-bordered" style={{ marginTop: "20px" }}>
                                                <thead>
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>Award</th>
                                                        <th>College/State/National/International</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <input type="text" name="date1" className=" col-md-11" value={this.state.date1} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="award1" className=" col-md-11" value={this.state.award1} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="collegeStateNationalInternational1" className="col-md-11" value={this.state.collegeStateNationalInternational1} onChange={this.handleChange} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="text" name="date2" className=" col-md-11" value={this.state.date2} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="award2" className=" col-md-11" value={this.state.award2} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="collegeStateNationalInternational2" className="col-md-11" value={this.state.collegeStateNationalInternational2} onChange={this.handleChange} />
                                                        </td>
                                                    </tr><tr>
                                                        <td>
                                                            <input type="text" name="date3" className=" col-md-11" value={this.state.date3} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="award3" className=" col-md-11" value={this.state.award3} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="collegeStateNationalInternational3" className="col-md-11" value={this.state.collegeStateNationalInternational3} onChange={this.handleChange} />
                                                        </td>
                                                    </tr><tr>
                                                        <td>
                                                            <input type="text" name="date4" className=" col-md-11" value={this.state.date4} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="award4" className=" col-md-11" value={this.state.award4} onChange={this.handleChange} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="collegeStateNationalInternational4" className="col-md-11" value={this.state.collegeStateNationalInternational4} onChange={this.handleChange} />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="row mb-3 ">
                                        <div className=" col-md-12">
                                            <label className="col-form-label text-end">Any other:</label>
                                            <input type="text" className=" form-control" name="anyOther" value={this.state.anyOther} onChange={this.handleChange} />
                                            {errors.anyOther && <div className="text-danger">{errors.anyOther}</div>}

                                            <label className="col-form-label text-end mt-2">Signature of student</label>
                                            <input type="file" className=" form-control" name="signature" accept=".pdf,.jpg,.jpeg" onChange={this.handleChange} />
                                            {errors.signature && <div className="text-danger">{errors.signature}</div>}

                                            <br />

                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary container d-flex justify-content-center align-content-center">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default StudentInformation;
