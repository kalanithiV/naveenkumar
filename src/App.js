import './App.css';
import TopHome from './components/TopNavHeader/TopHome';
import TopHeader from './pages/Home/TopHeader';
import Paymentdetail from './pages/payment-details/paymentdetail';

function App() {
  return (
    <div className="App">
      <TopHome />
      <TopHeader />
      <Paymentdetail />
    </div>
  );
}

export default App;
