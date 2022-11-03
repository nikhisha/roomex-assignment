import { validateEmail } from "../util/validation";

const supertest = require('supertest');

const app = supertest("https://jsonplaceholder.typicode.com");

const COMMENTS_URL = "/posts/1/comments"
const POSTS_URL = "/posts"

describe('get comments', function() {
    it('validate email', async function() {
      const response = await app.get(COMMENTS_URL).set('Accept', 'application/json').retry(5).timeout(10000)
      expect(response.headers["content-type"]).toMatch(/json/);
      expect(response.status).toEqual(200);
      response.body.map(comment => {
          expect(validateEmail(comment.email)).toEqual(true)
      })
    });

    it('create post', async function() {
        const response = await app.post(POSTS_URL)
            .set('Accept', 'application/json')
            .send({title: "Heey", body: "heeyy", userId: "1"})
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(201);
    });
});
