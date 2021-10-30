const os = require('os');

//? Getting the platform
console.log(os.platform());
//win32

//? Getting CPU architecture
console.log(os.arch());

//? CPU core info
console.log(os.cpus());
//Logs info about each CPU

//? Free memory
console.log(os.freemem());
//7867371520

//? Total memory
console.log(os.totalmem());
//17092894720

//? Home dir
console.log(os.homedir());
//C:\Users\Tajhr

//? Uptime
// in seconds
console.log(os.uptime());
//272851
