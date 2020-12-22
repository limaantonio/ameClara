import Input from '../../components/Input';
import Nav from '../../components/Nav';
import React, {useState, useEffect} from 'react';
import Carousel from 'nuka-carousel';
import InstagramEmbed from 'react-instagram-embed';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { Chart } from "react-google-charts";
import Bar from "../../components/Bar";
import FaqItem from '../../components/FaqItem';

import api from '../../Services/api';

const slideImages = [
  'slide_2.jpg',
  './slide_2.jpg',
  './slide_2.jpg',
 
];

const About = () => {
  return(

    <div id="about" className="flex flex-row items-center  mx-8 rounded-md bg-white">
     
   </div>
  )
}

const Photos = () => {
  const [postsInst, setPostsInst] = useState([]);

  useEffect(() => {
    api.get('postInstagram').then(response => setPostsInst(
      response.data,
    ));
   },[]);
  return (
   <div className="bg-white mx-8 mt-4 sm:mt-0 px-0 sm:px-4 rounded-md shadow-md ">
    <h1 className="text-3xl font-bold mb-6 mt-4 text-center text-blue2">SOBRE MIM</h1>
    <p className="text-justify px-8 leading-8">
    Clarinha é uma linda bebê, que mora em Sobral, interior do Ceará. 
    Recebeu o diagnóstico de Atrofia Muscular Espinhal- AME tipo1- uma doença rara, 
    neuromuscular degenerativa. Está em busca da TERAPIA GÊNICA (ZOLGENSMA), 
    um medicamento revolucionário, dose única, que tem o custo de 2,125 milhões 
    de dólares, aproximadamente R$12 Milhões de reais e precisa ser aplicado até 
    os dois anos de idade! Temos até fevereiro de 2021!

    </p>    
   
    <ul className='grid grid-cols-3 gap-4 m-2'>
              {postsInst.map(post => (
                <li className="" key={post._id}>
                <InstagramEmbed
                  clientAccessToken='1120587528383197|f28374ab86efc92d9a55f651ba8b5d40'
                  url={post.link}
                  maxWidth={375}
                  hideCaption={true}
                  containerTagName='div'
                  injectScript
                  protocol=''
                  onLoading={() => {}}
                  onSuccess={() => {}}
                  onAfterRender={() => {}}
                  onFailure={() => {}}
                />
                </li>
              ))}
           </ul>
      </div> 
  )
}

const Doe = () => {
  return (
    <div id="doe" className="flex flex-col h-full items-center   rounded-md  m-8  ">
    <h1 className="text-blue2 text-2xl mt-8 uppercase font-bold my-8">Como doar?</h1>
    <div className="sm:flex sm:flex-col  flex flex-col ">
      <div className="sm:flex sm:flex-row sm:space-x-2 sm:space-y-0 space-y-4">
      
          <a 
            href="https://rifeme.com.br/campanhas-ame-brasil/ameclara_-rifa-de-um-celular-redmi-9a-32gb/" 
            className="rounded-3xl flex flex-row items-center justify-center p-2 h-10 w-full bg-blue2">
            <img className="w-20 " src="Rifas.png" alt=""/>
          </a>
       
          <a 
            href="https://www.vakinha.com.br/vaquinha/ame-clara-clara-ribeiro-silva" 
            className="rounded-3xl flex flex-row items-center justify-center p-2 h-10 w-full bg-blue2">
            <img className=" w-24" src="vakinha.png" alt=""/>
          </a>
   
    
          <a 
            href="http://acesse%20o%20link%20picpay.me/ameclara%20para%20me%20pagar%20com%20PicPay."
            className="rounded-3xl flex flex-row items-center justify-center p-2 h-10 w-full bg-blue2">
            <img className="w-24 " src="pic.png" alt=""/>
          </a>
         

  
      </div>
     

     <div className="sm:flex sm:flex-row  sm:space-x-2">
  
        <div className="flex flex-col items-center  bg-blue2 rounded-2xl p-6 w-64 h-64 mt-4 space-y-2">
         
          <img className="w-30" src="bb.png" alt=""/>
          <p>Agência: 0085-x Var. 51</p>
          <p>Conta Poupança: 90194-6</p>
          <p>Clara Ribeiro Silva</p>
          <p>CPF: 104.088.923-90</p>
       
        </div>

        <div className="flex flex-col items-center  bg-blue2 rounded-2xl p-6 w-64 h-64 mt-4 space-y-2">
        
          <img className=" w-30" src="sant.png" alt=""/>
          <p>Agência: 4410</p>
          <p>Conta Poupança: 60022439-7</p>
          <p>Clara Ribeiro Silva</p>
          <p>CPF: 104.088.923-90</p>
       
        </div>
   
    
        <div className="flex flex-col items-center  bg-blue2 rounded-2xl p-6 w-64 h-64 mt-4 space-y-2">
         
          <img className="w-30 " src="caixa.png" alt=""/>
          <p>Agência: 3572 OP:013</p>
          <p>Conta Poupança: 24313-3</p>
          <p>Clara Ribeiro Silva</p>
          <p>CPF: 104.088.923-90</p>
       
        </div>
   
      </div>
    </div>
  
  </div>
  )
}

