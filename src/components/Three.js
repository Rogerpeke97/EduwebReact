import React from 'react';
import {useEffect} from "react";
import * as THREE from "three";

const OrbitControls = require('three-orbit-controls')(THREE);

function ThreeScene() {
    useEffect(() => {
        let canvasContainer = document.getElementById('CanvasContainer')
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(75, canvasContainer.clientWidth / canvasContainer.clientHeight, 0.1, 1000);
        let renderer = new THREE.WebGLRenderer();
        camera
            .position
            .set(0, 0, 10);

        scene.add( new THREE.AmbientLight( 0x222222 ) );
        scene.add( new THREE.AxesHelper( 5 ) );

        let light = new THREE.PointLight('white', 3, 200);
        light
            .position
            .set(0, 5, 10);
        scene.add(light);
        document
            .getElementById('CanvasContainer')
            .appendChild(renderer.domElement);

        let controls = new OrbitControls(camera, renderer.domElement);
        controls
            .target
            .set(0, 0, 0)
        let geometry = new THREE.BoxGeometry();
        let material = new THREE.MeshPhongMaterial({color: 'gray'});
        let cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        let pointsX = [];
        pointsX.push(new THREE.Vector3(- 10, 0, 0));
        pointsX.push(new THREE.Vector3(10, 0, 0));
        let pointsY = [];
        pointsY.push(new THREE.Vector3(0, 10, 0));
        pointsY.push(new THREE.Vector3(0, -10, 0));
        let material2 = new THREE.LineBasicMaterial({
            color:0xFFFFFF
        });
        let dots = new THREE.SphereGeometry(1, 5, 5);
        const materialDot = new THREE.MeshPhongMaterial();
        let dot = new THREE.Mesh(dots, materialDot);
        dot.position.set(-10, 0, 0)
        let geometryX = new THREE
            .BufferGeometry()
            .setFromPoints(pointsX);
        let geometryY = new THREE
        .BufferGeometry()
        .setFromPoints(pointsY);
        let lineX = new THREE.Line(geometryX, material2);
        lineX.add(dot)
        let lineY = new THREE.Line(geometryY, material2);
        lineX.position.set(0, 0, 0)
        lineY.position.set(0, 0, 0)
        scene.add(lineX)
        scene.add(lineY)

        camera.position.z = 5;
        window.addEventListener('resize', onWindowResize, false);

        function onWindowResize() {
            renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
            camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
            camera.updateProjectionMatrix();

        }

        renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
        let animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

    })

    return (
        <div id="CanvasContainer"></div>
    )
}

export default ThreeScene;