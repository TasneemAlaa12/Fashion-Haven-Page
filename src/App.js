import './App.css';
import CardSection from './cardsSection';
import Footer from './Footer';
import FeedbackForm from './Form';
import Header from './Header';
import MainPage from './main';

let links=['Home','About','Contact']

function App() {
  return (
     <div className=''>
      <Header links={links}/>
      <MainPage/>
      <CardSection/>
      <FeedbackForm/>
      <Footer/>
     </div>
  );
}

export default App;
