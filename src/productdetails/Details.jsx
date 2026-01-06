import { useState } from "react";
import ProductType from "./ProductType";
import Overview from "./Overview";
import Review from "./Review";
export const Details=()=>{
    const [tab,setTab]=useState("specifications");    
    return(
        <>
        <div className="d-flex gap-2 mb-3 justify-content-center">
            <button className={`btn ${tab === "specifications" ? "btn-danger" : "btn-outline-secondary"}`} onClick={()=>setTab('specifications')}>specifications</button>
            <button className={`btn ${tab === "overview" ? "btn-danger" : "btn-outline-secondary"}`} onClick={()=>setTab('overview')}>overview</button>
            <button className={`btn ${tab === "reviews" ? "btn-danger" : "btn-outline-secondary"}`} onClick={()=>setTab('reviews')}>reviews</button>
        </div>

        {tab==="specifications" && <ProductType />}
        {tab==="overview" && <Overview />}
        {tab==="reviews" && <Review />}

        </>
    )
}