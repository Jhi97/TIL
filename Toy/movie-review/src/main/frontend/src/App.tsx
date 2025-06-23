import MovieList from "./components/MovieList.tsx";
import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import MovieDetail from "./components/MovieDetail.tsx";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Link to="/" className="header-link"><h1>내 인생 영화 콜렉션</h1></Link>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<MovieList/>}/>
                        <Route path="/movie/:movieId" element={<MovieDetail/>}/>
                    </Routes>
                </main>

            </div>
        </BrowserRouter>
    )
}

export default App;