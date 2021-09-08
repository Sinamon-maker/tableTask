import { useState } from "react";
import "./styles.css";
import Table from "./components/table";
import Form from "./components/form";
import Button from "./utils/button";
import users from "./data.js";

export default function App() {
  const [isAddUser, setUser] = useState(false);
  return (
    <div className="App">
      <header className="header" />
      <main className="main-content">
        <sidebar className="sidebar" />
        <div className="container user-content">
          <div className="user-content__heading">
            <span>Пользователи</span>
            <Button title="+Добавить" />
          </div>
          <Table users={users} />
          {isAddUser && <Form />}
        </div>
      </main>
    </div>
  );
}
