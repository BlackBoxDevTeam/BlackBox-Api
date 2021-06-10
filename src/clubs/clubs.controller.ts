import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClubMicroservice } from 'src/core/microservices';

@Controller('clubs')
export class ClubsController {
    constructor(
        @Inject(ClubMicroservice.name) private clubs: ClientProxy
    ){}

    @Post()
    async insert (@Body() q){
        console.log(q)
       return await this.clubs.send('clubs/add',q).toPromise(); 
    }


    @Get('/:id')
    async Get (@Param('id') id : number){
        
       return await this.clubs.send('clubs/get',id).toPromise(); 
    }

    @Put()
    async update (@Body() dto  : any){
       
       return await this.clubs.send('clubs/update',dto).toPromise(); 
    }


    @Delete('/:id')
    async delete (@Param('id') id : number){
       return await this.clubs.send('clubs/delete',id).toPromise(); 
    }

    @Post('tag')
    async tag(@Body() tag){
       return await this.clubs.send('clubs/tag',tag).toPromise();
    }

}
