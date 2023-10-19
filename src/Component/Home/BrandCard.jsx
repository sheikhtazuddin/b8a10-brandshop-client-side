import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    // const [product,setProduct]=useState([])
    // useEffect(()=>{
    //     const filter=loadProduct.filter(product=>product.name===brand.category_name);
    //     setProduct(filter);
    // },[])
    return (
        <div>
           <Link to={`/showProduct/${brand.brand_name}`}>
           <div className="card bg-base-100 shadow-lg shadow-[#353535] hover:shadow-xl hover:shadow-[#353535]">
                <figure className="">
                    <img src={brand?.image} alt="Shoes" className="rounded-t-xl h-[250px] w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title -mt-2">{brand?.brand_name}</h2>
                 {/* <h1>{loadProduct.length}</h1> */}
                </div>
            </div>
           </Link>
        </div>
    );
};

export default BrandCard;