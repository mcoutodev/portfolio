import { screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';

import { AboutMe } from '../src/routes/AboutMe';

import { renderWithRouter } from './utils/renderWithRouter';

describe('Testes para o componente AboutMe', () => {
    it('renderiza corretamente', () => {
        renderWithRouter(<AboutMe />);
        screen.debug();
    });
});
