import React, {useState} from 'react';
import Image from '../../components/Dropzone';

const Post  = () => {
  const [selectedFile, setSelectedFile] = useState();
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
    const likes = 0;

    data.append("body", body);
    data.append("title", title);
   

    if (selectedFile) {
      data.append("file", selectedFile);
    }

    try {
      // const response = await api.post("/post", data).then((response) => {
      //   console.log(data);
      // });
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpload = (file) => {
    setSelectedFile(file);
  };

return (
  <div className="flex flex-row items-center bg-gray-50 h-full justify-center">
    <div className="flex flex-col items-center justify-center  shadow rounded-lg bg-white p-12 space-y-4">
      <h1 className="text-magenta2 text-2xl">Atualizar valores</h1>
      <div className="flex flex-col space-y-2 ">
        <label htmlFor="">Banco do Brasil</label>
        <input className=" border-black border-2 rounded-2xl h-12 p-4" type="text" placeholder="Digite o valor atual"/>
      </div>
      <div className="flex flex-col space-y-2 ">
        <label htmlFor="">Banco do Bradesco</label>
        <input className=" border-black border-2 rounded-2xl h-12 p-4" type="text" placeholder="Digite o valor atual"/>
      </div>
      <div className="flex flex-col space-y-2 ">
        <label htmlFor="">Caixa</label>
        <input className=" border-black border-2 rounded-2xl h-12 p-4" type="text" placeholder="Digite o valor atual"/>
      </div>
     
     
      <button className="bg-magenta2 w-1/2 h-12 rounded-2xl text-white">Postar</button>
   
    </div>
  </div>
)
}

export default Post;