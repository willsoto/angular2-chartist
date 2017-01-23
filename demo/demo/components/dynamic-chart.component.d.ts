import { ChartType } from '../../src/chartist.component';
import * as Chartist from 'chartist';
declare class DynamicChartComponent {
    type: ChartType;
    data: Chartist.IChartistData;
    options: any;
    chartTypes: ChartType[];
    constructor();
}
export { DynamicChartComponent };
