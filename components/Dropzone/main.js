import styled from "styled-components";

export const AvatarContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const AvatarImage = styled.img`
	width: auto;
	height: 200px;
	opacity: 1;
	animation: fadeInOpacity 300ms ease-in;
`;

export const AvatarDropZone = styled.div`
	width: ${(props) => (props.primary ? "200px" : "80%")};
	height: ${(props) => (props.primary ? "80px" : "300px")};
	border: 1px dashed #241f21;
	/* border-radius: ${(props) => (props.primary ? "50%" : "0%")}; */
	cursor: pointer;
	background: ${(props) =>
			props.primary ? "url(/Avatar.svg)" : "url(./image.svg)"}
		no-repeat center;
	background-size: cover;
`;