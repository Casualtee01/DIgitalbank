export class RootController {
  async healthCheck(_, res) {
    res.send("Application is running");
  }
}
