import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Alert from './components/layout/Alert';
import User from './pages/User';

import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';

import { APP_TITLE } from './constants/Constants';
import { ROUTES } from './constants/Routes';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar title={APP_TITLE} />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path={ROUTES.home} element={<Home />} />
                <Route path={ROUTES.about} element={<About />} />
                <Route path={`${ROUTES.user}${ROUTES.login}`} element={<User />} />
                <Route path={ROUTES.not_found} element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
