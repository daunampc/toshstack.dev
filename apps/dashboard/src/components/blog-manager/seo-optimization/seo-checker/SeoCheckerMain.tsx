import {
  SeoCheckerBoxHealth,
  SeoCheckerIssuesType,
  SeoCheckerKeyword,
  SeoCheckerPageRatio,
} from './seo-checker-box';
import SeoCheckerChartMotion from './seo-checker-chart/SeoCheckerChartMotion';

export default function SeoCheckerMain() {
  return (
    <div className="w-full grid grid-cols-5 gap-3">
      <SeoCheckerBoxHealth />
      <SeoCheckerIssuesType />
      <SeoCheckerPageRatio />
      <div className="col-span-2 dark:bg-dark-charcoal rounded-lg">
        <SeoCheckerKeyword />
      </div>
      <div className="col-span-4">
        <SeoCheckerChartMotion />
      </div>
    </div>
  );
}
