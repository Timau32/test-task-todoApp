// import mongoose from 'mongoose';
// import chaiModule from 'chai';
// import chaiHttp from 'chai-http';

// import Todo from '../models';
// import app from '..';

// const should = chaiModule.should();

// const chai =  chaiModule.use(chaiHttp);
// //Наш основной блок
// describe('Books', () => {
//   beforeEach((done) => {
//     //Перед каждым тестом чистим базу
//     Todo.deleteMany({}, (err: any) => {
//       done();
//     });
//   });
//   /*
//    * Тест для /GET
//    */
//   describe('/GET book', () => {
//     it('it should GET all the books', (done) => {
//       chai
//         .request.execute(app)
//         .get('/getTasks')
//         .close((err: any, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('array');
//           res.body.length.should.be.eql(0);
//           done();
//         });
//     });
//   });
// });
