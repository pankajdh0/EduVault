const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    sem: { type: String }, class: { type: String }, uid: { type: String },
    studentName: { type: String }, PhoneNo: { type: Number },
    branch: { type: String }, dob: { type: Date }, bloodGroup: { type: String },
    tempAddress: { type: String }, permAddress: { type: String },
    fatherPhone: { type: String }, motherPhone: { type: String }, studentPhone: { type: String },
    fatherOccupation: { type: String }, motherOccupation: { type: String },
    hobbies: { type: String }, strengthAndWeaknesses: { type: String },
    sem1CGPA: { type: Number }, sem2CGPA: { type: Number }, sem3CGPA: { type: Number }, sem4CGPA: { type: Number }, sem5CGPA: { type: Number }, sem6CGPA: { type: Number }, sem7CGPA: { type: Number }, sem8CGPA: { type: Number },
    sem1FA: { type: Number }, sem2FA: { type: Number }, sem3FA: { type: Number }, sem4FA: { type: Number }, sem5FA: { type: Number }, sem6FA: { type: Number }, sem7FA: { type: Number }, sem8FA: { type: Number },
    sem1SA: { type: Number }, sem2SA: { type: Number }, sem3SA: { type: Number }, sem4SA: { type: Number }, sem5SA: { type: Number }, sem6SA: { type: Number }, sem7SA: { type: Number }, sem8SA: { type: Number },
    sem1TA: { type: Number }, sem2TA: { type: Number }, sem3TA: { type: Number }, sem4TA: { type: Number }, sem5TA: { type: Number }, sem6TA: { type: Number }, sem7TA: { type: Number }, sem8TA: { type: Number },
    sem1FrA: { type: Number }, sem2FrA: { type: Number }, sem3FrA: { type: Number }, sem4FrA: { type: Number }, sem5FrA: { type: Number }, sem6FrA: { type: Number }, sem7FrA: { type: Number }, sem8FrA: { type: Number },
    sem1FD: { type: Number }, sem2FD: { type: Number }, sem3FD: { type: Number }, sem4FD: { type: Number }, sem5FD: { type: Number }, sem6FD: { type: Number }, sem7FD: { type: Number }, sem8FD: { type: Number },
    sem1SD: { type: Number }, sem2SD: { type: Number }, sem3SD: { type: Number }, sem4SD: { type: Number }, sem5SD: { type: Number }, sem6SD: { type: Number }, sem7SD: { type: Number }, sem8SD: { type: Number },
    sem1TD: { type: Number }, sem2TD: { type: Number }, sem3TD: { type: Number }, sem4TD: { type: Number }, sem5TD: { type: Number }, sem6TD: { type: Number }, sem7TD: { type: Number }, sem8TD: { type: Number },
    sem1FND: { type: Number }, sem2FND: { type: Number }, sem3FND: { type: Number }, sem4FND: { type: Number }, sem5FND: { type: Number }, sem6FND: { type: Number }, sem7FND: { type: Number }, sem8FND: { type: Number },
    areaOfInterest: { type: String }, goalsFuturePlans: { type: String },
    date1: { type: Date }, award1: { type: String }, collegeStateNationalInternational1: { type: String },
    date2: { type: Date }, award2: { type: String }, collegeStateNationalInternational2: { type: String },
    date3: { type: Date }, award3: { type: String }, collegeStateNationalInternational3: { type: String },
    date4: { type: Date }, award4: { type: String }, collegeStateNationalInternational4: { type: String },
    anyOther: { type: String }, signature: { type: String }
});

module.exports = mongoose.model('Student', studentSchema);
