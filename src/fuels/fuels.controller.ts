import { Controller, Get } from '@nestjs/common';

@Controller('fuels')
export class FuelsController {
  @Get()
  async getFuels(): Promise<any> {
    return {
      code: 200,
      data: [
        {
          title: 'Fuel',
          value: '',
        },
        {
          title: 'Gas',
          value: 'Gas',
        },
        {
          title: 'Electricity',
          value: 'Electricity',
        },
      ],
    };
  }
}
