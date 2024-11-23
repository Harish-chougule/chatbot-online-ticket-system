// Chatbot responses
const responses = {
    "location": "The museum is located in Mysore.",
    "price": "The per head ticket price is ₹100.",
    "timing": "The museum is open Monday to Saturday from 10:00 AM to 6:00 PM. It is closed on Sundays.",
};

// Handle user input in the chatbot
function sendMessage() {
    const input = document.getElementById("userInput").value.toLowerCase();
    const chatBox = document.getElementById("chat-box");

    if (input) {
        // Display user message
        const userMessage = document.createElement("p");
        userMessage.innerHTML = "<strong>You:</strong> " + input;
        chatBox.appendChild(userMessage);

        // Display bot response
        let botMessage = document.createElement("p");
        botMessage.innerHTML = "<strong>Bot:</strong> " + getBotResponse(input);
        chatBox.appendChild(botMessage);

        // Clear input
        document.getElementById("userInput").value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Get chatbot response based on user input
function getBotResponse(input) {
    if (input.includes("location")) return responses["location"];
    if (input.includes("price")) return responses["price"];
    if (input.includes("timing")) return responses["timing"];
    return "Sorry, I didn't understand that. Please ask about location, price, or timing.";
}

// Simulate demo payment and acknowledgment
function makePayment() {
    const name = document.getElementById("name").value;
    const museum = document.getElementById("museum").value;
    const quantity = document.getElementById("quantity").value;

    if (name && museum && quantity) {
        const totalCost = quantity * 100;
        document.getElementById("payment-status").textContent = `Payment of ₹${totalCost} received. Thank you, ${name}, for booking ${quantity} ticket(s) to ${museum} Museum.`;
    } else {
        document.getElementById("payment-status").textContent = "Please fill in all the details.";
    }
}
