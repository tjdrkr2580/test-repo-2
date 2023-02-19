import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import AnimatedComponents from "../components/AnimatedComponents";
import Button from "../components/Button";
import { flexCenter } from "../style/mixin";
import { inputForm } from "../types/type";
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
    font-size: 1.2rem;
    &:hover {
      text-decoration: underline;
    }
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
  const { register, handleSubmit, reset } = useForm();
  const [isSign, setSign] = useState(true);
  const onSignChange = () => {
    setSign(!isSign);
    reset();
  };
  const setPage = useMovePage();

  const onSignup = async (data: inputForm) => {
    try {
      const res_o = await cuxios.post("http://3.38.191.164/register", data);
      const res_t = await cuxios.post("http://3.38.191.164/login", data);
      cuxios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res_t.data.token}`;
      setPage("/");
      reset();
    } catch (err) {
      alert("해당 아이디를 가진 계정이 존재합니다!");
      reset();
    }
  };
  const onSignin = async (data: inputForm) => {
    try {
      const res = await cuxios.post("http://3.38.191.164/login", data);
      cuxios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.token}`;
      setPage("/");
      reset();
    } catch (err) {
      alert("계정을 다시 확인해주세요!");
      reset();
    }
  };

  const onSubmit = (data: any) => {
    if (isSign === false) {
      onSignup(data);
    } else {
      onSignin(data);
    }
  };

  return (
    <AnimatedComponents>
      <LoginWrapper onSubmit={handleSubmit(onSubmit)}>
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
    </AnimatedComponents>
  );
};

export default Login;
