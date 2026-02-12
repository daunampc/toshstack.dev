import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEntity } from './entities/profile.entity';
import { Repository } from 'typeorm';
import { UpdateProfileInput } from './types/profile.types';
import { UploadService } from '../upload/upload.service';
import { BadRequestAppException } from '@/exceptions/http.exception';
import { ApiConfigService } from '@/shareds/services/api-config.service';
import { CountryEntity } from '../countries/entities/country.entity';
import { CountriesService } from '../countries/countries.service';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly profileRepo: Repository<ProfileEntity>,
    private readonly uploadService: UploadService,
    private readonly configService: ApiConfigService,
    private readonly countriesService: CountriesService,
  ) {}
  async updateProfile(input: UpdateProfileInput) {
    let country: CountryEntity | null = null;
    if (input.dto.country_code) {
      country = await this.countriesService.findCountry(input.dto.country_code);
    }
    return await this.profileRepo.upsert(
      {
        user: {
          id: input.user_id,
        },
        about_me: JSON.stringify(input.dto.about_me),
        country,
        ...input.dto,
      },
      {
        conflictPaths: {
          user: true,
        },
      },
    );
  }
  async uploadAvatar(file: Express.Multer.File, user_id: string) {
    const isUpload = await this.uploadService.uploadImage(file);
    if (!isUpload) {
      throw new BadRequestAppException('FILE_UNKNOWN', 'File not working');
    }
    const baseUrl = this.configService.serverConfig.app_url;
    const urlAvatar = `${baseUrl}${isUpload}`;
    const result = await this.profileRepo.update(
      { user: { id: user_id } },
      { avatar_url: urlAvatar },
    );
    if (!result.affected || result.affected !== 1) {
      throw new BadRequestAppException(
        'UPLOAD_WORKING',
        'Avatar upload working',
      );
    }
    return isUpload;
  }

  async uploadBanner(file: Express.Multer.File, user_id: string) {
    const isUpload = await this.uploadService.uploadImage(file);
    if (!isUpload)
      throw new BadRequestAppException('FILE_UNKNOWN', 'File not working');
    const baseUrl = this.configService.serverConfig.app_url;
    const urlBanner = `${baseUrl}${isUpload}`;
    const result = await this.profileRepo.update(
      { user: { id: user_id } },
      {
        banner_url: urlBanner,
      },
    );
    if (!result.affected || result.affected !== 1) {
      throw new BadRequestAppException(
        'UPLOAD_WORKING',
        'Banner upload working',
      );
    }
    return isUpload;
  }
}
