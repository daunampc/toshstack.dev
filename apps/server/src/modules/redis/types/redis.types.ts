export interface RedisModuleOptions {
  host: string;
  port: number;
  password?: string;
  db?: number;

  keyPrefix?: string;
  enableReadyCheck?: boolean;
  retryStrategy?: (times: number) => number | null;
}
