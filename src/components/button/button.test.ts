import React from 'react';
import { expect, test, describe, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './button';
import styles from './styles.module.css';

describe('Button Component', () => {
  // Variant Tests
  describe('variants', () => {
    test('primary variant (default)', () => {
      render(Button({ children: 'Primary' }));
      const button = screen.getByRole('button');
      expect(button).toHaveClass(styles.base, styles['primary-active']);
      cleanup();
    });

    test('secondary variant', () => {
      render(Button({ variant: 'secondary', children: 'Secondary' }));
      const button = screen.getByRole('button');
      expect(button).toHaveClass(styles.base, styles['secondary-active']);
      cleanup();
    });

    test('text variant', () => {
      render(Button({ variant: 'text', children: 'Text' }));
      const button = screen.getByRole('button');
      expect(button).toHaveClass(styles.base, styles['text-active']);
      cleanup();
    });
  });

  // State Tests
  describe('states', () => {
    test('active state (default)', () => {
      render(Button({ children: 'Active' }));
      const button = screen.getByRole('button');
      expect(button).toHaveClass(styles['primary-active']);
      expect(button).not.toBeDisabled();
      cleanup();
    });

    test('disabled state for all variants', () => {
      const variants = ['primary', 'secondary', 'text'] as const;
      variants.forEach((variant) => {
        render(Button({ variant, state: 'disabled', children: `Disabled ${variant}` }));
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
        expect(button).toHaveClass(styles.base, styles[`${variant}-disabled`]);
        cleanup();
        });
    });

    test('inverted state for all variants', () => {
      const variants = ['primary', 'secondary', 'text'] as const;
      variants.forEach((variant) => {
        render(Button({ variant, state: 'inverted', children: `Inverted ${variant}` }));
        const button = screen.getByRole('button');
        expect(button).toHaveClass(styles.base, styles[`${variant}-inverted`]);
        cleanup();
      });
    });
  });

  // Children Tests
  describe('children rendering', () => {
    test('renders text children', () => {
      render(Button({ children: 'Text Content' }));
      expect(screen.getByText('Text Content')).toBeInTheDocument();
      cleanup();
    });

    test('renders empty button when no children provided', () => {
      render(Button({}));
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button.textContent).toBe('');
      cleanup();
    });

    test('renders complex children', () => {
      render(Button({ children: React.createElement('span', { 'data-testid': 'complex-child' }, 'Complex') }));
      expect(screen.getByTestId('complex-child')).toBeInTheDocument();
      cleanup();
    });
  });

  // Interaction Tests
  describe('interactions', () => {
    test('handles click events when active', () => {
      const handleClick = vi.fn();
      render(Button({ onClick: handleClick, children: 'Click me' }));
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
      cleanup();
    });

    test('prevents click events when disabled', () => {
      const handleClick = vi.fn();
      render(Button({ state: 'disabled', onClick: handleClick, children: 'Disabled' }));
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
      cleanup();
    });

    test('handles multiple clicks', () => {
      const handleClick = vi.fn();
      render(Button({ onClick: handleClick, children: 'Multiple Clicks' }));
      const button = screen.getByRole('button');
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(3);
      cleanup();
    });
  });

  // Style Tests
  describe('style classes', () => {
    test('always includes base class', () => {
      const variants = ['primary', 'secondary', 'text'] as const;
      const states = ['active', 'disabled', 'inverted'] as const;

      variants.forEach((variant) => {
        states.forEach((state) => {
          render(Button({ variant, state, children: `${variant} ${state}` }));
          const button = screen.getByRole('button');
          expect(button).toHaveClass(styles.base);
          cleanup();
        });
      });
    });
  });
});