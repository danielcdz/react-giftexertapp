// Componente GiftExpertApp
import React,{useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GiftGrid } from './Components/GiftGrid';

const GiftExpertApp = () => {

    // const categories = ['One Punch','Naruto','AOT']
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () =>{
    //     const elemento = 'Goku';
    //     setCategories(cats => [...categories,elemento]);
    // }

    return (
        <>  
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {/* <button onClick={handleAdd} >Agregar</button> */}
            <ol>
                {
                    categories.map( category => 
                         
                         <GiftGrid 
                         key={category}
                         category={category}/>
                         
                    )
                }
            </ol>
        </>
    );

};

export default GiftExpertApp;