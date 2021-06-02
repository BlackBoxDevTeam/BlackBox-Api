import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ClubMicroservice } from 'src/core/microservices';
import { ClubsController } from './clubs.controller';

@Module({
    imports:[
        ClientsModule.register([ClubMicroservice]),
    ],
    controllers:[ClubsController]
})
export class ClubsModule {}
