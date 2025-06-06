import Button from '../button/button';
import styles from './styles.module.css';

const variants = ['primary', 'secondary', 'text'] as const;
const states = ['active', 'disabled', 'inverted'] as const;

export default function ButtonShowcase() {
  return (
    <div className={styles.grid}>
      {variants.map((variant) =>
        (states.map((state) => (
          <div key={`${variant}-${state}`} className={styles.cell}>
            <h1 className={styles.side}>{variant} - {state}</h1>
            <Button variant={variant} state={state}>
              Continue
            </Button>
            <br />
          </div>
        ))
      ))}
    </div>
  );
}
