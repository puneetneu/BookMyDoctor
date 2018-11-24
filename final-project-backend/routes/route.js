const express = require('express');
var router = express.Router();

const Doctor = require('../model/doctor');
const Appointment=require('../model/appointment');

/*Start Doctor Routes */

//retrieving doctor data
router.get('/doctor', (req, res, next) => {
    Doctor.find((err, doctor) => {
        res.json(doctor);
    })
});

//adding doctor data
router.post('/doctor', (req, res, next) => {
    const newDoctor = new Doctor({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_id: req.body.email_id,
        password: req.body.password,
        address: req.body.address,
        specialization: req.body.specialization,
        hospitalName: req.body.hospitalName,
    });
    newDoctor.save((err, doctor) => {
        if (err) {
            res.json({
                msg: 'Failed to connect'
            });
        } else {
            res.json({
                msg: doctor
            })
        }
    })
});

//delete doctor

router.delete('/doctor/:id', (req, res, next) => {
    Doctor.deleteOne({
        _id: req.params.id
    }, (err, result) => {
        if (err) {
            res.json(err);
        } else if (result) {
            res.json(result);
        }
    });
});

/*End Doctor Routes */

/*Start Appointment Routes*/ 

//retrieving appointment data
router.get('/appointment', (req, res, next) => {
    Appointment.find((err, appointment) => {
        res.json(appointment);
    })
});

//adding Appointment data
router.post('/appointment', (req, res, next) => {
    const newAppointment = new Appointment({
        user_id: req.body.user_id,
        doctor_id: req.body.doctor_id,
        appointment_date: req.body.appointment_date,
        appointment_time: req.body.appointment_time
    });
    newAppointment.save((err, appointment) => {
        if (err) {
            res.json({
                msg: 'Failed to connect'
            });
        } else {
            res.json({
                msg: appointment
            })
        }
    })
});

//delete Appointment

router.delete('/appointment/:id', (req, res, next) => {
    Appointment.deleteOne({
        _id: req.params.id
    }, (err, result) => {
        if (err) {
            res.json(err);
        } else if (result) {
            res.json(result);
        }
    });
});

/*End Appointment Routes*/
module.exports = router;