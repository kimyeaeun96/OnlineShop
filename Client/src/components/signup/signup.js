import "../login/login.css";
import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import axios from 'axios'

export const Signup = () => {
  
  const [Id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const onChangeId = () => {
    setId(e.current.value);
  };

  const onChangeName = () => {
    setName(e.current.value);
  };
  const onChangePassword = () => {
    setPassword(e.current.value);
  };
  const onChangeConfirmPassword = () => {
    setConfirmPassword(e.current.value);
  };
  const onChangeEmail = () => {
    setEmail(e.current.value);
  };
  
  

  axios.post("http://localhost:8000/signup", {
    
  })


  return (
    <div className="container">
      <h1>회원가입 페이지</h1>
      <form id="form_info" action="/user/profile" method="POST">
        <br />
        아이디 <input type="text" value={Id} onChange={onChangeId} />
        <br />
        이름 <input type="text" value={name} onChange={onChangeName} />
        <br />
        비밀번호
        <input type="password" value={password} onChange={onChangePassword} />
        <br />
        비밀번호 확인
        <input
          type="password"
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
        />
        <br />
        이메일 <input type="email" value={email} onChange={onChangeEmail} />
        <br />
        <br />
        <button onClick={onClick}>가입하기</button>
      </form>
    </div>
  );
};
