import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [RestaurantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
