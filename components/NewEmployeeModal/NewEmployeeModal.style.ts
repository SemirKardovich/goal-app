import { css, Paper, styled } from '@mui/material'

export const ModalPaper = styled(Paper)(
  ({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    box-shadow: ${theme.shadows[2]};
    border-radius: calc(${theme.shape.borderRadius}px * 2);
    padding: ${theme.spacing(2)};
    min-width: 30rem;
  `
)
