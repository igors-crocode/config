import styled from '@emotion/styled'

const SideBarWrapper = styled.aside`
	position: fixed;
	right: 0;
	top: 0;
	overflow: hidden;
	transition: 0.7s;
	height: 100vh;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
	z-index: 100000;

	${({theme}) => theme.breakpoints.down('lg')} {
		width: ${({isOpen}) => (isOpen ? '100%' : '0')};
	}

	${({theme}) => theme.breakpoints.up('lg')} {
		width: ${({isOpen}) => (isOpen ? '950px' : '0')};
	}
`

export default SideBarWrapper
