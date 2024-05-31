import React from 'react'

function Todoitem1() {

    let todoname = "go to college"
    let tododate = "4/10/2023"

    return (
        <div class="container ">


            <div class="row hk-row">
                <div class="col-4">{todoname}
                </div>
                <div class="col-4">{tododate}</div>
                <div class="col-2 "><button type="button" class="btn btn-danger hk-buttons">Delete</button>
                </div>
            </div>
        </div >
    )
}

export default Todoitem1