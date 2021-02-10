import styled, { css } from 'styled-components';


const handleFontSize = size => {
    switch (size) {
      case "small":
        return "12px";
      case "medium":
        return "15px";
      case "large":
        return "18px";
      default:
        return "12px";
    }
  };

export const StyledChip = styled.div(
    ({color, size}) => css`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        height:30px;
        color: #eeeeee;
        border-left: 10px solid ${color ? color: "gray"};
        background: black;
        
        margin: 2px;
        font-size: ${handleFontSize(size)};

        span {
            padding-left: 10px;
            padding-right: 10px;
        }
    `
);