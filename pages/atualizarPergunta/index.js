import React, {useState} from 'react';
import Image from '../../components/Dropzone';
import Alert, { showSnackbar } from "../../components/snackbar";
import api from '../../Services/api';

const PostFaq  = () => {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();

 

  async function handlePost(e) {
    e.preventDefault();

    const data = {
      question,
      answer,
    };

    try {
      const response = await api.post("/faq", data).then((response) => {
        console.log(response);

        showSnackbar({
          type: "success",
          message:
            "Faq criado com sucesso!"
        });
      });
    } catch (err) {
      showSnackbar({
				type: "error",
				message: "Ooopss!! Parece que algo deu errado :( Tente novamente!"
			});
    }
  }

return (
  <div className="flex flex-row items-center bg-gray-50 h-full justify-center">
    <form onSubmit={handlePost} className="flex flex-col items-center justify-center  shadow rounded-lg bg-white p-12 space-y-4">
      <h1 className="text-magenta2 text-2xl">Atualizar Perguntas e respostas</h1>
      <div className="flex flex-col space-y-2 ">
        <label htmlFor="">Pergunta</label>
        <input value={question} onChange={e => setQuestion(e.target.value)} className=" border-black border-2 rounded-2xl h-12 p-4" type="text" placeholder="Digite uma pergunta"/>
      </div>
      <div className="flex flex-col space-y-2 ">
        <label htmlFor="">Resposta</label>
        <input value={answer} onChange={e => setAnswer(e.target.value)}  className=" border-black border-2 rounded-2xl h-12 p-4" type="text" placeholder="Digite uma resposta"/>
      </div>
  
      <button type="submit" className="bg-magenta2 w-1/2 h-12 rounded-2xl text-white">Postar</button>
      <Alert />
    </form>
  </div>
)
}

export default PostFaq;