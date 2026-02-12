import { Badge, Image, Table } from '@mantine/core';
import PostIMG from '@/assets/images/image-te-1.jpeg';

export default function SeoCheckerChartMotion() {
  return (
    <div className="border border-neutral-700 rounded-lg">
      <div className="w-full dark:bg-dark-charcoal p-3 rounded-lg">
        <div className="dark:bg-dark-charcoal-gray flex items-center rounded-full p-1">
          <div className="rounded-full text-sm dark:bg-dark-charcoal dark:text-neutral-200 font-medium py-1.5 px-2.5">
            Best for version 1
          </div>
          <div className="rounded-full text-sm dark:text-neutral-200 font-medium py-1.5 px-2.5">
            Best for version 2
          </div>
          <div className="rounded-full text-sm dark:text-neutral-200 font-medium py-1.5 px-2.5">
            Best for version 3
          </div>
        </div>
      </div>
      <div className="p-1">
        <Table
          classNames={{
            tbody: 'p-0',
            tr: 'p-0 dark:bg-dark-charcoal border-neutral-700 hover:bg-dark-charcoal-gray transition-all duration-200',
            td: 'p-1.5',
            th: 'dark:text-neutral-200 font-semibold',
          }}
        >
          <Table.Thead>
            <Table.Th>Post</Table.Th>
            <Table.Th w={90}>View TH</Table.Th>
            <Table.Th w={90}>TTL</Table.Th>
            <Table.Th w={150}>DNPC OP</Table.Th>
            <Table.Th w={90}>TTL</Table.Th>
            <Table.Th w={100}>DNPC OP</Table.Th>
          </Table.Thead>
          <Table.Tbody>
            {Array(9)
              .fill('_')
              .map((_, idx) => {
                return (
                  <Table.Tr key={idx}>
                    <Table.Td>
                      <div className="flex items-center gap-3">
                        <Image src={PostIMG} w={60} radius={'sm'} />
                        <div>
                          <div className="text-sm dark:text-neutral-200 font-medium">
                            How to fix data home, to fix data home to fix data
                            home
                          </div>
                          <span className="dark:text-blue-400 text-xs font-medium">
                            http://localhost:8080/blog-manager/seo-optimization/seo-checker
                          </span>
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td>
                      <Badge
                        className="w-full"
                        variant="light"
                        color="yellow"
                        size="lg"
                        radius={'md'}
                      >
                        195
                      </Badge>
                    </Table.Td>
                    <Table.Td>
                      <Badge
                        className="w-full"
                        variant="light"
                        color="red"
                        size="lg"
                        radius={'md'}
                      >
                        195
                      </Badge>
                    </Table.Td>
                    <Table.Td>
                      <Badge
                        className="w-full"
                        variant="light"
                        color="green"
                        size="lg"
                        radius={'md'}
                      >
                        1959011
                      </Badge>
                    </Table.Td>
                    <Table.Td>
                      <Badge
                        className="w-full"
                        variant="light"
                        color="orange"
                        size="lg"
                        radius={'md'}
                      >
                        195
                      </Badge>
                    </Table.Td>
                    <Table.Td>
                      <Badge
                        className="w-full"
                        variant="light"
                        color="orange"
                        size="lg"
                        radius={'md'}
                      >
                        195
                      </Badge>
                    </Table.Td>
                  </Table.Tr>
                );
              })}
          </Table.Tbody>
        </Table>
      </div>
    </div>
  );
}
