import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  -webkit-box-shadow: 2px 4px 30px -2px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 4px 30px -2px rgba(0,0,0,0.75);
box-shadow: 2px 4px 30px -2px rgba(0,0,0,0.75);
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;