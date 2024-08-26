import { Controller, Get, Query } from '@nestjs/common';
import { CarServerService } from './car-server.service';

@Controller('CarServer')
export class CarServerController {
  constructor(private readonly CarServerService: CarServerService) {}

  @Get()
  async getCar(@Query() query): Promise<any> {
    const {
      manufacturer = '',
      year = 2022,
      model = '',
      limit = 10,
      fuel = '',
    } = query;
    try {
      const fuels = await this.CarServerService.fetchCars({
        manufacturer,
        year,
        model,
        limit,
        fuel, // Assuming 'all' will return all fuel types
      });
      return {
        code: 200,
        data: [
          // The placeholder with an empty value is likely not needed
          ...fuels,
        ],
      };
    } catch (error) {
      console.error(error);
      return {
        code: 500,
        message: 'Error fetching fuels',
      };
    }
  }
}
