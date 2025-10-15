import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { Users } from './users/users.entity';
import { Product } from './product/product.entity';
import { CartProduct } from './cart/cart.entity';
import { LikedProduct } from './liked-product/liked-product.entity';
import { ProductCategory } from './product-category/product-category.entity';
import { Purchase } from './purchase/purchase.entity';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { LikedProductModule } from './liked-product/liked-product.module';
import { PurchaseModule } from './purchase/purchase.module';
import { ConfigModule } from '@nestjs/config'; // ✅ import ConfigModule

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // ✅ loads .env variables
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // ✅ use DATABASE_URL from Render env
      entities: [
        Users,
        ProductCategory,
        Product,
        LikedProduct,
        CartProduct,
        Purchase,
      ],
      synchronize: true,
      ssl: process.env.DATABASE_URL?.includes('supabase.co')
        ? { rejectUnauthorized: false }
        : false, // ✅ needed for Supabase/Render SSL
      logging: true,
    }),
    UsersModule,
    AuthModule,
    ProductModule,
    ProductCategoryModule,
    LikedProductModule,
    CartModule,
    PurchaseModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
