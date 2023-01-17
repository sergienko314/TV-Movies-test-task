import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 157px;
  height: 70px;
  background-color: transparent;
`;

export const SpanM = styled.span`
  font-family: 'Lemon';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 0px;
  text-align: center;
  color: #ffffff;
`;

export const SpanBox = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 0px;
  text-align: center;
  color: #ffffff;
`;

export const WrapperBorderOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background: linear-gradient(316.53deg, #26fff2 13.2%, #326cff 71.54%);
  border-radius: 14px;
`;

export const WrapperBorderTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  width: 62px;
  height: 62px;
  background: ${props => props.backgroundColor};

  border-radius: 14px;
`;

// export const Wrapper = styled.div``;
