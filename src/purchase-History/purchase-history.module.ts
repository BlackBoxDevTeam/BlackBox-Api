import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ClubMicroservice } from 'src/core/microservices';
import { PurchaseHistoryController } from './purchase-history.controller';

@Module({
    imports:[ClientsModule.register([ClubMicroservice])],
    controllers:[PurchaseHistoryController]
})
export class PurchaseHistoryModule {}
