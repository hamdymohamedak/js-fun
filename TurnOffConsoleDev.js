import Console from "./Dev"; 
function turnOffConsoleDev(){
    let noop = ()=>{};
    Console.dev = noop
}
export default turnOffConsoleDev