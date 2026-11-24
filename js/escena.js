// BASE DE TRABAJO: completar los incisos 1.1 y 1.2 personalmente.
// AFRAME.THREE permite utilizar geometrías y animaciones de Three.js.
AFRAME.registerComponent('museo-agua', {
 init() {
   const THREE = AFRAME.THREE;
   // TODO P1.1: agregar al menos tres elementos tridimensionales y texto educativo.
   const suelo = document.createElement('a-cylinder');
   suelo.setAttribute('radius','1.1'); suelo.setAttribute('height','0.08');
   suelo.setAttribute('color','#b0d6e9'); this.el.appendChild(suelo);
   // TODO P1.2: crear geometría/malla Three.js y animación o trayectoria.
   // Ejemplo para comenzar: const g = new THREE.TorusGeometry(0.5,0.02,8,64);
 },
 tick(t,dt) { // TODO: actualizar objeto/rotación de acuerdo con delta de tiempo
 }
});
