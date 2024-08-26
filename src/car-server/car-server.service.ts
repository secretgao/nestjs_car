import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class CarServerService {
  private readonly rapidApiKey =
    'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vkjsnK4bKzuUzVLzA';

  async fetchCars(filters: any): Promise<any[]> {
    const { manufacturer, year, model, limit, fuel } = filters;

    const headers = {
      'X-RapidAPI-Key': this.rapidApiKey,
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    };

    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      { headers },
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch fuels: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  }
}
