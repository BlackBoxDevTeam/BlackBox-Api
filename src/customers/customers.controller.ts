import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClubMicroservice } from 'src/core/microservices';

@Controller('customers')
export class CustomersController {
    constructor(
        @Inject(ClubMicroservice.name) private customer: ClientProxy
    ) { }

    @Post()
    async add(@Body() q) {
       
        return await this.customer.send('customers/add', q).toPromise();
    }

    @Put()
    async update(@Body() dto : any){
        return await this.customer.send('customers/update',dto).toPromise()
    }

    @Delete('/:id')
    async delete(@Param('id')id : number){
        return await this.customer.send('customers/delete',id).toPromise()
    }

    @Get('/:id')
    async get(@Param('id')id : number){
        return await this.customer.send('customers/get',id).toPromise()
    }

    @Post('filter')
    async filter(@Body() dto : any){
        return await this.customer.send('customers/filter',dto).toPromise();
    }
}

