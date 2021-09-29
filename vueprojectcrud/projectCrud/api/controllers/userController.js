const user = require("../models/userModel")

exports.listAllUsers = (req, res) => {
    user.find({}, (err, users) => {
      if (err) res.send(err);
      res.json(users);
    });
  };

exports.createUser = (req, res) => {
  const newUser = new user(req.body);
  newUser.save((err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.readUser = (req, res) => {
    user.findById(req.params.userId, (err, user) => {
      if (err) res.send(err);
      res.json(user);
    });
  };

exports.updateUser = (req, res) => {
  user.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    (err, user) => {
      if (err) res.send(err);
      res.json(user);
    }
  );
};

exports.deleteUser = (req, res) => {
    user.deleteOne({ _id: req.params.userId }, err => {
      if (err) res.send(err);
      res.json({
        message: 'User successfully deleted',
       _id: req.params.userId
      });
    });
  };

