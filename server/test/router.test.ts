import assert from 'assert';
import express from 'express';
import request from 'supertest';
import connectDb from '../db';
import errorHandler from '../middlewares/ErrorHandlerMiddleware';
import router from '../routes';
import { ITodo } from '../interfaces';
import Todo from '../models';

process.env.APP_MODE = 'test';

const app = express();
app.use(express.json());
app.use(errorHandler);
app.use('/', router);

before('before', () => {
  return connectDb();
});

after('after', async () => {
  await Todo.deleteMany();
  console.log('test db was cleaned')
});

afterEach('afterEach',  function() {
  const self = this as any;
  console.log(self.currentTest.title)
})

describe('Testing tasks api', () => {
  it('POST /api/addTask/', () => {
    return new Promise(async (resolve, reject) => {
      try {
        const task = { description: 'Test faker' };
        const response = await request(app).post('/api/addTask/').send(task);
        const { body } = response;

        assert.strictEqual(response.status, 200, `Execpted 201`);
        assert.strictEqual(body.description, task.description, `Execpted ${task.description}`);
        assert.strictEqual(body.completed, false, `Execpted false`);
        resolve('body');
      } catch (err: any) {
        reject(err.message);
      }
    });
  });

  it('GET /api/getTasks/', () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await request(app).get('/api/getTasks/');
        const body = response.body as ITodo[];

        assert.strictEqual(response.status, 200, `Execpted 200`);
        assert.strictEqual(body.length, 1, `Execpted ${body.length}`);
        resolve('body');
      } catch (err: any) {
        reject(err.message);
      }
    });
  });
});
