var panorama, panorama2, viewer, container, infospot, progress, progressElement;

progressElement = document.getElementById( 'progress' );

function onEnter ( event ) {

  progressElement.style.width = 0;
  progressElement.classList.remove( 'finish' );

}

function onProgress ( event ) {

  progress = event.progress.loaded / event.progress.total * 100;
  progressElement.style.width = progress + '%';
  if ( progress === 100 ) {
    progressElement.classList.add( 'finish' );
  }

}

container = document.querySelector( '.pano-image' );

panorama = new PANOLENS.ImagePanorama( '../images/house.jpeg' );
panorama.addEventListener( 'progress', onProgress );
panorama.addEventListener( 'enter', onEnter );

panorama2 = new PANOLENS.ImagePanorama( '../images/house2.jpeg' );
panorama2.addEventListener( 'progress', onProgress );
panorama2.addEventListener( 'enter', onEnter );

infospot = new PANOLENS.Infospot(1000, '../images/strelka.png');
infospot.position.set(3376.66, -2773.43, -2420.08);
infospot.addEventListener( 'click', function(){
  viewer.setPanorama( panorama2 );
  infospot2.position.set(-2854.75, -2548.67, -3212.39);
  panorama2.add( infospot2 );
} );

infospot2 = new PANOLENS.Infospot(1000, '../images/strelka2.png');
infospot2.addEventListener( 'click', function(){
  viewer.setPanorama( panorama );
  panorama.add( infospot );
} );

panorama.add( infospot );
viewer = new PANOLENS.Viewer( { 
    container: container,
    cameraFov: 75,
    autoHideInfospot: true,
    output: 'console'
 } );
viewer.add(panorama, panorama2);
viewer.OrbitControls.noZoom = true;
//viewer.autoHideInfospot = false;
viewer.addUpdateCallback(function(){
  
});