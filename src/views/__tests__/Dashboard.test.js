import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../Dashboard';

describe('Dashboard view', () => {
  test('shows the Total Shipments information', () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    // "Total Shipments" text appears more than once on the page
    const shipments = screen.getAllByText(/Total Shipments/i);
    expect(shipments.length).toBeGreaterThan(0);
  });
});
