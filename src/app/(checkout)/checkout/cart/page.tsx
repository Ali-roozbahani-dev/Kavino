import Cart from "@/components/Features/Cart/Cart";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import Main from "@/components/Layout/Main/Main";



export default function CartPage(){
    
    return(
        <>
        <Header/>
        <Main>   
            <Cart />            
        </Main>
        <Footer />
        </>
        
    )
}