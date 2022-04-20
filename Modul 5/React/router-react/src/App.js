/*import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/gmail">Gmail</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/amazon">Amazon</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  )
}

function Child() {
  let { id } = useParams();
  return (
    <div>
      <h3>ID: {id} </h3>
    </div>
  )
} 

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function Topics() {
  let { path, url } = useRouteMatch();
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to = {`${url}/Sate, Nasi Goreng`}>Kuliner</Link>
        </li>
        <li>
          <Link to = {`${url}/Wisata alam, Museum`}>Travelling</Link>
        </li>
        <li>
          <Link to = {`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  )
}

function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  )
}

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/private">Private Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/private">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb){
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb){
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() =>{
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
        </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect to={{
            pathname: "/login",
            state: { from: location}
          }}
        />
        )
    }
  />
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Private</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log In</button>
    </div>
  )
} */

//Assignment Online Shop
/*import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

/*export default function App() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/cart">Carts</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>

        </ul>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/private">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb){
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb){
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() =>{
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
        </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect to={{
            pathname: "/login",
            state: { from: location}
          }}
        />
        )
    }
  />
  );
} */
  /*const navbar= () =>{
    return (
    <div>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/cats">Cats</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </div>
    );
  }
  export default navbar; 

/*function Product() {
  return <>
  <hr /> <h3>Product</h3>;
  </>
}

function Cart() {
  return <>
  <hr /> <h3>Cart</h3>;
  </>
}

function ProtectedPage() {
  return <h3>Private</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log In</button>
    </div>
  )

}
/*
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
  return (
    <Router>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Toko Hijrah | | Istiqomah</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Troly</a></li>
          </ul>
          </div>
        </nav>
    </Router>
    
  )
}


//function App() {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
//}

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
  Redirect
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import { Alert } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { Form } from "react-bootstrap";
export default function AuthExample() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Istiqomah Store | | Halal</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home"><b>Home</b></Nav.Link>
            <Nav.Link href="/private"><AuthButton /></Nav.Link>
            <Nav.Link href="/orderprivate"><AuthButton2 /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/private">
            <ProtectedPage />
          </PrivateRoute>
          <PrivateRoute path="/orderprivate">
            <ProtectedPage />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
  ordernow(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
};

function AuthButton() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/link/" } };

  return fakeAuth.isAuthenticated ? (
    <b
      onClick={() => {
        fakeAuth.signout(() => history.push(from));
      }}
    >
      Sign out
    </b>
  ) : (
    <b>Products</b>
  );
}

function AuthButton2() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/link/" } };

  return fakeAuth.ordernow ? (
    <b
      onClick={() => {
        fakeAuth.ordernow(() => history.get(from));
      }}
    >
      Order Now
    </b>
  ) : (
    <b>Order Now</b>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function Home() {
  return (
    <Container>
      <Row className="my-5">
      <h2>Selamat Datang di Toko Istiqomah Store ~ * </h2>
      <text>Jl. Alianda No. 32 Kota Pasuruan  | Kode Pos: 67161 | E-mail: istiqomahstore@dummy.com</text>
      <hr />
      <br />
      <h3>Best Sellers Toko Kami </h3>
      <br />
        <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/f580f8c707f11b79cd05b464b0fe90ab" />
          <Card.Body>
            <Card.Title>Bergo Instant</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://id-test-11.slatic.net/p/bf7baeb79c4e533da11b420c99d2c497.jpg" />
          <Card.Body>
            <Card.Title>Salmicraft</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/a7dce3d330816470903aaf3c23549124" />
          <Card.Body>
            <Card.Title>Aisyabana</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/c85dbc597c03996bd8a9dafc92ee8a52" />
          <Card.Body>
            <Card.Title>Diamon Khimar</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/1f/e6/16/1fe6168d9d05eadd1563e55b07502ca4.jpg" />
          <Card.Body>
            <Card.Title>One set Cadar</Card.Title>
            <Card.Text><b>
              IDR.88.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        </Col>
        <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/f580f8c707f11b79cd05b464b0fe90ab" />
          <Card.Body>
            <Card.Title>Bergo Instant</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://id-test-11.slatic.net/p/bf7baeb79c4e533da11b420c99d2c497.jpg" />
          <Card.Body>
            <Card.Title>Salmicraft</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/a7dce3d330816470903aaf3c23549124" />
          <Card.Body>
            <Card.Title>Aisyabana</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/c85dbc597c03996bd8a9dafc92ee8a52" />
          <Card.Body>
            <Card.Title>Diamon Khimar</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/1f/e6/16/1fe6168d9d05eadd1563e55b07502ca4.jpg" />
          <Card.Body>
            <Card.Title>One set Cadar</Card.Title>
            <Card.Text><b>
              IDR.88.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        </Col>
        <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/f580f8c707f11b79cd05b464b0fe90ab" />
          <Card.Body>
            <Card.Title>Bergo Instant</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://id-test-11.slatic.net/p/bf7baeb79c4e533da11b420c99d2c497.jpg" />
          <Card.Body>
            <Card.Title>Salmicraft</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/a7dce3d330816470903aaf3c23549124" />
          <Card.Body>
            <Card.Title>Aisyabana</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/c85dbc597c03996bd8a9dafc92ee8a52" />
          <Card.Body>
            <Card.Title>Diamon Khimar</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/1f/e6/16/1fe6168d9d05eadd1563e55b07502ca4.jpg" />
          <Card.Body>
            <Card.Title>One set Cadar</Card.Title>
            <Card.Text><b>
              IDR.88.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        </Col>
        </Row>
      </Container>
  );
}
function ProtectedPage() {
  return (
    <Container>
      <br />
      <Row className="my-5">
        <h1>Assalamualaikum, Customer! Selamat Belanja</h1>
        <br />
        <br />
        <text>Eitss, Belanja seperlunya ya! Ingat apapun akan dihisab. Terima Kasih</text>
        <hr />
        <br />
        <h2>List Products</h2>
        <hr />
      <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/f580f8c707f11b79cd05b464b0fe90ab" />
          <Card.Body>
            <Card.Title>Bergo Instant</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://id-test-11.slatic.net/p/bf7baeb79c4e533da11b420c99d2c497.jpg" />
          <Card.Body>
            <Card.Title>Salmicraft</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/a7dce3d330816470903aaf3c23549124" />
          <Card.Body>
            <Card.Title>Aisyabana</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/c85dbc597c03996bd8a9dafc92ee8a52" />
          <Card.Body>
            <Card.Title>Diamon Khimar</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/1f/e6/16/1fe6168d9d05eadd1563e55b07502ca4.jpg" />
          <Card.Body>
            <Card.Title>One set Cadar</Card.Title>
            <Card.Text><b>
              IDR.88.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        </Col>
        <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/f580f8c707f11b79cd05b464b0fe90ab" />
          <Card.Body>
            <Card.Title>Bergo Instant</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://id-test-11.slatic.net/p/bf7baeb79c4e533da11b420c99d2c497.jpg" />
          <Card.Body>
            <Card.Title>Salmicraft</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/a7dce3d330816470903aaf3c23549124" />
          <Card.Body>
            <Card.Title>Aisyabana</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/c85dbc597c03996bd8a9dafc92ee8a52" />
          <Card.Body>
            <Card.Title>Diamon Khimar</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/1f/e6/16/1fe6168d9d05eadd1563e55b07502ca4.jpg" />
          <Card.Body>
            <Card.Title>One set Cadar</Card.Title>
            <Card.Text><b>
              IDR.88.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        </Col>
        <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/f580f8c707f11b79cd05b464b0fe90ab" />
          <Card.Body>
            <Card.Title>Bergo Instant</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://id-test-11.slatic.net/p/bf7baeb79c4e533da11b420c99d2c497.jpg" />
          <Card.Body>
            <Card.Title>Salmicraft</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/a7dce3d330816470903aaf3c23549124" />
          <Card.Body>
            <Card.Title>Aisyabana</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cf.shopee.co.id/file/c85dbc597c03996bd8a9dafc92ee8a52" />
          <Card.Body>
            <Card.Title>Diamon Khimar</Card.Title>
            <Card.Text><b>
              IDR.28.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/1f/e6/16/1fe6168d9d05eadd1563e55b07502ca4.jpg" />
          <Card.Body>
            <Card.Title>One set Cadar</Card.Title>
            <Card.Text><b>
              IDR.88.000</b>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        </Col>
      </Row>
    </Container>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/link/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <Alert variant="warning">
        <Alert.Heading><center>Ops.. Maaf. Untuk Melihat Products dan Order di toko kami, Silahkan Login Dahulu!</center></Alert.Heading>
        <center><Button variant="danger" onClick={login}>Log in</Button></center>
      </Alert>
    </div>
  );
}
/*import './App.css';
 import Navbar from './components/Navbar';

 function App() {
 return (
     <Navbar />
 );
 }

 export default App;*/
