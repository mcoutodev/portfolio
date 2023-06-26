import { screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';

import { Home } from '../src/routes/Home';

import { renderWithRouter } from './utils/renderWithRouter';

describe('Testes para o componente Home', () => {
    it('renderiza corretamente', () => {
        renderWithRouter(<Home />);
        screen.debug();
    });
});
