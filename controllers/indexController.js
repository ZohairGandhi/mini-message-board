const msgsStorage = require("../storages/msgsStorage");

exports.indexGet = (req, res) =>
  res.render("index", { messages: msgsStorage.getMsgs() });

exports.indexNewGet = (req, res) => res.render("form");

exports.indexNewPost = (req, res) => {
  const { text, user } = req.body;
  msgsStorage.addMsg({ text, user, added: new Date() });
  res.redirect("/");
};

exports.indexMessagesGet = (req, res) => {
  const id = req.params.msgIdx;
  res.render("message", { message: msgsStorage.getMsg(id) });
};
