# Software Engineering

## Development of a system MyAlert

A city Major wants to develop a MyAlert system that will allow citizens to report alarms or dangers occurring in the city land and it includes a web app and a mobile app.
The web app provides specific functionalities based on the user that is logged in the system as Manager or as Agent. The mobile app provides further functionalities for the user that is logged in as Agent or as Citizen.

## Requirements Analysis

The users that interact with the software requested by the city Mayor are:
1. Manager
2. Agent
3. Citizen

1) Manager: he/she manages the alarm/danger schema. The alarms/dangers supported by the system are “car crash”, “fire”, “flood”, “brawl”, “illegal dump”. Other types of alarms/dangers could by dynamically added by the security manager without the need of modifying the MyAlert database or the MyAlert source code. The security manager creates one or more security agents. The security manager approves the warnings of alert/danger coming from registered citizens and forward the warnings to the security agents for their intervention. The security manager can choose among different forwarding policies: broadcast (to all security agents), automatic selection (to a subset of security agents on the basis of their more recent known GPS positions), manual selection (to a subset of security agents manually selected from a list). The security manager uses the web interface of MyAlert.

2) Agent: he/she logs into MyAlert providing its GPS position through the mobile interface. He/she receives form MyAlert a push notification for any new alarm/danger warning. He/she receive form MyAlert a push notification for any new assigned intervention that he/she must confirm. At the end of an intervention, he/she writes an intervention note (start time of the intervention, duration of the intervention, short textual description, one or more picture of the intervention, the GPS position for each picture) using the mobile interface. At the end of the working day, he/she completes the intervention note providing a detailed textual report using the web interface.

3) Citizen: he/she logs into the system providing its GPS position through the mobile interface. He/she informs about alarms/dangers compiling mainly automatically a “warning form” composed by his/her name, the timestamp of the alarm, one or more picture of the alarm/danger, the GPS position for each picture. He/she receives a push notification when a given own warning is taken in charge form a security agent. He/she receives a push notification when the intervention for a given own warning is closed by a security agent; in this case, he/she can read the intervention note. He/she interacts with MyAlert only through the mobile interface.

Furthermore, there is a Guest User that he/she interacts with the public part of MyAlert through the mobile interface to get information about the service.
