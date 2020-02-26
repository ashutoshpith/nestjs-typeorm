import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryResolver } from './country.resolver';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Country } from 'src/country/type/country.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Country])
  ],
  providers: [CountryService, CountryResolver]
})
export class CountryModule {}
