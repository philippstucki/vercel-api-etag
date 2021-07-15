module.exports = (req, res) => {
  res.status(200).setHeader("etag", "asdf1234asdf").json({ hello: "world" });
};
