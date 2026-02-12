import { runSeeds } from './databases';
import { AppDataSource } from './databases/data-source';

async function bootstrap() {
  await AppDataSource.initialize();
  await runSeeds(AppDataSource);
  await AppDataSource.destroy();
}

bootstrap();
