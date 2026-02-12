import { Badge, Button, Drawer, Table, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IoMdArrowDown, IoMdArrowUp } from 'react-icons/io';
import { RiFileTextLine } from 'react-icons/ri';
import { RxCopy } from 'react-icons/rx';
import { VscPreview } from 'react-icons/vsc';

// #region Sample data
export default function ViolationLogsMain() {
  const [opened, { open, close }] = useDisclosure(false);

  const handleDetailLog = () => {
    open();
  };
  return (
    <div className="w-full dark:bg-dark-charcoal p-2 rounded-lg ">
      <Drawer
        opened={opened}
        onClose={close}
        withinPortal
        position="right"
        size={'xl'}
      >
        <div className="flex items-center justify-end gap-2">
          <Button leftSection={<IoMdArrowUp />} size="compact-sm">
            Previous
          </Button>
          <Button leftSection={<IoMdArrowDown />} size="compact-sm">
            Next
          </Button>
          <Button leftSection={<IoMdArrowDown />} size="compact-sm">
            Copy permalink
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="space-y-3">
            <div className="space-y-1">
              <div className="font-semibold dark:text-neutral-200">
                Log Detail
              </div>
              <span className="text-sm dark:text-neutral-300 font-medium">
                Apr 25,2025 23:28:02.650
              </span>
            </div>
            <div className="dark:bg-dark-charcoal rounded-lg">
              <div className="flex text-sm items-center font-medium px-4 py-2 gap-3">
                <span className="dark:text-neutral-200">Message</span>
                <RiFileTextLine />
              </div>
              <div className="w-full h-px dark:bg-neutral-700" />
              <p className="text-sm font-medium p-4 dark:text-neutral-200">
                Keep your work truly yours with 49% off Pro When you’re working
                with AI, how do you ensure your work is original? With the
                Pro-exclusive AI Detector agent, you’ll always uphold
                professional and academic integrity. This agent identifies
                AI-generated text so you can revise it in your unique voice, and
                your work stays credible and unmistakably you. Save 50%* on a
                full year of Grammarly Pro and keep your writing as original as
                your ideas.
              </p>
              <div className="px-3 py-2 flex justify-end">
                <Button size="compact-xs" variant="light" color="blue">
                  Show more
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Tabs defaultValue={'formatted'}>
              <Tabs.List>
                <Tabs.Tab value="formatted">Formatted</Tabs.Tab>
                <Tabs.Tab value="unformatted">Unformatted</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="formatted">
                <ul className="p-2 flex flex-col gap-2 ">
                  <li className="flex items-start gap-1.5 text-sm font-medium ">
                    <div className="dark:text-blue-400">Log_id:</div>
                    <div className="font-medium dark:text-green-600">
                      f14aed1e-68c8-45fe-b4ff-5e145e9a3800
                    </div>
                  </li>
                  <li className="flex items-start gap-1.5 text-sm font-medium ">
                    <div className="dark:text-blue-400">Author:</div>
                    <div className="font-medium dark:text-orange-600">
                      @toshstack.dev
                    </div>
                  </li>
                  <li className="flex items-start gap-1.5 text-sm font-medium">
                    <div className="dark:text-blue-400">Log name:</div>
                    <div className="font-medium dark:text-green-600">
                      towersprod.k8s.local
                    </div>
                  </li>
                  <li className="flex items-start gap-1.5 text-sm font-medium">
                    <div className="dark:text-blue-400">Message:</div>
                    <div className="dark:text-green-600 dark:bg-dark-charcoal rounded-md p-2">
                      Keep your work truly yours with 49% off Pro When you’re
                      working with AI, how do you ensure your work is original?
                      With the Pro-exclusive AI Detector agent, you’ll always
                      uphold professional and academic integrity. This agent
                      identifies AI-generated text so you can revise it in your
                      unique voice, and your work stays credible and
                      unmistakably you. Save 50%* on a full year of Grammarly
                      Pro and keep your writing as original as your ideas.
                    </div>
                  </li>
                  <li className="flex items-start gap-1.5 text-sm font-medium">
                    <div className="dark:text-blue-400">source:</div>
                    <div className="font-medium dark:text-green-600">
                      <Badge className="capitalize" variant="light" color="red">
                        Block AI
                      </Badge>
                    </div>
                  </li>
                </ul>
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>
      </Drawer>
      <Table
        withRowBorders
        highlightOnHover
        classNames={{ tr: 'dark:hover:bg-dark-charcoal-gray align-top' }}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={60}>ID</Table.Th>
            <Table.Th w={180}> Author</Table.Th>
            <Table.Th w={240}>Timestamp</Table.Th>
            <Table.Th w={150}>Status</Table.Th>
            <Table.Th>Message</Table.Th>
            <Table.Th w={70}>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {Array(15)
            .fill('_')
            .map((_, idx) => {
              return (
                <Table.Tr key={idx}>
                  <Table.Th>
                    <Button size="compact-sm" variant="light" color="blue">
                      <RxCopy />
                    </Button>
                  </Table.Th>
                  <Table.Th>
                    <div className="flex items-center gap-1.5">
                      <Badge
                        radius={'md'}
                        variant="light"
                        color="orange"
                        className="capitalize font-medium"
                      >
                        Toshstack.dev
                      </Badge>
                    </div>
                  </Table.Th>
                  <Table.Th>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-600" />
                      <div className="font-medium dark:text-neutral-200 capitalize text-[13px]">
                        23:28:02.650-19/1/2025
                      </div>
                    </div>
                  </Table.Th>
                  <Table.Th>
                    <Badge
                      variant="light"
                      size="md"
                      color="red"
                      className="capitalize font-medium"
                    >
                      Auto Block
                    </Badge>
                  </Table.Th>
                  <Table.Th>
                    <p className="text-[13px] font-medium line-clamp-2 break-all">
                      Keep your work truly yours with 49% off Pro When you’re
                      working with AI, how do you ensure your work is original?
                      With the Pro-exclusive AI Detector agent, you’ll always
                      uphold professional and academic integrity. This agent
                      identifies AI-generated text so you can revise it in your
                      unique voice, and your work stays credible and
                      unmistakably you. Save 50%* on a full year of Grammarly
                      Pro and keep your writing as original as your ideas.
                    </p>
                  </Table.Th>
                  <Table.Th>
                    <Button
                      onClick={handleDetailLog}
                      size="compact-sm"
                      variant="light"
                      color="green"
                    >
                      <VscPreview />
                    </Button>
                  </Table.Th>
                </Table.Tr>
              );
            })}
        </Table.Tbody>
      </Table>
    </div>
  );
}
