import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This server is running at AWS. Wow!';
  }

  add(a: number, b: number): number {
    return a + b;
  }
}
