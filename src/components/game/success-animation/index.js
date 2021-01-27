import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  width: 30px;

  .path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
  }
  .circle {
    -webkit-animation: dash 0.9s ease-in-out;
    animation: dash 0.9s ease-in-out;
  }

  @-webkit-keyframes dash {
    0% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
`;

const SuccessAnimation = () => {
  return (
    <StyledSvg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130.2 130.2"
    >
      <circle
        className="path circle"
        fill="none"
        stroke="#73AF55"
        strokeWidth="6"
        strokeMiterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <polyline
        className="path check"
        fill="none"
        stroke="#73AF55"
        strokeWidth="6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        points="100.2,40.2 51.5,88.8 29.8,67.5 "
      />
    </StyledSvg>
  );
};

export { SuccessAnimation };
