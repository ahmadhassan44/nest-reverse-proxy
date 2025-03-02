import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request): any {
    return {
      message: 'Reverse Proxy is working!',
      host: request.headers.host,
      url: request.url,
      timestamp: new Date().toISOString()
    };
  }
}
