import React from "react"
import "./lesson_4";
import {promiseCallback} from "./lesson_4";

const Lesson4 = () => {
    return (
        <div>
            <button id='btn-create-promise' onClick={() => promiseCallback}>Create Promise</button>
            <button id='btn-resolve-promise'>Resolve Promise</button>
            <button id='btn-reject-promise'>Reject Promise</button>
        </div>
    );
}

export default Lesson4;