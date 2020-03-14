export interface ServiceInterface<T> {
  get(id: string): Promise<T>;
  getAll(): Promise<T[]>;
  save(model: T): Promise<void>;
  update(model: T): Promise<void>;
  delete(model: T): Promise<void>;
}