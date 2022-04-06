'use strict';

const { AnimalShelter } = require('../index');

describe('Testing AnimalShelter class', () => {
  let myAnimalShelter = new AnimalShelter();
  let animal1 = { name: 'Buster', species: 'dog' };
  let animal2 = { name: 'Okayu', species: 'cat' };
  let animal3 = { name: 'Korone', species: 'dog' };

  test('Enqueuing one animal', () => {

    myAnimalShelter.enqueue(animal1);

    expect(myAnimalShelter.front.value).toEqual(animal1);
  });

  test('Enqueuing multiple animals', () => {

    myAnimalShelter.enqueue(animal2);
    myAnimalShelter.enqueue(animal3);

    expect(myAnimalShelter.front.value).toEqual(animal1);
  });

  test('First animal will be dequeued in an optimal case', () => {

    expect(myAnimalShelter.dequeue('dog')).toEqual(animal1);
  });

  test('Dog at the back of the queue can be dequeued', () => {

    expect(myAnimalShelter.dequeue('dog')).toEqual(animal3);
  });

  test('Dequeue will fail if no more of the species are available', () => {

    expect(() => myAnimalShelter.dequeue('dog')).toThrow();
  });

  test('Can dequeue last animal (which is a cat)', () => {

    expect(myAnimalShelter.dequeue('cat')).toEqual(animal2);
  });

  test('Cannot dequeue either cats or dogs because AnimalShelter is empty', () => {

    expect(() => myAnimalShelter.dequeue('dog')).toThrow();
    expect(() => myAnimalShelter.dequeue('cat')).toThrow();
  });
});
