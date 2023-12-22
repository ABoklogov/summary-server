const getAll = (req, res) => {
  res.status(200).json({
    message: "getAllPortfolio"
  });
};

module.exports = getAll;