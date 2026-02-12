import { Controller, Get } from '@nestjs/common';
import { CountriesService } from '../countries.service';

@Controller('countries')
export class CountriesPublicController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  async getCountries() {
    const result = await this.countriesService.findAll();
    return {
      countries: result,
    };
  }
}
