import styled from '@emotion/styled'

const SideBarTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${({theme}) => theme.breakpoints.down('md')} {
		padding-top: 15px;
		padding-right: 20px;
		padding-left: 20px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		padding-top: 15px;
		padding-right: 40px;
		padding-left: 40px;
	}
`

export default SideBarTitle
