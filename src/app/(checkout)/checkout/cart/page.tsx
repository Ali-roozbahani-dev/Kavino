import Cart from "@/Features/Cart/ui/Cart";
import Footer from "@/shared/layout/Footer/Footer";
import Header from "@/shared/layout/Header/Header";
import Main from "@/ui/Main";




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