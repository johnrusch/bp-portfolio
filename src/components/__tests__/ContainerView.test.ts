import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import ContainerView from '../ContainerView.svelte';
import '../../../src/test/setup';

describe('ContainerView Component', () => {
    it('renders correctly', () => {
        const { container } = render(ContainerView, {
            props: {
                default: 'Test Content'
            }
        });
        
        const containerElement = container.querySelector('.container');
        expect(containerElement).toBeTruthy();
    });

    it('applies correct classes', () => {
        const { container } = render(ContainerView);
        const containerElement = container.querySelector('.container');
        
        expect(containerElement).toBeTruthy();
        expect(containerElement?.classList.contains('container')).toBe(true);
    });
});
