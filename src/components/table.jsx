import React from "react";
import "./form.scss";

const Table = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Фамилия</th>
          <th>Имя</th>
          <th>Отчество</th>
          <th>email</th>
          <th>Логин</th>
        </tr>
      </thead>
      <tbody>
        {[] &&
          users.map((user) => (
            <tr>
              <td>{user.Фамилия}</td>
              <td>{user.Имя}</td>
              <td>{user.Отчество}</td>
              <td>{user.email}</td>
              <td>{user.Логин}</td>
              <td>red</td>
              <td>del</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default React.memo(Table);
