let questions = fetchQuestions();

async function fetchQuestions() {
    const response = await fetch("http://localhost:8000/api/questions")
    return response.json();
}
