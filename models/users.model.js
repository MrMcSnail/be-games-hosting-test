const db = require('../db/connection');

exports.fetchUsers = () => {
  return db.query(`SELECT * FROM USERS;`).then(({ rows }) => rows);
};

exports.fetchUserByUsername = (username) => {
  return db
    .query(`SELECT * FROM USERS WHERE username = $1;`, [username])
    .then(({ rows }) => {
      if (!rows.length) {
        return Promise.reject({ status: 404, msg: 'Sorry, User not found.' });
      } else return rows;
    });
};
