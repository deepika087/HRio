
# Amy(HRio)
There are two main services being served by this bot

First, to answers various queries of interns or new joinees
and second, encourage them to give feedback without sending a formal mail that most often is ignored. 

The inspiration behind this bot is that I myself am pursuing internship and I really felt a need of such a bot.

Now, some may say that we have internal wikis to help easy onboard but often 
I find myself in situation when I don't even know what keywords should I look for. 
And hence such an AI driven platform can really help new joinees and at the same time encourage them to give
their honest feedback. 

#Tech stack
Amazon Lex + amazon Lambda + nodejs

#Demo video
https://youtu.be/FATzjTXbQwQ

#other utterences understood by the bot.
1. Greetings
  -Hi Amy
  -hey Amy
  -Good Morning Amy

2. Rooms query
  - I am looking for {room_type} room
  - I want to book a {room_type} room
  room_type : meeting, meditation, doctor
  
 3. When done with Qs:
  - Thanks
  - sure
  - yes
  - No : if not interested in feedbacks
  - a bit

4. Insurance related Qs:
  - I was wondering if {disease_or_test} is covered in my medical insurance.
  - Is {disease_or_test} covered in medical insurance
  - Does my medical insurance cover {disease_or_test}
 
5. Other Team Info:
  - I am really interested in {team_type}​ Could you please help connect me to someone
  - I want to get in touch with {team_type}​ team.
  - I am looking for someone from {team_type}​ team
  team_type : Machine Learning, Data Analytics, HR, Finance, Visualization
  
6. Thanks Amy :)
  - It was awesome talking to you. Bye
  - Thanks a lot. Your a genius. Bye
  - Bye
