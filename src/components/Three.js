import React from 'react';
import {useEffect} from "react";
import * as THREE from "three";
import * as dat from 'dat.gui';
import TWEEN from '@tweenjs/tween.js'

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
        let params = {
            Vector1x: 0,
            Vector1y: 0,
            Vector1z: 0
        }
        let gui = new dat.GUI({autoPlace: false});
        gui.domElement.id = 'gui';
        canvasContainer.appendChild(gui.domElement);
        gui
            .add(params, 'Vector1x')
            .name('Vector1x')
        gui
            .add(params, 'Vector1y')
            .name('Vector1y')
        gui
            .add(params, 'Vector1z')
            .name('Vector1z')

        console.log(params.Vector1x)

        scene.add(new THREE.AmbientLight(0x222222));
        scene.add(new THREE.AxesHelper(5));

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

        let pointsX = []; // X AXIS LINE

        pointsX.push(new THREE.Vector3(- 10, 0, 0));
        pointsX.push(new THREE.Vector3(10, 0, 0));

        let pointsY = []; // Y AXIS LINE

        pointsY.push(new THREE.Vector3(0, 10, 0));
        pointsY.push(new THREE.Vector3(0, -10, 0));

        let material2 = new THREE.LineBasicMaterial(); //LINES MATERIAL

        let dots = new THREE.SphereGeometry(0.05, 32, 32); // DOTS ACROSS X OR Y COORDINATES

        const materialDot = new THREE.MeshPhongMaterial({color: 'red'}); // DOT MATERIAL

        let geometryX = new THREE
            .BufferGeometry()
            .setFromPoints(pointsX); // X LINE

        let geometryY = new THREE
            .BufferGeometry()
            .setFromPoints(pointsY); // Y LINE

        let lineX = new THREE.Line(geometryX, material2);

        let lineY = new THREE.Line(geometryY, material2);

        for (let i = -10; i <= 10; i++) { // setting the dots across the x axis
            let dot = new THREE.Mesh(dots, materialDot);
            dot
                .position
                .set(i, 0, 0);
            lineX.add(dot)
        }
        for (let i = -10; i <= 10; i++) { // setting the dots across the y axis
            let dot = new THREE.Mesh(dots, materialDot);
            dot
                .position
                .set(0, i, 0);
            lineY.add(dot)
        }
        lineX
            .position
            .set(0, 0, 0)
        lineY
            .position
            .set(0, 0, 0)
        scene.add(lineX)
        scene.add(lineY)

        //NUMBERS FOR THE COORDINATE AXIS
        let loader = new THREE.FontLoader();
        loader.load('fonts/helvetiker_regular.typeface.json', (font) => {
            let txt_mat = new THREE.MeshPhongMaterial({color: 0xffffff});
            for (let j = -10; j <= 10; j++) { // ADDING THE NUMBERS FOR EACH DOT IN X
                let TextGeometry = new THREE.TextGeometry(`${j}`, {
                    font: font,
                    size: 0.1,
                    height: 0.05,
                    curveSegments: 12,
                    bevelEnabled: false,
                    bevelThickness: 1,
                    bevelSize: 0.5,
                    bevelOffset: 0,
                    bevelSegments: 3
                });
                let TextMesh = new THREE.Mesh(TextGeometry, txt_mat);
                TextMesh
                    .position
                    .set(j, -0.2, -0.025)
                lineX.add(TextMesh)
            }
            for (let k = -10; k <= 10; k++) { // ADDING THE NUMBERS FOR EACH DOT IN Y
                let TextGeometry = new THREE.TextGeometry(`${k}`, {
                    font: font,
                    size: 0.1,
                    height: 0.05,
                    curveSegments: 12,
                    bevelEnabled: false,
                    bevelThickness: 1,
                    bevelSize: 0.5,
                    bevelOffset: 0,
                    bevelSegments: 3
                });
                let TextMesh = new THREE.Mesh(TextGeometry, txt_mat);
                TextMesh
                    .position
                    .set(-0.2, k, -0.025)
                lineY.add(TextMesh)
            }
        });

        // VECTORS

        let pointVector1 = []
        pointVector1.push(new THREE.Vector3(0, 0, 0));
        pointVector1.push(new THREE.Vector3(10, 10, 0));
        let geometryVector = new THREE
            .BufferGeometry()
            .setFromPoints(pointVector1); // VECTOR 1 LINE

        let VectorX = new THREE.Line(geometryVector, material2);
        VectorX
            .position
            .set(0, 0, 0)
        scene.add(VectorX)

        for (let i = 0; i < 3; i++) {
            let VectorInput = document.querySelectorAll('.c')[i];
            console.log(VectorInput)
            VectorInput.id = 'slider-fg' + i
            let slider = document.getElementById('slider-fg' + i);
            slider.addEventListener('change', () => {
                VectorX.geometry.attributes.position.needsUpdate = true; // required after the first render
                let array = VectorX.geometry.attributes.position.array
                let arrayTest = [0, 0, 0, gui.__controllers[0].getValue(), gui.__controllers[1].getValue(), gui.__controllers[2].getValue()]
                arrayTest = new Float32Array(arrayTest)
                console.log(array)
                console.log(arrayTest)
                let tween = new TWEEN
                    .Tween(array)
                    .to(arrayTest, 0.05)
                    .start()
                function animateTween(time) {
                    TWEEN.update(time)
                    requestAnimationFrame(animateTween)
                }
                requestAnimationFrame(animateTween)
            })
        }

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