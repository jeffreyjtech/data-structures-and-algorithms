'use strict';

const { AnimalShelter } = require('../index');

describe('Testing AnimalShelter class', () => {
  let myAnimalShelter = new AnimalShelter();
  let animal1 = { name: 'Buster', species: 'dog' };
  let animal2 = { name: 'Okayu', species: 'cat' };
  let animal3 = { name: 'Korone', species: 'dog' };

  test('Testing that an animal can be enqueued', () => {

    myAnimalShelter.enqueue(animal1);

    expect(myAnimalShelter.front.value).toEqual(animal1);
  });

  test('Testing enqueue multiple animals', () => {

    myAnimalShelter.enqueue(animal2);
    myAnimalShelter.enqueue(animal3);

    expect(myAnimalShelter.front.value).toEqual(animal1);
  });

  test('Testing dequeue the first animal in an optimal case', () => {

    expect(myAnimalShelter.dequeue('dog')).toEqual(animal1);
  });

  test('Testing that it dequeues the dog behind the cat', () => {

    expect(myAnimalShelter.dequeue('dog')).toEqual(animal3);
  });
});
