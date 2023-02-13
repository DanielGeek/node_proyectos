import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Restaurant } from './schemas/restaurant.schema';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: mongoose.Model<Restaurant>,
  ) {}

  // Get all Restaurants => GET /restaurants
  async findAll(): Promise<Restaurant[]> {
    const restaurants = await this.restaurantModel.find();
    return restaurants;
  }

  // Create new Restaurant => POST /restaurants
  async create(restaurant: Restaurant): Promise<Restaurant> {
    const restaurantCreated = await this.restaurantModel.create(restaurant);
    return restaurantCreated;
  }
}
