import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import AnimatedComponents from "../components/AnimatedComponents";
import Button from "../components/Button";
import { cuxios } from "../utils/cuxios";
import useNavi from "../utils/useNavi";

const blurAnimation = keyframes`
  0% {
    filter: blur(0.5rem);
  }
  100% {
    filter: blur(0);
  }
`;

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 20rem);
  color: ${(props) => props.theme.color};
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  animation: ${blurAnimation} 0.5s ease-in-out forwards;
  p {
    font-size: 2.5rem;
  }
`;

const Home = () => {
  const setPage = useNavi();
  const isUser = async () => {
    try {
      const res = await cuxios.get("http://3.38.191.164/user");
    } catch (err) {
      alert("로그인을 다시 해주세요!");
      setPage("/login");
    }
  };
  useEffect(() => {
    isUser();
  }, []);
  return (
    <AnimatedComponents>
      <HomeWrapper>
        <p>당신의 오늘의 한 줄을 기록해주세요.</p>
        <Button size="l" onClick={() => setPage("/diary")}>
          시작하기
        </Button>
      </HomeWrapper>
    </AnimatedComponents>
  );
};

export default Home;
