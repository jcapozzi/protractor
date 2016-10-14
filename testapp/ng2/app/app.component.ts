import { Component, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements AfterContentInit {

	constructor( private element: ElementRef ) {

	}

	ngAfterContentInit() {

		let scene, camera, renderer, geometry, material, mesh, temp = this.element;

		let init = () => {
		    scene = new THREE.Scene();
		    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
		    camera.position.z = 1000;
		    geometry = new THREE.BoxGeometry( 200, 200, 200 );
		    material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
		    mesh = new THREE.Mesh( geometry, material );
		    scene.add( mesh );
		    renderer = new THREE.WebGLRenderer();
		    renderer.setSize( window.innerWidth, window.innerHeight );
 			this.element.nativeElement.appendChild( renderer.domElement );
		}

		let animate = () => {
	    	requestAnimationFrame( animate );
		    mesh.rotation.x += 0.01;
		    mesh.rotation.y += 0.02;
		    renderer.render( scene, camera );
		}


		init();
		animate();

	}


}
