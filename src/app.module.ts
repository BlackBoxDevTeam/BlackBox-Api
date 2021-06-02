import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ClubsModule } from './clubs/clubs.module';
import { CustomersModule } from './customers/customers.module';
import { PurchaseHistoryModule } from './purchase-History/purchase-history.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
   ConfigModule,
   CustomersModule,
   PurchaseHistoryModule,
   ClubsModule
  ],
})
export class AppModule {}
