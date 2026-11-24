// BASE DE TRABAJO: completar los incisos 1.1 y 1.2 personalmente.
// AFRAME.THREE permite utilizar geometrías y animaciones de Three.js.
AFRAME.registerComponent('museo-agua', {
 init() {
   const THREE = AFRAME.THREE;
   // TODO P1.1: agregar al menos tres elementos tridimensionales y texto educativo.
   // Elemento 1: Suelo
   const suelo = document.createElement('a-cylinder');
   suelo.setAttribute('radius','1.1'); 
   suelo.setAttribute('height','0.08');
   suelo.setAttribute('position','0 0.4 0');
   suelo.setAttribute('color','#b0d6e9'); 
   suelo.setAttribute('data-etapa','acumulacion');
   this.el.appendChild(suelo);
   // Elemento 2: Nube
   const nube = document.createElement('a-sphere');
   nube.setAttribute('radius','0,32');
   nube.setAttribute('position','0 1.25 0');
   nube.setAttribute('color','#f1faee');
   nube.setAttribute('scale','1.4 0.8 1');
   nube.setAttribute('data-etapa','condensacion');
   this.el.appendChild(nube);
   // Elemento 3: Gota
   const gota = document.createElement('a-cone');
   gota.setAttribute('radius-bottom','0.11');
   gota.setAttribute('radius-top','0.01');
   gota.setAttribute('height','0.22');
   gota.setAttribute('position','0 0.75 0');
   gota.setAttribute('color','#00b4d8');
   gota.setAttribute('data-etapa','evaporacion');
   this.el.appendChild(gota);
   // Texto educativo 3D
   const texto3D = document.createElement('a-text');
   texto3D.setAttribute('id','texto-3d');
   texto3D.setAttribute('value','Ciclo del Agua - Evaporacion');
   texto3D.setAttribute('position','-0.9 1.75 0');
   texto3D.setAttribute('scale','0.45 0.45 0.45');
   texto3D.setAttribute('color','#ffffff');
   this.el.appendChild(texto3D);

   // TODO P1.2: crear geometría/malla Three.js y animación o trayectoria.
   const geomAnillo = new THREE.TorusGeometry(0.55, 0.02, 8, 48);
   const matAnillo = new THREE.MeshBasicMaterial({ color: 0x90e0ef });
   this.anillo = new THREE.Mesh(geomAnillo, matAnillo);
   this.anillo.rotation.x = Math.PI / 2;
   this.anillo.position.set(0, 0.65, 0);
   this.el.object3D.add(this.anillo);

   this.gotaEl = gota;
   this.nubeEl = nube;
   this.angulo = 0;
 },
 tick(t,dt) {
  if (typeof window.pausado !== 'undefined' && window.pausado) return;

  const deltaSeg = (dt || 16) / 1000;
  this.angulo += deltaSeg * 1.8;

  if (this.anillo){
   this.anillo.rotation.z += deltaSeg * 0.9;
  }
  if (this.gotaEl) {
   const yGota = 0.75 + Math.sin(this.angulo) * 0.35;
   const xGota = Math.cos(this.angulo) * 0.35;
   this.gotaEl.setAttribute('position','${xGota.toFixed(3)} ${yGota.toFixed(3)} 0');
  }
  if (this.nubeEl) {
   const xNube = Math.sin(this.angulo * 0.5) * 0.25;
   this.nubeEl.setAttribute('position','${xNube.toFixed(3)} 1.25 0');
  }
 }
});
