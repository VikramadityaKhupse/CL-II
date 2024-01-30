

function messageProbability(userMessage, recognisedWords, singleResponse = false, requiredWords = []) {
    let messageCertainty = 0;
    let hasRequiredWords = true;

    for (const word of userMessage) {
        if (recognisedWords.includes(word)) {
            messageCertainty += 1;
        }
    }

    const percentage = (messageCertainty / recognisedWords.length);

    for (const word of requiredWords) {
        if (!userMessage.includes(word)) {
            hasRequiredWords = false;
            break;
        }
    }

    if (hasRequiredWords || singleResponse) {
        return Math.floor(percentage * 100);
    } else {
        return 0;
    }
}

function checkAllMessages(message) {
    const highestProbList = {};

    function response(botResponse, listOfWords, singleResponse = false, requiredWords = []) {
        highestProbList[botResponse] = messageProbability(message, listOfWords, singleResponse, requiredWords);
    }

    response('Hello!', ['hello', 'hi', 'hey', 'sup', 'heyo'], true);
    response('See you!', ['bye', 'goodbye'], true);
    response('I\'m doing fine, and you?', ['how', 'are', 'you', 'doing'], true, ['how', 'you']);
    response('You\'re welcome!', ['thank', 'thanks', 'thank', 'you', 'so', 'much'], true);
    response('Good to hear that!', ['I', 'i', 'am', 'good'], true, ['I', 'good']);
    response("My name is ChatBot! What is your?", ['what', 'is', 'your'], true, ['your', 'name']);
    response('I am still in development stage. So you can ask me some simple questions only.', ['How', 'this', 'bot', 'works', 'working', 'tell'], true, [ 'work']);
    response('Yes I did! Ate 100W of energy. What u ate?', ['what', 'you', 'ate', 'dinner', 'lunch', 'eat'], true, ['what', 'you', 'ate']);
    

    const allKeys = Object.keys(highestProbList);

    let bestMatch = allKeys[0];

    for (let i = 1; i < allKeys.length; i++) {
    const currentKey = allKeys[i];

    if (highestProbList[currentKey] > highestProbList[bestMatch]) {
        bestMatch = currentKey;
    }
    }



    return bestMatch;
}

function appendUserMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const userMessage = `<div class="user-message">${message}</div>`;
    chatBox.innerHTML += userMessage;
    chatBox.scrollTop = chatBox.scrollHeight;
}

function appendBotMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const botMessage = `<div class="bot-message">Bot: ${message}</div>`;
    chatBox.innerHTML += botMessage;
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(userInput) {
    const splitMessage = userInput.toLowerCase().split(/\s+|[,;?!.\-\s*]/);
    const response = checkAllMessages(splitMessage);
    return response;
}


function sendMessage() {
    const userInput = document.getElementById('user-input').value;

    if (userInput.trim() !== '') {
        appendUserMessage(userInput);

        const botResponse = getResponse(userInput);

        appendBotMessage(botResponse);

        document.getElementById('user-input').value = '';
    }
}
