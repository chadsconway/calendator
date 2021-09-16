import { default as mysql } from "mysql";

const conn = mysql.createConnection({
  host: "localhost",
  user: "calendator",
  password: "sunkisthype120",
  database: "calendator",
});
/**
 * ^ connect
 * @param conn
 * @returns
 */
function connect(conn) {
  conn.connect(function (err) {
    if (err) {
      console.log("connection error: " + err.stack);
    }
    console.log("connected as id " + conn.threadID);
  });
  return conn;
}

/**
 * ^ endConn
 * @param conn
 */
function endConn(conn) {
  conn.end(function (err) {
    console.log("connection terminated");
  });
}

/**
 * @function insertRow
 * @param conn
 * @param table
 * @param columns
 * @param values
 */
