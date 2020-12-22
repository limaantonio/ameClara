import {useEffect, useState} from 'react';
import { useRouter } from 'next/router'

import api from '../../Services/api';
import Alert, { showSnackbar } from "../../components/snackbar";
import AuthUser from "../../hooks/authUser";
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    color: '#2B478B',
    borderRadius: '8px' 
  },
};

const SignIn = () => {
  const router = useRouter()
  const {signIn} = AuthUser();

  const [email, setEmail] = useState("");
  const [emailReset, setEmailReset] = useState("");
  const [password, setPassword] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(e){
    e.preventDefault()
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  async function forgotPassword(event){
    event.preventDefault();

    const data = {
      email : emailReset
    }

    try {
      const response =  await api.post("/forgot_password", data);
    

			showSnackbar({
				type: "success",
				message:
					"Enviado código para recuperação da sua senha. Verifique sua caixa de e-mail."
      });

      router.push('/resetPassword')
     

    console.log(router.query.reset);
    

    
		} catch {
			showSnackbar({
				type: "error",
				message: "Ooopss!! Parece que algo deu errado :( Tente novamente!"
			});
		}
  }


  async function handleLogin(e) {
		e.preventDefault();

		try {
			await signIn({
				email,
				password
			});

			showSnackbar({
				type: "success",
				message:
					"Bem-vindo, você está logado. Agora você alimentar o seu site."
      });

      setTimeout(() => {
			  router.push('/dashboard')
			}, 3000);

    
      
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
        <h1 className="text-magenta2 text-2xl">Faça seu login</h1>
        <form className="flex flex-col items-center" onSubmit={handleLogin} action="">

     
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
              placeholder="Senha*"
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
         Entrar
        </button>
        <Alert />
        </form>
        <button 
          onClick={() =>  setIsOpen(true)}
          className="text-magenta2" 
          href="">Esqueci a senha
        </button>
      </div>
      <Modal
            className=""
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            ariaHideApp={false}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
           >
         <form type="submit" onSubmit={forgotPassword} className="flex flex-col items-center py-2">
        <h1>Digite seu e-mail</h1>
       
        <input 
              type="text" 
              placeholder="E-mail*"
          		value={emailReset}
              onChange={(e) => setEmailReset(e.target.value)}
              className=" border-black border-2 rounded-2xl mt-2 h-12 p-4" 
            />
             <button 
                type="submit" 
                className="bg-magenta2 mt-8 w-1/2 h-12 rounded-2xl flex flex-col justify-center items-center text-white"
                >
                OK
              </button>
              </form>
     
      </Modal>
      
    </div>
  )
}

export default SignIn;