import { CardStatAutomation } from '@/components/ui/card';
import { StackedBarChart } from '@/components/ui/chart';

export default function AutoProductDashboardPage() {
  return (
    <div className="space-y-3">
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
        <CardStatAutomation
          label="Diamond Team"
          description="Diamond team automation product bot version 1.1.2"
          total={500000}
          date="2025-10-09"
          value={{
            active: 1,
            completed: 1,
            delay: 1,
            failed: 1,
            paused: 1,
            prioritized: 1,
            waiting: 1,
            waiting_children: 1,
          }}
        />
        <CardStatAutomation
          label="Dream Team"
          description="Pink team automation product bot version 1.1.2"
          total={500000}
          date="2025-10-09"
          value={{
            active: 1,
            completed: 1,
            delay: 1,
            failed: 1,
            paused: 1,
            prioritized: 1,
            waiting: 1,
            waiting_children: 1,
          }}
        />
        <CardStatAutomation
          label="BHH Store"
          description="Pink team automation product bot version 1.1.2"
          total={500000}
          date="2025-10-09"
          value={{
            active: 1,
            completed: 1,
            delay: 1,
            failed: 1,
            paused: 1,
            prioritized: 1,
            waiting: 1,
            waiting_children: 1,
          }}
        />

        <CardStatAutomation
          label="Pink Team"
          description="Pink team automation product bot version 1.1.2"
          total={500000}
          date="2025-10-09"
          value={{
            active: 1,
            completed: 1,
            delay: 1,
            failed: 1,
            paused: 1,
            prioritized: 1,
            waiting: 1,
            waiting_children: 1,
          }}
        />
      </div>
      <StackedBarChart />
    </div>
  );
}
