import React from 'react';
import { SVGContainer, StyledSVG } from './styles';
import { BlurFilter, GlowFilter } from './svgFilters';

function LayoutIconNoteList(props) {
  return (
    <SVGContainer {...props}>
      <StyledSVG viewBox="0 0 72.8 52.2" padding="8px">
        {props.active ? <GlowFilter /> : <BlurFilter radius={2} />}
        <g filter={props.active ? `url(#glow)` : `url(#blur)`}>
          <path
            fill="#F9F9F9"
            d="M67.9,51.3H16.7c-1.7,0-3-1.4-3-3V4.1c0-1.7,1.4-3,3-3h51.2c1.7,0,3,1.4,3,3v44.2
          C70.9,49.9,69.5,51.3,67.9,51.3z"
          />
          <path
            fill="#DDDDDD"
            d="M10.5,51.3H4.6c-1.5,0-2.6-1.2-2.6-2.6V3.7c0-1.5,1.2-2.6,2.6-2.6h5.9c1.5,0,2.6,1.2,2.6,2.6v44.9
          C13.1,50.1,11.9,51.3,10.5,51.3z"
          />
          <g fill="none" stroke="#1D1D1B" strokeWidth={2}>
            <path d="M7.6,1.1h57.6c3.7,0,6.6,3,6.6,6.6v36.9c0,3.7-3,6.6-6.6,6.6H7.6c-3.7,0-6.6-3-6.6-6.6V7.7C1,4,4,1.1,7.6,1.1z" />
            <path d="M13.7,1.1v50.2" />
          </g>
        </g>
      </StyledSVG>
    </SVGContainer>
  );
}

export default LayoutIconNoteList;
