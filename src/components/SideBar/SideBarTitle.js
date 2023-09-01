import styled from '@emotion/styled'

const SideBarTitle = styled.h1`
	font-style: normal;
	font-weight: 500;
	line-height: 150%;
	color: ${({theme}) => theme.palette.text.primary};

	${({theme}) => theme.breakpoints.down('md')} {
		font-size: 32px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		font-size: 40px;
	}
`

export default SideBarTitle
