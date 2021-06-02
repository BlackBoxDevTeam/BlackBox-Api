import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClubMicroservice } from 'src/core/microservices';

@Controller('purchase-history')
export class PurchaseHistoryController {
    constructor(
        @Inject(ClubMicroservice.name)private club : ClientProxy
    ){}
    @Post()
    insert(@Body() dto : any){
        return this.club.send('purchase-history/add',dto).toPromise();
    }
    @Post('filter')
    filter(@Body() dto : any){
        return this.club.send('purchase-history/filter',dto).toPromise();
    }
}
