import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import Item from '../Item.svelte';
import '../../../src/test/setup';

describe('Item Component', () => {
    const mockItem = {
        title: 'Test Item',
        link: 'https://youtube.com/watch?v=test123',
        thumbnail: 'test-thumbnail.jpg'
    };

    const openSpy = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        // Mock window.open
        Object.defineProperty(window, 'open', {
            writable: true,
            value: openSpy
        });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('renders correctly with all props', () => {
        const { getByText, getByRole } = render(Item, { props: { item: mockItem } });
        
        expect(getByText('Test Item')).toBeTruthy();
        expect(getByRole('button')).toBeTruthy();
    });

    it('handles missing props gracefully', () => {
        const { getByRole } = render(Item, { 
            props: { 
                item: { 
                    title: 'Test Item',
                    link: 'https://example.com'
                } 
            } 
        });
        
        const button = getByRole('button');
        expect(button).toBeTruthy();
    });

    it('generates correct YouTube thumbnail URL', () => {
        const { container } = render(Item, { props: { item: mockItem } });
        const img = container.querySelector('img');
        
        expect(img?.src).toContain('test-thumbnail.jpg');
    });

    it('opens link in new tab when clicked', async () => {
        const { getByRole } = render(Item, { props: { item: mockItem } });
        const button = getByRole('button');
        
        await fireEvent.click(button);
        expect(openSpy).toHaveBeenCalledWith(mockItem.link, '_blank');
    });

    it('handles keyboard navigation', async () => {
        const { getByRole } = render(Item, { props: { item: mockItem } });
        const button = getByRole('button');
        
        await fireEvent.keyDown(button, { key: 'Enter' });
        expect(openSpy).toHaveBeenCalledWith(mockItem.link, '_blank');
    });
});
