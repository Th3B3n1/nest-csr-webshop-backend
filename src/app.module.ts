import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { Products } from './entities/products.entity';
import { OrderModule } from './order/order.module';
import { Addresses } from './entities/addresses.entity';
import { Orders } from './entities/orders.entity';
import { CreditCards } from './entities/creditcards.entity';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'webshop',
      entities: [Products, Orders, Addresses, CreditCards],
      synchronize: true,
    }),
    ProductModule,
    OrderModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}