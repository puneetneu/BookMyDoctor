const express = require('express');
var router = express.Router();

const Doctor = require('../model/doctor');

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
    Doctor.remove({
        _id: req.params.id
    }, (err, result) => {
        if (err) {
            res.json(err);
        } else if (result) {
            res.json(result);
        }
    });
});

module.exports = router;