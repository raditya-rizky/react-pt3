import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Header from "./components/Header"
import TextCustom from "./components/TextCustom";
import ContactUs from "./pages/ContactUs"
import BlogList from "./pages/BlogList"
import BlogDetail from "./pages/BlogDetail"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

      <Switch>
        <Route path="/" exact>
          <TextCustom />
          <Link to="/tentang-kami">Pindah ke tentang kami</Link>
        </Route>

        <Route path="/tentang-kami">
          <h1>Tentang Kami</h1>
          <Link to="/">Pindah ke home</Link>
        </Route>

        <Route path="/hubungi-kami">
          <ContactUs />
        </Route>

        <Route path="/blog" exact>
          <BlogList />
        </Route>

        <Route path="/blog/:id">
          <BlogDetail />
        </Route>

        
      </Switch>
        
      </div>
    </Router>
  )
}

export default App;
