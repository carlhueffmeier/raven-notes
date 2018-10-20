import React from 'react';
import { SVGContainer, StyledSVG } from './styles';
import { BlurFilter, GlowFilter } from './svgFilters';

function LayoutIconFocus(props) {
  return (
    <SVGContainer {...props}>
      <StyledSVG viewBox="0 0 72.8 52.2" padding="8px">
        {props.active ? <GlowFilter /> : <BlurFilter radius={2} />}
        <g filter={props.active ? `url(#glow)` : `url(#blur)`}>
          <g fill="#FFFFFF" stroke="#1D1D1B" strokeWidth={2}>
            <path d="M7.6,1h57.6c3.7,0,6.6,3,6.6,6.6v36.9c0,3.7-3,6.6-6.6,6.6H7.6c-3.7,0-6.6-3-6.6-6.6V7.6C1,4,4,1,7.6,1z" />
            <path d="M12.7,17.1h47.5 M12.7,22.8h47.5 M12.7,28.8h47.5 M12.7,35.1h47.5" />
          </g>
        </g>
      </StyledSVG>
    </SVGContainer>
  );
}

export default LayoutIconFocus;
