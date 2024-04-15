const Student = require('../models/Student.cjs');

exports.createStudent = async (req, res) => {
    try {
        const photo = {
            data: req.files['photo'][0].buffer,
            name: req.files['photo'][0].originalname,
            contentType: req.files['photo'][0].mimetype
        };

        const signature = {
            data: req.files['signature'][0].buffer,
            name: req.files['signature'][0].originalname,
            contentType: req.files['signature'][0].mimetype
        };
        debugger;   

          const student = new Student({ ...req.body, photo, signature });
          await student.save();
        res.status(201).json(student);  
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.updateStudentById = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a student by ID
exports.deleteStudentById = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (student) {
            res.status(200).json({ message: 'Student deleted successfully' });
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};