import { css, styled, Button } from '@mui/material'
import Link from 'next/link'
import { colors } from '../../utils/colors'

export const StyledLink = styled(Link)(
  ({ theme }) => css`
    padding: ${theme.spacing(1)};
    border-radius: calc(${theme.shape.borderRadius}px * 2.5);
    font-size: 1.5rem;

    &:hover {
      color: ${colors.darkBlueGray};
      background-color: ${colors.whisperGray};
    }
  `
)

export const StyledButton = styled(Button)(
  ({ theme }) => css`
    padding: ${theme.spacing(0, 1)};
    border-radius: calc(${theme.shape.borderRadius}px * 2.5);
    font-size: 1.5rem;
    color: ${colors.whisperGray};
    text-transform: none;
    &:hover {
      color: ${colors.darkBlueGray};
      background-color: ${colors.whisperGray};
    }
  `
)
