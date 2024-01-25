// long_responses.js

const R_EATING = "I don't like eating anything because I'm a bot obviously!";
const R_ADVICE = "If I were you, I would go to the internet and type exactly what you wrote there!";
const R_SUBSCRIBE = "To subscribe a mess follow these steps: \n 1)Select a mess from list\n2)Select plan (GOLD/DIAMOND/SILVER)\n3)Touch on subscribe\n4)You will be redirected to a payment page\n5)Make payment and done!";
const R_NOTIFS = "To get notifications: \n1)Go in profile\n2)Click on settings\n3)Touch on Notifications, it will take you to your " +
    "mobile notification settings\n4)Turn on all notifications related to DailyBites";

function unknown() {
    const responses = [
        "Could you please re-phrase that? ",
        "...",
        "Sounds about right.",
        "What does that mean?"
    ];

    return responses[Math.floor(Math.random() * responses.length)];
}

// Exporting the functions and variables
export { R_EATING, R_ADVICE, R_SUBSCRIBE, R_NOTIFS, unknown };


// response(long.R_ADVICE, ['give', 'advice'], false, ['advice']);
// response(long.R_EATING, ['what', 'you', 'eat'], false, ['you', 'eat']);
// response(long.R_SUBSCRIBE, ['How', 'to', 'subscribe', 'mess', 'subscription'], false, ['How', 'mess', 'subscribe']);
// response(long.R_NOTIFS, ['Turn', 'not', 'notifications', 'how', 'to'], false, ['How', 'Notifications']);