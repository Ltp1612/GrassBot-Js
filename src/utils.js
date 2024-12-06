require('colors');

const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function displayHeader() {
    process.stdout.write('\x1Bc');
    console.log('========================================'.yellow);
    console.log('=               Grass Bot              ='.green);
    console.log('=    Gangstar Of Shortcut For Life     ='.red);
    console.log('=              GPC FAMILY              ='.blue);
    console.log('========================================'.yellow);
    console.log();
  }

module.exports = { delay, displayHeader };
