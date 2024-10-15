

const App = () => {
  const handleSubmit =(e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.id.value;
    const pass = form.password.value;
    const user = {name, pass}
    console.log(user);
  }
  return (
    <>
    <div className="bg-[#d2d6de] w-screen h-screen">
      <h1 className="text-3xl capitalize font-extrabold text-[#444444] text-center pt-7 lg:w-1/2">varendra university</h1>
      <form onSubmit={handleSubmit} className="bg-white m-10 p-5 space-y-3 md:w-1/3">
        <h5 className="text-center font-extralight text-sm">Sign in to start your session</h5>
        <input type="text" className="p-2 border border-gray-200 w-full text-sm" placeholder="Student Id" name="id" />
        <input type="Password" className="p-2 border border-gray-200 w-full" name="password" placeholder="Password" />
        <input type="submit" value="Sign In"  className="p-2 bg-[#367fa9] w-full text-white" />
        <input type="submit" value="Forgot Password?"  className="p-2 bg-[#f39c12] w-full text-white" />
      </form>

    </div>
    </>
    
  );
};

export default App;