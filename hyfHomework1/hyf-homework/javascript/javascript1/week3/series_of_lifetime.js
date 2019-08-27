// Series of lifetime
// By Lilla Kőrösi
// Hack Your Future - JavaScript Week3

const seriesDurations = [
    {
      title: 'Girls',
      days: 0,
      hours: 15,
      minutes: 30,  
    },
    {
      title: 'Friends',
      days: 3,
      hours: 14,
      minutes: 32,
    },
    {
      title: 'Orange is the new black',
      days: 3,
      hours: 7,
      minutes: 0,
    }
  ]
  

  function howMuchTime() {
      let inTotal = 0;
      for (let i = 0; i < seriesDurations.length; i++) { 
        // 1 year = 525600 minutes, 80 years = 42048000 minutes
        const lifespan = 42048000;
        daysToMinutes = 0;
        daysToMinutes = seriesDurations[i].days * 1440;
        hoursToMinutes = seriesDurations[i].hours * 60;
        sumMinutes = daysToMinutes + hoursToMinutes + seriesDurations[i].minutes;
        InPercentage = sumMinutes / lifespan * 100;
        inTotal += InPercentage;
        console.log(seriesDurations[i].title + " took " + InPercentage.toFixed(3) + "% of your life.");
      }
      console.log("That is " + inTotal.toFixed(3) + "% in total.");
  
  }

howMuchTime();
