import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ClubsController } from 'src/clubs/clubs.controller';
import { ClubMicroservice } from 'src/core/microservices';
import { CustomersController } from './customers.controller';

@Module({
    imports:[ClientsModule.register([ClubMicroservice])],
    controllers:[CustomersController]
})
export class CustomersModule{}
