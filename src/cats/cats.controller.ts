import { Controller, Get, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return `This is the list of all the cats: `;
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    return `This cat id is: ${params.id}`;
  }
}
