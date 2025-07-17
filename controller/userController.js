//for handling the business logic and do the intractive with user model.

export const fetch = async (req, res) => {
  try {
    return res.json("hllo world")
  } catch (err) {
    res.status(500).json({ })
  }
};
