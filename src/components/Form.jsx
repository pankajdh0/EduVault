import React, { useState } from "react";
import axios from "axios";
import { handleChange, handleSubmit } from "./formUtils";
import logo from "../assets/Spit.png";
import "../components/styles.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function StudentInformation() {
    const [sem, setSem] = useState("");
    const [classValue, setClass] = useState("");
    const [uid, setUid] = useState("");
    const [studentName, setStudentName] = useState("");
    const [photo, setPhoto] = useState(null);
    const [photoError, setPhotoError] = useState('');
    const [phoneNo, setPhoneNo] = useState("");
    const [branch, setBranch] = useState("");
    const [dob, setDob] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [tempAddress, setTempAddress] = useState("");
    const [permAddress, setPermAddress] = useState("");
    const [fatherOccupation, setFatherOccupation] = useState("");
    const [motherOccupation, setMotherOccupation] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [strengthAndWeaknesses, setStrengthAndWeaknesses] = useState("");
    const [sem1CGPA, setSem1CGPA] = useState("");
    const [sem2CGPA, setSem2CGPA] = useState("");
    const [sem3CGPA, setSem3CGPA] = useState("");
    const [sem4CGPA, setSem4CGPA] = useState("");
    const [sem5CGPA, setSem5CGPA] = useState("");
    const [sem6CGPA, setSem6CGPA] = useState("");
    const [sem7CGPA, setSem7CGPA] = useState("");
    const [sem8CGPA, setSem8CGPA] = useState("");
    const [sem1FA, setSem1FA] = useState("");
    const [sem2FA, setSem2FA] = useState("");
    const [sem3FA, setSem3FA] = useState("");
    const [sem4FA, setSem4FA] = useState("");
    const [sem5FA, setSem5FA] = useState("");
    const [sem6FA, setSem6FA] = useState("");
    const [sem7FA, setSem7FA] = useState("");
    const [sem8FA, setSem8FA] = useState("");
    const [sem1SA, setSem1SA] = useState("");
    const [sem2SA, setSem2SA] = useState("");
    const [sem3SA, setSem3SA] = useState("");
    const [sem4SA, setSem4SA] = useState("");
    const [sem5SA, setSem5SA] = useState("");
    const [sem6SA, setSem6SA] = useState("");
    const [sem7SA, setSem7SA] = useState("");
    const [sem8SA, setSem8SA] = useState("");
    const [sem1TA, setSem1TA] = useState("");
    const [sem2TA, setSem2TA] = useState("");
    const [sem3TA, setSem3TA] = useState("");
    const [sem4TA, setSem4TA] = useState("");
    const [sem5TA, setSem5TA] = useState("");
    const [sem6TA, setSem6TA] = useState("");
    const [sem7TA, setSem7TA] = useState("");
    const [sem8TA, setSem8TA] = useState("");
    const [sem1FrA, setSem1FrA] = useState("");
    const [sem2FrA, setSem2FrA] = useState("");
    const [sem3FrA, setSem3FrA] = useState("");
    const [sem4FrA, setSem4FrA] = useState("");
    const [sem5FrA, setSem5FrA] = useState("");
    const [sem6FrA, setSem6FrA] = useState("");
    const [sem7FrA, setSem7FrA] = useState("");
    const [sem8FrA, setSem8FrA] = useState("");
    const [sem1FD, setSem1FD] = useState("");
    const [sem2FD, setSem2FD] = useState("");
    const [sem3FD, setSem3FD] = useState("");
    const [sem4FD, setSem4FD] = useState("");
    const [sem5FD, setSem5FD] = useState("");
    const [sem6FD, setSem6FD] = useState("");
    const [sem7FD, setSem7FD] = useState("");
    const [sem8FD, setSem8FD] = useState("");
    const [sem1SD, setSem1SD] = useState("");
    const [sem2SD, setSem2SD] = useState("");
    const [sem3SD, setSem3SD] = useState("");
    const [sem4SD, setSem4SD] = useState("");
    const [sem5SD, setSem5SD] = useState("");
    const [sem6SD, setSem6SD] = useState("");
    const [sem7SD, setSem7SD] = useState("");
    const [sem8SD, setSem8SD] = useState("");
    const [sem1TD, setSem1TD] = useState("");
    const [sem2TD, setSem2TD] = useState("");
    const [sem3TD, setSem3TD] = useState("");
    const [sem4TD, setSem4TD] = useState("");
    const [sem5TD, setSem5TD] = useState("");
    const [sem6TD, setSem6TD] = useState("");
    const [sem7TD, setSem7TD] = useState("");
    const [sem8TD, setSem8TD] = useState("");
    const [sem1FND, setSem1FND] = useState("");
    const [sem2FND, setSem2FND] = useState("");
    const [sem3FND, setSem3FND] = useState("");
    const [sem4FND, setSem4FND] = useState("");
    const [sem5FND, setSem5FND] = useState("");
    const [sem6FND, setSem6FND] = useState("");
    const [sem7FND, setSem7FND] = useState("");
    const [sem8FND, setSem8FND] = useState("");
    const [AreaOfInterest, setAreaOfInterest] = useState("");
    const [goalsFuturePlans, setGoalsFuturePlans] = useState("");
    const [date1, setDate1] = useState("");
    const [award1, setAward1] = useState("");
    const [collegeStateNationalInternational1, setCollegeStateNationalInternational1] = useState("");
    const [date2, setDate2] = useState("");
    const [award2, setAward2] = useState("");
    const [collegeStateNationalInternational2, setCollegeStateNationalInternational2] = useState("");
    const [date3, setDate3] = useState("");
    const [award3, setAward3] = useState("");
    const [collegeStateNationalInternational3, setCollegeStateNationalInternational3] = useState("");
    const [date4, setDate4] = useState("");
    const [award4, setAward4] = useState("");
    const [collegeStateNationalInternational4, setCollegeStateNationalInternational4] = useState("");
    const [anyOther, setAnyOther] = useState("");
    const [signature, setSignature] = useState(null);
    const [signatureError, setSignatureError] = useState('');


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (photo && photo.size > 500 * 1024) {
            setPhoto(null);
            setPhotoError('Please upload a photo below 500kb.');
            return;
        }
        const formData = {
            sem, class: classValue,
            uid, studentName, phoneNo,
            branch, dob, bloodGroup,
            tempAddress, permAddress,
            fatherOccupation, motherOccupation,
            hobbies, strengthAndWeaknesses,
            sem1CGPA, sem2CGPA, sem3CGPA, sem4CGPA, sem5CGPA, sem6CGPA, sem7CGPA, sem8CGPA,
            sem1FA, sem2FA, sem3FA, sem4FA, sem5FA, sem6FA, sem7FA, sem8FA,
            sem1SA, sem2SA, sem3SA, sem4SA, sem5SA, sem6SA, sem7SA, sem8SA,
            sem1TA, sem2TA, sem3TA, sem4TA, sem5TA, sem6TA, sem7TA, sem8TA,
            sem1FrA, sem2FrA, sem3FrA, sem4FrA, sem5FrA, sem6FrA, sem7FrA, sem8FrA,
            sem1FD, sem2FD, sem3FD, sem4FD, sem5FD, sem6FD, sem7FD, sem8FD,
            sem1SD, sem2SD, sem3SD, sem4SD, sem5SD, sem6SD, sem7SD, sem8SD,
            sem1TD, sem2TD, sem3TD, sem4TD, sem5TD, sem6TD, sem7TD, sem8TD,
            sem1FND, sem2FND, sem3FND, sem4FND, sem5FND, sem6FND, sem7FND, sem8FND,
            AreaOfInterest, goalsFuturePlans,
            date1, award1, collegeStateNationalInternational1,
            date2, award2, collegeStateNationalInternational2,
            date3, award3, collegeStateNationalInternational3,
            date4, award4, collegeStateNationalInternational4,
            anyOther, signature
        };

        try {
            await handleSubmit(formData, resetFormState);
            console.log("Form submitted successfully");
            generatePDF();
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } catch (error) {
            console.error("Error submitting student data:", error);
        }
    };

    const resetFormState = () => {
        setSem(""); setClass(""); setUid("");
        setStudentName(""); setPhoneNo(""); setBranch("");
        setDob(""); setBloodGroup("");
        setTempAddress(""); setPermAddress("");
        setFatherOccupation(""); setMotherOccupation("");
        setHobbies(""); setStrengthAndWeaknesses("");
        setSem1CGPA(""); setSem2CGPA(""); setSem3CGPA(""); setSem4CGPA(""); setSem5CGPA(""); setSem6CGPA(""); setSem7CGPA(""); setSem8CGPA("");
        setSem1FA(""); setSem2FA(""); setSem3FA(""); setSem4FA(""); setSem5FA(""); setSem6FA(""); setSem7FA(""); setSem8FA("");
        setSem1SA(""); setSem2SA(""); setSem3SA(""); setSem4SA(""); setSem5SA(""); setSem6SA(""); setSem7SA(""); setSem8SA("");
        setSem1TA(""); setSem2TA(""); setSem3TA(""); setSem4TA(""); setSem5TA(""); setSem6TA(""); setSem7TA(""); setSem8TA("");
        setSem1FrA(""); setSem2FrA(""); setSem3FrA(""); setSem4FrA(""); setSem5FrA(""); setSem6FrA(""); setSem7FrA(""); setSem8FrA("");
        setSem1FD(""); setSem2FD(""); setSem3FD(""); setSem4FD(""); setSem5FD(""); setSem6FD(""); setSem7FD(""); setSem8FD("");
        setSem1SD(""); setSem2SD(""); setSem3SD(""); setSem4SD(""); setSem5SD(""); setSem6SD(""); setSem7SD(""); setSem8SD("");
        setSem1TD(""); setSem2TD(""); setSem3TD(""); setSem4TD(""); setSem5TD(""); setSem6TD(""); setSem7TD(""); setSem8TD("");
        setSem1FND(""); setSem2FND(""); setSem3FND(""); setSem4FND(""); setSem5FND(""); setSem6FND(""); setSem7FND(""); setSem8FND("");
        setAreaOfInterest(""); setGoalsFuturePlans("");
        setDate1(""); setAward1(""); setCollegeStateNationalInternational1("");
        setDate2(""); setAward2(""); setCollegeStateNationalInternational2("");
        setDate3(""); setAward3(""); setCollegeStateNationalInternational3("");
        setDate4(""); setAward4(""); setCollegeStateNationalInternational4("");
        setAnyOther(""); setSignature("");
    };

    const generatePDF = () => {
        const input = document.getElementById('pdf-content');

        const totalPages = 2; // Specify the number of pages

        // Remove the submit button from the form before capturing content
        const submitButton = input.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.remove();
        }

        html2canvas(input, {
            scale: 1, // Adjust scale if needed
            windowWidth: document.documentElement.scrollWidth,
            windowHeight: document.documentElement.scrollHeight
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', 'a4', true); // Specify portrait mode and A4 paper size with auto page break
            const imgWidth = pdf.internal.pageSize.getWidth();
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            // Add the first page
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            // Add additional pages if needed
            for (let i = 1; i < totalPages; i++) {
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, -pdf.internal.pageSize.getHeight() * i, imgWidth, imgHeight);
            }

            pdf.save("student_information.pdf");
        });
    };


    return (
        <>
            <div id="pdf-content" className="container-fluid" style={{ height: "100%", backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', backgroundSize: 'inherit' }}>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-md-8" style={{ boxShadow: "white 0px 1px 70px", margin: "20px" }}>

                        <div className="" style={{ color: "white", border: " 10px solid black", backgroundColor: "#1d1919" }}>

                            <div className=" d-flex justify-content-center align-items-center mt-4">
                                <img src={logo} alt="spit logo" className="img-fluid" style={{ width: "900px" }} />
                            </div>

                            <div className="text-center mt-3">
                                {/* <h2 className="mt-3 fs-4 fw-bold underline" >DEPARTMENT OF COMPUTER ENGINEERING</h2> */}
                                <h2 className="fs-4 fw-bolder underline">STUDENT INFORMATION FORM</h2>
                            </div>
                        </div>

                        <form onSubmit={handleFormSubmit} className="custom-form" style={{ margin: "7px" }}>
                            <div className=" mt-4 row mb-3 bg-light" >
                                <div className="row mb-3 justify-content-center">

                                    <div className="container">
                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <label className="col-form-label text-end">Name of the Student:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="studentName"
                                                    value={studentName}
                                                    onChange={(e) => handleChange(e, setStudentName)}
                                                    style={{ width: '700px' }} // Set width to 700px as before
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <label className="col-form-label text-end">Photograph:</label>
                                                <div className="d-flex align-items-center">
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        name="photo"
                                                        onChange={(e) => {
                                                            const selectedFile = e.target.files[0];
                                                            if (selectedFile && selectedFile.size <= 500 * 1024) {
                                                                setPhoto(selectedFile);
                                                                setPhotoError('');
                                                            } else {
                                                                setPhoto(null);
                                                                setPhotoError('Please upload a photo below 500kb.');
                                                            }
                                                        }}
                                                        accept=".pdf,.jpg,.jpeg"
                                                        style={{ width: '700px' }}
                                                    />
                                                    {photo ? (
                                                        <img
                                                            src={URL.createObjectURL(photo)}
                                                            alt="Uploaded"
                                                            style={{ width: '200px', height: '200px', marginLeft: '20px' }}
                                                        />
                                                    ) : (
                                                        <div
                                                            style={{
                                                                width: '200px',
                                                                height: '200px',
                                                                backgroundColor: '#ddd',
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                marginLeft: '60px',
                                                                border: '2px solid black',
                                                            }}
                                                        >
                                                            Photograph
                                                        </div>
                                                    )}
                                                </div>
                                                {photoError && (
                                                    <div className="text-danger mt-2" style={{ fontSize: '18px' }}>{photoError}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <label className="col-form-label text-end">SEM:</label>
                                        <input type="text" className="form-control" name="sem" value={sem} onChange={(e) => handleChange(e, setSem)} />
                                    </div>


                                    <div className="col-md-4">
                                        <label className="col-form-label text-end">CLASS:</label>
                                        <input type="text" className="form-control" name="class" value={classValue} onChange={(e) => handleChange(e, setClass)} />
                                    </div>

                                    <div className="col-md-4">
                                        <label className="col-form-label text-end">UID NO:</label>
                                        <input type="text" className="form-control" name="uid" value={uid} onChange={(e) => handleChange(e, setUid)} />
                                    </div>
                                </div>


                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <label className="col-form-label text-end">Phone No:</label>
                                        <input type="text" className="form-control" name="phoneNo" value={phoneNo} onChange={(e) => handleChange(e, setPhoneNo)} />
                                    </div>
                                </div>


                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="col-form-label text-end ">Date of Birth:</label>
                                        <input type="text" className="form-control" name="dob" value={dob} onChange={(e) => handleChange(e, setDob)} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="col-form-label text-end">Blood Group:</label>
                                        <input type="text" className="form-control" name="bloodGroup" value={bloodGroup} onChange={(e) => handleChange(e, setBloodGroup)} />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <label className="col-form-label text-end">Branch:</label>
                                        <input type="text" className="form-control" name="branch" value={branch} onChange={(e) => handleChange(e, setBranch)} />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <label className="col-form-label text-end">Temporary Address:</label>
                                        <input type="text" className="form-control" name="tempAddress" value={tempAddress} onChange={(e) => handleChange(e, setTempAddress)} />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <label className="col-form-label text-end">Permanent Address:</label>
                                        <input type="text" className="form-control" name="permAddress" value={permAddress} onChange={(e) => handleChange(e, setPermAddress)} />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <label className="col-form-label text-end">Father's Occupation:</label>
                                        <input type="text" className="form-control" name="fatherOccupation" value={fatherOccupation} onChange={(e) => handleChange(e, setFatherOccupation)} />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <label className="col-form-label text-end">Mother's Occupation:</label>
                                        <input type="text" className="form-control" name="motherOccupation" value={motherOccupation} onChange={(e) => handleChange(e, setMotherOccupation)} />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <label className="col-form-label text-end">Hobbies:</label>
                                        <input type="text" className="form-control" name="hobbies" value={hobbies} onChange={(e) => handleChange(e, setHobbies)} />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <label className="col-form-label text-end">Strength and Weaknesses:</label>
                                        <input type="text" className="form-control" name="strengthAndWeaknesses" value={strengthAndWeaknesses} onChange={(e) => handleChange(e, setStrengthAndWeaknesses)} />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <label className="col-form-label text-end">Result: Final Mark (with percentage):</label>
                                        {/* <input type="text" className="form-control" name="Result" value={Result} onChange={(e) => handleChange(e, setResult)} /> */}

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
                                                        <input type="text" name="sem1CGPA" className=" col-md-11" value={sem1CGPA} onChange={(e) => handleChange(e, setSem1CGPA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem2CGPA" className=" col-md-11" value={sem2CGPA} onChange={(e) => handleChange(e, setSem2CGPA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem3CGPA" className=" col-md-11" value={sem3CGPA} onChange={(e) => handleChange(e, setSem3CGPA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem4CGPA" className=" col-md-11" value={sem4CGPA} onChange={(e) => handleChange(e, setSem4CGPA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem5CGPA" className=" col-md-11" value={sem5CGPA} onChange={(e) => handleChange(e, setSem5CGPA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem6CGPA" className=" col-md-11" value={sem6CGPA} onChange={(e) => handleChange(e, setSem6CGPA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem7CGPA" className=" col-md-11" value={sem7CGPA} onChange={(e) => handleChange(e, setSem7CGPA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem8CGPA" className=" col-md-11" value={sem8CGPA} onChange={(e) => handleChange(e, setSem8CGPA)} />
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
                                                        <input type="text" name="sem1FA" className="col-md-11" value={sem1FA} onChange={(e) => handleChange(e, setSem1FA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem2FA" className="col-md-11" value={sem2FA} onChange={(e) => handleChange(e, setSem2FA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem3FA" className="col-md-11" value={sem3FA} onChange={(e) => handleChange(e, setSem3FA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem4FA" className="col-md-11" value={sem4FA} onChange={(e) => handleChange(e, setSem4FA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem5FA" className="col-md-11" value={sem5FA} onChange={(e) => handleChange(e, setSem5FA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem6FA" className="col-md-11" value={sem6FA} onChange={(e) => handleChange(e, setSem6FA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem7FA" className="col-md-11" value={sem7FA} onChange={(e) => handleChange(e, setSem7FA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem8FA" className="col-md-11" value={sem8FA} onChange={(e) => handleChange(e, setSem8FA)} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Second Attempt</td>
                                                    <td>
                                                        <input type="text" name="sem1SA" className="col-md-11" value={sem1SA} onChange={(e) => handleChange(e, setSem1SA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem2SA" className="col-md-11" value={sem2SA} onChange={(e) => handleChange(e, setSem2SA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem3SA" className="col-md-11" value={sem3SA} onChange={(e) => handleChange(e, setSem3SA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem4SA" className="col-md-11" value={sem4SA} onChange={(e) => handleChange(e, setSem4SA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem5SA" className="col-md-11" value={sem5SA} onChange={(e) => handleChange(e, setSem5SA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem6SA" className="col-md-11" value={sem6SA} onChange={(e) => handleChange(e, setSem6SA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem7SA" className="col-md-11" value={sem7SA} onChange={(e) => handleChange(e, setSem7SA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem8SA" className="col-md-11" value={sem8SA} onChange={(e) => handleChange(e, setSem8SA)} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Third Attempt</td>
                                                    <td>
                                                        <input type="text" name="sem1TA" className="col-md-11" value={sem1TA} onChange={(e) => handleChange(e, setSem1TA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem2TA" className="col-md-11" value={sem2TA} onChange={(e) => handleChange(e, setSem2TA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem3TA" className="col-md-11" value={sem3TA} onChange={(e) => handleChange(e, setSem3TA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem4TA" className="col-md-11" value={sem4TA} onChange={(e) => handleChange(e, setSem4TA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem5TA" className="col-md-11" value={sem5TA} onChange={(e) => handleChange(e, setSem5TA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem6TA" className="col-md-11" value={sem6TA} onChange={(e) => handleChange(e, setSem6TA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem7TA" className="col-md-11" value={sem7TA} onChange={(e) => handleChange(e, setSem7TA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem8TA" className="col-md-11" value={sem8TA} onChange={(e) => handleChange(e, setSem8TA)} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Fourth Attempt</td>
                                                    <td>
                                                        <input type="text" name="sem1FrA" className="col-md-11" value={sem1FrA} onChange={(e) => handleChange(e, setSem1FrA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem2FrA" className="col-md-11" value={sem2FrA} onChange={(e) => handleChange(e, setSem2FrA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem3FrA" className="col-md-11" value={sem3FrA} onChange={(e) => handleChange(e, setSem3FrA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem4FrA" className="col-md-11" value={sem4FrA} onChange={(e) => handleChange(e, setSem4FrA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem5FrA" className="col-md-11" value={sem5FrA} onChange={(e) => handleChange(e, setSem5FrA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem6FrA" className="col-md-11" value={sem6FrA} onChange={(e) => handleChange(e, setSem6FrA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem7FrA" className="col-md-11" value={sem7FrA} onChange={(e) => handleChange(e, setSem7FrA)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem8FrA" className="col-md-11" value={sem8FrA} onChange={(e) => handleChange(e, setSem8FrA)} />
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
                                                        <input type="text" name="sem1FD" className=" col-md-11" value={sem1FD} onChange={(e) => handleChange(e, setSem1FD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem2FD" className=" col-md-11" value={sem2FD} onChange={(e) => handleChange(e, setSem2FD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem3FD" className=" col-md-11" value={sem3FD} onChange={(e) => handleChange(e, setSem3FD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem4FD" className=" col-md-11" value={sem4FD} onChange={(e) => handleChange(e, setSem4FD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem5FD" className=" col-md-11" value={sem5FD} onChange={(e) => handleChange(e, setSem5FD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem6FD" className=" col-md-11" value={sem6FD} onChange={(e) => handleChange(e, setSem6FD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem7FD" className=" col-md-11" value={sem7FD} onChange={(e) => handleChange(e, setSem7FD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem8FD" className=" col-md-11" value={sem8FD} onChange={(e) => handleChange(e, setSem8FD)} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance After Second Defaulters</td>
                                                    <td>
                                                        <input type="text" name="sem1SD" className=" col-md-11" value={sem1SD} onChange={(e) => handleChange(e, setSem1SD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem2SD" className=" col-md-11" value={sem2SD} onChange={(e) => handleChange(e, setSem2SD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem3SD" className=" col-md-11" value={sem3SD} onChange={(e) => handleChange(e, setSem3SD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem4SD" className=" col-md-11" value={sem4SD} onChange={(e) => handleChange(e, setSem4SD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem5SD" className=" col-md-11" value={sem5SD} onChange={(e) => handleChange(e, setSem5SD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem6SD" className=" col-md-11" value={sem6SD} onChange={(e) => handleChange(e, setSem6SD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem7SD" className=" col-md-11" value={sem7SD} onChange={(e) => handleChange(e, setSem7SD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem8SD" className=" col-md-11" value={sem8SD} onChange={(e) => handleChange(e, setSem8SD)} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance After Third Defaulters</td>
                                                    <td>
                                                        <input type="text" name="sem1TD" className=" col-md-11" value={sem1TD} onChange={(e) => handleChange(e, setSem1TD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem2TD" className=" col-md-11" value={sem2TD} onChange={(e) => handleChange(e, setSem2TD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem3TD" className=" col-md-11" value={sem3TD} onChange={(e) => handleChange(e, setSem3TD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem4TD" className=" col-md-11" value={sem4TD} onChange={(e) => handleChange(e, setSem4TD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem5TD" className=" col-md-11" value={sem5TD} onChange={(e) => handleChange(e, setSem5TD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem6TD" className=" col-md-11" value={sem6TD} onChange={(e) => handleChange(e, setSem6TD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem7TD" className=" col-md-11" value={sem7TD} onChange={(e) => handleChange(e, setSem7TD)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem8TD" className=" col-md-11" value={sem8TD} onChange={(e) => handleChange(e, setSem8TD)} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance After Final Defaulters</td>
                                                    <td>
                                                        <input type="text" name="sem1FND" className=" col-md-11" value={sem1FND} onChange={(e) => handleChange(e, setSem1FND)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem2FND" className=" col-md-11" value={sem2FND} onChange={(e) => handleChange(e, setSem2FND)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem3FND" className=" col-md-11" value={sem3FND} onChange={(e) => handleChange(e, setSem3FND)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem4FND" className=" col-md-11" value={sem4FND} onChange={(e) => handleChange(e, setSem4FND)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem5FND" className=" col-md-11" value={sem5FND} onChange={(e) => handleChange(e, setSem5FND)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem6FND" className=" col-md-11" value={sem6FND} onChange={(e) => handleChange(e, setSem6FND)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem7FND" className=" col-md-11" value={sem7FND} onChange={(e) => handleChange(e, setSem7FND)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="sem8FND" className=" col-md-11" value={sem8FND} onChange={(e) => handleChange(e, setSem8FND)} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className=" col-md-12">
                                        <label className="col-form-label text-end">Area of interest:</label>
                                        <input type="text" className=" form-control" name="AreaOfInterest" value={AreaOfInterest} onChange={(e) => handleChange(e, setAreaOfInterest)} />

                                        <label className="col-form-label text-end">Goals/Future Plans (After BE):</label>
                                        <input type="text" className="form-control" name="goalsFuturePlans" value={goalsFuturePlans} onChange={(e) => handleChange(e, setGoalsFuturePlans)} />
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
                                                        <input type="text" name="date1" className=" col-md-11" value={date1} onChange={(e) => handleChange(e, setDate1)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="award1" className=" col-md-11" value={award1} onChange={(e) => handleChange(e, setAward1)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="collegeStateNationalInternational1" className="col-md-11" value={collegeStateNationalInternational1} onChange={(e) => handleChange(e, setCollegeStateNationalInternational1)} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="text" name="date2" className=" col-md-11" value={date2} onChange={(e) => handleChange(e, setDate2)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="award2" className=" col-md-11" value={award2} onChange={(e) => handleChange(e, setAward2)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="collegeStateNationalInternational2" className="col-md-11" value={collegeStateNationalInternational2} onChange={(e) => handleChange(e, setCollegeStateNationalInternational2)} />
                                                    </td>
                                                </tr><tr>
                                                    <td>
                                                        <input type="text" name="date3" className=" col-md-11" value={date3} onChange={(e) => handleChange(e, setDate3)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="award3" className=" col-md-11" value={award3} onChange={(e) => handleChange(e, setAward3)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="collegeStateNationalInternational3" className="col-md-11" value={collegeStateNationalInternational3} onChange={(e) => handleChange(e, setCollegeStateNationalInternational3)} />
                                                    </td>
                                                </tr><tr>
                                                    <td>
                                                        <input type="text" name="date4" className=" col-md-11" value={date4} onChange={(e) => handleChange(e, setDate4)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="award4" className=" col-md-11" value={award4} onChange={(e) => handleChange(e, setAward4)} />
                                                    </td>
                                                    <td>
                                                        <input type="text" name="collegeStateNationalInternational4" className="col-md-11" value={collegeStateNationalInternational4} onChange={(e) => handleChange(e, setCollegeStateNationalInternational4)} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="row mb-3 ">
                                    <div className=" col-md-12">
                                        <label className="col-form-label text-end">Any other:</label>
                                        <input type="text" className=" form-control" name="anyOther" value={anyOther} onChange={(e) => handleChange(e, setAnyOther)} />

                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <label className="col-form-label text-end">Signature of student:</label>
                                                <div className="d-flex align-items-center">
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        name="signature"
                                                        onChange={(e) => {
                                                            const selectedFile = e.target.files[0];
                                                            if (selectedFile && selectedFile.size <= 500 * 1024) {
                                                                setSignature(selectedFile);
                                                                setSignatureError('');
                                                            } else {
                                                                setSignature(null);
                                                                setSignatureError('Please upload a signature photo below 500kb.');
                                                            }
                                                        }}
                                                        accept=".pdf,.jpg,.jpeg"
                                                        style={{ width: '700px' }}
                                                    />
                                                    {signature ? (
                                                        <img
                                                            src={URL.createObjectURL(signature)}
                                                            alt="Uploaded"
                                                            style={{ width: '150px', height: '80px', marginLeft: '20px' }}
                                                        />
                                                    ) : (
                                                        <div
                                                            style={{
                                                                width: '150px',
                                                                height: '80px',
                                                                backgroundColor: '#ddd',
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                marginLeft: '60px',
                                                                border: '2px solid black',
                                                            }}
                                                        >
                                                            Signature
                                                        </div>
                                                    )}
                                                </div>
                                                {signatureError && (
                                                    <div className="text-danger mt-2" style={{ fontSize: '18px' }}>{signatureError}</div>
                                                )}
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary container d-flex justify-content-center align-content-center">Submit</button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </>
    );
}

export default StudentInformation;
