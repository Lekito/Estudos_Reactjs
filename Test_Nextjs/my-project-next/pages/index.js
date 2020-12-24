import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function Home() {
  return(
    <body className="bg-indigo-100">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-blue-600 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12">
          <div className="flex-grow"> 
            <h1 className="text-white text-center text-2xl sm:text-5xl mb-2">
              Seja bem-vindo(a)
            </h1>
            <p className="text-center text-blue-200 sm:text-lg">
              Faça seu login para começar 
            </p>
          </div>
        </div>
        <div className="lg:min-h-screen lg:flex lg:items-center p-12 lg:p-24 xl:p-48">
          <div className="flex-grow bg-white shadow-xl rounded-md border border-grey-300 p-8">
            <div className="sm:flex sm:items-center">
              
            </div>
          </div>
        </div>
      </div>
    </body>
  ) 
}
