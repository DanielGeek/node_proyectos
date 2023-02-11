import { Module } from '@nestjs/common';
import { RestaurantsController } from './restaurants.controller';

@Module({
  controllers: [RestaurantsController],
})
export class RestaurantsModule {}
