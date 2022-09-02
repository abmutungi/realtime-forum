package users

import (
	"database/sql"
	"fmt"
	"net"
	"net/http"
	"strings"
)


// this func registers a users username, email, firstname, lastname, password(unhashed) and age
func RegisterUser(db *sql.DB, username string, hash []byte, email string) {
	// db, _ = sql.Open("sqlite3", "forum.db")
	stmt, err := db.Prepare("INSERT INTO users (username, hash, email, usertype, becomemod) VALUES (?, ?, ?, 'user', 0)")
	if err != nil {
		fmt.Println("error preparing statement:", err)
		return
	}
	// defer stmt.Close()
	result, _ := stmt.Exec(username, hash, email)
	// checking if the result has been added and the last inserted row
	rowsAff, _ := result.RowsAffected()
	lastIns, _ := result.LastInsertId()
	fmt.Println("rows affected:", rowsAff)
	fmt.Println("last inserted:", lastIns)
}

