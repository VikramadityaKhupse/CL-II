import random

R_EATING = "I don't like eating anything because I'm a bot obviously!"
R_ADVICE = "If I were you, I would go to the internet and type exactly what you wrote there!"
R_SUBSCRIBE = "To subscribe a mess follow these steps: \n 1)Select a mess from list\n2)Select plan (GOLD/DIAMOND/SILVER)\n3)Touch on subscribe\n4)You will be redirected to a payment page\n5)Make payment and done!"
R_NOTIFS = "To get notifications: \n1)Go in profile\n2)Click on settings\n3)Touch on Notifications, it will take you to your " \
           "mobile notification settings\n4)Turn on all notifcations related to DailyBites"


def unknown():
    response = ["Could you please re-phrase that? ",
                "...",
                "Sounds about right.",
                "What does that mean?"][
        random.randrange(4)]
    return response
