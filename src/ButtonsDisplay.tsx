import Button from "./Button";
import "./ButtonsDisplay.css";

const ButtonsDisplay = () => {
  return (
    <div id="outer-btns-wrapper">
      {/* Desktop buttons section */}
      <h2>Desktop Button</h2>

      <div className="btn-variant-wrapper">
        {/* Primary desktop buttons in different states */}
        <h3>Primary</h3>
        <div className="btn-state-wrapper">
          <h4>Active</h4>
          <Button device="desktop" variant="primary">
            Continue
          </Button>

          <h4>Disabled</h4>
          <Button device="desktop" variant="primary" disabled>
            Continue
          </Button>

          <h4>Inverted (On Hover)</h4>
          <Button device="desktop" variant="primary" inverted>
            Continue
          </Button>
        </div>

        {/* Secondary desktop buttons */}
        <h3>Secondary</h3>
        <div className="btn-state-wrapper">
          <h4>Active</h4>
          <Button device="desktop" variant="secondary">
            Continue
          </Button>

          <h4>Disabled</h4>
          <Button device="desktop" variant="secondary" disabled>
            Continue
          </Button>
        </div>

        {/* Text variant desktop buttons */}
        <h3>Text</h3>
        <div className="btn-state-wrapper">
          <h4>Active</h4>
          <Button device="desktop" variant="text">
            Continue
          </Button>

          <h4>Disabled</h4>
          <Button device="desktop" variant="text" disabled>
            Continue
          </Button>
        </div>
      </div>

      <br />

      {/* Mobile buttons section */}
      <h2>Mobile Button</h2>

      <div className="btn-variant-wrapper">
        {/* Primary mobile buttons in different states */}
        <h3>Primary</h3>
        <div className="btn-state-wrapper">
          <h4>Active</h4>
          <Button device="mobile" variant="primary">
            Continue
          </Button>

          <h4>Disabled</h4>
          <Button device="mobile" variant="primary" disabled>
            Continue
          </Button>

          <h4>Inverted (On Hover)</h4>
          <Button device="mobile" variant="primary" inverted>
            Continue
          </Button>
        </div>

        {/* Secondary mobile buttons */}
        <h3>Secondary</h3>
        <div className="btn-state-wrapper">
          <h4>Active</h4>
          <Button device="mobile" variant="secondary">
            Continue
          </Button>

          <h4>Disabled</h4>
          <Button device="mobile" variant="secondary" disabled>
            Continue
          </Button>
        </div>

        {/* Text variant mobile buttons */}
        <h3>Text</h3>
        <div className="btn-state-wrapper">
          <h4>Active</h4>
          <Button device="mobile" variant="text">
            Continue
          </Button>

          <h4>Disabled</h4>
          <Button device="mobile" variant="text" disabled>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonsDisplay;
