import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { AvatarContainer, AvatarImage, AvatarDropZone } from "./main";

const Avatar = ({ onFileUploaded }) => {
	const [selectedFileURL, setSelectedFileURL] = useState("");

	const onDrop = useCallback(
		(acceptedFiles) => {
			const file = acceptedFiles[0];

			const fileUrl = URL.createObjectURL(file);
			setSelectedFileURL(fileUrl);
			onFileUploaded(file);
		},
		[onFileUploaded]
	);
	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: "image/*"
	});

	return (
		<AvatarContainer {...getRootProps()}>
		
				Fazer upload de imagem
		
    
			<input {...getInputProps()} accept="image/*" />
			{selectedFileURL ? (
				<AvatarImage src={selectedFileURL} alt="Avatar"  />
			) : (
				<AvatarDropZone primary="true" />
			)}
		</AvatarContainer>
	);
};

export default Avatar;
