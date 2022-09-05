import './App.css';
// Components
import Body from './components/Body';

function App() {
  return (
    <>
      <div className='canvas'>
        <Body />
      </div>
    </>
  );
}

export default App;

// Add GetNote func. to create NOTEs in <Note /> and then display on Canvas
// - fix issues with Note creation/add button null creation
// Have delete button show on remove button click
// Allow for title/desc