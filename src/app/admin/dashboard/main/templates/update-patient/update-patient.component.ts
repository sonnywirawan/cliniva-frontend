import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexLegend,
  ApexFill,
  ApexResponsive,
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
};
@Component({
  selector: "update-patient",
  templateUrl: "./update-patient.component.html",
  styleUrls: ["./update-patient.component.scss"],
})
export class UpdatePatientComponent implements OnInit {
  @Output() patientValue = new EventEmitter<any>();

  public cardChart1: any;
  public cardChart1Data: any;
  public cardChart1Label: any;

  public cardChart2: any;
  public cardChart2Data: any;
  public cardChart2Label: any;

  public cardChart3: any;
  public cardChart3Data: any;
  public cardChart3Label: any;

  public cardChart4: any;
  public cardChart4Data: any;
  public cardChart4Label: any;

  public areaChartOptions: Partial<ChartOptions>;
  public barChartOptions: Partial<ChartOptions>;

  role: string;
  formdata: FormGroup
  constructor(private formbuilder: FormBuilder) {}
  ngOnInit() {
    this.formdata = this.formbuilder.group({
      age: new FormControl(null, [Validators.required]),
      maritalStatus: new FormControl("", [Validators.required]),
      bloodGroup: new FormControl("", [Validators.required]),
      bloodPressure: new FormControl("", [Validators.required]),
      sugger: new FormControl("", [Validators.required]),
      injury: new FormControl("", [Validators.required]),
    });
  }

  applyChanges() {
    if(this.formdata.valid) {
      this.patientValue.emit(this.formdata.value);
    }
  }
}
