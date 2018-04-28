const rand = require(`${__dirname}/csprng.js`);

const randomBytes = function () {
  const bytes = rand(160, 64);
  console.group();
  console.log(`\nRandom base64 bytes of 160 bits\n${bytes}\n`);
  return console.groupEnd();
};

randomBytes();