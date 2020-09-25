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
        let renderer = new THREE.WebGLRenderer({antialias: true});
        camera
            .position
            .set(0, 0, 10);
        let params = {
            Vector1x: 0,
            Vector1y: 0,
            Vector1z: 0,
            AddVector2: false,
            Vector2x: 0,
            Vector2y: 0,
            Vector2z: 0
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
        gui
            .add(params, 'AddVector2')
            .name('AddVector2')
        gui
            .add(params, 'Vector2x')
            .name('Vector2x')
        gui
            .add(params, 'Vector2y')
            .name('Vector2y')
        gui
            .add(params, 'Vector1z')
            .name('Vector2z')

        scene.add(new THREE.AmbientLight(0x222222));

        let light = new THREE.PointLight('whitesmoke', 3, 200);
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

        // BIG GRID
        /*let bigGridGeometry = new THREE.PlaneGeometry(20, 20, 16, 9);
        let bigGridMaterial = new THREE.MeshBasicMaterial({color: 'white', opacity: 0.5, transparent: true, wireframe: true, side: THREE.DoubleSide});
        let bigGrid = new THREE.Mesh(bigGridGeometry, bigGridMaterial);*/
        //HORIZONTAL GRID
        let gridHelperZaxis = new THREE.GridHelper(20, 20);
        scene.add(gridHelperZaxis);

        //VERTICAL GRID
        let gridHelper = new THREE.GridHelper(20, 20);
        let axisGrid = new THREE.Vector3(1, 0, 0);
        gridHelper.rotateOnAxis(axisGrid, 1.5708) // THE ANGLE IS IN RADIANS, THIS IS 90 DEG
        scene.add(gridHelper);

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
        let vectorMaterial1 = new THREE.MeshBasicMaterial({color: 'green'});
        let pointVector1 = []
        pointVector1.push(new THREE.Vector3(0, 0, 0));
        pointVector1.push(new THREE.Vector3(0, 0, 0));
        pointVector1.push(new THREE.Vector3(0, 0, 0));
        let geometryVector = new THREE
            .BufferGeometry()
            .setFromPoints(pointVector1);
        let pointVector2 = []
        pointVector2.push(new THREE.Vector3(0, 0, 0));
        pointVector2.push(new THREE.Vector3(0, 0, 0));
        pointVector2.push(new THREE.Vector3(0, 0, 0));
        let geometryVector2 = new THREE
            .BufferGeometry()
            .setFromPoints(pointVector2);

        //GEOMETRY FOR THE CIRCLES

        let geometryCircle = new THREE.SphereGeometry(0.1, 32, 64);
        let materialCircle = new THREE.MeshPhongMaterial({color: 'green'});
        let materialCircle2 = new THREE.MeshPhongMaterial({color: 'blue'});

        //VECTOR 2 HIDE GUI VECTOR 2 UNTIL BOOLEAN IS CLICKED

        for (let f = 4; f <= 6; f++) {
            let vector2Div = document.querySelectorAll('.cr')[f];
            vector2Div.id = "vector2Div" + f;
            document
                .getElementById('vector2Div' + f)
                .style
                .display = 'none';
        }

        //VECTOR 2 FUNCTION
        function vector2Add() {
            if (document.getElementById('vector2Div4').style.display === 'none') {

                for (let i = 4; i <= 6; i++) {
                    let VectorInput = document.querySelectorAll('.c')[i];
                    console.log(VectorInput)
                    VectorInput.id = 'slider-fg' + i
                    let slider = document.getElementById('slider-fg' + i);
                    slider.addEventListener('change', () => {})
                }
            }
        }

        let AddVector2Bool = document.querySelectorAll('.cr')[3];
        AddVector2Bool.id = "AddVector2Bool";
        document
            .getElementById('AddVector2Bool')
            .addEventListener('change', () => {
                vector2Add();
                for (let i = 4; i <= 6; i++) {
                    document
                        .getElementById('vector2Div' + i)
                        .style
                        .display = 'grid';
                    document
                        .getElementById('AddVector2Bool')
                        .style
                        .display = 'none'
                }

            })

        // VECTOR 1  and VECTOR 2 LINE
        let vectorMaterial2 = new THREE.MeshBasicMaterial({color: 'blue'});
        let Vector2 = new THREE.Line(geometryVector2, vectorMaterial2);
        Vector2
            .position
            .set(0, 0, 0)

        let circle2 = new THREE.Mesh(geometryCircle, materialCircle2);

        Vector2.add(circle2);
        Vector2.frustumCulled = false; // PREVENTS LINE FROM DISAPPEARING WHEN IT'S OUT OF CAMERA FRAME

        scene.add(Vector2)

        let VectorX = new THREE.Line(geometryVector, vectorMaterial1);
        VectorX
            .position
            .set(0, 0, 0)

        let circle = new THREE.Mesh(geometryCircle, materialCircle);

        VectorX.add(circle);
        VectorX.frustumCulled = false; // PREVENTS LINE FROM DISAPPEARING WHEN IT'S OUT OF CAMERA FRAME

        scene.add(VectorX)

        for (let i = 0; i < 7; i++) {
            let VectorInput = document.querySelectorAll('.c')[i];
            console.log(VectorInput)
            VectorInput.id = 'slider-fg' + i
            let slider = document.getElementById('slider-fg' + i);
            slider.addEventListener('change', () => {
                let array = VectorX.geometry.attributes.position.array
                let arrayTest = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    gui
                        .__controllers[0]
                        .getValue(),
                    gui
                        .__controllers[1]
                        .getValue(),
                    gui
                        .__controllers[2]
                        .getValue()
                ]
                arrayTest = new Float32Array(arrayTest)

                let array2 = Vector2.geometry.attributes.position.array
                let arrayTest2 = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    gui
                        .__controllers[4]
                        .getValue(),
                    gui
                        .__controllers[5]
                        .getValue(),
                    gui
                        .__controllers[6]
                        .getValue()
                ]
                arrayTest2 = new Float32Array(arrayTest2)

                //VECTOR ARROW

                new TWEEN
                    .Tween(array)
                    .to(arrayTest)
                    .onStart(() => {
                        new TWEEN
                            .Tween(circle.position)
                            .to({
                                x: gui
                                    .__controllers[0]
                                    .getValue(),
                                y: gui
                                    .__controllers[1]
                                    .getValue(),
                                z: gui
                                    .__controllers[2]
                                    .getValue(),
                                isVector3: true
                            })
                            .start()
                    })
                    .start();
                new TWEEN
                    .Tween(array2)
                    .to(arrayTest2)
                    .onStart(() => {
                        new TWEEN
                            .Tween(circle2.position)
                            .to({
                                x: gui
                                    .__controllers[4]
                                    .getValue(),
                                y: gui
                                    .__controllers[5]
                                    .getValue(),
                                z: gui
                                    .__controllers[6]
                                    .getValue(),
                                isVector3: true
                            })
                            .start()
                    })
                    .start()

                function animateTween(time) {
                    TWEEN.update(time)
                    requestAnimationFrame(animateTween)
                    Vector2.geometry.attributes.position.needsUpdate = true; // required after the first render

                    VectorX.geometry.attributes.position.needsUpdate = true; // required after the first render
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