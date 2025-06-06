import ButtonShowcase from './components/buttonGallery/buttonGallery';
import './index.css'

function App() {
  return (
    <>
    <section className="header">
     <h1>Manifest Frontend Intern Code challenge 2025</h1>
     <p>Show off your components here</p>
     <div className='alert'>
      <p>Shorten or enlarge screen size to see mobile/desktop buttons.</p>
      <p>Hover to see the hover effect and likewise for on click.</p>
     </div>
    </section>
     <ButtonShowcase />
    </>
  ) 
} 

export default App
