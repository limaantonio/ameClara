import Head from 'next/head';
import "../styles/main.css";
import LandingPage from './home';

export default function Home() {
  return (
    <div  className="flex flex-col flex-1 "
    style={{ background: "url(./Homepage.svg) no-repeat center/cover" }}
   >
      <Head>
        <title>AME Clara</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage/> 
    </div>
  )
}
