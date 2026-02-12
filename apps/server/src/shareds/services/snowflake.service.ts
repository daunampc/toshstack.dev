import { Injectable } from '@nestjs/common';

@Injectable()
export class SnowFlakeService {
  private static readonly EPOCH = 1577836800000;
  private static readonly NODE_ID_BITS = 10n;
  private static readonly SEQUENCE_BITS = 12n;

  private static readonly MAX_NODE_ID =
    (1n << SnowFlakeService.NODE_ID_BITS) - 1n;
  private static readonly MAX_SEQUENCE =
    (1n << SnowFlakeService.SEQUENCE_BITS) - 1n;

  private lastTimestamp = 0n;
  private sequence = 0n;

  private readonly nodeId: bigint;

  constructor() {
    this.nodeId = BigInt(process.env.NODE_ID ?? 1);

    if (this.nodeId < 0 || this.nodeId > SnowFlakeService.MAX_NODE_ID) {
      throw new Error(
        `NODE_ID must be between 0 and ${SnowFlakeService.MAX_NODE_ID}`,
      );
    }
  }

  private waitNextMillis(lastTimestamp: bigint): bigint {
    let timestamp = BigInt(Date.now());
    while (timestamp <= lastTimestamp) {
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1);
      timestamp = BigInt(Date.now());
    }
    return timestamp;
  }

  generate(): string {
    let timestamp = BigInt(Date.now());

    if (timestamp < this.lastTimestamp) {
      throw new Error(
        `Clock moved backwards. Refusing to generate id for ${
          this.lastTimestamp - timestamp
        }ms`,
      );
    }
    if (timestamp === this.lastTimestamp) {
      this.sequence = (this.sequence + 1n) & SnowFlakeService.MAX_SEQUENCE;
      if (this.sequence === 0n) {
        while (timestamp <= this.lastTimestamp) {
          timestamp = BigInt(Date.now());
        }
      }
    } else {
      this.sequence = 0n;
    }

    this.lastTimestamp = timestamp;

    const id =
      ((timestamp - BigInt(SnowFlakeService.EPOCH)) <<
        (SnowFlakeService.NODE_ID_BITS + SnowFlakeService.SEQUENCE_BITS)) |
      (this.nodeId << SnowFlakeService.SEQUENCE_BITS) |
      this.sequence;

    return id.toString();
  }

  toBase36(id: string): string {
    return BigInt(id).toString(36);
  }

  fromBase36(id: string): string {
    return BigInt(`0x${BigInt(parseInt(id, 36)).toString(16)}`).toString();
  }
}
