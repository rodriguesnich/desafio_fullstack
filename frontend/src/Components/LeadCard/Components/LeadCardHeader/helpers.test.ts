import { formatCreatedDate, parseFirstNameInitial } from './helpers';

describe('formatCreatedDate', () => {
    it('should format date correctly for AM time', () => {
        const date = new Date(2023, 0, 15, 9, 30); // January 15, 2023 9:30 AM
        expect(formatCreatedDate(date)).toBe('January 15 @ 9:30 AM');
    });

    it('should format date correctly for PM time', () => {
        const date = new Date(2023, 5, 1, 14, 45); // June 1, 2023 2:45 PM
        expect(formatCreatedDate(date)).toBe('June 1 @ 2:45 PM');
    });

    it('should pad minutes with leading zero', () => {
        const date = new Date(2023, 11, 25, 10, 5); // December 25, 2023 10:05 AM
        expect(formatCreatedDate(date)).toBe('December 25 @ 10:05 AM');
    });

    it('should handle midnight (12 AM)', () => {
        const date = new Date(2023, 3, 1, 0, 0); // April 1, 2023 12:00 AM
        expect(formatCreatedDate(date)).toBe('April 1 @ 12:00 AM');
    });

    it('should handle noon (12 PM)', () => {
        const date = new Date(2023, 7, 15, 12, 0); // August 15, 2023 12:00 PM
        expect(formatCreatedDate(date)).toBe('August 15 @ 12:00 PM');
    });
});

describe('parseFirstNameInitial', () => {
    it('should return uppercase first letter of name', () => {
        expect(parseFirstNameInitial('john')).toBe('J');
        expect(parseFirstNameInitial('Mary')).toBe('M');
    });

    it('should handle empty string', () => {
        expect(parseFirstNameInitial('')).toBe('');
    });

    it('should handle undefined', () => {
        expect(parseFirstNameInitial(undefined as unknown as string)).toBe('');
    });

    it('should handle single letter name', () => {
        expect(parseFirstNameInitial('j')).toBe('J');
    });
});