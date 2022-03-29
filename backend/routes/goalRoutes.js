const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.status(200).json({ message: "Get goals" }));

router.post("/", (req, res) => res.status(200).json({ message: "Post goals" }));

router.put("/:id", (req, res) =>
  res.status(200).json({ message: `Edit goals ${req.params.id}` })
);

router.delete("/:id", (req, res) =>
  res.status(200).json({ message: `Delete goals${req.params.id}` })
);

module.exports = router;
