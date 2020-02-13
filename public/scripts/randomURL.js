// Create a function that will output a random alphanumeric string

const randomUrl = () => {
  return Math.random().toString(36).substr(2);
}

module.exports = {
  randomUrl
};
