import { Module, NestModule, MiddlewareConsumer, RequestMethod, Inject } from '@nestjs/common';
import { ProxyService } from './proxy.service';

@Module({
  providers: [ProxyService],
  exports: [ProxyService],
})
export class ProxyModule implements NestModule {
  constructor(private readonly proxyService: ProxyService) {}

  configure(consumer: MiddlewareConsumer) {
    // Apply proxy middleware to all routes
    consumer
      .apply((req, res, next) => {
        return this.proxyService.handleRequest(req, res);
      })
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
