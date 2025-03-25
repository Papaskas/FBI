import { RegistryKey } from '@os/domain/entities/RegistryKey';
import { RegistryManager } from '@os/domain/entities/RegistryManager';

class RegeditImpl<T> implements RegistryManager<T> {
  private readonly dbName: string;

  private db: IDBDatabase | null = null;

  storeName: string;

  key: RegistryKey<T>;

  /**
   * @param namespace Database name (scope for the data)
   * @param storeName Object store name (like a table)
   * @param key Key configuration for storing data
   */
  constructor(namespace: string, storeName: string, key: RegistryKey<T>) {
    this.storeName = storeName;
    this.key = key;
    this.dbName = `regedit/${namespace}`;
  }

  private async initDB() {
    return new Promise<void>((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onerror = () => {
        console.error('IndexedDB error:', request.error);
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName);
        }
      };
    });
  }

  private async ensureDB(): Promise<IDBDatabase> {
    if (!this.db) {
      await this.initDB();
    }
    return this.db as IDBDatabase;
  }

  async update(value: T): Promise<void> {
    const db = await this.ensureDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.put(value, this.key.key);

      request.onerror = () => {
        reject(request.error);
      };

      transaction.oncomplete = () => {
        resolve();
      };
    });
  }

  async clear(): Promise<void> {
    const db = await this.ensureDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.delete(this.key.key);

      request.onerror = () => {
        reject(request.error);
      };

      transaction.oncomplete = () => {
        resolve();
      };
    });
  }

  async get(): Promise<T | undefined> {
    const db = await this.ensureDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.get(this.key.key);

      request.onerror = () => {
        reject(request.error);
      };

      request.onsuccess = () => {
        resolve(request.result || this.key.defaultValue);
      };
    });
  }

  public namespace: string;
}
