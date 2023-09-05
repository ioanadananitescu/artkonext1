import '@styles/globals.css';
import Nav from'@components/Nav';
import Provider from '@components/Provider';
import Navbar from '@components/NavBar';

export const metadata={
    title:"Artko",
    description:'an online platform showcasing artists work'
}

const RootLayout = ({children}) => {
  return (
  <html>
      <body>
        <Provider>
        <div className="main bg-primary-orange dark:bg-slate-800">
            {/* <div className="gradient"/> */}

        </div>
        <main className="app">
            <Nav />
           
            {children}
          </main>
          </Provider>
    </body>
  </html>
  )
}

export default RootLayout