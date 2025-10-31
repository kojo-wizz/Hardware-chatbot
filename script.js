async function getBotResponse(userMessage) {
    const response = await fetch('knowledgeBase.json'); // ✅ lowercase k
    const data = await response.json();
    const input = userMessage.toLowerCase();

    // Check for exact or keyword-based matches
    for (let item of data.problems) {
        if (input.includes(item.keyword.toLowerCase())) {
            return item.solution;
        }
    }

    return "Hmm 🤔... I couldn't find an exact solution for that. Could you describe it differently?";
}