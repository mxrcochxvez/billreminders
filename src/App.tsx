import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/404";
import SignupFooter from "./components/SignupFooter";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/signup" component={Signup} />
        <Route component={NotFound} />
      </Switch>
      <SignupFooter />
    </Router>
  );
}

export default App;
