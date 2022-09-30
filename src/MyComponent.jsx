import { useEffect, useState } from "react";

const MyComponent = () => {

  /* 
  Lifecycle Phases
  There are three categories of lifecycle methods: 

  When a component is rendered first time
  componentDidMount(),

  When a component updating over and over again
  componentDidUpdate(),

  When a component is being removed from the DOM
  componentWillUnmount()
  */

  const [count, setCount] = useState(0);

  useEffect(() => {
    //componentDidMount()
    console.log("Component Doğdu")

    //componentWillUnmount()
    return () => {
      console.log("Component Öldü");
    }
  }, [])

  useEffect(() => {
    //componentDidUpdate()
    console.log('Count değeri değişti = ', count)
  }, [count])


  useEffect(() => {
    //componentDidUpdate()
    console.log("Component Güncellendi")
  })

  return (
    <div >
      My Component
      <button onClick={() => setCount(count => count + 1)}>Artır</button>
      counter: {count}
    </div>
  );
}

export default MyComponent;
