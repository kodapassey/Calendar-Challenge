# Calendar-Challenge


#Description:
Calendar Challenge is my week 6 challenge, it contains time slots for your basic workday (8-6) and gives the user the ability to write down tasks to plan their day.

Each time slot is color coded so before time has passed, the time slot appears green and can still have tasks created within. After time has passed, tasks can no longer be created and time slot appears red. This is done by checking time every minute with a set interval

At the top of the page displays the current Day, Month, Year for the user to easily know what day it is and what they may need to plan for the day.

To the right of each time slot is a 'save tasks' button which is used to save tasks to localStorage and retrieve them on a page refresh

Tasks still saved to localStorage will be cleared after 6pm (a set interval runs every minute so at precisely 6pm localStorage is cleared)



#Softwares:
Calendar Challenge is built with HTML, CSS, bootstrap and javascript with moment.js and jquery plugins added,
