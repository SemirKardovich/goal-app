import { colors } from '@/utils/colors'
import { Box, css, styled } from '@mui/material'

export const LayoutChildrenContainer = styled(Box)(
  ({ theme }) => css`
    display: flex;
    min-height: 90vh;
    height: 100%;
    max-width: 100vw;
    width: 100%;
    overflow: hidden;
    padding: ${theme.spacing(2)};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  `
)
