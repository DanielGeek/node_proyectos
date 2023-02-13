import { Body, Controller, Get, Post } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './schemas/restaurant.schema';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private restaurantsService: RestaurantsService) {}

  @Get()
  async getAllRestaurants(): Promise<Restaurant[]> {
    return this.restaurantsService.findAll();
  }

  @Post()
  async createRestaurant(@Body() restaurant): Promise<Restaurant> {
    return this.restaurantsService.create(restaurant);
  }
}
