import React from 'react';
import { withTheme } from 'emotion-theming';

const GlowFilter = withTheme(props => {
  return (
    <filter id="glow" height="300%" width="300%" x="-75%" y="-75%">
      <feMorphology operator="dilate" radius="4" in="SourceAlpha" result="thicken" />
      <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" />
      <feFlood floodColor={props.theme.colors.primary} result="glowColor" />
      <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
      <feMerge>
        <feMergeNode in="softGlow_colored" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  );
});

function BlurFilter(props) {
  const { radius } = props;
  return (
    <filter id="blur">
      <feGaussianBlur in="SourceGraphic" stdDeviation={radius} />
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.7" />
      </feComponentTransfer>
    </filter>
  );
}

export { BlurFilter, GlowFilter };
