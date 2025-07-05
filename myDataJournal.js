// myDataJournal.js

const weekData = [
    {
        day: "Monday",
        sleepHours: 7,
        screenTime: 5,
        mood: "happy",
        caffeineIntake: 4,
        focusLevel: 9
    },
    {
        day: "Tuesday",
        sleepHours: 6,
        screenTime: 4,
        mood: "productive",
        caffeineIntake: 4,
        focusLevel: 10
    },
    {
        day: "Wednesday",
        sleepHours: 5,
        screenTime: 8,
        mood: "productive",
        caffeineIntake: 4,
        focusLevel: 10
    },
    {
        day: "Thursday",
        sleepHours: 6,
        screenTime: 3,
        mood: "worried",
        caffeineIntake: 5,
        focusLevel: 5
    },
    {
        day: "Friday",
        sleepHours: 7,
        screenTime: 6,
        mood: "happy",
        caffeineIntake: 4,
        focusLevel: 9
    },
    {
        day: "Saturday",
        sleepHours: 8,
        screenTime: 2,
        mood: "productive",
        caffeineIntake: 4,
        focusLevel: 10
    },
    {
        day: "Sunday",
        sleepHours: 7,
        screenTime: 3,
        mood: "happy",
        caffeineIntake: 4,
        focusLevel: 9
    }
];

// Predictions
// Which day had the most screen time?  Wednesday
// Best focus day?                      Friday
// Is more caffeine helping?            Yes



function findHighestScreenTime() {
    let highest = weekData[0]; // Initialize with the first day of week
    for (let i = 1; i < weekData.length; i++) {
        if (weekData[i].screenTime > highest.screenTime) {
            highest = weekData[i];
        }
    }
    return highest;
}

function averageSleep() {
    let totalSleep = 0;
    for (let i = 0; i < weekData.length; i++) {
        totalSleep += weekData[i].sleepHours;
    }
    return totalSleep / weekData.length;
}

function mostFrequentMood() {
    const moodCount = {};
    for (let i = 0; i < weekData.length; i++) {
        const mood = weekData[i].mood;
        if (moodCount[mood]) {
            moodCount[mood]++;
        } else {
            moodCount[mood] = 1;
        }
    }

    let mostFrequent = null;
    let maxCount = 0;
    for (const mood in moodCount) {
        if (moodCount[mood] > maxCount) {
            maxCount = moodCount[mood];
            mostFrequent = mood;
        }
    }
    return mostFrequent;
}


function correlateCaffeineToFocus() {
  let caffeineSum = 0;
  let focusSum = 0;
  for (let i = 0; i < weekData.length; i++) {
    caffeineSum += weekData[i].caffeineIntake;
    focusSum += weekData[i].focusLevel;
  }
  let avgCaffeine = caffeineSum / weekData.length;
  let avgFocus = focusSum / weekData.length;

  let aboveAvgCaffeineAboveAvgFocus = 0;
  let aboveAvgCaffeineBelowAvgFocus = 0;
  let belowAvgCaffeineAboveAvgFocus = 0;
  let belowAvgCaffeineBelowAvgFocus = 0;

  for (let i = 0; i < weekData.length; i++) {
    if (weekData[i].caffeineIntake > avgCaffeine) {
      if (weekData[i].focusLevel > avgFocus) {
        aboveAvgCaffeineAboveAvgFocus++;
      } else {
        aboveAvgCaffeineBelowAvgFocus++;
      }
    } else {
      if (weekData[i].focusLevel > avgFocus) {
        belowAvgCaffeineAboveAvgFocus++;
      } else {
        belowAvgCaffeineBelowAvgFocus++;
      }
    }
  }

  return (aboveAvgCaffeineAboveAvgFocus + belowAvgCaffeineBelowAvgFocus > aboveAvgCaffeineBelowAvgFocus + belowAvgCaffeineAboveAvgFocus) ? "Yep!" : "Nope!";
}


// Imitate example output
console.log("Analyzing Shay's Data Journal...");
console.log(`Most screen time: ${findHighestScreenTime().day} (${findHighestScreenTime().screenTime} hrs)`);
console.log(`Average sleep: ${averageSleep().toFixed(1)} hrs`);
console.log(`Most frequent mood: "${mostFrequentMood()}"`);
console.log(`Does more caffeine mean better focus? → `, correlateCaffeineToFocus());