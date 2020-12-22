import React, {useState} from 'react';
import Image from '../../components/Dropzone';

import api from '../../Services/api';
import Alert, { showSnackbar } from "../../components/snackbar";

const Post  = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [body, setBody] = useState();
  const [title, setTitle] = useState();
  const [formData, setFormData] = useState({
    title: "",
    body: ""
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handlePost(e) {
    e.preventDefault();

    const { body, title } = formData;

    const data = new FormData();

    data.append("body", body);
    data.append("title", title);
   

    if (selectedFile) {
      data.append("file", selectedFile);
    }

    try {
      const r = await api.post("/post", data).then((response) => {
       
        showSnackbar({
          type: "success",
          message:
            "Post criado com sucesso!"
        });
      });
    } catch (err) {
      showSnackbar({
				type: "error",
				message: "Ooopss!! Parece que algo deu errado :( Tente novamente!"
			});
    }
  }

  const handleUpload = (file) => {
    setSelectedFile(file);
  };

return (
  <div className="flex flex-row items-center bg-gray-50 h-full justify-center">
    <form onSubmit={handlePost} className="flex flex-col items-center justify-center  shadow rounded-lg bg-white p-12 space-y-4">
      <h1 className="text-magenta2 text-2xl">Criar novo Post</h1>
      <div className="flex flex-col space-y-2 ">
        <label htmlFor="">Titulo</label>
        <input 
          onChange={handleInputChange}
          name="title"
          className=" border-black border-2 rounded-2xl h-12 p-4" 
          type="text" 
          placeholder="Dê um titulo para seu post"/>
      </div>
      <div className="flex flex-col space-y-2 ">
        <label htmlFor="">Descrição</label>
        <textarea 
          onChange={handleInputChange}
          name="body"
          className=" border-black border-2 rounded-2xl  p-6" 
          type="text-area" 
          placeholder="Coloque a descrição"/>
       
      </div>
      <div className="border-2 p-2 flex flex-row justify-center items-center">
      <Image onFileUploaded={handleUpload} />
      <Alert />
      </div>
      <button type="submit" className="bg-magenta2 w-1/2 h-12 rounded-2xl text-white">Postar</button>
   
    </form>
  </div>
)
}

export default Post;