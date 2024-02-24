import { expect, test } from 'vitest'

test('sum two numbers', () => {
  expect(1 + 3).toEqual(4)
})

// test('saveUserToDataBase function saves user to the database', () => {
//     // Defina um objeto de usuário para ser salvo
//     const user = {
//       name: 'Lucas',
//       age: 21
//     };

//       // Chame a função e armazene o resultado
//     const savedUser = saveUserToDataBase(user);

//     // Verifique se o usuário retornado é o mesmo que o usuário original
//     expect(savedUser).toEqual(user);
// })
