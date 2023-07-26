import React, { useState } from "react";
import styled from "styled-components";

const ChartBox = styled.div`
  display: flex;
  width: 20rem;
  height: 15rem;
  background-color: rgba(241, 208, 10, 0.92);
  border-radius: 1rem;
  margin: auto;
`;

const ChartType = styled.p`
  color: white;
  font-size: small;
  margin-left: 1rem;
  font-weight: bold;
`;

const ChartButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ChartButton = styled.button`
  background-color: lightgray;
  width: 5px;
  height: 12px;
  border-radius: 50%;
  border-style: none;
  margin: 10px 5px;
  cursor: pointer;
`;

const MainGraph = () => {
  const [activeButton, setActiveButton] = useState(1);

  const renderInfo = () => {
    switch (activeButton) {
      case 1:
        return (
          <>
            <div>ddd</div>
          </>
        );
      case 2:
        return "코스닥 정보";
      case 3:
        return "환율 정보";
      case 4:
        return "나스닥 정보";
      case 5:
        return "다우존스 정보";
      case 6:
        return "S&P500 정보";
      default:
        return "코스피 정보";
    }
  };

  return (
    <>
      <ChartBox>
        <ChartType>{renderInfo()}</ChartType>
      </ChartBox>
      <ChartButtonBox>
        <ChartButton onClick={() => setActiveButton(1)}></ChartButton>
        <ChartButton onClick={() => setActiveButton(2)}></ChartButton>
        <ChartButton onClick={() => setActiveButton(3)}></ChartButton>
        <ChartButton onClick={() => setActiveButton(4)}></ChartButton>
        <ChartButton onClick={() => setActiveButton(5)}></ChartButton>
        <ChartButton onClick={() => setActiveButton(6)}></ChartButton>
      </ChartButtonBox>
    </>
  );
};

export default MainGraph;
