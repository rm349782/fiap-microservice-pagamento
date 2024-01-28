import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getQodana(): string {
    return 'Hello Qodana!';
  }
}
