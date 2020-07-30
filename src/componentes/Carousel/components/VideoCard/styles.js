import styled from 'styled-components';

export const VideoCardContainer = styled.a`

  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.5s;
  
  &:hover{
  transition: 0.5s;
  overflow: hidden;
  transform: scale(1.2); 
  margin-left: 15px;
  margin-right: 30px;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
