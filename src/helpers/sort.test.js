import sort from './sort';

describe('sort helper', () => {
    const data = [
        { Title: 'a', Year: 1 },
        { Title: 'c', Year: 3 },
        { Title: 'b', Year: 2 }
    ];

    it('sorts correctly by TITLE', () => {
        const expected = [
            { Title: 'a', Year: 1 },
            { Title: 'b', Year: 2 },
            { Title: 'c', Year: 3 }
        ];
        expect(sort(data, 'TITLE')).toEqual(expected);
    })

    it('sorts correctly by default', () => {
        const expected = [
            { Title: 'a', Year: 1 },
            { Title: 'b', Year: 2 },
            { Title: 'c', Year: 3 }
        ];
        expect(sort(data)).toEqual(expected);
    })

    it('sorts correctly by DATE', () => {
        const test = [
            { Title: 'a', Year: 1 },
            { Title: 'z', Year: 3 },
            { Title: 'x', Year: 2 }
        ];
        const expected = [
            { Title: 'a', Year: 1 },
            { Title: 'x', Year: 2 },
            { Title: 'z', Year: 3 }
        ];
        expect(sort(test), 'DATE').toEqual(expected);
    })
})