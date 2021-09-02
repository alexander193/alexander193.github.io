var panorama, panorama2, viewer, container, infospot, progress, progressElement, table;

table = document.getElementById( 'table_prog' );
progressElement = document.getElementById( 'progress' );

function onEnter ( event ) {

  progressElement.classList.remove( 'finish' );

}

function onProgress ( event ) {
  progress = event.progress.loaded / event.progress.total * 100;
  progressElement.textContent = Math.round(progress) + '%';
  
  if ( progress === 100 ) {
    progressElement.classList.add( 'finish' );
    table.style.display = 'none';
  }

}

container = document.querySelector( '.pano-image' );

panorama = new PANOLENS.ImagePanorama( '../../images/house.jpeg' );
panorama.addEventListener( 'progress', onProgress );
panorama.addEventListener( 'enter', onEnter );

panorama2 = new PANOLENS.ImagePanorama( '../../images/house2.jpeg' );
panorama2.addEventListener( 'progress', onProgress );
panorama2.addEventListener( 'enter', onEnter );

infospot = new PANOLENS.Infospot(1000, '../../images/strelka.png');
infospot.position.set(3376.66, -2773.43, -2420.08);
infospot.addEventListener( 'click', function(){
  viewer.setPanorama( panorama2 );
  infospot2.position.set(-2854.75, -2548.67, -3212.39);
  panorama2.add( infospot2 );
} );

infospot2 = new PANOLENS.Infospot(1000, '../../images/strelka2.png');
infospot2.addEventListener( 'click', function(){
  viewer.setPanorama( panorama );
  panorama.add( infospot );
} );

panorama.add( infospot );
viewer = new PANOLENS.Viewer( { 
    container: container,
    cameraFov: 75,
    autoHideInfospot: true,
    controlBar: true,
    output: 'console'
 } );
viewer.add(panorama, panorama2);
viewer.OrbitControls.noZoom = true;

viewer.cameraFov = 75;
viewer.getControl().target.set(2606.45, -4157.60, 930.37);
viewer.getControl().update();