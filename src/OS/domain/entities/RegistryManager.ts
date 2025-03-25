import { RegistryKey } from './RegistryKey';

export interface RegistryManager<T> {
  namespace: string;

  storeName: string;

  key: RegistryKey<T>;

  update(value: T): Promise<void>;

  clear(): Promise<void>;

  get(): Promise<T | undefined>;
}
