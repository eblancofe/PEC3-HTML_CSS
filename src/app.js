import dayjs from "dayjs";
import { es }  from "dayjs/locale/es";
import localeData from "dayjs/plugin/localeData";

/* ejemplo M2.P1 para saber que está funcionando JS en el navegador Web */
const name = 'world';
console.log(`Hello ${name}`);

function empieza_Tiempo(){
  let today=new Date();
  dayjs(today);  
  dayjs.locale("es");
  dayjs.extend(localeData);
  dayjs.weekdays();
  dayjs.months();
  let salida_fecha=dayjs().format('dddd, D [de] MMMM [de] YYYY (DD/MM/YYYY)  '); //formato fecha
  let salida_hora=dayjs().format('HH:mm:ss  '); //formato hora
  //escribimos variables en elemento HTML
  document.getElementById('fecha').innerHTML=salida_fecha; 
  document.getElementById('reloj').innerHTML=salida_hora;
  setInterval(empieza_Tiempo,1000); //añadimos intervalo de 1Seg. para contador de horas
}//de función
empieza_Tiempo();