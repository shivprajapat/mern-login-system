/**
 ** @Description Get goals
 ** @rsoute GET /api/goals
 ** @Access Private
 **/

const getGoals = (req, res) => res.status(200).json({ message: "Get goals" });

/**
 ** @Description Post goals
 ** @rsoute POST /api/goals
 ** @Access Private
 **/

const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  res.status(200).json({ message: "Get goals" });
};

/**
 ** @Description Update goals
 ** @rsoute PUT /api/goals/:id
 ** @Access  Private
 **/

const updateGoal = (req, res) =>
  res.status(200).json({ message: `Update goal ${req.params.id}` });

/**
 ** @Description Delete goals
 ** @rsoute DELETE /api/goals/:id
 ** @Access Private
 **/

const deleteGoal = (req, res) =>
  res.status(200).json({ message: `Delete goal ${req.params.id}` });

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
