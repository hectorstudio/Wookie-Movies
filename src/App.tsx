import { Route, Routes } from 'react-router-dom';

import Layout from './layouts';
import MoviesList from './pages/MoviesList';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route
            path="/"
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
