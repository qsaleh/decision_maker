// Create a function that will output a random alphanumeric string

const randomID = () => {
  return Math.random().toString(36).substr(2);
}

module.exports = {
  randomID
};
