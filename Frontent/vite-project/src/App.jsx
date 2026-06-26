import Greeting  from "./componemts/Greeting";
function App(){
    let name ="Ankush";
    return(
        <>
        <h1 className ="heading ">Hii Everyone , I am {name}</h1>
        <p > I am learning Full Stack development </p>
        <Greeting/>

          </>
          )

}
export default App