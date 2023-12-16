const Question = require('../models/question.model');

function getQuestions(req, res) {
    // const { id } = req.params;
    Question.find({})
        .then(data => res.send(data))
        .catch(err => res.status(500).json({ message: err.message }));
}

function createQuestions(req, res) {

    try {
        const question = new Question({
            text: req.body.text,
            optionA: req.body.optionA,
            optionB: req.body.optionB,
            optionC: req.body.optionC,
            optionD: req.body.optionD,
            answer: req.body.answer
        });
        question.save()
        return res.status(201).json(question);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports ={
    getQuestions,
    createQuestions,
}