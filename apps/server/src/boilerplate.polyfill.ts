import _ from 'lodash';
import { ObjectLiteral, SelectQueryBuilder } from 'typeorm';

import { PageOptionsDto } from './common/dto/page-options.dto';
import { PageMetaDto } from './common/dto/page-meta.dto';
import { AbstractEntity } from './common/abstract.entity';
import { KeyOfType } from './types';
import { AbstractDto } from './common/dto/abstract.dto';
import { PageDto } from './common/dto/page.dto';

declare global {
  interface Array<T> {
    toDtos<Dto extends AbstractDto>(this: T[], options?: unknown): Dto[];
    toPageDto<Dto extends AbstractDto>(
      this: T[],
      pageMetaDto: PageMetaDto,
      options?: unknown,
    ): PageDto<Dto>;
  }
}
declare module 'typeorm' {
  interface SelectQueryBuilder<Entity> {
    pagination<T extends ObjectLiteral>(
      this: SelectQueryBuilder<Entity>,
      pageOptionsDto: PageOptionsDto,
      options?: Partial<{ takeAll: boolean; skipCount: boolean }>,
    ): Promise<{
      entities: T[];
      raw: T[];
      meta: PageMetaDto;
    }>;
    leftJoinAndSelect<AliasEntity extends AbstractEntity, A extends string>(
      this: SelectQueryBuilder<Entity>,
      property: `${A}.${Exclude<
        KeyOfType<AliasEntity, AbstractEntity>,
        symbol
      >}`,
      alias: string,
      condition?: string,
      parameters?: ObjectLiteral,
    ): this;
  }
}

SelectQueryBuilder.prototype.pagination = async function <
  T extends ObjectLiteral,
>(
  pageOptionsDto: PageOptionsDto,
  options?: Partial<{ skipCount: boolean; takeAll: boolean }>,
) {
  const qb = this as SelectQueryBuilder<T>;
  if (!options?.takeAll) {
    qb.skip(pageOptionsDto.skip).take(pageOptionsDto.limit);
  }

  const countQb = this.clone();

  const { entities, raw } = await qb.getRawAndEntities<T>();

  let total = -1;

  if (!options?.skipCount) {
    total = await countQb.getCount();
  }

  const meta = new PageMetaDto({
    total,
    pageOptionsDto,
  });
  return {
    entities,
    raw,
    meta,
  };
};
Array.prototype.toDtos = function <
  Entity extends AbstractEntity<Dto>,
  Dto extends AbstractDto,
>(options?: unknown): Dto[] {
  return _.compact(
    _.map<Entity, Dto>(this as Entity[], (item) =>
      item.toDto(options as never),
    ),
  );
};
