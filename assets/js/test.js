import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js"

/*
Add a three.js animation to each div with class render-area.
*/

const animations = []
const cubes = []
const cameras = []
const renderers = []
const render_areas = document.getElementsByClassName("render-area")

//instantiate renderers, etc., add to each .render-area component
for(let i=0;i<render_areas.length;i++){
    const area_item = render_areas.item(i)
    const area_width = area_item.clientWidth
    const area_height = area_item.clientHeight
    
    //create animation
    const animation = new THREE.Scene();
    const geometry = new THREE.BoxGeometry( 4, 4, 4);
    const red_color = Math.floor(Math.random() * 255)
    const material = new THREE.MeshBasicMaterial( { color: `rgb(${red_color},132,44)` } );
    const cube = new THREE.Mesh( geometry, material );
    animation.add( cube );
    animations.push(animation)
    cubes.push(cube)
    
    const camera = new THREE.PerspectiveCamera( 75, area_width / area_height, 0.1, 1000)
    camera.position.z = 20;
    cameras.push(camera)

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(area_width, area_height)
    renderers.push(renderer)
    area_item.appendChild(renderer.domElement)
    area_item.children[0].classList.add("canvas-area")
}


//update animations frames
var animate = function () {
    requestAnimationFrame( animate );
    
    
    for(let i=0;i<render_areas.length;i++){
        cubes[i].rotation.x += Math.random() * 0.02
        cubes[i].rotation.y += Math.random() * 0.02
        cubes[i].position.y += Math.random() * 0.1
        cubes[i].position.y -= Math.random() * 0.1
        cubes[i].position.x += Math.random() * 0.1
        cubes[i].position.x -= Math.random() * 0.1
        
        renderers[i].render(animations[i], cameras[i])
    }
};

animate();