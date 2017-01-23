import { OnDestroy } from '@angular/core';
import { ChartType } from '../../src/chartist.component';
export interface LiveData {
    labels: string[];
    series: Array<Array<number>>;
}
declare class LiveChartComponent implements OnDestroy {
    data: LiveData;
    type: ChartType;
    private interval;
    constructor();
    ngOnDestroy(): void;
}
export { LiveChartComponent };
