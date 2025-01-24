import { describe, it, expect, vi } from 'vitest';
import client from '../../sanityClient';

describe('Sanity Client', () => {
    it('is configured correctly', () => {
        expect(client.config()).toMatchObject({
            projectId: 'tun1nqnk',
            dataset: 'production',
            apiVersion: '2022-08-21',
            useCdn: true,
            perspective: 'published',
            stega: false
        });
    });
});
