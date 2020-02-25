import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CountryModule } from './country/country.module';
import { GraphQLModule } from "@nestjs/graphql";
import { RegionModule } from './region/region.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '34892',
      database: 'crm',
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    CountryModule,
    RegionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
