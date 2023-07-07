import styled from 'styled-components'

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 132px;
  border-radius: 14px;
  background: ${props => props.goBack ?'transparent':'rgba(0, 0, 0, 0.8)'};
  border:  ${props => props.goBack ?'1px solid #FFFFFF;':'none'};
  color: #ffffff;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img{
    transform: ${props => props.goBack &&'rotateY(180deg)'} ;
  }
 
`;
