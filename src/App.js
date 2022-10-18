import "./App.css";
import Details from "../src/components/Details/Details";
import { DetailsData } from "../src/components/DetailsData";
function App() {
  return (
    <div className="App">
      <Details props={DetailsData} />
    </div>
  );
}

export default App;
