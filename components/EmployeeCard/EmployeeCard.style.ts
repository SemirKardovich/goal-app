import { Card, css, styled, CardContent, CardActions } from '@mui/material'

export const StyledCard = styled(Card)(
  ({ theme }) => css`
    min-width: 350px;
  `
)

export const StyledCardContent = styled(CardContent)(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing(2)};
    justify-content: space-between;
  `
)

export const StyledCardActions = styled(CardActions)(
  () => css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `
)
