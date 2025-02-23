import { sortHeroes } from '../sortHeroes';

test('должен сортировать героев по здоровью в порядке убывания', () => {
    const heroes = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];

    const sortedHeroes = sortHeroes(heroes);

    expect(sortedHeroes).toEqual([
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ]);
});