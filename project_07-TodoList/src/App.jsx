

function App() {

  return (
    <center className="tood-container">
      <h1>TODO LIST</h1>
      <div class="container text-center">

        <div class="row">
          <div class="col-4"><input type="text" placeholder="Enter todo name" />
          </div>
          <div class="col-4"> <input type="date" /></div>
          <div class="col-2"><button type="button" class="btn btn-success">Add</button>
          </div>
        </div>
        <div class="row">
          <div class="col-4">Buy Milk
          </div>
          <div class="col-4"> 01/02/2023</div>
          <div class="col-2"><button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
        <div class="row">
          <div class="col-4">Buy books
          </div>
          <div class="col-4"> 01/12/2024</div>
          <div class="col-2"><button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </center>
  )
}

export default App
