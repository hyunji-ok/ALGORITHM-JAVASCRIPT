const { solution } = require('./solution')

describe('베스트앨범 테스트', () => {
    test('case1', ()=>{
        expect(solution(["classic", "pop", "classic", "classic", "pop"],[500, 600, 150, 800, 2500])).toEqual([4, 1, 3, 0])
    })
})