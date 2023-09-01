import styled from '@emotion/styled'

const SideBarInnerContent = styled.div`
	overflow: auto;
	max-height: calc(100vh - 95px);
	flex-grow: 1;
	position: relative;

	${({theme}) => theme.breakpoints.down('md')} {
		padding-right: 20px;
		padding-left: 20px;
		padding-bottom: 15px;
	}

	${({theme}) => theme.breakpoints.up('md')} {
		padding-right: 40px;
		padding-left: 40px;
		padding-bottom: 15px;
	}

	@supports (-webkit-touch-callout: none) {
		padding-bottom: 80px;
	}
`

export default SideBarInnerContent
