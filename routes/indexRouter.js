const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Welcome to the forum, everyone! Feel free to introduce yourselves.",
    user: "Admin",
    added: new Date("2025-09-20T08:00:00Z"),
  },
  {
    text: "Hi! I'm Alice. Excited to be here!",
    user: "Alice",
    added: new Date("2025-09-20T08:05:00Z"),
  },
  {
    text: "Hey Alice, welcome aboard!",
    user: "Bob",
    added: new Date("2025-09-20T08:10:00Z"),
  },
  {
    text: "Hello! I'm Bob. Looking forward to some good discussions here.",
    user: "Bob",
    added: new Date("2025-09-20T08:12:00Z"),
  },
  {
    text: "Anyone here into coding? I'm working on a JavaScript project.",
    user: "Alice",
    added: new Date("2025-09-20T08:15:00Z"),
  },
  {
    text: "Definitely! I love coding. What project are you working on?",
    user: "Bob",
    added: new Date("2025-09-20T08:20:00Z"),
  },
  {
    text: "I’m building a personal website, just for fun.",
    user: "Alice",
    added: new Date("2025-09-20T08:22:00Z"),
  },
  {
    text: "That sounds awesome! If you need any help, let me know.",
    user: "Bob",
    added: new Date("2025-09-20T08:30:00Z"),
  },
  {
    text: "Anyone got tips for organizing a project in Git?",
    user: "Charlie",
    added: new Date("2025-09-20T08:35:00Z"),
  },
  {
    text: "Sure! I always use branches for different features.",
    user: "Bob",
    added: new Date("2025-09-20T08:40:00Z"),
  },
];

indexRouter.get("/", (req, res) => res.render("index", { messages }));

module.exports = indexRouter;
