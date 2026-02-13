import { DateField } from '@server/decorators/field.decorators';
import { AbstractEntity } from '../abstract.entity';
export class AbstractDto {
  constructor(entity: AbstractEntity, options?: { excludeFields?: boolean }) {}
}
