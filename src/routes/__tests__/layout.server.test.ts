import { describe, it, expect, vi, beforeEach } from 'vitest';
import { load } from '../+layout.server';
import client from '../../sanityClient';

// Mock the Sanity client
vi.mock('../../sanityClient', () => ({
    default: {
        fetch: vi.fn()
    }
}));

describe('Layout Server Load Function', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('fetches and processes all content types', async () => {
        const mockItems = [
            { 
                _id: '1', 
                title: 'Test 1', 
                thumbnail: { 
                    asset: { 
                        _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg'
                    } 
                } 
            },
            { _id: '2', title: 'Test 2' }
        ];

        // Mock the fetch calls for each content type
        client.fetch.mockImplementation((query) => {
            if (query.includes('"video"')) return [...mockItems];
            if (query.includes('"audio"')) return [...mockItems];
            if (query.includes('"live"')) return [...mockItems];
            return [];
        });

        const result = await load();

        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty('video');
        expect(result.body).toHaveProperty('audio');
        expect(result.body).toHaveProperty('live');
        expect(client.fetch).toHaveBeenCalledTimes(3);
    });

    it('handles fetch errors gracefully', async () => {
        client.fetch.mockRejectedValue(new Error('Fetch failed'));

        const result = await load();

        expect(result.status).toBe(200); // We return 200 with empty arrays on error
        expect(result.body).toEqual({ video: [], audio: [], live: [] });
    });

    it('processes items with missing thumbnails correctly', async () => {
        const mockItems = [
            { _id: '1', title: 'Test 1' }, // No thumbnail
            { _id: '2', title: 'Test 2', thumbnail: { title: 'test' } } // Invalid thumbnail (no asset)
        ];

        client.fetch.mockResolvedValue(mockItems);

        const result = await load();

        expect(result.status).toBe(200);
        expect(result.body.video).toHaveLength(2);
        // First item should not have a thumbnail property
        expect(result.body.video[0]).not.toHaveProperty('thumbnail');
        // Second item's thumbnail should be deleted because it has no asset
        expect(result.body.video[1]).not.toHaveProperty('thumbnail');
    });
});
