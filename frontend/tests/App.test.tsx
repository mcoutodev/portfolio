import { screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';

import { App } from '../src/App';

import { renderWithRouter } from './utils/renderWithRouter';

describe('Testes para o componente App', () => {
    it('renderiza corretamente', () => {
        renderWithRouter(<App />);
        screen.debug();
    });
});
