import { IsOptional, IsString } from 'class-validator';

export class UpdateCoffeeDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString({ each: true })
  @IsOptional()
  readonly flavors?: string[];
}
