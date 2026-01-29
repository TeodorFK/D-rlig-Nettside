const index = (req, res) => {
  try {
    res.render('index');
  } catch (err) {
    console.log(err);
  }
};

const cat = (req, res) => {
  try {
    res.render('cat');
  } catch (err) {
    console.log(err);
  }
};
const recepies = (req, res) => {
  try {
    res.render('recepies');
  } catch (err) {
    console.log(err);
  }
};
const contact = (req, res) => {
  try {
    res.render('contact');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  index,
  cat,
  recepies,
  contact,
};
