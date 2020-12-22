import Nav from '../../components/Nav';

const Detail = () => {
  return (
    <>
    <Nav/>
    <div className="flex flex-col mx-36">
      <div className="space-y-4 flex flex-col mt-20">
        <h1 className="text-3xl">Rifa Beneficente</h1>
        <span className="text-xs">Publicado em 12/12/2020</span>
        <img className="w-5/12" src="./rifa.png" alt=""/>
        <p className="text-justify text-xl">
        São 12 prêmios 😱😱😱 ADQUIRA SEU PONTO PELO WHATSAPP DA CAMPANHA OU NOS ESTABELECIMENTOS DITOS PELO PERFIL @campanha_ameclara_coreau

        ✅Primeiro prêmio
        - ventilador
        - ferro elétrico
        ✅segundo
        - perfume @tfmultimarcas
        - relógio
        ✅terceiro
        - consulta c nutricionista @mikaiastomaz
        - produção completa @gloriagrig
        ✅quarto (kit completo)
        - liquidificador
        - batedeira
        -cafeteira
        -Master gril
        -ferro elétrico
        ✅quinto
        Bicicleta
        </p>
      </div>
   
    </div>
    </>
  )
}

export default Detail;