import styled from '@emotion/styled'

const SideBarContent = styled.div`
	border-left: 1px solid #c2c2c2;
	min-height: 100vh;
	display: flex;
	gap: 20px;
	flex-direction: column;
	background-color: ${({theme}) => theme.palette.background.primary};

	${({theme}) => theme.breakpoints.down('lg')} {
		width: 100%;
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		width: 950px;
	}
`

export default SideBarContent
