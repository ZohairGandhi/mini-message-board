#! /usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  username VARCHAR ( 255 ),
  added TIMESTAMP
);

INSERT INTO messages (text, username, added)
VALUES
  ('Welcome to the forum, everyone! Feel free to introduce yourselves.', 'Admin', '2025-09-20 08:00:00'),
  ('Hi! I''m Alice. Excited to be here!', 'Alice', '2025-09-20 08:05:00'),
  ('Hey Alice, welcome aboard!', 'Bob', '2025-09-20 08:10:00'),
  ('Hello! I''m Bob. Looking forward to some good discussions here.', 'Bob', '2025-09-20 08:12:00'),
  ('Anyone here into coding? I''m working on a JavaScript project.', 'Alice', '2025-09-20 08:15:00'),
  ('Definitely! I love coding. What project are you working on?', 'Bob', '2025-09-20 08:20:00'),
  ('I''m building a personal website, just for fun.', 'Alice', '2025-09-20 08:22:00'),
  ('That sounds awesome! If you need any help, let me know.', 'Bob', '2025-09-20 08:30:00'),
  ('Anyone got tips for organizing a project in Git?', 'Charlie', '2025-09-20 08:35:00'),
  ('Sure! I always use branches for different features.', 'Bob', '2025-09-20 08:40:00');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@localhost:5432/${process.env.PGDATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
