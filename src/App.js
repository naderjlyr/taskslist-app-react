import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainFooter from "./components/MainFooter";
import TasksList from "./components/TasksList";
import About from "./pages/About";

function App() {
  return (
    <div id="app" className="flex flex-col container max-w-md mx-auto md:pt-8">
      <Router>
        <section>
          <Switch>
            <Route exact path="/" component={TasksList} />
            <Route path="/about" component={About} />
          </Switch>
        </section>

        <MainFooter />
      </Router>
    </div>
  );
}

export default App;
