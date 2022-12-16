import { productos } from "../../mock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import Item from "../Item/Item";

const ItemListContainer = () => {
    const [item, setItem] = useState(productos);
    const {id} = useParams();

    const FilterCategory = new Promise((resolve, reject)=>{
        
        if(id){
            setTimeout(()=>{
                const newProducto = productos.filter((p)=> p.category == id)
                resolve(newProducto);
            },1000)
        } else {
            resolve(productos);
        }

    })

    useEffect(()=>{
        FilterCategory.then((response)=>{
            setItem(response)
        })
    },[id])

    return (
        <div className="products-container">
            {
                item.map((producto)=>{
                    return <Item producto={producto}/>
                })
            }
        </div>
    )
}

export default ItemListContainer;