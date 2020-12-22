import {useEffect, useState} from 'react';
import { useRouter } from 'next/router'

import api from '../../Services/api';
import Alert, { showSnackbar } from "../../components/snackbar";
import AuthUser from "../../hooks/authUser";
import Modal from 'react-modal';


const ResetPassword = () => {
  const router = useRouter()
  const {signIn} = AuthUser();

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
 

  function openModal(e){
    e.preventDefault()
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  async function resetPassword(event){
    event.preventDefault();

    

    const data = {
      email : email,
      token :  router.query.reset,
      password : password
    }

    try {
      const response =  await api.post("/reset_password", data);

			showSnackbar({
				type: "success",
				message:
					"Senha atualiza com sucesso!"
      });

    
		} catch {
			showSnackbar({
				type: "error",
				message: "Ooopss!! Parece que algo deu errado :( Tente novamente!"
			});
		}
  }
  return (
    <div className="flex flex-row items-center h-full justify-center bg-gray-50">
      <div className="flex flex-col items-center justify-center bg-white shadow rounded-lg p-12 space-y-4">
        <h1 className="text-magenta2 text-2xl">Recuperar senha</h1>
        <form className="flex flex-col items-center" onSubmit={resetPassword} action="">
      
     
        <div className="flex flex-col space-y-2 ">
          <label htmlFor="">Usuário</label>
          <input 
              type="text" 
              placeholder="E-mail*"
          		value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" border-black border-2 rounded-2xl h-12 p-4" 
            />
        </div>
        <div className="flex flex-col space-y-2 ">
          <label htmlFor="">Senha</label>
          <input
              required
              type="password"
              placeholder="Nova senha*"
              id="passwordInput"
          		value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" border-black border-2 rounded-2xl h-12 p-4"
            />
        </div>
        <button 
          type="submit" 
          className="bg-magenta2 mt-8 w-1/2 h-12 rounded-2xl flex flex-col justify-center items-center text-white"
        >
          Recuperar
        </button>
        <Alert />
        </form>
        
      </div>
   
    </div>
  )
}

export default ResetPassword;