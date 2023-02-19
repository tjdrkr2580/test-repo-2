import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import { flexCenter } from "../style/mixin";
import { cuxios } from "../utils/cuxios";
import useMovePage from "../utils/useNavi";

const LoginWrapper = styled.form`
  width: 100vw;
  height: 100vh;
  ${flexCenter}
`;

const SignWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.2rem;
  p {
    cursor: pointer;
    font-size: 1.2rem;
  }
  input {
    width: 22rem;
    height: 4rem;
    border-radius: 1rem;
    padding: 0.6rem;
    font-size: 1.3rem;
    border: none;
    border: 0.025rem solid #696868;
    &:focus {
      outline: none;
    }
  }
`;

const Login = () => {
  const { register, handleSubmit, reset, watch } = useForm();
  const [isSign, setSign] = useState(false);
  // const [info, setInfo] = useState({
  //   id: "",
  //   password: "",
  // });
  const onSignChange = () => {
    setSign(!isSign);
    reset();
  };
  const setPage = useMovePage();

  const onSignup = async () => {
    // const res = await cuxios.post("http://3.38.191.164/register", info);
    // console.log(res);
    // setPage("/");
    console.log(watch());
    reset();
  };
  const onSignin = async () => {
    // const res = await cuxios.post("http://3.38.191.164/login", info);
    // console.log(res);
    // setPage("/");
    console.log(watch());
    reset();
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSign === false) {
      onSignup();
    } else {
      onSignin();
    }
  };

  return (
    <LoginWrapper onSubmit={onSubmit}>
      {isSign === true ? (
        <SignWrapper>
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            {...register("id")}
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register("password")}
          />
          <p onClick={onSignChange}>계정이 존재하지 않나요?</p>
          <Button>로그인</Button>
        </SignWrapper>
      ) : (
        <SignWrapper>
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            {...register("id")}
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register("password")}
          />
          <p onClick={onSignChange}>돌아가기</p>
          <Button>회원가입</Button>
        </SignWrapper>
      )}
    </LoginWrapper>
  );
};

export default Login;
