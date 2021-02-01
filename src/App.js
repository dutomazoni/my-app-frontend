
import './App.css';
import Book from './book/book';
import Footer from './common/template/footer'
import Header from './common/template/header'


function App() {
  return (
    <div className={"App"}>
        <Header></Header>
        <Book></Book>
        <Footer></Footer>
    </div>
  );
}

export default App;
