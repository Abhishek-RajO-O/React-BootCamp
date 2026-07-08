import { useState, useCallback,useEffect, useRef} from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [charactersAllowed, setCharacterAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const passwordRef = useRef(null);

    const passwordGenerator = useCallback(()=>{
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let pswd= '';
        if(charactersAllowed) str += "!@#$%^&*_";
        if(numberAllowed) str += '1234567890';
        for(let i = 0 ; i < length ; i++){
            let index = Math.floor(Math.random()*str.length);
            pswd += str.charAt(index);
        }
        setPassword(pswd);
    },[length, charactersAllowed, numberAllowed,setPassword])

  

    useEffect(() => {
        passwordGenerator()
    }, [length, numberAllowed, charactersAllowed, passwordGenerator])

    const copyToClipboard = useCallback(()=>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,15);
        navigator.clipboard.writeText(password)

    },[password]);

//       const password = useMemo(() => {
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//     if (charactersAllowed) str += "!@#$%^&*_";
//     if (numberAllowed) str += "1234567890";

//     let pswd = "";

//     for (let i = 0; i < length; i++) {
//         pswd += str.charAt(Math.floor(Math.random() * str.length));
//     }

//     return pswd;
// }, [length, charactersAllowed, numberAllowed]);



  return (
    <div className="flex h-screen flex-col bg-gray-500">

      <div className="mx-auto my-8 flex w-full max-w-xl flex-col items-center-safe rounded-lg bg-gray-800 px-4 py-3  text-white shadow-md gap-4">

        <h1 className="text-center text-3xl">passowrd Generator</h1>

        <div className="flex text-xl ">
          <input type="text" ref={passwordRef} value={password} placeholder="Password" readOnly
           className=" text-black bg-gray-300 rounded-l-xl text-center ml-3"/>
          <button className="bg-gray-900 rounded-r-xl text-center p-2"
          onClick={copyToClipboard}>Copy</button>
        </div>

        <div className="flex text-sm gap-x-2 ">
            <div className="flex gap-3 items-center">
                <input type="range" min={0} max={15} value={length}  className="cursor-pointer" 
                 onChange={(e)=>{
                    setLength(Number(e.target.value));
                }}/>
                <label>length : {length}</label>
            </div>
            <div className="flex gap-1">
                <input type="checkbox" id='numberInput' defaultChecked={numberAllowed}
                onChange={
                    ()=>{
                        setNumberAllowed((prev)=> !prev);
                        // console.log(numberAllowed)
                    }
                }/>
                <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex gap-1">
                <input type="checkbox" name="" id="charInput"  defaultChecked={charactersAllowed}
                onChange={
                    ()=>{
                        setCharacterAllowed((prev)=>!prev)
                        // console.log(charactersAllowed);
                    }
                }/>
                <label htmlFor="charInput">Special Characters</label>
            </div>
        </div>

      </div>
    </div>
  );
}
export default App;
