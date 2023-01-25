import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 0px;
  /* width: 1600px; */
  margin-left: auto;
  margin-right: auto;
  z-index: 100;
  /* padding: 0px;
  margin: 0; */
  margin-left: -80px;
  margin-right: -80px;
  padding-left: 80px;
  padding-right: 80px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`;
