
import {useState} from "react";
import PropTypes from "prop-types";
import Header from "./components/Header"
import Card from "./components/Card"
import CoronaForCountry from "./components/CoronaForCountry";
import RecordedCorona from "./components/RecordedCorona";
import CoronaForContient from "./components/CoronaForContient";
function App() {
  const [key,setKey] = useState(1) 
  return (
    <>
      <Header onMenuChange={(_key) => {
        setKey(_key)
      }}  />

      <div className="md:container md:mx-auto p-8 page-content">

      {key === 1 &&  <CoronaForCountry/>}
      {key === 2 &&  <RecordedCorona/>}
      {key === 3 &&  <CoronaForContient/>}
      </div>

        
      </>
    
  );
}

export default App;
