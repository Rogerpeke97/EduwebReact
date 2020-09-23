import React from 'react'
import ThreeScene from './Three'
function Grid1() {
    return (
        <div className="PhysicsContainer">
            <h1>Vector calculator! <i className="fi-cwldxl-arrow-solid"></i></h1>
            <div className="VectorAddition">
                <h2>Vectors and vectors addition</h2>
                <h4>
                   The intention behind this tool is creating an angle and vector resultant calculator, where you
                   input the values of the vectors (I will only support 2 for now), and the different desired values are displayed
                   in the canvas.
                </h4>
            </div>
            <div className="ComponentMethod">
                <h4>
                    - Click inside the canvas to rotate the camera and right click to move it horizontally.<br />
                    - Use the wheel to zoom in or out of the scene.
                </h4>
                <h3>
                    Do not use the slider to change the vector values, it only accepts input!.
                </h3>
                <ThreeScene />
            </div>
        </div>
    )
}

export default Grid1;