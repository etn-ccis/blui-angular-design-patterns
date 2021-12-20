import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
    const pipe = new FilterPipe();
    const items = [
        {
            title: 'Item 01',
            subtitle: 'Registered 7 days ago',
            value: 8,
        },
        {
            title: 'Item 02',
            subtitle: 'Registered 15 days ago',
            value: 15,
        },
        {
            title: 'Item 03',
            subtitle: 'Registered 30 days ago',
            value: 30,
        },
    ];
    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('filtered data which is registered 8 days ago', () => {
        expect(pipe.transform(items, 7).length).toBe(0);
    });

    it('filtered data which is registered 15 days ago', () => {
        expect(pipe.transform(items, 15).length).toBe(2);
    });

    it('filtered data which is registered 30 days ago', () => {
        expect(pipe.transform(items, 30).length).toBe(3);
    });
});
