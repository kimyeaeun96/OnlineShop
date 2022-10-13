import "../login/login.css";

export const Signup = () => {
  return (
    <div className="container">
      <h1>회원가입 페이지</h1>
      <br />
      <br />
      아이디 <input type="text" />
      <br />
      비밀번호 <input type="password" />
      <br />
      이름 <input type="text"></input>
      <br />
      번호 <input type="tel" />
      <br />
      <br />
      <button>가입하기</button>
    </div>
  );
};
