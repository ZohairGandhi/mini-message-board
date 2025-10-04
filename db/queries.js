const pool = require("./pool");

async function addMessage({ text, user: username, added }) {
  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)",
    [text, username, added],
  );
}

async function getMessages() {
  const { rows } = await pool.query(
    "SELECT text, username, added FROM messages",
  );
  return rows;
}

async function getMessageById(id) {
  const sql = `
    SELECT text, username, added FROM messages
    WHERE id = $1
`;
  const { rows } = await pool.query(sql, [id]);
  return rows[0];
}

module.exports = { addMessage, getMessages, getMessageById };
