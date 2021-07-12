import Index from "../src/pages/Home/index.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
AOS.refresh();


function App() {
  return (
    <div>
      <Index />
    </div>
  );
}

export default App;
