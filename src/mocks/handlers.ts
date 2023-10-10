// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.get('https://api.postcodes.io/postcodes/:postcode/validate', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        result: req.params.postcode === "VALID POSTCODE" 
      }),
    )
  })
]