import { useState } from "react"
import { AddCategory,GifGrid  } from "./components";

export const GiftExpertApp = () => {
  // useState siempre tiene que tener un valor para no pasarlo como undefined
  const [categories,setCategories] = useState([]);
  
    const onAddCategory = ( newCategory) => {

      if(categories.includes(newCategory))return;
          //Evitar el usar push, no es aconsajable usarlo en React
          // Forma de agregar un nuevo elemento al array categories, es utilizar un spread operator para conservar los elementos del array original y adicionarle el nuevo elemento.
          setCategories( [ newCategory, ...categories  ]);

        }
{/*
          // Otra forma de hacerlo
          setCategories( cat => [...cat, "Valorant"])
        }
        const onAddCategory2 = () => {
          setCategories ([ "Demon Slayer", ...categories])
        }
  */
  }

  
    
  return (
    <>
      {/*  titulo */}
      <h1> GifExpertApp</h1>

      {/*  Input */}
      <AddCategory 
      //setCategories={ setCategories}
      onNewCategory = { (value) =>  onAddCategory(value)}
      //currentCategory= { categories }
      />
      {/*  Listaado de Gift */}
      {/*  mando a llamar categories y puedo aplicar los metodos que tiene un array
      en este caso utilizo map para que me copie un nuevo array, creo un category que recorrera
      ese array y proporcionara un nuevo li con el resultado por cada elemento que contenga mi array.
       Con React si o si debemos pasarle un key unico.*/}
      {/*<button  onClick={onAddCategory}>
        Agregar
      </button>

      <br></br>
      <button  onClick={onAddCategory2}>
        Agregar
      </button>*/}

        { 

          categories.map( (category) => (
            <GifGrid 
            key={category} 
            category={ category }/>
          )
        )}
           
          
      


        {/*  Gift Item */}
        
    </>
  )
}

export default GiftExpertApp