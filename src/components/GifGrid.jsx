//import { useState, useEffect } from "react"
import GifItem from "./GifItem";
//import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ( { category }) => {

const {images, isLoading}= useFetchGifs (category);

  return (
    <>
       <h3>{category}</h3>
       
       { /* Una forma de hacer
        isLoading ?
        ( <h2> Cargando...</h2>)
        : null ( <h2> Cargando...</h2>)
        */
       }
       {
        isLoading &&  ( <h2> Cargando...</h2>)
        // si es true ejecuta lo de la derecha
       }    

      <div className="card-grid">
        {
          images.map((image ) => (
            <GifItem  
            key={image.id}
            {
              ...image
            }
                    
            />   
          ))
        }
      </div>
       
    </>
  )
    
 
}
