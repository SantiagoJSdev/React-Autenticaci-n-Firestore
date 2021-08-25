import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { notesAction, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();

const {active: note} = useSelector( state => state.notes );

const [formValues, handleInputChange, reset] = useForm(note);


const {title, body, id} = formValues;

//llamo a la referencia de mi nota.id para obtener el id o la nota
//seleccionada asi puedo establecer una condicion preguntar if 
//el id de la nota es diferente al de la actual
const activeId = useRef(note.id)

useEffect(() => {
   
    if (note.id !== activeId.current) {

        reset(note)

        activeId.current = note.id

    }


},[note, reset] )

useEffect(() => {

//nota aqui se va actualizando mi action mi nota en el store
//mi body y mi title del formulario
    dispatch(notesAction(formValues.id, {...formValues}))
   
}, [formValues, dispatch])

    const handleDelete=()=>{

        dispatch(startDeleting(id))
    }


    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>
                {
                   ( note.url) && (
                <div className="notes__image">
                    <img 
                        src={ note.url}
                        alt="imagen"
                    />
                </div>)

                }
            </div>
                <button
                className='btn btn-danger'
                onClick={handleDelete}
                >Delete</button>
        </div>
    )
}
