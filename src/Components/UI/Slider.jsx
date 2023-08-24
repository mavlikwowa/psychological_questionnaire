import Slider from '@mui/material/Slider';
import styled from 'styled-components';
import { isDesktopSmall } from '@src/styles.js';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  ${isDesktopSmall} {
    gap: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`;

const StyledQuestion = styled.p`
  color: black;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%;
  
  ${isDesktopSmall} {
    font-size: 18px;
  }
`;

const SliderComponent = ({ labelText, className, width, ...props }) => {
  return (
    <Root className={className}>
      <StyledQuestion>{labelText}</StyledQuestion>
      <Slider
        {...props}
        marks
        max={10}
        min={0}
        size="small"
        valueLabelDisplay="on"
        sx={{
          left: '12px',
          color: 'black',
          width: `${width ?? '150px'}`,
          '& .MuiSlider-thumb': {
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& .MuiSlider-valueLabel': {
              transform: 'none',
              position: 'relative',
              top: '1px',
              '&:before': {
                display: 'none',
              },
            },
          },
        }}
      />
    </Root>
  );
};

export default SliderComponent;
