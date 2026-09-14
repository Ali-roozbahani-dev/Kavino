import Cart from "@/components/Features/Cart/ui/Cart";
import Footer from "@/components/ui/Footer/Footer";
import Header from "@/components/ui/Header/Header";
import Main from "@/components/ui/Main";




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