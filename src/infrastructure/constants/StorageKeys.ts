import { StorageKey } from '@entities/StorageKey';

export const storageKeys = {
  token: {
    namespace: 'system',
    key: 'token',
  } as StorageKey,

  pin_code: {
    namespace: 'system',
    key: 'pin_code',
  } as StorageKey,
} as const;
