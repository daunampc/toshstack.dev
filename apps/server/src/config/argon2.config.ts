import * as argon2 from 'argon2';
export const argon2Config: argon2.Options = {
  memoryCost: 2 ** 16,
  timeCost: 3,
  parallelism: 1,
  type: argon2.argon2id,
};
