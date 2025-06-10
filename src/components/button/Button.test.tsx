import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import Button from './Button';

describe('Button component', () => {
  const onClick = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });
  
  it('renders primary active button and fires click', () => {
    render(<Button variant="primary" active onClick={onClick}>Continue</Button>);
    const btn = screen.getByRole('button', { name: 'Continue' });

    expect(btn).toBeTruthy(); 
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders secondary active button', () => {
    render(<Button variant="secondary" active>Continue</Button>);
    const btn = screen.getByRole('button', { name: 'Continue' });
    expect(btn.className.includes('border-mint')).toBe(true);
  });

  it('renders text variant button', () => {
    render(<Button variant="text" active>Continue</Button>);
    const btn = screen.getByRole('button', { name: 'Continue' });
    expect(btn.className.includes('bg-transparent')).toBe(true);
  });

  it('applies mobile size styles when mobile=true', () => {
    render(<Button variant="primary" active mobile={true}>Continue</Button>);
    const btn = screen.getByRole('button', { name: 'Continue' });
    expect(btn.className.includes('w-[329px]')).toBe(true);
    expect(btn.className.includes('rounded-[9px]')).toBe(true);
  });

  it('applies desktop size styles when mobile=false', () => {
    render(<Button variant="primary" active mobile={false}>Continue</Button>);
    const btn = screen.getByRole('button', { name: 'Continue' });
    expect(btn.className.includes('w-[600px]')).toBe(true);
    expect(btn.className.includes('rounded-[8px]')).toBe(true);
  });

  it('adds hover shadow on active button', () => {
    render(<Button variant="primary" active>Continue</Button>);
    const btn = screen.getByRole('button', { name: 'Continue' });
    expect(btn.className.includes('hover:shadow-')).toBe(true);
  });

  it('inverts colors on hover if invertOnHover is true', () => {
    render(<Button variant="primary" active invertOnHover>Continue</Button>);
    const btn = screen.getByRole('button', { name: 'Continue' });
    expect(btn.className.includes('hover:bg-white')).toBe(true);
  });

  it('does not fire onClick when button is disabled', () => {
    render(<Button variant="primary" active={false} onClick={onClick}>Continue</Button>);
    const btn = screen.getByRole('button', { name: 'Continue' });
    fireEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('applies disabled styling for primary variant', () => {
    render(<Button variant="primary" active={false}>Continue</Button>);
    const btn = screen.getByRole('button', { name: 'Continue' });
    expect(btn.className.includes('bg-lightPeach')).toBe(true);
    expect(btn.className.includes('text-disabled')).toBe(true);
    expect(btn.getAttribute('disabled')).not.toBeNull();
  });

  it('applies disabled styling for secondary variant', () => {
    render(<Button variant="secondary" active={false}>Continue</Button>);
    const btn = screen.getByRole('button', { name: 'Continue' });
    expect(btn.className.includes('bg-white')).toBe(true);
    expect(btn.getAttribute('disabled')).not.toBeNull();
  });
});


