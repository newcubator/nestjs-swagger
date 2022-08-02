import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { SomeDto } from './dto/some.dto';

@Controller('some')
@ApiTags('some')
export class SomeController {

    @ApiOperation({ description: 'Come get some' })
    @ApiParam({ name: 'id', format: 'uuid', type: 'string' })
    @Get(':id')
    getSome(
        @Query('filter') filter: string,
        @Param('id') someId: string
    ): string {
        return someId;
    }

    @ApiOperation({ description: 'Come delete some' })
    @ApiParam({ name: 'id', format: 'uuid', type: 'string' })
    @Delete(':id')
    deleteSome(
        @Param('id') someId: string
    ): string {
        return someId;
    }

    @ApiOperation({ description: 'Come post some' })
    @Post()
    postSome(
        @Body() someBody: SomeDto
    ): SomeDto {
        return someBody;
    }

    @ApiOperation({ description: 'Come put some' })
    @Put()
    putSome(
        @Body() someBody: SomeDto
    ): SomeDto {
        return someBody;
    }
}
