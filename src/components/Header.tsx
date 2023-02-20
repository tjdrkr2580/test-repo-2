import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Cookies } from "react-cookie";
import useMovePage from "../utils/useNavi";

const HeaderWrapper = styled.header`
  padding: 2rem 1rem;
  height: 6rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  h1 {
    font-size: 3rem;
  }
`;

const LinkWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 1.85rem;
  .logout {
    font-weight: 500;
    font-size: 2rem;
    color: ${(props) => props.theme.textColor};
    &:hover {
      letter-spacing: 0.12rem;
    }
  }
`;

const CustomLink = styled(Link)`
  font-weight: 500;
  font-size: 2rem;
  color: ${(props) => props.theme.textColor};
  &:hover {
    letter-spacing: 0.12rem;
  }
`;

const Header = () => {
  const setPage = useMovePage();
  const cookies = new Cookies();
  const onLogout = () => {
    cookies.remove("diary-auth");
    setPage("/");
    console.log("dd");
  };

  return (
    <HeaderWrapper>
      <h1>한줄 일기.</h1>
      <LinkWrapper>
        <CustomLink to="/diary">Diary</CustomLink>
        <h1 onClick={onLogout} className="logout">
          Log out
        </h1>
      </LinkWrapper>
    </HeaderWrapper>
  );
};

export default Header;
