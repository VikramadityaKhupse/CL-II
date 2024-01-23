// script.js

import * as long from './long_responses.js';

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
    response('You\'re welcome!', ['thank', 'thanks'], true);
    response('Thank you!', ['i', 'love', 'code', 'palace'], false, ['code', 'palace']);

    response(long.R_ADVICE, ['give', 'advice'], false, ['advice']);
    response(long.R_EATING, ['what', 'you', 'eat'], false, ['you', 'eat']);
    response(long.R_SUBSCRIBE, ['How', 'to', 'subscribe', 'mess', 'subscription'], false, ['How', 'mess', 'subscribe']);
    response(long.R_NOTIFS, ['Turn', 'not', 'notifications', 'how', 'to'], false, ['How', 'Notifications']);

    const bestMatch = Object.keys(highestProbList).reduce((a, b) => highestProbList[a] > highestProbList[b] ? a : b);

    return long.unknown();
}

function getResponse(userInput) {
    const splitMessage = userInput.toLowerCase().split(/\s+|[,;?!.\-\s*]/);
    const response = checkAllMessages(splitMessage);
    return response;
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    chatBox.innerHTML += `<div class="user-message">${userInput}</div>`;

    const botResponse = getResponse(userInput);
    chatBox.innerHTML += `<div class="bot-message">Bot: ${botResponse}</div>`;

    document.getElementById('user-input').value = '';

    chatBox.scrollTop = chatBox.scrollHeight;
}
