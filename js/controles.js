const textos = {
 evaporacion:'Etapa 1 - Evaporacion: El Sol calienta el agua superficial y pasa a vapor.',
 condensacion:'Etapa 2 - Condensacion: El vapor se enfría y forma nubes.',
 precipitacion:'Etapa 3 - Precipitacion: Las gotas crecen y caen como lluvia.',
 acumulacion:'Etapa 4 - Acumulacion: El agua regresa a cuerpos de agua.'
};
const selector = document.querySelector('#etapa');
const museo = document.querySelector('#museo');
const estado = document.querySelector('#estado');
const textoEl = document.querySelector('#texto');
const texto3D = document.querySelector('#texto-3d');

function actualizarEtapa() {
 const etapaActual = selector.value;
                           if (textoEl) textoEl.textContent = textos[etapaActual] || '';
                           if (texto3D) texto3D.setAttribute('value', textos[etapaActual] || '');

const elementosConEtapa = museo ? museo.querySelectorAll('[data-etapa]') : [];
  elementosConEtapa.forEach((el) => {
   const etapaObj = el.getAttribute('data-etapa');
   if (etapaActual === 'precipitacion') {
    el.setAttribute('visible', etapaObj === 'condensacion' || etapaObj === 'evaporacion');
   } else {
    el.setAttribute('visible', etapaObj === etapaActual || etapaObj === 'acumulacion');
  }
 });
}

selector.addEventListener('change',actualizarEtapa);
actualizarEtapa();

window.pausado = false;
const btnPausa = document.querySelector('#pausa');
btnPausa.addEventListener('click', () => {
 window.pausa = !window.pausado;
 btnPausa.textContent = window.pausado ? 'Continuar' : 'Pausar';
 if (estado) {
  estado.textContent = window.pausado ? 'Animacion pausada' : 'Animacion activa';
 }
});

const marcador = document.querySelector('#hiro');
if (marcador) {
 marcador.addEventListener('markerFound', () => {
  if (estado) estado.textContent = 'Marcador detectado';
 });
 marcador.addEventListener('markerLost', () => {
  if (estado) estado.textContent = 'Marcador perdido';
 });
}
