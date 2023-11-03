import { rest, delay } from 'msw';

export const handlers = [
  rest.get('/projects', async (req, res, ctx) => {
    await delay(1000);
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: 'Project-1',
          description: 'Project of Customer-1',
          customer: 'Customer-1',
        },
        {
          id: 2,
          name: 'Project-2',
          description: 'Project of Customer-2',
          customer: 'Customer-2',
        },
        {
          id: 3,
          name: 'Project-3',
          description: 'Project of Customer-1',
          customer: 'Customer-1',
        },
        {
          id: 4,
          name: 'Project-4',
          description: 'Project of Customer-2',
          customer: 'Customer-2',
        },
        {
          id: 5,
          name: 'Project-5',
          description: 'Project of Customer-2',
          customer: 'Customer-2',
        },
      ])
    );
  }),

  rest.get('/data', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        projects: [
          {
            id: 1,
            name: 'Project-1',
            description: 'description of project1',
            dt: 12345,
            profile: {
              id: 1,
              name: 'A-1',
              parts: [
                {
                  id: 1,
                  name: 'P/12',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 0.0,
                      y: 2.4,
                    },
                    {
                      x: 54.7,
                      y: 2.4,
                    },
                  ],
                  holes: [
                    {
                      name: 'U011-1',
                      position: { x: 27.5, y: 2.4 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 2,
                  name: 'C/3',
                  width: 200,
                  thickness: 2.0,
                  length: 89.07,
                  selected: false,
                  coords: [
                    {
                      x: 1.27,
                      y: 6.54,
                    },
                    {
                      x: 53.43,
                      y: 78.74,
                    },
                  ],
                  holes: [
                    {
                      name: 'U012-1',
                      position: { x: 27.35, y: 42.64 },
                      radius: 5,
                    },
                  ],
                },
                {
                  id: 3,
                  name: 'Y/28',
                  width: 200,
                  thickness: 2.0,
                  length: 54.18,
                  selected: false,
                  coords: [
                    {
                      x: 2.6,
                      y: 83.04,
                    },
                    {
                      x: 54.44,
                      y: 83.04,
                    },
                  ],
                  holes: [
                    {
                      name: 'U013-1',
                      position: { x: 15.5, y: 83.04 },
                      radius: 4,
                    },
                    {
                      name: 'U013-2',
                      position: { x: 32.5, y: 83.04 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 4,
                  name: 'C/4',
                  width: 200,
                  thickness: 2.0,
                  length: 91.11,
                  selected: false,
                  coords: [
                    {
                      x: 1.3,
                      y: 162.06,
                    },
                    {
                      x: 53.4,
                      y: 87.32,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 27.35, y: 124.69 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 5,
                  name: 'Y/28',
                  width: 200,
                  thickness: 2.0,
                  length: 54.18,
                  selected: false,
                  coords: [
                    {
                      x: 0.26,
                      y: 166.34,
                    },
                    {
                      x: 54.44,
                      y: 166.34,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 25.5, y: 166.34 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 6,
                  name: 'C/3',
                  width: 200,
                  thickness: 2.0,
                  length: 89.15,
                  selected: false,
                  coords: [
                    {
                      x: 1.27,
                      y: 170.64,
                    },
                    {
                      x: 53.43,
                      y: 242.94,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 27.35, y: 206.79 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 7,
                  name: 'Y/24',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 0.0,
                      y: 247.24,
                    },
                    {
                      x: 54.7,
                      y: 247.24,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 18.6, y: 247.24 },
                      radius: 4,
                    },
                  ],
                },
              ],
            },
            material: {
              coilNumber: 1,
              thickness: 1.0,
              stripeWidth: 200,
            },
          },
          {
            id: 2,
            name: 'Project-2',
            description: 'description of project2',
            dt: 12345,
            profile: {
              id: 1,
              name: 'A-1',
              parts: [
                {
                  id: 1,
                  name: 'test-1/1',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 0.0,
                      y: 2.4,
                    },
                    {
                      x: 54.7,
                      y: 2.4,
                    },
                  ],
                  holes: [
                    {
                      name: 'U011-1',
                      position: { x: 27.5, y: 2.4 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 2,
                  name: 'test-1/2',
                  width: 200,
                  thickness: 2.0,
                  length: 89.07,
                  selected: false,
                  coords: [
                    {
                      x: 1.27,
                      y: 6.54,
                    },
                    {
                      x: 53.43,
                      y: 78.74,
                    },
                  ],
                  holes: [
                    {
                      name: 'U012-1',
                      position: { x: 27.35, y: 42.64 },
                      radius: 5,
                    },
                  ],
                },
                {
                  id: 3,
                  name: 'test-1/3',
                  width: 200,
                  thickness: 2.0,
                  length: 54.18,
                  selected: false,
                  coords: [
                    {
                      x: 2.6,
                      y: 83.04,
                    },
                    {
                      x: 54.44,
                      y: 83.04,
                    },
                  ],
                  holes: [
                    {
                      name: 'U013-1',
                      position: { x: 15.5, y: 83.04 },
                      radius: 4,
                    },
                    {
                      name: 'U013-2',
                      position: { x: 32.5, y: 83.04 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 4,
                  name: 'test-1/4',
                  width: 200,
                  thickness: 2.0,
                  length: 91.11,
                  selected: false,
                  coords: [
                    {
                      x: 1.3,
                      y: 162.06,
                    },
                    {
                      x: 53.4,
                      y: 87.32,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 27.35, y: 124.69 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 5,
                  name: 'test-1/5',
                  width: 200,
                  thickness: 2.0,
                  length: 54.18,
                  selected: false,
                  coords: [
                    {
                      x: 0.26,
                      y: 166.34,
                    },
                    {
                      x: 54.44,
                      y: 166.34,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 25.5, y: 166.34 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 6,
                  name: 'test-1/6',
                  width: 200,
                  thickness: 2.0,
                  length: 89.15,
                  selected: false,
                  coords: [
                    {
                      x: 1.27,
                      y: 170.64,
                    },
                    {
                      x: 53.43,
                      y: 242.94,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 27.35, y: 206.79 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 7,
                  name: 'test-1/7',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 0.0,
                      y: 247.24,
                    },
                    {
                      x: 54.7,
                      y: 247.24,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 18.6, y: 247.24 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 8,
                  name: 'test-1/8',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 54.7,
                      y: 250.24,
                    },
                    {
                      x: 1.27,
                      y: 319.24,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 18.6, y: 247.24 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 9,
                  name: 'test-1/9',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 0.0,
                      y: 321.24,
                    },
                    {
                      x: 54.7,
                      y: 321.24,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 18.6, y: 247.24 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 10,
                  name: 'test-1/10',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 0.0,
                      y: 325.24,
                    },
                    {
                      x: 54.7,
                      y: 397.24,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 18.6, y: 247.24 },
                      radius: 4,
                    },
                  ],
                },
              ],
            },
            material: {
              coilNumber: 1,
              thickness: 1.0,
              stripeWidth: 200,
            },
          },
          {
            id: 3,
            name: 'Project-3',
            description: 'description of project3',
            dt: 12345,
            profile: {
              id: 1,
              name: 'A-1',
              parts: [
                {
                  id: 1,
                  name: 'test-2/1',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 0.0,
                      y: 2.4,
                    },
                    {
                      x: 54.7,
                      y: 2.4,
                    },
                  ],
                  holes: [
                    {
                      name: 'U011-1',
                      position: { x: 27.5, y: 2.4 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 2,
                  name: 'test-2/2',
                  width: 200,
                  thickness: 2.0,
                  length: 89.07,
                  selected: false,
                  coords: [
                    {
                      x: 1.27,
                      y: 6.54,
                    },
                    {
                      x: 53.43,
                      y: 78.74,
                    },
                  ],
                  holes: [
                    {
                      name: 'U012-1',
                      position: { x: 27.35, y: 42.64 },
                      radius: 5,
                    },
                  ],
                },
                {
                  id: 3,
                  name: 'test-2/3',
                  width: 200,
                  thickness: 2.0,
                  length: 54.18,
                  selected: false,
                  coords: [
                    {
                      x: 2.6,
                      y: 83.04,
                    },
                    {
                      x: 54.44,
                      y: 83.04,
                    },
                  ],
                  holes: [
                    {
                      name: 'U013-1',
                      position: { x: 15.5, y: 83.04 },
                      radius: 4,
                    },
                    {
                      name: 'U013-2',
                      position: { x: 32.5, y: 83.04 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 4,
                  name: 'test-2/4',
                  width: 200,
                  thickness: 2.0,
                  length: 91.11,
                  selected: false,
                  coords: [
                    {
                      x: 1.3,
                      y: 162.06,
                    },
                    {
                      x: 53.4,
                      y: 87.32,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 27.35, y: 124.69 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 5,
                  name: 'test-2/5',
                  width: 200,
                  thickness: 2.0,
                  length: 54.18,
                  selected: false,
                  coords: [
                    {
                      x: 0.26,
                      y: 166.34,
                    },
                    {
                      x: 54.44,
                      y: 166.34,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 25.5, y: 166.34 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 6,
                  name: 'test-2/6',
                  width: 200,
                  thickness: 2.0,
                  length: 89.15,
                  selected: false,
                  coords: [
                    {
                      x: 1.27,
                      y: 170.64,
                    },
                    {
                      x: 53.43,
                      y: 242.94,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 27.35, y: 206.79 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 7,
                  name: 'test-2/7',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 0.0,
                      y: 247.24,
                    },
                    {
                      x: 54.7,
                      y: 247.24,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 18.6, y: 247.24 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 8,
                  name: 'test-2/8',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 54.7,
                      y: 250.24,
                    },
                    {
                      x: 1.27,
                      y: 319.24,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 18.6, y: 247.24 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 9,
                  name: 'test-2/9',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 0.0,
                      y: 321.24,
                    },
                    {
                      x: 54.7,
                      y: 321.24,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 18.6, y: 247.24 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 10,
                  name: 'test-2/10',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 0.0,
                      y: 325.24,
                    },
                    {
                      x: 54.7,
                      y: 397.24,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 18.6, y: 247.24 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 11,
                  name: 'test-2/11',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 0.0,
                      y: 400.24,
                    },
                    {
                      x: 54.7,
                      y: 400.24,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 18.6, y: 247.24 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 12,
                  name: 'test-2/12',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 0.0,
                      y: 405.24,
                    },
                    {
                      x: 54.7,
                      y: 475.24,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 18.6, y: 247.24 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 13,
                  name: 'test-2/13',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 0.0,
                      y: 480.24,
                    },
                    {
                      x: 54.7,
                      y: 480.24,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 18.6, y: 247.24 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 14,
                  name: 'test-2/14',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 54.7,
                      y: 485.24,
                    },
                    {
                      x: 0.0,
                      y: 555.24,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 18.6, y: 247.24 },
                      radius: 4,
                    },
                  ],
                },
              ],
            },
            material: {
              coilNumber: 1,
              thickness: 1.0,
              stripeWidth: 200,
            },
          },
          {
            id: 4,
            name: 'Project-4',
            description: 'description of project4',
            dt: 12345,
            profile: {
              id: 1,
              name: 'A-1',
              parts: [
                {
                  id: 1,
                  name: 'test-3/1',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 0.0,
                      y: 2.4,
                    },
                    {
                      x: 54.7,
                      y: 2.4,
                    },
                  ],
                  holes: [
                    {
                      name: 'U011-1',
                      position: { x: 27.5, y: 2.4 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 2,
                  name: 'test-3/2',
                  width: 200,
                  thickness: 2.0,
                  length: 89.07,
                  selected: false,
                  coords: [
                    {
                      x: 1.27,
                      y: 6.54,
                    },
                    {
                      x: 53.43,
                      y: 78.74,
                    },
                  ],
                  holes: [
                    {
                      name: 'U012-1',
                      position: { x: 27.35, y: 42.64 },
                      radius: 5,
                    },
                  ],
                },
                {
                  id: 3,
                  name: 'test-3/3',
                  width: 200,
                  thickness: 2.0,
                  length: 54.18,
                  selected: false,
                  coords: [
                    {
                      x: 2.6,
                      y: 83.04,
                    },
                    {
                      x: 54.44,
                      y: 83.04,
                    },
                  ],
                  holes: [
                    {
                      name: 'U013-1',
                      position: { x: 15.5, y: 83.04 },
                      radius: 4,
                    },
                    {
                      name: 'U013-2',
                      position: { x: 32.5, y: 83.04 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 4,
                  name: 'test-3/4',
                  width: 200,
                  thickness: 2.0,
                  length: 91.11,
                  selected: false,
                  coords: [
                    {
                      x: 1.3,
                      y: 162.06,
                    },
                    {
                      x: 53.4,
                      y: 87.32,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 27.35, y: 124.69 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 5,
                  name: 'test-3/5',
                  width: 200,
                  thickness: 2.0,
                  length: 54.18,
                  selected: false,
                  coords: [
                    {
                      x: 0.26,
                      y: 166.34,
                    },
                    {
                      x: 54.44,
                      y: 166.34,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 25.5, y: 166.34 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 6,
                  name: 'test-3/6',
                  width: 200,
                  thickness: 2.0,
                  length: 89.15,
                  selected: false,
                  coords: [
                    {
                      x: 1.27,
                      y: 170.64,
                    },
                    {
                      x: 53.43,
                      y: 242.94,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 27.35, y: 206.79 },
                      radius: 4,
                    },
                  ],
                },
                {
                  id: 7,
                  name: 'test-3/7',
                  width: 200,
                  thickness: 2.0,
                  length: 54.7,
                  selected: false,
                  coords: [
                    {
                      x: 0.0,
                      y: 247.24,
                    },
                    {
                      x: 54.7,
                      y: 247.24,
                    },
                  ],
                  holes: [
                    {
                      name: 'U014-1',
                      position: { x: 18.6, y: 247.24 },
                      radius: 4,
                    },
                  ],
                },
              ],
            },

            material: {
              coilNumber: 1,
              thickness: 1.0,
              stripeWidth: 200,
            },
          },
        ],
      })
    );
  }),

  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true');

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated');
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        })
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      })
    );
  }),
];
