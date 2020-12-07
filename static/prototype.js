// import * as THREE from 'https://unpkg.com/three@0.123.0/build/three.module.js';
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r83/three.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 
    75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// create a cube
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

class Boid {
    posDir = new THREE.Vector2(0,0);
    squareOfInfluence = 0;

    constructor(posDir, squareOfInfluence){
        this.posDir = posDir;
        this.squareOfInfluence = squareOfInfluence;
    }

    get posDir() {
        return this.posDir;
    }

    get squareOfInfluence() {
        return this.squareOfInfluence;
    }

    draw(){
        const a = new THREE.Vector3(1,2,0);
        a.normalize();
        const origin = new THREE.Vector3(0, 0, 0);
        const length = 1;
        const hex = 0xffff00;

        const arrowHelper = new THREE.ArrowHelper( a, origin, length, hex );
        return arrowHelper;
    }

    activate(){
        arrowHelper.position.x += 0.01;
        arrowHelper.position.y += 0.01;
    }
}

class BoidTracker{

    constructor(rows, cols){
        this.matrix = new Array();
        for (var i = 0; i < rows; i++){
            this.matrix.push(new Array());
            for (var j = 0; j < cols; j++){
                this.matrix[i][j] = 0;
            }
        }
    }

    FindNearestNeighbours(){
        return new Array(3);
    }
}

// var boidTracker = new BoidTracker(window.innerWidth / 10, window.innerHeight/10);


// create an arrow
// const a = new THREE.Vector3(1,2,0);
// a.normalize();
// const origin = new THREE.Vector3(0, 0, 0);
// const length = 1;
// const hex = 0xffff00;

// const arrowHelper = new THREE.ArrowHelper( a, origin, length, hex );
var boid = new Boid();
const ah = boid.draw();
scene.add( ah );

camera.position.z = 10;

function animate() {
    requestAnimationFrame( animate );
    // ah.position.x += 0.01;
    // ah.position.y += 0.01;
    boid.activate();
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();