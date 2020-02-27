import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  //use States
  let [down, setDown] = useState(0)
  let [quarter, setQuarter] = useState(0)

  // Down Counter Function
   function downCounter() {
      if (down < 4) {
        setDown( down + 1)
      } else if (down === 4){
        setDown(down - down)
      }
   }

   //Quarter Counter Function
   function quarterCounter() {
    if (quarter < 4) {
      setQuarter( quarter + 1)
    } else if (quarter === 4){
      setQuarter(quarter - quarter)
    }
 }
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        {/* Down Button */}
          <button onClick = {downCounter}className="homeButtons__fieldGoal">Down</button> 


      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        {/* Quarter Button */}
        <button onClick = {quarterCounter}className="homeButtons__fieldGoal">Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
