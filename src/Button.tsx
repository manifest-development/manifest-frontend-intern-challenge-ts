import "./Button.css";
interface ButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  device?: "mobile" | "desktop";
  disabled?: boolean;
  inverted?: boolean;
}

const Button = ({
  variant = "primary",
  device = "desktop",
  disabled = false,
  inverted = false,
  children = "",
}: ButtonProps) => {
  let classes = "";
  if (inverted) {
    classes += "btn-inverted";
  }
  classes += " btn-" + variant;
  classes += " btn-" + device;

  return (
    <button disabled={disabled} className={classes}>
      {children}
    </button>
  );
};

export default Button;
