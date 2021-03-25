
const panoImage = document.querySelector('.pano-image');
const housePano = '../images/house.jpg';
const panorama = new PANOLENS.ImagePanorama(housePano);
const viewer = new PANOLENS.Viewer({
    container: panoImage
});
viewer.add(panorama);