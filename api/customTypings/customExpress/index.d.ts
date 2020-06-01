// use declaration merging to type session onto express request
declare global {
  namespace Express {
    interface Request {
      session?: {
        user: {
          roles: ['']
        }
      }
  }
}
