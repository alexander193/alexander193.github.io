var panorama, panorama2, viewer, container, infospot;

container = document.querySelector( '.pano-image' );

panorama = new PANOLENS.ImagePanorama( '../images/house.jpeg' );
panorama2 = new PANOLENS.ImagePanorama( '../images/house2.jpeg' );

infospot = new PANOLENS.Infospot(500);
infospot.position.set( 0, 0, -5000 );
infospot.addHoverText( "The Story" );
infospot.addEventListener( 'click', function(){
  viewer.setPanorama( panorama2 );
} );

panorama.add( infospot );

viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama, panorama2 );

viewer.addUpdateCallback(function(){
  
});



/*
const panoImage = document.querySelector('.pano-image');
const panorama = new PANOLENS.ImagePanorama('../images/house.jpeg');
const panorama2 = new PANOLENS.ImagePanorama('../images/house2.jpeg');

infospot = new PANOLENS.Infospot(600);
infospot.position.set(-111.58, 201.56, -4986.23);
infospot.addHoverText('Зацените');
infospot.addEventListener( 'click', function(){
    viewer.setPanorama( panorama2 );
  } );
//infospot.onClick(function(){ viewer.setPanorama(panorama2); });

//infospot1 = new PANOLENS.Infospot(350, path, false);
//infospot1.position.set(-2787.53, -794.60, 4067.16);

panorama.add(infospot);

viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama, panorama2 );

viewer.addUpdateCallback(function(){
  
});

/*
var infospot, infospot2, panorama, viewer;

infospot = new PANOLENS.Infospot();
infospot.position.set( 5000.00, -665.23, -3996.49 );
infospot.addHoverText( 'The Where Is Bar' );

infospot2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
infospot2.position.set( -5000.00, -1825.25, 197.56 );
infospot2.addHoverElement( document.getElementById( 'desc-container' ), 200 );

// Get Google Map API Key - https://developers.google.com/maps/documentation/javascript/get-api-key
const housePano = '../images/house2.jpeg';
panorama = new PANOLENS.ImagePanorama(housePano);

panorama.add( infospot );
panorama.add( infospot2 );

viewer = new PANOLENS.Viewer();
viewer.add( panorama );
*/
