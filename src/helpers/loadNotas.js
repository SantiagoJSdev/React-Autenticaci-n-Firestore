import { db } from "../firebase/firebaseConfig"


//cree un helpers para extraer un arreglo de la base de datos con todas las notas de un user
export const loadNotas = async(id) => {

    const notesSnap =  await db.collection(`${id}/journal/notes`).get()

   const notas = []

   notesSnap.forEach((snapHijo)=>{

    
    notas.push({
        id:  snapHijo.id,
        ...snapHijo.data()
    })
   })

 
   return notas 
}
