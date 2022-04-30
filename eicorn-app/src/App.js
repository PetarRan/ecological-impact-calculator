import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar/Appbar.js'
import Button from './components/Button/Button';
import Title from './components/Title/Title';
function App() {
  return (
    <>
    <Appbar></Appbar>
    <script
      src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
      crossorigin></script>

    <script
      src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossorigin></script>

    <script>var Alert = ReactBootstrap.Alert;</script>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
    <Title text="The first Ecological Impact Calculator app"/>
    <Button text="Search"></Button>
    </>
    
  );
}

export default App;
