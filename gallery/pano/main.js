const panorama = new PANOLENS.ImagePanorama('../../images/DJI_0885.JPG');
panorama.addEventListener('progress', onProgress);
panorama.addEventListener('enter', onEnter);

const panorama2 = new PANOLENS.ImagePanorama('../../images/DJI_0905.JPG');
panorama2.addEventListener('progress', onProgress);
panorama2.addEventListener('enter', onEnter);

infospot = new PANOLENS.Infospot(500, '../../images/infospot.png');
infospot.position.set(4183.83, -2706.17, -320.17);
infospot.addEventListener( 'click', function(){
  credit.style.backgroundColor = 'black';
  viewer.setPanorama( panorama2 );
  infospot2.position.set(-3606.84, 1414.17, -3150.38);
  panorama2.add( infospot2 );
  viewer.tweenControlCenter(new THREE.Vector3(1727.11, -1274.05, -4505.41), 0);
  } );

infospot2 = new PANOLENS.Infospot(500, '../../images/balloon.png');

const viewer = new PANOLENS.Viewer({ output: 'console' });


var progress, progressElement, table, credit;

infospot2.addEventListener( 'click', function(){
  credit.style.backgroundColor = 'black';
  viewer.setPanorama( panorama );
  infospot.position.set(4183.83, -2706.17, -320.17);
  panorama.add( infospot );
  } );

table = document.getElementById('table_prog');
progressElement = document.getElementById('progress');
credit = document.getElementById('credit');
divvv = document.getElementById('divvv');

progressElement.style.paddingTop = 'calc(50vh - 53px)';
progressElement.style.paddingBottom = '50vh';
progressElement.style.marginRight = 'calc(50vw - 60px)';
progressElement.style.marginLeft = 'calc(50vw - 60px)';

function onEnter(event) {
  progressElement.classList.remove('finish');
}

function onProgress(event) {
  table.style.display = 'block';
  table.style.width = '100vw';
  table.style.height = '100vh';

  divvv.style.width = '100vw';
  divvv.style.height = '100vh';

  progress = event.progress.loaded / event.progress.total * 100;
  progressElement.textContent = Math.round(progress) + '%';

  if (progress === 100) {
    progressElement.classList.add('finish');
    table.style.display = 'none';
    credit.style.width = 'auto';
    credit.style.height = 'auto';
    divvv.style.width = 'auto';
    divvv.style.height = 'auto';
    credit.style.backgroundColor = 'transparent';
  }
}

viewer.add(panorama, panorama2);
viewer.OrbitControls.noZoom = true;
panorama.addEventListener('enter-fade-start', function () {
  viewer.tweenControlCenter(new THREE.Vector3(4193.80, -2485.80, -1071.47), 0);
});

panorama.add( infospot );
viewer = new PANOLENS.Viewer({
container: container,
cameraFov: 75,
controlBar: true,
output: 'console'
});

// var panorama, panorama2, viewer, container, infospot, progress, progressElement, table;

// container = document.querySelector('.pano-image');

// panorama = new PANOLENS.ImagePanorama('../../images/house.jpeg');
// panorama.addEventListener('progress', onProgress);
// panorama.addEventListener('enter', onEnter);

// panorama2 = new PANOLENS.ImagePanorama('../../images/house2.jpeg');
// panorama2.addEventListener('progress', onProgress);
// panorama2.addEventListener('enter', onEnter);

// // infospot = new PANOLENS.Infospot(1000, '../../images/strelka.png');
// // infospot.position.set(3376.66, -2773.43, -2420.08);
// // infospot.addEventListener( 'click', function(){
// //   viewer.setPanorama( panorama2 );
// //   infospot2.position.set(-2854.75, -2548.67, -3212.39);
// //   panorama2.add( infospot2 );
// // } );

// // infospot2 = new PANOLENS.Infospot(1000, '../../images/strelka2.png');
// // infospot2.addEventListener( 'click', function(){
// //   viewer.setPanorama( panorama );
// //   panorama.add( infospot );
// // } );

// // panorama.add( infospot );
// viewer = new PANOLENS.Viewer({
//   container: container,
//   cameraFov: 75,
//   autoHideInfospot: true,
//   controlBar: true,
//   output: 'console'
// });
// viewer.OrbitControls.noZoom = true;
// viewer.add(panorama, panorama2);


// panorama.addEventListener('enter-fade-start', function () {
//   viewer.tweenControlCenter(new THREE.Vector3(2606.45, -4157.60, 930.37), 0);
// });