import { NowRequest, NowResponse } from '@vercel/node'

export default (request: NowRequest, response: NowResponse) => { 
    response.json({
      body: request.body,
      query: request.query,
      cookies: request.cookies,
    })
  }