import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'mobile' | 'desktop';
  disabled?: boolean;
  active?: boolean;
  inverted?: boolean;
  onClick?: () => void;
}

const Button = ({
  variant = 'primary',
  size = 'mobile',
  disabled = false,
  active = false,
  inverted = false,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className="btn"
      data-variant={variant}
      data-size={size}
      data-active={active}
      data-inverted={inverted}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 
