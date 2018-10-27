import React from 'react';
import { SVGContainer, StyledSVG } from './styles';
import { withTheme } from 'emotion-theming';

const PlusIcon = withTheme(props => {
  return (
    <SVGContainer {...props}>
      <StyledSVG viewBox="0 0 384 384">
        <circle fill={props.theme.colors.primary} cx="192" cy="192" r="176" />
        <g>
          <path
            fill={props.theme.colors.text}
            d="M192,384c105.9,0,192-86.1,192-192c0-8.8-7.2-16-16-16s-16,7.2-16,16c0,88.2-71.8,160-160,160S32,280.2,32,192
            S103.8,32,192,32c43,0,83.3,16.8,113.5,47.3c6.2,6.3,16.4,6.3,22.6,0.1c6.3-6.2,6.3-16.4,0.1-22.6C291.9,20.2,243.5,0,192,0
            C86.1,0,0,86.1,0,192S86.1,384,192,384z"
          />
          <path
            fill="#000"
            d="M192,272c8.8,0,16-7.2,16-16v-48h48c8.8,0,16-7.2,16-16s-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16s-16,7.2-16,16v48h-48
            c-8.8,0-16,7.2-16,16s7.2,16,16,16h48v48C176,264.8,183.2,272,192,272z"
          />
        </g>
      </StyledSVG>
    </SVGContainer>
  );
});

export default PlusIcon;
