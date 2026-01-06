import Banners from "../banners/Banners"
import Category from "../categories/Category"
import {TriangleSlick} from "../Features/TriangleSlick"
import Header from "./Header"

export const Home=()=>{
    return(
        <>
        <Header/>
        <Banners/>  
         <TriangleSlick/>
        <Category/>
        <Header/>
        </>
    )
}