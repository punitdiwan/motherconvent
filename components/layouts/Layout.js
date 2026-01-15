import Stickyfooter from '../stickyfooter/Stickyfooter'
import Header from '../header/Header'
import Footer from '../footer/Footer'


import Head from 'next/head'
// import Headercontant from '../header/Headercontant'

const Layout = ({ children, data_header }) => {
    return (
        <div>

            <Head>
                <title>Mother Convent School</title>
                <link rel="icon" type="image/jpg" href="/images/WhatsApp_Image_2024-12-26_at_14.24.15-removebg-preview.png" />
            </Head>
            <Header />
            {children}
            
                <Footer data_header={data_header} />
           
        </div>
    )
}

export default Layout
