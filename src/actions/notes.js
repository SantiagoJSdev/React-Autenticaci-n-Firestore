import Swal from "sweetalert2"

import { db } from "../firebase/firebaseConfig"
import { fileUpload } from "../helpers/fileUpload"
import { loadNotas } from "../helpers/loadNotas"
import { types } from "../types/types"


export const notes = () => {
    return async(dispatch, getState) => {

        const {uid} = getState().auth

        const NewNote = {
            title:'',
            body:'',
            date: new Date().getTime()
        }
       
      const doc =  await db.collection(`${uid}/journal/notes`).add(NewNote)
      

      dispatch(notesAction(doc.id, NewNote))
      dispatch(addNewNote(doc.id, NewNote))

    }
}

// cuando se crea la nota ejecute esta accion para que de mi store en el arreglo notes 
// agregue mi nota nueva 
export const addNewNote = (id, nota) =>({
        
        type: types.notesAddNew,
        payload: {
            id, ...nota
        }


})



export const notesAction =(id, nota)=>{
        return {
            type: types.notesActive,
            payload: {
                id,
                ...nota
            }
        }
}


//aqui extraigo las notas y llamo mi dispatch para cargar mi notas en el store
export const startLoadingNotes =  (uid) =>{

    return async(dispatch)=> {

        const notas = await loadNotas(uid)
        
        dispatch(notesLoad(notas))
    }



 
}

//para cargar en mi store el array notas
export const notesLoad = (notas) =>{

    return {
        type: types.notesLoad,
        payload: notas
        
    }
}

//guardar o actualizar la nota

export const startSaveNote = (note) =>{

    return async(dispatch, getState) =>{

        const {uid} = getState().auth;

        //pregunto si en mi nota tengo url porq si es undefine va dar error en firestore
        //y como la nota no puede poseer imagen no tiene url y da undefine
        if (!note.url){
            delete note.url;
        }

        const noteToFirestore = {...note};
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

        dispatch(refreshNote(note.id, noteToFirestore))
        Swal.fire('Saved', note.title, 'success')

    }
}

export const refreshNote = (id, note) => {

  return  {  
      type: types.notesUpdated,
      payload: {
                 id, 
                 note: {
                     id,
                     ...note
                 }
                 
             }

}
}


//esta accion es para subir mi imagen a claudinery ya previo en mis pantalla notesAppBar creo mis funciones 
// para subir el archivo y mediante el target asignarla en una variable ahora creare un helper para subirla a claudinery
// y luego ejecutarla en esta accion para no tener codigo tan largo
export const startUploading = (file)=>{

    return async (dispatch, getState)=>{

        const {active: activeNote} = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: ()=>{
                Swal.showLoading();
            }
        })

            // aqui retorno la direccion de mi imagen y la tengo en la variable
        const fileUrl = await fileUpload(file)
        
        // ahora debo grabar en mi accion en la nota mi url porq ya la nota tiene imagen pero ya tengo una accion
        // que guarda o actualiza la nota 

        activeNote.url = fileUrl
        dispatch(startSaveNote(activeNote))

        Swal.close();
    }
}

export const startDeleting = (id) => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;
        await db.doc(`${uid}/journal/notes/${id}`).delete();
        dispatch(deleteNote(id))
    }


}

export const deleteNote =(id) =>({
    type: types.notesDelete,
    payload: id
})

export const noteLogaut= ()=>({
    type: types.notesLogoutCleaning
   

})