import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './Hero';

describe('Hero Component', () => {
  test('renders hero component', () => {
    render(<Hero />);
    const heroSection = screen.getByRole('banner');
    expect(heroSection).toBeInTheDocument();
  });

  test('displays main title', () => {
    render(<Hero />);
    const title = screen.getByText(/Bienvenido a tu/i);
    expect(title).toBeInTheDocument();
  });

  test('displays highlighted text', () => {
    render(<Hero />);
    const highlight = screen.getByText(/experiencia única/i);
    expect(highlight).toBeInTheDocument();
  });

  test('displays subtitle', () => {
    render(<Hero />);
    const subtitle = screen.getByText(/Descubre un mundo de posibilidades/i);
    expect(subtitle).toBeInTheDocument();
  });

  test('renders primary CTA button', () => {
    render(<Hero />);
    const primaryButton = screen.getByText(/Comenzar ahora/i);
    expect(primaryButton).toBeInTheDocument();
    expect(primaryButton).toHaveClass('hero__button--primary');
  });

  test('renders secondary CTA button', () => {
    render(<Hero />);
    const secondaryButton = screen.getByText(/Saber más/i);
    expect(secondaryButton).toBeInTheDocument();
    expect(secondaryButton).toHaveClass('hero__button--secondary');
  });

  test('renders decorative circles', () => {
    const { container } = render(<Hero />);
    const circles = container.querySelectorAll('.hero__circle');
    expect(circles).toHaveLength(3);
  });

  test('has proper accessibility attributes', () => {
    render(<Hero />);
    const heroSection = screen.getByRole('banner');
    expect(heroSection).toHaveClass('hero');
  });
});