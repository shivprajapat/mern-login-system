const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");
/**
 ** @Description Get goals
 ** @rsoute GET /api/goals
 ** @Access Private
 **/

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

/**
 ** @Description Post goals
 ** @rsoute POST /api/goals
 ** @Access Private
 **/

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

/**
 ** @Description Update goals
 ** @rsoute PUT /api/goals/:id
 ** @Access  Private
 **/

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateGoal);
});

/**
 ** @Description Delete goals
 ** @rsoute DELETE /api/goals/:id
 ** @Access Private
 **/

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  await goal.remove;
  res.status(200).json({ id: req.params.id });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
