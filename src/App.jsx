import { useEffect, useState } from "react";
import MyComponent from "./MyComponent";


const App = () => {


  const [show, setShow] = useState(false);

  return (
    <>

      <button onClick={() => setShow(show => !show)}>Göster</button>
      {
        show ?
          <MyComponent /> :
          <div>Yok</div>
      }
    </>
  );
}

export default App;
