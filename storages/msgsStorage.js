class MsgsStorage {
  constructor() {
    this.storage = {
      0: {
        text: "Welcome to the forum, everyone! Feel free to introduce yourselves.",
        user: "Admin",
        added: new Date("2025-09-20T08:00:00Z"),
      },
      1: {
        text: "Hi! I'm Alice. Excited to be here!",
        user: "Alice",
        added: new Date("2025-09-20T08:05:00Z"),
      },
      2: {
        text: "Hey Alice, welcome aboard!",
        user: "Bob",
        added: new Date("2025-09-20T08:10:00Z"),
      },
      3: {
        text: "Hello! I'm Bob. Looking forward to some good discussions here.",
        user: "Bob",
        added: new Date("2025-09-20T08:12:00Z"),
      },
      4: {
        text: "Anyone here into coding? I'm working on a JavaScript project.",
        user: "Alice",
        added: new Date("2025-09-20T08:15:00Z"),
      },
      5: {
        text: "Definitely! I love coding. What project are you working on?",
        user: "Bob",
        added: new Date("2025-09-20T08:20:00Z"),
      },
      6: {
        text: "I’m building a personal website, just for fun.",
        user: "Alice",
        added: new Date("2025-09-20T08:22:00Z"),
      },
      7: {
        text: "That sounds awesome! If you need any help, let me know.",
        user: "Bob",
        added: new Date("2025-09-20T08:30:00Z"),
      },
      8: {
        text: "Anyone got tips for organizing a project in Git?",
        user: "Charlie",
        added: new Date("2025-09-20T08:35:00Z"),
      },
      9: {
        text: "Sure! I always use branches for different features.",
        user: "Bob",
        added: new Date("2025-09-20T08:40:00Z"),
      },
    };
    this.id = 10;
  }

  addMsg({ text, user, added }) {
    const id = this.id;
    this.storage[id] = { id, text, user, added };
    this.id += 1;
  }

  getMsgs() {
    return Object.values(this.storage);
  }

  getMsg(id) {
    return this.storage[id];
  }
}

module.exports = new MsgsStorage();
