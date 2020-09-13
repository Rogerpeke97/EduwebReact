import React from 'react'
import ThreeScene from './Three'
function Grid1() {
    return (
        <div className="PhysicsContainer">
            <h1>Physics <i class="fi-cwldxl-arrow-solid"></i></h1>
            <div className="VectorAddition">
                <h2>Vectors and vectors addition</h2>
                <h4>
                    Quantities in physics that have a direction associated with them and cannot be
                    described by a single number.<br/>
                    When a physical quantity is described by a single number, we call it a scalar
                    quantity. In contrast, a vector quantity has both a magnitude (the “how much” or
                    “how big” part) and a direction in space.<br/>
                    Displacement is a change in the position of an object. Displacement is a vector
                    quantity because we must state not only how far the object moves but also in
                    what direction.<br/>
                    We usually represent a vector quantity such as displacement by a single letter,
                    such as A with an arrow on top.<br/>
                    If we make the displacements A and B in reverse order, with B first and A
                    second, the result is the same.<br/>
                    Thus C = B + A and A + B = B + A<br/>
                    This shows that the order of terms in a vector sum doesn’t matter. In other
                    words, vector addition obeys the commutative law.<br/>
                    Making measurements of a diagram offers only very limited accuracy, and
                    calculations with right triangles work only when the two vectors are
                    perpendicular.
                </h4>
            </div>
            <div className="ComponentMethod">
                <h3>Component Method</h3>
                <h4>
                    If we think of A as a displacement vector, we can regard A as the sum of a
                    displacement parallel to the x-axis and a displacement parallel to the y-axis.<br></br>
                    We use the numbers Ax and Ay to tell us how much displacement there is parallel
                    to the x-axis and how much there is parallel to the y-axis, respectively.<br></br>
                    Ax / A = cos (angle) and Ay / A = sin (angle)<br /> 
                    Ax = A x cos (angle) and Ay = A x sin (angle)<br />
                    In this example the angle is measured from the + x axis, rotating toward the + y axis2.
                </h4>
                <ThreeScene />
            </div>
        </div>
    )
}

export default Grid1;