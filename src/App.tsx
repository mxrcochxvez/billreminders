import Grab from "./components/Grab";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Hero from "./layout/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <Hero title="Stop forgetting about your bills." subtitle="Get notifications so you never miss a bill." />
      <Grab />
      <Signup />
    </div>
  );
}

export default App;
