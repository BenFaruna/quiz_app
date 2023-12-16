require('dotenv').config();

const cors = require('cors');
const express = require('express');
require("./models/dbConnect");

const {getQuestions, createQuestions} = require("./controllers/question.controllers");
const { answerQuestion, getResponses, getQuestionReponses } = require('./controllers/response.controllers');

const app = express();
const PORT = 8000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use((req, res, next) => {
    console.log(req.method, req.baseUrl + req.path)
    next();
})

const questionRouter = express.Router();

questionRouter.get("/", getQuestions);
questionRouter.post("/", createQuestions);

questionRouter.get("/answer", getResponses)
questionRouter.get("/answer/:id", getQuestionReponses)
questionRouter.post("/answer/:id", answerQuestion)

app.use('/api/questions', questionRouter)

app.listen(PORT, () => {
    console.log("Server running on", PORT)
})
