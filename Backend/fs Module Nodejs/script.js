const fs = require('node:fs');

fs.readFile('D:/Web_Development/Express.js/fs Module Nodejs/vmware license.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
