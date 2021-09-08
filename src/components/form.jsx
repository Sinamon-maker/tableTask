import React from "react";
import "./form.scss";

const Form = ({ onSubmit }) => {
  return (
    <form className="form">
      <header className="form__heading">Создание пользователя</header>
      <footer className="form__footer"></footer>
    </form>
  );
};

export default React.memo(Form);
