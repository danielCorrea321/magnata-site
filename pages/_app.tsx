import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [show, setShow] = useState('none')

  return (
  <>
    <header>
      <div>LOGO</div>
      <ul>
        <li><a>home</a></li>
        <li><a>local</a></li>
        <li><a href='.eventoArea'>eventos</a></li>
      </ul>
      <div 
        className="menuBar"
        onClick={() => show === 'none' ? setShow('block') : setShow('none')}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>

    <div 
      className='menuResp' 
      style={{display: show}}
    >
      <ul>
        <li onClick={() => setShow('none')}><a>home</a></li>
        <li onClick={() => setShow('none')}><a>local</a></li>
        <li onClick={() => setShow('none')}><a>eventos</a></li>
      </ul>
    </div>
    
    <Component {...pageProps} />
  </>
  )
}

export default MyApp