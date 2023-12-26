const { exec } = require("child_process");
const robot = require('robotjs');
const cron = require('node-cron');

cron.schedule('49 13 * * *', () => {

  exec('open -a "Spotify"', (error, stdout, stderr) => { 
    if (error) {
      console.error(`Error executing command: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  
    setTimeout(() => {
      console.log('spaceing')
      robot.keyTap('space');
  }, 5000); 
  });

});

cron.schedule('52 13 * * *', () => {


  console.log('aa')
exec('pkill Spotify', (error, stdout, stderr) => {
  if (error) {
      console.error(`Error closing Spotify: ${error}`);
      return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});



 });




