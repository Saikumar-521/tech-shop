import { Footer } from "../footer/footer"
import { AppRouter } from "../router/AppRouter"
import { Services } from "../services/Services"

export const MainLayout =()=>{
    return(
        <>
        <AppRouter/>
        <Services/>
        <Footer/>
        </>
    )
}