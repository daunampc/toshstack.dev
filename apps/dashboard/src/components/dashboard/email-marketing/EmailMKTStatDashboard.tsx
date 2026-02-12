import { CardStatEmalMKT } from '@/components/ui/card/Card';
import { BsSendCheck } from 'react-icons/bs';
import { GiClick } from 'react-icons/gi';
import { IoMailOpenOutline } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';

export default function EmailMKTStatDashboard() {
  return (
    <div className="space-y-3">
      <div className="w-full grid grid-cols-5 gap-3">
        <CardStatEmalMKT
          is_analytic={false}
          description="1000 email"
          icon={BsSendCheck}
          label="Send"
          color=""
          count="50000"
          type="normal"
          status={{ type: 'down', count: 5000 }}
        />
        <CardStatEmalMKT
          is_analytic={false}
          description="13% opened"
          icon={IoMailOpenOutline}
          label="Open Rate"
          color=""
          count="85.5%"
          type="normal"
          status={{ type: 'up', count: 5000 }}
        />
        <CardStatEmalMKT
          is_analytic={false}
          description="13% opened"
          icon={GiClick}
          label="Click Rate"
          color=""
          count="2.5%"
          type="normal"
          status={{ type: 'up', count: 12 }}
        />
        <CardStatEmalMKT
          is_analytic={false}
          description="13% opened"
          icon={GiClick}
          label="Click Through"
          color=""
          count="2.5%"
          type="normal"
          status={{ type: 'up', count: 32.1 }}
        />
        <CardStatEmalMKT
          is_analytic={false}
          description="13% opened"
          icon={GiClick}
          label="Replied"
          color=""
          count="30"
          type="normal"
          status={{ type: 'up', count: 1.5 }}
        />
      </div>
      <div className="space-y-3">
        <div className="font-semibold dark:text-neutral-200 text-2xl">
          Delivery
        </div>
        <div className="grid grid-cols-5 gap-3">
          <CardStatEmalMKT
            is_analytic={false}
            description="13% opened"
            icon={TbTruckDelivery}
            label="Delivered Rate"
            color=""
            count="30"
            type="normal"
            status={{ type: 'up', count: 1.5 }}
          />
        </div>
      </div>
    </div>
  );
}
