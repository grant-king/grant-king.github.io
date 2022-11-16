//import * as THREE from "https://cdn.jsdelivr.net/npm/three/build/three.min.js"
import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js"


const app = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.getElementById("top-area").appendChild(renderer.domElement)

var geometry = new THREE.BoxGeometry( 4, 4, 4);
var material = new THREE.MeshBasicMaterial( { color: "rgb(100, 200, 10)" } );
var cube = new THREE.Mesh( geometry, material );
app.add( cube );

camera.position.z = 20;

var animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( app, camera );
};

animate();