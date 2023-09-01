import styled from '@emotion/styled'

const SideBarBackdrop = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.4);
	z-index: -1;
	top: 0;
	left: 0;
	transition: 0.7s;

	${({isOpen}) =>
		!isOpen ? `opacity: 0; visibility: hidden; pointer-events: none;` : ''}
`

export default SideBarBackdrop
