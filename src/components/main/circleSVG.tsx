// ______________________________________________________
// 円のSVG
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

const STROKE_WIDTH = 9;
const CIRCUMFERENCE = 127;
const BASE_COLOR = `black`;
const COLOR_DIFFERENCE = 0.4;

export type Props = {
  className?: string,
} & StyleProps;

type StyleProps = {
  baseColor?: string,
  marginalColor?: string,
  percent: number,
  strokeWidth?: number,
  circumference?: number,
  colorDifference?: number,
};

// ______________________________________________________
// コンポーネンと
const Component: React.FC<Props> = (props) => {
  const { className, circumference, strokeWidth } = props;
  const diameter = (circumference || CIRCUMFERENCE) / 3.14;
  const radius = diameter / 2;
  const width = diameter + (strokeWidth || STROKE_WIDTH) + 5;
  const center = width / 2;
  return (
    <div className={className}>
      <svg className="circle" width={width} height={width}>
        <circle className="type type2" cx={center} cy={center} r={radius} />
        <circle className="type type1 " cx={center} cy={center} r={radius} />
      </svg>
    </div>
  );
};

// ______________________________________________________
// スタイル
const circle1 = (p: StyleProps) => keyframes`
  0%{
    stroke-dasharray:0, ${p.circumference || CIRCUMFERENCE};
  }
  100%{
    stroke-dasharray: ${(p.circumference || CIRCUMFERENCE) *
      (p.percent * 0.01) +
      ' ' +
      (p.circumference || CIRCUMFERENCE)};
  }
  `;

const circle2 = (p: StyleProps) => keyframes`
  0%{
    stroke-dasharray:0 ${p.circumference || CIRCUMFERENCE};
  }
  100%{
    stroke-dasharray:${p.circumference || CIRCUMFERENCE} ${p.circumference ||
  CIRCUMFERENCE};
  }
`;
const circle2Hover = (p: StyleProps) => keyframes`
0%{
  stroke-dasharray:0 ${p.circumference || CIRCUMFERENCE};
}
80%, 100%{
  stroke-dasharray:${p.circumference || CIRCUMFERENCE} ${p.circumference ||
  CIRCUMFERENCE};
}
`;
const circle1Hover = (p: StyleProps) => keyframes`
0%{
  stroke-dasharray:0, ${p.circumference || CIRCUMFERENCE};
}
80%, 100%{
  stroke-dasharray: ${(p.circumference || CIRCUMFERENCE) * (p.percent * 0.01) +
    ' ' +
    (p.circumference || CIRCUMFERENCE)};
}
`;

export const SetSVG = (proficiencyLevel: number): Props => {
  let color = Math.floor(256 * (proficiencyLevel * 0.01)) + 10;
  color > 210 && (color = 210);

  const r = color;
  const g = color * 0.9;
  const b = (color + 50) * 1.2;

  const baseColor = `rgba(${r}, ${g}, ${b}, .5)`;
  const strokeWidth =
    proficiencyLevel > 25
      ? proficiencyLevel > 50 ? (proficiencyLevel > 75 ? 3 : 3) : 3.5
      : 3;

  const circumference =
    proficiencyLevel > 25
      ? proficiencyLevel > 50 ? (proficiencyLevel > 75 ? 400 : 400) : 400
      : 400;

  return {
    percent: proficiencyLevel,
    baseColor: '#fff',
    strokeWidth,
    circumference,
    marginalColor: '#ffffff55',
  };
};

export default styled(Component) <
  StyleProps >
  `
  & .circle {
    transform: rotate(-90deg);
  }
  & .type {
    fill: transparent;
    stroke-width: ${(p) => p.strokeWidth || STROKE_WIDTH};
  }
  & .type1 {
    stroke: ${(p) => p.baseColor || BASE_COLOR};
    animation: ${circle1} 2s forwards;
  }
  & .type2 {
    stroke: ${(p) =>
      p.marginalColor ||
      lighten(
        p.colorDifference || COLOR_DIFFERENCE,
        p.marginalColor || p.baseColor || BASE_COLOR
      )};
    animation: ${circle2} 0.5s forwards;
  }
  &:hover{
    & .type1 {
    animation: ${circle1Hover} 2s ease-in 0s forwards;
  }
    & .type2{
      animation: ${circle2Hover} 2s ease-in 0s forwards;
    }
      
    }
    `;
