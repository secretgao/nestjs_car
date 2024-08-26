// src/manufacturers/manufacturers.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('manufacturers')
export class ManufacturersController {
  @Get()
  async getManufacturers(): Promise<any> {
    return {
      code: 200,
      data: [
        'Acura',
        'Alfa Romeo',
        'Aston Martin',
        'Audi',
        'Bentley',
        'BMW',
        'Buick',
        'Cadillac',
        'Chevrolet',
        'Chrysler',
        'Citroen',
        'Dodge',
        'Ferrari',
        'Fiat',
        'Ford',
        'GMC',
        'Honda',
        'Hyundai',
        'Infiniti',
        'Jaguar',
        'Jeep',
        'Kia',
        'Lamborghini',
        'Land Rover',
        'Lexus',
        'Lincoln',
        'Maserati',
        'Mazda',
        'McLaren',
        'Mercedes-Benz',
        'MINI',
        'Mitsubishi',
        'Nissan',
        'Porsche',
        'Ram',
        'Rolls-Royce',
        'Subaru',
        'Tesla',
        'Toyota',
        'Volkswagen',
        'Volvo',
      ],
    };
  }
}
