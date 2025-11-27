const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Enter number of seconds to count down: ", (input) => {
  let timeLeft = Number(input);  

  console.log(`Countdown started for ${timeLeft} seconds... (Press "s" to stop)`);

  let stopRequested = false;

  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on("data", (key) => {
    if (key.toString().toLowerCase() === "s") {
      stopRequested = true;
    }
  });


  const timer = setInterval(() => {
    console.log(`Remaining: ${timeLeft} seconds`);
    timeLeft--;

    if (stopRequested) {
      clearInterval(timer);
      console.log("Countdown stopped by user!");
      process.exit();
    }

    if (timeLeft < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      process.exit();
    }
  }, 1000);


  const checkStop = () => {
    if (!stopRequested) {
      setTimeout(checkStop, 50);
    }
  };

  checkStop();
});
