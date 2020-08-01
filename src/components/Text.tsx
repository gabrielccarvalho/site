import styled, { DefaultTheme } from 'styled-components'

type TextSize = keyof DefaultTheme['textSizes']
type Color = keyof DefaultTheme['colors']
type TextWeight = keyof DefaultTheme['textWeights']
type Props = {
  color?: Color;
  shadow?: boolean;
  size?: TextSize;
  aerated?: boolean;
  weight?: TextWeight;
}

const textDefaultProps: Props = {
  color: 'foreground',
  shadow: false,
  size: 'md',
  aerated: false,
  weight: 'normal'
}

const Text = styled.p<Props>`
  line-height: ${({ aerated }) => aerated ? 1.4 : 1.1};
  color: ${({ color = textDefaultProps.color, theme }) => theme.colors[color!]};
  ${({ shadow, theme }) => shadow && `text-shadow: ${theme.shadow}`};
  font-size: ${({ size = textDefaultProps.size, theme }) => theme.textSizes[size!]};
  font-weight: ${({ weight = textDefaultProps.weight, theme }) => theme.textWeights[weight!]};
  text-align: ${({ aerated }) => aerated ? 'justify' : 'left'};
`
Text.defaultProps = textDefaultProps

export type HeadingProps = Props & {align?: React.CSSProperties['textAlign']; as?: string; subtitle?: boolean; noWrap?: boolean}

const headingDefaultProps: HeadingProps = {
  align: 'center',
  color: 'foreground',
  shadow: false,
  size: 'lg',
  as: 'h1',
  subtitle: false,
  noWrap: false
}

const Heading = styled(Text)<HeadingProps>`
  text-align: ${({ align }) => align};
  font-weight: ${({ subtitle }) => subtitle ? 700 : 900};
  padding: ${({ theme }) => theme.space.lg} 0;
  white-space: ${({ noWrap }) => noWrap ? 'nowrap' : 'normal'};
`

Heading.defaultProps = headingDefaultProps

const HyperLink = styled(Heading).attrs({ as: 'a' })`
  text-decoration: underline;
`

export {
  Text, Heading, HyperLink
}
