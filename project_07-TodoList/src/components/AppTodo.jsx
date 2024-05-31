import React from 'react'

function AppTodo() {
    return (
        <div class="container">

            <div class="row hk-row">
                <div class="col-4"><input type="text" placeholder="Enter todo name" />
                </div>
                <div class="col-4"> <input type="date" /></div>
                <div class="col-2  "><button type="button" class="btn btn-success hk-buttons">Add</button>
                </div>
            </div>
        </div>
    )
}

export default AppTodo