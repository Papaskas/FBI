import { RegistryManager } from '../../entities/RegistryManager';

class Regedit<T> {
  constructor(private readonly registryManager: RegistryManager<T>) {}

  update(value: T) {
    return this.registryManager.update(value);
  }

  clear(): Promise<void> {
    return this.registryManager.clear();
  }

  get(): Promise<T | undefined> {
    return this.registryManager.get();
  }
}
