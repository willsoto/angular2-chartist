import { ElementRef, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as Chartist from 'chartist';
/**
 * Possible chart types
 * @type {String}
 */
export declare type ChartType = 'Pie' | 'Bar' | 'Line';
export declare type ChartInterfaces = Chartist.IChartistPieChart | Chartist.IChartistBarChart | Chartist.IChartistLineChart;
export declare type ChartOptions = Chartist.IBarChartOptions | Chartist.ILineChartOptions | Chartist.IPieChartOptions;
export declare type ResponsiveOptionTuple = Chartist.IResponsiveOptionTuple<ChartOptions>;
export declare type ResponsiveOptions = Array<ResponsiveOptionTuple>;
/**
 * Represent a chart event.
 * For possible values, check the Chartist docs.
 */
export interface ChartEvent {
    [eventName: string]: (data: any) => void;
}
declare class ChartistComponent implements OnInit, OnChanges, OnDestroy {
    data: (Promise<Chartist.IChartistData> | Chartist.IChartistData);
    type: (Promise<ChartType> | ChartType);
    options: (Promise<Chartist.IChartOptions> | Chartist.IChartOptions);
    responsiveOptions: (Promise<ResponsiveOptions> | ResponsiveOptions);
    events: ChartEvent;
    chart: ChartInterfaces;
    private element;
    constructor(element: ElementRef);
    ngOnInit(): Promise<ChartInterfaces>;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    renderChart(): Promise<ChartInterfaces>;
    update(changes: SimpleChanges): void;
    bindEvents(chart: any): void;
}
declare class ChartistModule {
}
export { ChartistComponent, ChartistModule };
declare var _default: {
    directives: typeof ChartistComponent[];
};
export default _default;
