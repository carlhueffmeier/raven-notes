import styled from 'react-emotion';

const StyledSVG = styled('svg')(props => ({
  display: 'inline-block',
  width: '1em',
  height: '1em',
  strokeWidth: 0,
  stroke: 'currentColor',
  fill: 'currentColor',
  padding: props.padding || '0'
}));

const SVGContainer = styled('span')({
  display: 'flex'
});

export { StyledSVG, SVGContainer };
