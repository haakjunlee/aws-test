import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('add')
  add(@Query() query): number {
    const a: number = +query.a;
    const b: number = +query.b;

    return this.appService.add(a, b);
  }
}
