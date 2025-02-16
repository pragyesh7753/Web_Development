import Chai from "./chai"

// <> </> is a fragment, it is used to wrap multiple elements
function App() {
  const userName = "chai aur code"

  return (
    <>
      <Chai />
      <h1>chai aur react {userName}</h1>
      <p>test para</p>
    </>
  )
}

export default App
