import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active} = useSelector( state => state.notes );

const handleSave=()=>{
    dispatch(startSaveNote(active))
}

    const handlePictureClick =()=>{

        // llame a mi referencia por id y simulo mi evento click creo en mi input
        // mi onchange y creo mi funcion para que la ejecute 
        document.querySelector('#fileSelector').click()


    }

    // mediante el evento change busco en el target.files donde esta mi archivo el cual necesito 
    // pasar para claudinery
    const handleFileChange= (e)=>{
       const file = e.target.files[0];

       if (file){

        //este dispach le paso el file y extrae el url de la imagen que mande a subir 
        dispatch(startUploading(file))
       }
    }
    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>

            {/* creo un input para almacenar mis archivos creo tipo file para eso 
            y display none para que no se vea xq lo voy a ejecutar mediante mi boton 
            le coloco un id para poder llamarlo*/}
            <input
            id='fileSelector'
            type='file'
            style={{display:'none'}}
            onChange={handleFileChange}
            />

            <div>
                <button
                 className="btn"
                 onClick={handlePictureClick}
                 >
                    Picture
                </button>

                <button 
                onClick={handleSave}
                className="btn">
                    Save
                </button>
            </div>
        </div>
    )
}
