import { Controller, Get } from '@nestjs/common';

@Controller('years-of-production')
export class YearsOfProductionController {
  @Get()
  async getYearsOfProduction(): Promise<any> {
    return {
      code: 200,
      data: [
        { title: 'Year', value: '' },
        { title: '2015', value: '2015' },
        { title: '2016', value: '2016' },
        { title: '2017', value: '2017' },
        { title: '2018', value: '2018' },
        { title: '2019', value: '2019' },
        { title: '2020', value: '2020' },
        { title: '2021', value: '2021' },
        { title: '2022', value: '2022' },
        { title: '2023', value: '2023' },
      ],
    };
  }
}
