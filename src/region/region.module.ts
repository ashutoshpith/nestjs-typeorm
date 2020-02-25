import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionResolver } from './region.resolver';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Region } from './type/region.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Region])
  ],
  providers: [RegionService, RegionResolver]
})
export class RegionModule {}
