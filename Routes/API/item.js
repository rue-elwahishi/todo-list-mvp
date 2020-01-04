const express = require("express");
const router = express.Router();

const item = require("../../models/item");

// route GET api/items
// GET all items
// access

router.get("/", (req, res) => {
  item
    .find()
    .sort({ date: -1 })
    .then(item => {
      res.json(item);
    });
});
// create a post
router.post("/", (req, res) => {
  const newItem = new item({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item));
});

router.delete("/:id", (req, res) => {
  item
    .findById(req.params.id)
    .then(item => {
      return item.remove();
    })
    .then(() => {
      return item.find().sort({ date: -1 });
    })
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
