import Button from "./components/button/Button";

function App() {
  return (
    <>
    <div className="flex p-10 space-y-5">
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-bold mb-4">Mobile Buttons</h2>
          {/* Mobile sized buttons */}
          <Button variant="primary" active={true} mobile={true} onClick={() => alert('clicked')}>
            Continue
          </Button>

          <Button variant="primary" active={false} mobile={true}>
            Continue
          </Button>

          <Button variant="secondary" active={true} mobile={true}>
            Continue
          </Button>

          <Button variant="secondary" active={false} mobile={true}>
            Continue
          </Button>

          <Button variant="text" active={true} mobile={true}>
            Continue
          </Button>

          <Button variant="text" active={false} mobile={true}>
            Continue
          </Button>
        </div>
    
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-bold mb-4">Desktop Buttons</h2>
          {/* Desktop sized buttons */}
          <Button variant="primary" active={true} mobile={false} onClick={() => alert('clicked')}>
            Continue
          </Button>

          <Button variant="primary" active={false} mobile={false}>
            Continue
          </Button>

          <Button variant="secondary" active={true} mobile={false}>
            Continue
          </Button>

          <Button variant="secondary" active={false} mobile={false}>
            Continue
          </Button>

          <Button variant="text" active={true} mobile={false}>
            Continue
          </Button>

          <Button variant="text" active={false} mobile={false}>
            Continue
          </Button>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-bold mb-4">Inverted Buttons</h2>
         <Button variant="primary" active={true} invertOnHover={true} mobile={true}>
            Continue
            </Button>
          <Button variant="primary" active={true} invertOnHover={true} mobile={false}>
            Continue
          </Button>
          <Button variant="secondary" active={true} invertOnHover={true} mobile={true}>
            Continue
          </Button>
          <Button variant="secondary" active={true} invertOnHover={true} mobile={false}>
            Continue
          </Button>
        </div>
     </div>

    </>
  );
}

export default App;