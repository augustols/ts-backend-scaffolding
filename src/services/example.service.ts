import { ServiceInterface } from "../interfaces/service.interface";
import { ExampleModel } from "../models/example.model";
import { injectable } from "inversify";
import "reflect-metadata";
import { DBConfig } from "../configs/db.config";

@injectable()
export class ExampleService implements ServiceInterface<ExampleModel> {
  private collectionName = 'Example';

  get(id: string): Promise<ExampleModel> {
    return new Promise((resolve, reject) => {
      const db = DBConfig.getInstance().getOpenConnection();
      const collection = db.collection(this.collectionName);

      collection.findOne({ id })
        .then((result: ExampleModel) => {
          resolve(result);

        })
        .catch(err => reject(err));
    });
  }

  getAll(): Promise<ExampleModel[]> {
    return new Promise((resolve, reject) => {
      const db = DBConfig.getInstance().getOpenConnection();
      const collection = db.collection(this.collectionName);

      collection.find({}).toArray((err, result: ExampleModel[]) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      });
    });
  }

  save(model: ExampleModel): Promise<void> {
    return new Promise((resolve, reject) => {
      const db = DBConfig.getInstance().getOpenConnection();
      const collection = db.collection(this.collectionName);

      collection.insertOne(model, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();

      });
    });
  }

  update(model: ExampleModel): Promise<void> {
    return new Promise((resolve, reject) => {
      const db = DBConfig.getInstance().getOpenConnection();
      const collection = db.collection(this.collectionName);

      collection.replaceOne({ id: model.id }, model, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();

      });
    });
  }

  delete(model: ExampleModel): Promise<void> {
    return new Promise((resolve, reject) => {
      const db = DBConfig.getInstance().getOpenConnection();
      const collection = db.collection(this.collectionName);

      collection.deleteOne({ id: model.id }, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();

      });
    });
  }
}
