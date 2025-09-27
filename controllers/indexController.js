exports.indexGet = (req, res) =>
  res.render("index", { messages: msgsStorage.getMsgs() });

exports.indexNewGet = (req, res) => res.render("form");

exports.indexNewPost = (req, res) => {
  const { text, user } = req.body;
  msgsStorage.addMsg({ text, user, added: new Date() });
  res.redirect("/");
};
