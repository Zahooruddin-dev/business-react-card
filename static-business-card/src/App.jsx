import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContents from './components/MainConents'
import Head from './components/Head.JSX'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (

    <main className='closer'>
      <Head></Head>
      <MainContents></MainContents>
      <Footer></Footer>
    </main>
  )
}

export default App
