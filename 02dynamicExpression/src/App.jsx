
function App() {
  const name="Vaibhav"
  const isLoggedin=true
  const isAdmin=false
  return (
    <>
      <h2>Hello , {name}</h2>
      <p>{isLoggedin?"Hello you are logged in":"Please log in!!!"}</p>
      {isAdmin && <button>Admin Panel</button>}
    </>
  )
}

export default App
