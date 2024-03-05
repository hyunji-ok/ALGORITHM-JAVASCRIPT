const solution = require('./solution')

describe('폰켓몬 테스트', () => {
    test('case1', () => {
        expect(solution([3,1,2,3])).toEqual(2);
    });

    test('case2', () => {
        expect(solution([3,3,3,2,2,4])).toEqual(3);
    });

    test('case3', () => {
        expect(solution([3,3,3,2,2,2])).toEqual(2);
    });
});
