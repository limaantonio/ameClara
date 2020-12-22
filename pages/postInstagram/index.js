import React, {useState} from 'react';
import Image from '../../components/Dropzone';
import Alert, { showSnackbar } from "../../components/snackbar";

import api from '../../Services/api';

const PostInstagram  = () => {
  const [link, setLink] = useState();

  async function handlePost(e) {
    e.preventDefault();

    const data = {
      link
    };

    try {
      const response = await api.post("/postInstagram", data).then((response) => {
        console.log(response);

        showSnackbar({
          type: "success",
          message:
            "Post do instagram criado com sucesso!"
        });
      });
    } catch (err) {
      console.log(err)
      showSnackbar({
				type: "error",
				message: "Ooopss!! Parece que algo deu errado :( Tente novamente!"
			});
    }
  }

return (
  <div className="flex flex-row items-center bg-gray-50 h-full justify-center">
    <form onSubmit={handlePost} className="flex flex-col items-center justify-center  shadow rounded-lg bg-white p-12 space-y-4">
      <h1 className="text-magenta2 text-2xl">Criar novo Post</h1>
      <div className="flex flex-col space-y-2 ">
        <label htmlFor="">Titulo</label>
        <input value={link}  onChange={e => setLink(e.target.value)} className=" border-black border-2 rounded-2xl h-12 p-4" type="text" placeholder="Coloque o link do post no Instragram"/>
      </div>
     
     
      <button type="submit" className="bg-magenta2 w-1/2 h-12 rounded-2xl text-white">Postar</button>
      <Alert />
    </form>
  </div>
)
}

export default PostInstagram;