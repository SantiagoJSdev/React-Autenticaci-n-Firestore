
import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);


    //nota: mi reset recibe un nuevo estado como para refrescar 
    //mi useForm y muestre la informacion del nuevo estado ya que como 
    //mantiene su propio estado donde lo uso me da problema
    const reset = (newFormState = initialState) => {
        setValues( newFormState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}