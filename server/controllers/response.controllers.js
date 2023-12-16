const Response = require('../models/response.model');
const Question = require('../models/question.model');

function answerQuestion(req, res) {
    const { id } = req.params;

    try {
        const question = Question.findById(id);

        const response = new Response({
            question: id,
            answer: req.body.answer,
            correct: question.answer === req.body.answer,
        })
        response.save()
        return res.status(201).json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

function getResponses(req, res) {
    Response.find({})
        .then(data => res.send(data))
        .catch(err => res.status(500).json({ message: err.message }));
}

function getQuestionReponses(req, res) {
    const { id } = req.params;

    Response.find({ question: id })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: err.message }));
}

module.exports ={
    answerQuestion,
    getResponses,
    getQuestionReponses,
}