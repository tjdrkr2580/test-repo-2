import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import { flexCenter } from "../style/mixin";
import { cuxios } from "../utils/cuxios";

const LoginWrapper = styled.form`
  width: 100vw;
  height: 100vh;
  ${flexCenter}
`;

const SignWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const Login = () => {
  const [isSign, setSign] = useState(false);
  const [info, setInfo] = useState({
    id: "",
    password: "",
  });
  const onSignChange = () => {
    setSign(!isSign);
    setInfo({
      id: "",
      password: "",
    });
  };
  const onSignup = async () => {
    const res = await cuxios.post("http://3.38.191.164/register", info);
    console.log(res);
  };
  const onSignin = async () => {
    const res = await cuxios.post("http://3.38.191.164/login", info);
    console.log(res);
  };
  return (
    <LoginWrapper>
      {isSign === true ? (
        <SignWrapper onSubmit={onSignin}>
          <Input placeholder="아이디를 입력하세요." />
          <Input placeholder="비밀번호를 입력하세요." />
          <p onClick={onSignChange}>계정이 존재하지 않나요?</p>
          <Button>로그인</Button>
        </SignWrapper>
      ) : (
        <SignWrapper onSubmit={onSignup}>
          <Input placeholder="아이디를 입력하세요." />
          <Input placeholder="비밀번호를 입력하세요." />
          <p onClick={onSignChange}>돌아가기</p>
          <Button>회원가입</Button>
        </SignWrapper>
      )}
    </LoginWrapper>
  );
};

export default Login;
