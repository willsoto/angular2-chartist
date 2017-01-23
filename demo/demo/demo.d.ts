import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from '../src/chartist.component';
export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}
export declare class DemoAppComponent {
    charts: Chart[];
    constructor();
}
