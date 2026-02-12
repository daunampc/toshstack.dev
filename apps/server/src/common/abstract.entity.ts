import { Constructor } from '@/types';

export abstract class AbstractEntity<DTO = never, O = never> {
  toDto(options?: O): DTO {
    const ctor = this.constructor as {
      dtoClass?: Constructor<DTO>;
    };

    if (!ctor.dtoClass) {
      throw new Error(`Missing @UseDto on ${this.constructor.name}`);
    }

    return new ctor.dtoClass(this, options);
  }
}
