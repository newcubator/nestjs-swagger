import { ApiProperty } from '@nestjs/swagger';

export class SomeDto {
    @ApiProperty({ name: 'id', format: 'uuid', type: 'string' })
    id: string;

    @ApiProperty({ description: 'The name of some', type: 'string' })
    name: string;

    @ApiProperty({ description: 'The email of some', type: 'string' })
    email: string;
}