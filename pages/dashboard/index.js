import {useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import api from '../../Services/api';
import AuthUser from "../../hooks/authUser";
import Link from 'next/link';

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

const Dashboard = () => {
  const [name, setName] = useState([]);
  const [mail, setMail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [v, setV] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postsParceiros, setPostsParceiros] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [accounts, setAccounts] = useState([]);

 
  const router = useRouter()
  const {signOut, data} = AuthUser();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(e){
    e.preventDefault()
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  function logout() {
    signOut();
    router.push('/');
	}

  useEffect(() => {
    api.get('users').then(response => {
      setName(response.data[0].name);
      setMail(response.data[0].email);
      setPhone(response.data[0].phone)
     
    })
  },[]);

  useEffect(() => {
   api.get('posts').then(response => setPosts(
     response.data,
   ));
  },[]);

  useEffect(() => {
    api.get('postsParceiro').then(response => setPostsParceiros(
      response.data,
    ));
   },[]);

  useEffect(() => {
    api.get('faqs').then(response => setFaqs(
      response.data,
    ));
   },[]);

  useEffect(() => {
    api.get('accounts').then(response => setAccounts(
      response.data,
    ));
  },[]);

  async function handleDeletePosts(id){
    try{
      await api.delete(`post/${id}`);
      
      const postsIndex = posts.findIndex(t => t._id === id);
      const post = [...posts];
    
      post.splice(postsIndex, 1);
      setPosts(post);
      alert('Post deletado.')
    
    }catch(err){
      alert('Ocorreu um erro ao deletar essa ferramenta, tente novamente.')
    }
  }

  async function handleDeletePostsParceiros(id){
    try{
      await api.delete(`postParceiro/${id}`);
      
      const postsIndex = posts.findIndex(t => t._id === id);
      const postsParceiros = [...postsParceiros];
    
      postsParceiros.splice(postsIndex, 1);
      setPostsParceiros(postsParceiros);
      alert('Post deletado.')
    
    }catch(err){
      alert('Ocorreu um erro ao deletar essa ferramenta, tente novamente.')
    }
  }


  async function handleDeleteFaq(id){
    try{
      await api.delete(`faq/${id}`);
      
      const faqsIndex = faqs.findIndex(t => t._id === id);
      const faq = [...faqs];
    
      faq.splice(faqsIndex, 1);
      setFaqs(faq);
      alert('Faq deletado.')
    
    }catch(err){
      alert('Ocorreu um erro ao deletar essa Faq, tente novamente.');
      console.log(err)
    }
  }

  async function handleDeleteFaq(id){
    try{
      await api.delete(`faq/${id}`);
      
      const faqsIndex = faqs.findIndex(t => t._id === id);
      const faq = [...faqs];
    
      faq.splice(faqsIndex, 1);
      setFaqs(faq);
      alert('Faq deletado.')
    
    }catch(err){
      alert('Ocorreu um erro ao deletar essa Faq, tente novamente.');
      console.log(err)
    }
  }

  async function handleUpdateAccount(id){
    try{

      await api.put(`value/${id}`, {
        value: parseInt(v)
      });

      console.log(v);
      console.log(id)
      
      const accountIndex = accounts.findIndex(t => t._id === id);
      
     

      var n =  parseInt(accounts[accountIndex].value) + parseInt(v);
      accounts[accountIndex].value = n;

      setAccounts([...accounts]);

      setV('')

      // alert('account deletado.')
    
    }catch(err){
      alert('Ocorreu um erro ao deletar essa Faq, tente novamente.');
      console.log(err)
    }
  }

  

  return (
    <div className="bg-gray-100">
      <a className="shadow-sm h-12 bg-white w-full flex flex-row items-center   justify-center">
          <h1 className="w-full">Área do administrador</h1>
          <button onClick={() => logout()} className="flex flex-row">
            <span className="sm:flex hidden">Sair</span>
            <img className="mx-2" src="./log-out.svg" alt=""/>
          </button>
      </a>

      <div className="sm:flex sm:flex-row  justify-center m-8">
        <div className="flex flex-col sm:w-1/2 mx-8 ">
          <h1 className="text-magenta2">Contéudos</h1>

          <button onClick={() => setIsOpen(true)} className="shadow rounded-lg mt-4 p-8"> 
            <div className="flex flex-row space-x-2 ">
              <img src="./plus-circle.svg" alt=""/>
              <div>
                Criar contéudo
              </div>
            
            </div>
          </button>

          <Modal
            className=""
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            ariaHideApp={false}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
           >
           <div  className="flex flex-col items-center py-2 justify-center w-64 space-y-4">
           <h1>Digite seu e-mail</h1>
            <Link className="cursor-pointer" href="post">
               <div className="bg-magenta2 flex flex-row items-center p-2 justify-center cursor-pointer text-white border w-full rounded-2xl" >
                 <span>Novo Post</span>
               </div>
            </Link>
          
            <Link className="cursor-pointer" href="postInstagram">
               <div className="bg-magenta2 flex flex-row items-center p-2 justify-center cursor-pointer text-white border w-full rounded-2xl" >
                 <span>Novo Post do Instagram</span>
               </div>
            </Link>

            <Link className="cursor-pointer" href="postParceiro">
               <div className="bg-magenta2 flex p-2 flex-row items-center justify-center cursor-pointer text-white border w-full rounded-2xl" >
                 <span>Adicionar parceiro</span>
               </div>
            </Link>
            <Link className="cursor-pointer" href="atualizarPergunta">
               <div className="bg-magenta2 flex flex-row items-center p-2 justify-center cursor-pointer text-white border w-full rounded-2xl" >
                 <span>Nova pergunta e resposta</span>
               </div>
            </Link>
            
           </div>
           </Modal>

           
         
          <div className="flex flex-col shadow rounded-lg bg-white my-8 w-full p-4">
          <div className="flex flex-row w-full mb-8 "> 
              <h1 className="w-full font-bold">Dados Financeiros</h1>
              <a className="flex flex-row mr-4" href="">
                <img className="mx-2" src="./edit.svg" alt=""/>
                Editar
              </a>
            </div>
            <ul className="flex flex-col space-y-4">
              <span>Digite o valor</span>
            <input value={v} onChange={e => setV(e.target.value)} className="border-2 border-blue2 p-2  w-6/12 rounded-2xl" placeholder=" R$ " type="text"/>
              {accounts.map(account => (
                <li key={account._id}  className="flex flex-row space-x-2 border-2 p-2">
                <div className="flex flex-row w-1/2">
                  <div className="flex flex-col">
                  
                  <p className="font-bold">{account.bank}</p>
                  <p>Saldo atual :</p>
                  <p className="font-bold">{Intl.NumberFormat('pt-BR', 
                {style: 'currency', currency: 'BRL'}).format(account.value)}</p>
                  <br/>
                  <p>Dados da conta:</p>
                  <span>C/C: {account.account} </span>
                  <span>Agencia: {account.agencia}</span>
                  
                </div>
                </div>
                <div className="flex flex-row   justify-end items-center">
                   
                    
                      <button onClick={() => handleUpdateAccount(account._id)}  className="bg-blue2  text-white p-2 rounded-2xl">Atualizar valor</button>
                    
                </div>
                </li>
              ))}
            </ul>

          </div>

          <div className="flex flex-col shadow rounded-lg bg-white my-8 w-full p-4">
            <div className="flex flex-row w-full mb-8 "> 
              <h1 className="w-full font-bold">Perguntas e respostas</h1>
                <a className="flex flex-row mr-4" href="">
                  <img className="mx-2" src="./edit.svg" alt=""/>
                  Editar
                </a>
            </div>
            
              <ul className="flex flex-col space-y-4">
                {faqs.map(faq => (
                  <li key={faq._id} className="flex flex-row  space-x-2 border-2 p-2">
                    <div className="flex flex-col  w-full  ">
                      <div className="flex flex-row w-full justify-end ">
                        <button onClick={() => handleDeleteFaq(faq._id)}>
                         <img src="./trash.svg" alt=""/>
                        </button>
                      </div>
                     
                      
                       <div className="flex flex-row items-center space-x-2 ">
                          <img className="w-12" src="./faq.svg" alt=""/>
                          <div className="flex flex-col">
                           <p className="font-bold">{faq.question}</p>
                            <p>{faq.answer}</p>
                          </div>
                        
                       </div>
                  </div>
                  </li>
                ))}
            </ul>
          </div>
          

          <div className="flex flex-col rounded-lg shadow bg-white my-8 w-full p-4">
            <div className="flex flex-row w-full "> 
              <h1 className="w-full font-bold">Posts</h1>
              <a className="flex flex-row mr-4 " href="">
                <img className="mx-2" src="./edit.svg" alt=""/>
                Editar
              </a>
            </div>
         

              <ul className='grid grid-cols-3 gap-4 m-2'>
              {posts.map(post => (
                <li className="border-2 p-2" key={post._id}>
                <a className=" ">
                <div className="w-full flex flex-row  justify-end p-2">
                  <button onClick={() => handleDeletePosts(post._id)} >
                    <img src="./trash.svg" alt=""/>
                  </button>
                </div>
                <img src={post.img_url} alt=""/>
                <span>{post.title}</span>
              </a>
                </li>
              ))}
              </ul>
          </div>

          <div className="flex flex-col rounded-lg shadow bg-white my-8 w-full p-4">
            <div className="flex flex-row w-full "> 
              <h1 className="w-full font-bold">Parceiros</h1>
              <a className="flex flex-row mr-4 " href="">
                <img className="mx-2" src="./edit.svg" alt=""/>
                Editar
              </a>
            </div>
        
              <ul className='grid grid-cols-3 gap-4 m-2'>
              {postsParceiros.map(post => (
                <li className="border-2 p-2" key={post._id}>
                <a className=" ">
                <div className="w-full flex flex-row  justify-end p-2">
                  <button onClick={() => handleDeletePostsParceiros(post._id)} >
                    <img src="./trash.svg" alt=""/>
                  </button>
                </div>
                <img src={post.img_url} alt=""/>
                <span>{post.title}</span>
              </a>
                </li>
              ))}
              </ul>
          </div>
          
        </div>

        <div className="flex flex-col sm:w-1/2 mx-8 ">
          <h1 className="text-magenta2">Dados do administrador</h1>

          <div className="flex flex-col shadow rounded-lg bg-white my-8 w-full p-4">
          <div className="flex flex-row w-full mb-8 "> 
              <h1 className="w-full font-bold">Seus dados</h1>
              <a className="flex flex-row mr-4" href="">
                <img className="mx-2" src="./edit.svg" alt=""/>
                Editar
              </a>
             
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <p className="font-bold">Nome</p>
                 <span>{name}</span>
              </div>
              <div>
                <p className="font-bold">E-mail</p>
                <span>{mail}</span>
              </div>
              <div>
                <p className="font-bold">Celular</p>
                <span>{phone}</span>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}


export default Dashboard;