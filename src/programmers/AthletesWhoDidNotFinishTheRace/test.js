const solution = require('./solution')

describe('완주하지 못한 선수 테스트', () => {
    test('case1', () => {
        expect(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])).toEqual('leo');
    });

    test('case2', () => {
        expect(solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola'])).toEqual('vinko');
    });

    test('case3', () => {
        expect(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])).toEqual('mislav');
    });
});
