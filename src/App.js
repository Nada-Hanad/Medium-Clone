import "./App.css";
import Nav from "./Components/NavBar";
import Main from "./Components/main";
import Card from "./Components/card";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=Apple&from=2021-06-12&sortBy=popularity&apiKey=9e1b8107d1c244fd9f4f8dca42128cfc"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Nav></Nav>
            <Main></Main>
            <div className="cards-section">
              {articles.map((e, index) => {
                return <Card article={e} id={index}></Card>;
              })}
            </div>
          </div>
        </Route>

        <Route path="/articles/:id">
          <h1>vgfcdxs</h1>
        </Route>
      </Switch>
    </Router>
  );
}

//9e1b8107d1c244fd9f4f8dca42128cfc

export default App;