const Parceiros = () => {
  const [postsParceiro, setPostsParceiro] = useState([]);

  useEffect(() => {
    api.get('/postsParceiro').then(response => setPostsParceiro(
      response.data,
    ));
   },[]);
  return (
    <div className="bg-white mx-8 mt-8  px-4 rounded-md shadow-md ">
     <h1 className="text-3xl font-bold mb-6 mt-4 text-center text-blue2">NOSSOS PARCEIROS</h1>  
 
     <ul className='grid grid-cols-3 gap-4 m-2'>
        {postsParceiro.map(post => (
          <li className="flex flex-col   items-center justify-center space-y-4" key={post._id}>
          <img className="" src={post.img_url} alt=""/>
          <span className="relative text-pink font-bold text-xl">{post.title}</span>
          </li>
        ))}
        </ul>
     </div>
  )
}

const Contact = () => {
  return (
    <div id="contact" className="mt-24 sm:flex flex-row">
      <div className="w-1/2 sm:flex flex-col mx-8 sm:mx-20 ">
        <h1 className="text-3xl  font-bold mb-6 text-pink">CONTATOS</h1>
        <div className="flex flex-row items-center space-x-2"> 
          <img className="bg-white rounded-full w-10 p-2" src="./mail.svg" alt=""/>
          <span>contato@ameclara.com.br</span>
         
        </div>
        <div className="flex flex-row items-center mt-4 space-x-2"> 
          <img className="bg-white rounded-full w-10 p-2 " src="./instagram.svg"></img>
          <span>@ameclara_</span>    
        </div>
     
      </div>
      <div className="sm:flex sm:flex-row mx-8  mt-10 ">
      
        <form className="sm:flex w-full  flex flex-col items-center space-y-2">
        <h1 className="text-gree text-2xl text-green mb-4">ENTRE EM CONTATO</h1>
          <input className="border-2 border-green p-2 rounded-xl" placeholder="Seu nome *" type="text" name="" id=""/>
          <input className="border-2 border-green p-2 rounded-xl" placeholder="Seu e-mail *" type="text" name="" id=""/>
          <input className="border-2 border-green p-2 rounded-xl" placeholder="Assunto" type="text" name="" id=""/>
          <input className="border-2 border-green p-2 rounded-xl h-32 " placeholder="Sua mensagem" type="text" name="" id=""/>
          <button className="bg-pink w-4/12  text-white rounded-3xl h-10 mt-6 ">Enviar</button>
        </form>
      </div>
    
    </div>
  )
}

const Faqs = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    api.get('faqs').then(response => setFaqs(
      response.data,
    ))
  },[])
  return (
    <div id="faqs" className="flex mt-8 flex-col justify-center h-full  items-center p-2 space-y-4">
      <h1 className=" text-2xl font-bold text-blue2">PERGUNTAS E RESPOSTAS</h1>

      {faqs.map(faq => (
        <FaqItem 
          question={faq.question}
          answer={faq.answer}
        />
      ))}
     
     
    </div>
  )
}

const Footer = () => {
  return(
    <div className="p-16 flex flex-row mt-10 space-x-4">
      <div className="flex sm:w-1/2 flex-row  ">
        <ul className="flex flex-row items-center  space-x-2">
          <li>
            <a href="">
              <img className=" rounded-full  sm:w-12 p-2" src="./icon_zap.svg" alt=""/>
            </a>
          </li>
          <li>
          <a href="https://www.instagram.com/ameclara_/">
              <img className=" rounded-full sm:w-16 p-2" src="./icon_insta.svg" alt=""/>
            </a>
          </li>
          <li>
            <a href="">
              <img className=" rounded-full sm:w-14 p-2" src="./icon_mail.svg" alt=""/>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex w-1/2 flex-row justify-end ">
     
        <img className="w-24" src="./Logo.svg" alt=""/>
      </div>
    </div>
  )
}

const Dropdow = () => {
  return (
    <div class="relative inline-block text-left">
  <div>
    <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
      Options
     
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
    <div class="py-1">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Edit</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Duplicate</a>
    </div>
    <div class="py-1">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Archive</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Move</a>
    </div>
    <div class="py-1">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Share</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Add to favorites</a>
    </div>
    <div class="py-1">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Delete</a>
    </div>
  </div>
</div>
  )
}

const LandigPage = () => {
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    api.get('posts').then(response => setPosts(
      response.data,
    ));
   },[]);

 
  return(
    <>
      <ul className="bg-pink my-8  mt-14  sm:mt-24 h-full shadow-md sm:rounded-2xl  sm:mx-8 ">
        <Slide className="  sm:mx-8 m-2   ">
          {posts.map(post => (
            <li key={post._id} className=" sm:flex sm:flex-row sm:h-full sm:mt-6">
            <div className="sm:w-1/2  h-full">
              <img  className="sm:w-8/12  sm:mt-6  sm:ml-14 " src={post.img_url} alt=""/>
            </div>
            <div className="sm:w-1/2 flex mx-2 flex-col ">
              <h1 className="uppercase sm:flex  text-white p-2 border-dashed rounded-3xl text-2xl  sm:mt-8">{post.title}</h1>
              <p className="text-white sm:flex leading-8 text-justify  sm:mt-8">{post.body}</p>
            </div>
           </li>
          ))}
          </Slide>
           
          </ul>
        <Nav/>
        {/* <div className="flex flex-row items-center justify-center mb-4">
        <FaqItem/>
        </div> */}
       
        <About/>
        <Photos/>
        <Doe/>
        <Parceiros/>
        <Faqs/>
      
        <Footer/>
     </>
  )
}

export default LandigPage;