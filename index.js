function sendMessageWithName(name) {
  if(name.length === 0) {
    console.log("Name cannot be empty");
    return;
  }

  const message = `Hello, ${name}! Welcome To OG World, Now You Are Part Of The OG Gang!`;
  return message;
}

module.exports = sendMessageWithName;