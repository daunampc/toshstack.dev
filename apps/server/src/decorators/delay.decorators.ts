import { applyDecorators, SetMetadata } from '@nestjs/common';

export const DELAY_KEY = 'delay';

export const Delay = (ms = 3000) => applyDecorators(SetMetadata(DELAY_KEY, ms));
