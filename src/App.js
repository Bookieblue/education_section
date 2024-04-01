import logo from './logo.svg';
import './App.css';
import './index.css';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Content from './components/content';

function App() {
  return (
    <div className='bg-gray-10 relative'>
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
