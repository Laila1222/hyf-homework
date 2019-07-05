// Cactus IO
//Adding an activity
let activities = [];
function addActivity(date, activity, duration) {
    let activityStatus = true;
    if (activity === "youtube") {
        activityStatus = false;
    }
    if (activityStatus == false) {
        console.log("You chose not to count Youtube.")
    } else {
        activities.push({date, activity, duration})
    }
    
};

addActivity("08/06/2019", "youtube", 28);
addActivity("08/11/2019", "messenger", 50)
console.log(activities);

// Show my status
function showStatus(activities) {
    const numberOfActs = activities.length;
    let allMinutes = 0;
    const limit = 60;
    for (let i = 0; i < activities.length; i++) {  
        allMinutes += activities[i].duration;
    }
    console.log("You have added " + numberOfActs + " activities. They amount to " + allMinutes + " minutes of usage.");
    if (allMinutes >= limit) {
        console.log("You have reached your limit, no more smartphoning for you!");
    }
    
}
showStatus(activities);

// Extra feature - No youtube time will be counted

