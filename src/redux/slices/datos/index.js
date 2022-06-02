import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    }
  },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

export const fetchAllUsers = () => (dispatch) => {
  axios
    .get("https://openfinance2020-292200.firebaseio.com/events.json ")
    .then((response) => {
      console.log('La respuesta a la peticion es:', response.data);
      const {title} = response.data.webinar3.lang.es;
      console.log('title', title);


    

      let arregloCompleto = Object.entries(response.data);
      console.log('mi arreglo completo es:', arregloCompleto)
      let arregloDiez = arregloCompleto.slice(0,10);
      console.log('El arreglo', arregloDiez);


      // solo quedarme con {lang, speakers}
      let arregloFor = []
     arregloDiez.forEach(element => {
        arregloFor.push(element[1]);
      });
     console.log('El arregloFor', arregloFor);

     let arregloLang =[];
     arregloFor.forEach(element => {
       //const {es} = element.lang;
       arregloLang.push(element.lang)
      });
      console.log('El arregloLang', arregloLang);

      let arregloSpeaker =[];
      arregloFor.forEach(element => {
        //const {es} = element.lang;
        arregloSpeaker.push(element.speakers)
       });
       console.log('El arregloSpeaker', arregloSpeaker);
      

      let arregloLangEs=[];
    
      
  /*    let vb = [llearvb()];
     function llearvb(){
        for (let index = 0; index < arregloLang.length; index++) {
          const element = arregloLang[index];
          let {en} = arregloLang[index];
          arregloLangEn.push(element);
          console.log('arregloLangEscdscsdcsdcsdcs', arregloLangEn);
          console.log('esdcsddsds', en);
        }
        return arregloLangEn;
     } */
    
      arregloLang.forEach((element, index)=>{
       let arregloEspa =[];  
      let {es} = arregloLang[0];
      arregloEspa.push(es);
      console.log('arreglo espa', arregloEspa)
        arregloLangEs.push(es);
        console.log('arregloLangEs', arregloLangEs);
        console.log('es', es);
      })/* 
      arregloLangEs.push(arregloLangEs); 
      console.log('arregloLangEs-', arregloLangEs); */
      /* //
      
      //dispatch(setUserList(response.data));
      const  mi = arregloDiez.map(function (user){
        const {lang} = user[1];
        //let {en} = lang;
        /* console.log('title', title, 'banner', banner)  
        return lang;
      })
     
       
      
      console.log('mi arreglo es:', miAr);
      //console.log('mi arreglo español:', esp); */

      let arregloFinal = arregloLangEs.concat(arregloSpeaker);
      console.log('arregloFinal', arregloFinal);
      dispatch(setUserList(arregloLangEs));

      
    })
    .catch((error) => console.log(error));
};
