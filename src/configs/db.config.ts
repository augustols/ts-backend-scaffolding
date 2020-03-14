import { MongoClient } from "mongodb";
import * as mongo from 'mongodb';

export class DBConfig {
  private static instance: DBConfig;

  private uri = '<mongo connection uri>'
  private dbName = '<mongo db name>';
  private client: MongoClient
  private dbConnection: mongo.Db;

  private constructor() {
    this.client = new mongo.MongoClient(this.uri, { useNewUrlParser: true });
  }

  static getInstance(): DBConfig {
    if (DBConfig.instance) {
      return DBConfig.instance;
    } else {
      throw new Error();
    }
  }

  static connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      DBConfig.instance = new DBConfig();
      DBConfig.instance.client.connect().then(client => {
        DBConfig.instance.dbConnection = client.db(DBConfig.instance.dbName);
        resolve();
      });
    });
  }

  public getOpenConnection(): mongo.Db {
    return this.dbConnection;
  }
}
