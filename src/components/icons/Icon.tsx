import styled, { DefaultTheme } from 'styled-components'

type Color = keyof DefaultTheme['colors']
type Size = keyof DefaultTheme['textSizes']

export type IconProps = {
  className?: string;
  color?: Color;
  size?: Size;
}

export default styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  fill: 'currentColor'
})<{ color?: Color; size?: Size }>`
  ${props => props.color ? `color: ${props.theme.colors[props.color]};` : ''}
  ${props => props.size ? `width: ${props.theme.textSizes[props.size]};` : ''}
  &:focus {
    outline: none;
  }
`
