import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import SignInSignUp from "./page/SignInSignUp/SignInSignUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  useEffect(() => {
    const getMoviesAxios = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/user");
        console.log(data);
        setMovies(data);
      } catch (err) {
        console.log(err.data);
      }
    };
    // getMovies();
    getMoviesAxios().catch(null);
  }, []);
  const [movies, setMovies] = useState([]);
  return (
    <div className="App">
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <ToastContainer />
    </div>
  );
}
/*
  /*{" "}
      <div>
        <h1>Lista de peliculas</h1>
        <Container>
          {" "}
          <Row>
            {movies.map((data) => (
              <Col xs={3} className="mb-5" key={data.id}>
                <VideoDetails data={data} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      **/

export default App;
