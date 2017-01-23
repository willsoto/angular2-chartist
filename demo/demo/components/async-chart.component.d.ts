import { ChartType } from '../../src/chartist.component';
import * as Chartist from 'chartist';
declare class AsyncChartComponent {
    data: Promise<Chartist.IChartistData>;
    type: Promise<ChartType>;
    constructor();
}
export { AsyncChartComponent };
