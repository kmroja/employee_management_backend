const express = require('express');
const router = express.Router();
const Employees = require('../models/employees.models');

router.get('/employees', async (req, res) => {
    try {
        const data = await Employees.find();
        res.status(200).send(data);
    } catch (error) {
        console.error('Error while retrieving data:', error);
        res.status(500).send({
            message: 'Internal Server Error'
        });
    }
});

router.post('/employees', async (req, res) => {
    try {
        const newEmployee = new Employees(req.body);
        const savedEmployee = await newEmployee.save();
        res.status(201).send(savedEmployee);
    } catch (error) {
        console.error('Error while creating employee:', error);
        res.status(500).send({
            message: 'Internal Server Error'
        });
    }
});

router.put('/employees/:empID', async (req, res) => {
    try {
        const updatedEmployee = await Employees.findByIdAndUpdate(req.params.empID, req.body, { new: true });
        res.status(200).send(updatedEmployee);
    } catch (error) {
        console.error('Error while updating employee:', error);
        res.status(500).send({
            message: 'Internal Server Error'
        });
    }
});

router.delete('/employees/:empID', async (req, res) => {
    try {
        await Employees.findByIdAndDelete(req.params.empID);
        res.status(200).send({
            message: 'Employee deleted successfully'
        });
    } catch (error) {
        console.error('Error while deleting employee:', error);
        res.status(500).send({
            message: 'Internal Server Error'
        });
    }
});

module.exports = router;
