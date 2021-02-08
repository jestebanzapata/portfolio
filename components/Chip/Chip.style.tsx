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
        color: #1976d2;
        border: 1px solid #1976d2;
        
        margin: 2px;
        border-radius: 15px;
        font-size: ${handleFontSize(size)};

        span {
            padding-left: 10px;
            padding-right: 10px;
        }
    `
);