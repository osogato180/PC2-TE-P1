const textos={evaporacion:'El Sol calienta el agua; pasa a vapor.',condensacion:'El vapor se enfría y forma nubes.',precipitacion:'Las gotas crecen y caen como lluvia.',acumulacion:'El agua regresa a cuerpos de agua.'};
const selector=document.querySelector('#etapa'), museo=document.querySelector('#museo'), estado=document.querySelector('#estado');
function actualizarEtapa(){document.querySelector('#texto').textContent=textos[selector.value];
 // TODO P1.3: hacer visibles sólo los objetos de la etapa activa sin recargar.
}
selector.addEventListener('change',actualizarEtapa);actualizarEtapa();
let pausado=false;
document.querySelector('#pausa').addEventListener('click',()=>{pausado=!pausado;pausado?museo.pause():museo.play();document.querySelector('#pausa').textContent=pausado?'Continuar':'Pausar';});
const marcador=document.querySelector('#hiro');
marcador.addEventListener('markerFound',()=>estado.textContent='Marcador detectado');
marcador.addEventListener('markerLost',()=>estado.textContent='Marcador perdido');
