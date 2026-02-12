import { Table, Avatar, Group, Text, Paper, Badge } from '@mantine/core';
import { Sparkline } from '@mantine/charts';
import { HiTrendingUp, HiTrendingDown } from 'react-icons/hi';
import {
  SiBitcoin,
  SiEthereum,
  SiRipple,
  SiIota,
  SiNeo4J,
} from 'react-icons/si';
import { GiTwoCoins } from 'react-icons/gi';
import type { IconType } from 'react-icons/lib';

// ---- Demo data -------------------------------------------------------------
const rows = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 16839.1,
    marketCap: '324.01B',
    volume: '14,674,311,168',
    changePct: 0.3,
    spark: [45, 52, 60, 58, 66, 64, 70, 68, 72, 71],
    Icon: SiBitcoin,
  },
  {
    id: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    price: 1217.96,
    marketCap: '149,316,232,699',
    volume: '4,758,554,801',
    changePct: 0.3,
    spark: [62, 59, 55, 57, 53, 56, 54, 52, 51, 53],
    Icon: SiEthereum,
  },
  {
    id: 3,
    name: 'Dash',
    symbol: 'DASH',
    price: 43.49,
    marketCap: '480,799,847',
    volume: '52,626,563',
    changePct: 0.45,
    spark: [33, 36, 38, 37, 40, 41, 43, 44, 46, 45],
    Icon: GiTwoCoins,
  },
  {
    id: 4,
    name: 'Ripple',
    symbol: 'XRP',
    price: 0.3531,
    marketCap: '17,791,969,465',
    volume: '511,598,941',
    changePct: 0.97,
    spark: [40, 38, 36, 37, 35, 34, 33, 34, 33, 34],
    Icon: SiRipple,
  },
  {
    id: 5,
    name: 'Iota',
    symbol: 'IOTA',
    price: 0.169741,
    marketCap: '471,800,600',
    volume: '5,524,385',
    changePct: 0.93,
    spark: [28, 30, 29, 31, 33, 32, 34, 35, 33, 32],
    Icon: SiIota,
  },
  {
    id: 6,
    name: 'Neo',
    symbol: 'NEO',
    price: 6.43,
    marketCap: '453,601,667',
    volume: '12,904,320',
    changePct: -0.49,
    spark: [41, 39, 38, 37, 36, 35, 34, 33, 34, 33],
    Icon: SiNeo4J,
  },
];

// ---- Helpers ---------------------------------------------------------------
function PriceChange({ value }: { value: number }) {
  const positive = value >= 0;
  const Icon = positive ? HiTrendingUp : HiTrendingDown;
  return (
    <Group
      gap={6}
      className={`font-medium justify-end ${positive ? 'text-emerald-400' : 'text-rose-400'}`}
    >
      <Icon aria-label={positive ? 'Up' : 'Down'} />
      <span>{Math.abs(value).toFixed(2)}%</span>
    </Group>
  );
}

function CoinCell({
  name,
  symbol,
  Icon,
}: {
  name: string;
  symbol: string;
  Icon: IconType;
}) {
  return (
    <Group gap="sm">
      <Avatar radius="xl" className="dark:bg-zinc-800" size={32}>
        <Icon />
      </Avatar>
      <div>
        <Text className="dark:text-neutral-200" fw={600} size="sm">
          {name}
        </Text>
        <Text c="dimmed" size="xs">
          {symbol}
        </Text>
      </div>
    </Group>
  );
}

// ---- Component -------------------------------------------------------------
export default function HomePageTableTransaction() {
  return (
    <Paper className="dark:bg-dark-charcoal border dark:border-zinc-800 border-neutral-300 rounded-2xl overflow-hidden shadow-xl">
      <div className="flex-1 dark:bg-dark-charcoal rounded-lg h-full">
        <div className="relative px-3.5 py-2">
          <div className="absolute w-1 h-5 top-2.5 left-1.5 rounded bg-gradient-to-b dark:from-[#845adf]/50 dark:to-[#23b8e5]/50"></div>
          <div className="font-semibold dark:text-neutral-200 text-dark-slate">
            Balance Transactions
          </div>
        </div>
        <div className="px-3.5 py-2 border-t dark:border-t-neutral-700 border-neutral-300 grid grid-cols-6"></div>
      </div>

      <div className="p-4">
        <Table
          highlightOnHover
          withTableBorder
          horizontalSpacing="md"
          verticalSpacing="sm"
          classNames={{
            table: 'dark:border-neutral-700',
            tbody: 'dark:border-neutral-700',
            tr: 'dark:border-neutral-700',
          }}
          className="[&_thead_th]:uppercase [&_thead_th]:text-xs [&_thead_th]:tracking-wider rounded-lg"
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th className="w-16 text-zinc-400">S.No</Table.Th>
              <Table.Th className="text-zinc-400">Name</Table.Th>
              <Table.Th className="text-zinc-400">Symbol</Table.Th>
              <Table.Th className="text-zinc-400 text-right">Price</Table.Th>
              <Table.Th className="text-zinc-400 text-right">Fee</Table.Th>
              <Table.Th className="text-zinc-400">Price Graph</Table.Th>
              <Table.Th className="text-zinc-400 text-right">Total</Table.Th>
              <Table.Th className="text-zinc-400 text-right">
                Price Change
              </Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {rows.map(r => (
              <Table.Tr
                key={r.id}
                className="hover:dark:bg-dark-charcoal-gray/40 hover:bg-gray-50"
              >
                <Table.Td>
                  <Text size="sm" c="dimmed">
                    {r.id}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <CoinCell name={r.name} symbol={r.symbol} Icon={r.Icon} />
                </Table.Td>
                <Table.Td>
                  <Badge radius="sm" variant="light" color="gray">
                    {r.symbol}
                  </Badge>
                </Table.Td>
                <Table.Td className="text-right">
                  <Text className="dark:text-neutral-200 font-medium" size="sm">
                    ${r.price.toLocaleString()}
                  </Text>
                </Table.Td>
                <Table.Td className="text-right">
                  <Text className="dark:text-cyan-500 font-medium" size="sm">
                    -{r.marketCap}
                  </Text>
                </Table.Td>
                <Table.Td className="p-0">
                  <Sparkline
                    h={30}
                    data={[
                      10, 20, 40, 20, 40, 10, 50, 10, 20, 40, 20, 40, 10, 50,
                    ]}
                    color={'green'}
                    curveType="natural"
                    fillOpacity={0}
                    withGradient={false}
                    strokeWidth={1.25}
                  />
                </Table.Td>
                <Table.Td className="text-right">
                  <Text className="dark:text-blue-400 font-semibold" size="sm">
                    {r.volume}
                  </Text>
                </Table.Td>
                <Table.Td className="text-right">
                  <PriceChange value={r.changePct} />
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </Paper>
  );
}
