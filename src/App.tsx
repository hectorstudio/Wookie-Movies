import Layout from './layouts';
import { Route, Routes } from 'react-router-dom';
import MoviesList from './pages/MoviesList';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route
            path="/movies"
            element={<MoviesList />}
          />
          <Route
            path="/movies/:slug"
            element={<MovieDetail />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
