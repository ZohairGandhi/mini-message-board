const db = require("../db/queries");
const { body } = require("express-validator");

exports.indexGet = async (req, res) =>
  res.render("index", {
    messages: await db.getMessages(),
    title: "Mini Message Board",
  });

exports.indexNewGet = (req, res) =>
  res.render("form", { title: "Add New Message" });

const validateData = [
  body("text").trim().escape(),
  body("user").trim().escape(),
];

exports.indexNewPost = [
  validateData,
  async (req, res) => {
    const { text, user: username } = req.body;
    await db.addMessage({ text, user: username, added: new Date() });
    res.redirect("/");
  },
];

exports.indexMessagesGet = async (req, res) => {
  const id = req.params.msgIdx;
  res.render("message", {
    message: await db.getMessageById(id),
    title: "View Message",
  });
};
