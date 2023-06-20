import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import { APP_TITLE } from './constants/Constants';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title={APP_TITLE} />
        <main className='container mx-auto px-3 pb-12'>
          content
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
