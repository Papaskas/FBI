import { Injectable } from '@angular/core';
import { StorageKey } from '../../../domain/entities/StorageKey';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  clear(key: StorageKey) {
    localStorage.removeItem(`${key.namespace}/${key.key}`);
  }

  get(key: StorageKey) {
    return localStorage.getItem(`${key.namespace}/${key.key}`);
  }

  update(key: StorageKey, value: string) {
    localStorage.setItem(`${key.namespace}/${key.key}`, value);
  }
}
