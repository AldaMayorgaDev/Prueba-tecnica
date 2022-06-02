/* // Importar axios

import axios from 'axios';

//importar actions

import setListaResultados from '../redux/slices/datos/index';
const URL_BASE= 'https://openfinance2020-292200.firebaseio.com/events.json';

export const getAllData =()=>(dispatch)=>{
    axios.get (URL_BASE)
        .then((response)=>{
            console.log('La respuesta a la peticion es: ',response.data);
            console.log('aqui', response.data.webinar3.lang.en.title)

            dispatch(setListaResultados(response.data.data));
        })
        .cathc((error)=>{
            console.logo ('Ocurrió un error: ', error);
        })
    
} */