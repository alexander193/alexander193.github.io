
const panoImage = document.querySelector('.pano-image');
const housePano = '../images/house.jpeg';
const panorama = new PANOLENS.ImagePanorama(housePano);

infospot1 = new PANOLENS.Infospot(350, path, false);
infospot1.position.set(-2787.53, -794.60, 4067.16);
infospot1.addHoverText('Mountain Tip');

const viewer = new PANOLENS.Viewer({
    container: panoImage,
    output: 'console'
});
viewer.add(panorama);
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
