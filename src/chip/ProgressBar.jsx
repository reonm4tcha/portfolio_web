import React from "react";
import styled from "styled-components";

const ProgressBar = ({ logo, name, value, duration = 3 }) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-1 text-xl font-semibold ">
      <div className="flex items-start">
        <img src={logo} alt="logo" className="h-[25px] w-[25px] flex" />
        <p className="text-[1.15rem] flex items-center gap-1 sm:text-[1rem] exsm:text-sm exsm:gap-3 ml-2">
          {name}
        </p>{" "}
      </div>
      <div className="h-[8px] w-[100%] relative rounded-3xl bg-gray-300">
        <Progress
          className="w-[0%] h-[8px] absolute rounded-3xl bg-yellow-500"
          style={{
            width: `${value}%`,
            animation: `progress-animation ${duration}s linear`,
          }}
        ></Progress>
      </div>
    </div>
  );
};

export default ProgressBar;

const Progress = styled.div`
  @keyframes progress-animation {
    from {
      width: 0%;
    }
    to {
      width: ${(props) => props.width};
    }
  }
`;
