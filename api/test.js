module.exports = (req, res) => {
  const now = Date.now();

  res
    .status(200)
    .setHeader("ETag", `"${now.toString()}"`)
    .json({ hello: "world", now });
};
