const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            user_id: "Harsh_Gupta_31082002",
            email: "harsh.gupta2021b@vitstudent.ac.in",
            roll_number: "21BCE0492",
            numbers: [],
            alphabets: [],
            highest_lowercase_alphabet: [],
        });
    }

    const numbers = [];
    const alphabets = [];
    let highestLowercase = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string') {
            alphabets.push(item);
            if (item === item.toLowerCase() && item > highestLowercase) {
                highestLowercase = item;
            }
        }
    });

    res.json({
        is_success: true,
        user_id: "Harsh_Gupta_31082002",
        email: "harsh.gupta2021b@vitstudent.ac.in",
        roll_number: "21BCE0492",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
    });
});

router.get('/', (req, res) => {
    res.json({
        operation_code: 1,
    });
});

module.exports = router;
