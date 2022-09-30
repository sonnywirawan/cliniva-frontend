import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { environment } from "src/environments/environment";
import * as moment from 'moment';
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
import { AuthService } from "src/app/core/service/auth.service";
import { Router } from "@angular/router";
import { Role } from "src/app/core/models/role";
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
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
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

  formdata: FormGroup
  userData: any
  updateProfileLoading: boolean = false;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.smallChart1();
    this.smallChart2();
    this.smallChart3();
    this.smallChart4();
    this.chart1();
    this.chart2();

    this.formdata = this.formbuilder.group({
      id: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(5)]),
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      role: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      mobile: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      dateOfBirth: new FormControl("", [Validators.required]),
      // Doctor
      designation: new FormControl("", []),
      department: new FormControl("", []),
      education: new FormControl("", []),
      specialization: new FormControl("", []),
      degree: new FormControl("", []),
      joiningDate: new FormControl(moment(new Date()).format("DD-MM-YYYY"), []),
      // Patient
      age: new FormControl(null, []),
      maritalStatus: new FormControl("", []),
      bloodGroup: new FormControl("", []),
      bloodPressure: new FormControl("", []),
      sugger: new FormControl("", []),
      injury: new FormControl("", []),
      // Less img
    });

    this.authService.currentUser.subscribe((user: any) => {
      this.userData = user
      this.formdata.controls['id'].patchValue(user.id)
      this.formdata.controls['email'].patchValue(user.email)
      this.formdata.controls['firstName'].patchValue(user.firstName)
      this.formdata.controls['lastName'].patchValue(user.lastName)
    })

    this.formdata.get('role').valueChanges.subscribe(role => {
      console.log(role);

      if (role == 'doctor') {
        // Enable Validator for Doctor
        this.formdata.controls['designation'] = new FormControl("", [Validators.required]);
        this.formdata.controls['department'] = new FormControl("", [Validators.required]);
        this.formdata.controls['education'] = new FormControl("", [Validators.required]);
        this.formdata.controls['specialization'] = new FormControl("", [Validators.required]);
        this.formdata.controls['degree'] = new FormControl("", [Validators.required]);

        // Disable Validator for Patient
        this.formdata.controls['age'].clearValidators();
        this.formdata.controls['maritalStatus'].clearValidators();
        this.formdata.controls['bloodGroup'].clearValidators();
        this.formdata.controls['bloodPressure'].clearValidators();
        this.formdata.controls['sugger'].clearValidators();
        this.formdata.controls['injury'].clearValidators();
      } else if (role == 'patient') {
        // Enable Validator for Patient
        this.formdata.controls['age'] = new FormControl(null, [Validators.required]);
        this.formdata.controls['maritalStatus'] = new FormControl("", [Validators.required]);
        this.formdata.controls['bloodGroup'] = new FormControl("", [Validators.required]);
        this.formdata.controls['bloodPressure'] = new FormControl("", [Validators.required]);
        this.formdata.controls['sugger'] = new FormControl("", [Validators.required]);
        this.formdata.controls['injury'] = new FormControl("", [Validators.required]);

        // Disable Validator for Doctor
        this.formdata.controls['designation'].clearValidators();
        this.formdata.controls['department'].clearValidators();
        this.formdata.controls['education'].clearValidators();
        this.formdata.controls['specialization'].clearValidators();
        this.formdata.controls['degree'].clearValidators();
        console.log(this.formdata);
      }
    })
  }

  applyDoctorOrPatientValue(value) {
    if (this.formdata.get('role').value == 'doctor') {
      this.formdata.patchValue({
        designation: value.designation,
        department: value.department,
        education: value.education,
        specialization: value.specialization,
        degree: value.degree,
      })
    } else if (this.formdata.get('role').value == 'patient') {
      this.formdata.patchValue({
        age: value.age,
        maritalStatus: value.maritalStatus,
        bloodGroup: value.bloodGroup,
        bloodPressure: value.bloodPressure,
        sugger: value.sugger,
        injury: value.injury,
      })
    }
    console.log(this.formdata);

  }

<<<<<<< HEAD
  updateProfile() {
    this.updateProfileLoading = true;
=======
  updateProfile() {    
    var userId = '9ff7c6cd-85ae-41cf-8d88-fb9308688ffc'
>>>>>>> b2addb4 (newpull)
    return this.http
      .put<any>(`${environment.clinivaAuthUrl}/user/${this.formdata.value.id}`, {
        ...this.formdata.value,
        dateOfBirth: moment(this.formdata.get('dateOfBirth').value).format('DD-MM-YYYY')
      }).subscribe((result) => {
        // Hit API Update User
        result.accessToken = this.userData.accessToken
        localStorage.setItem("currentUser", JSON.stringify(result));
        this.authService.currentUserSubject.next(result)

        const role = result.role;
        if (role === Role.All || role === Role.Admin || role == Role.None) {
          this.router.navigate(["/admin/dashboard/main"]);
        } else if (role === Role.Doctor) {
          this.router.navigate(["/doctor/dashboard"]);
        } else if (role === Role.Patient) {
          this.router.navigate(["/patient/dashboard"]);
        } else {
          this.router.navigate(["/authentication/signin"]);
        }
        this.updateProfileLoading = false;
      }, err => {
        console.log('err', err);
        this.updateProfileLoading = false;
      })
  }

  private smallChart1() {
    this.cardChart1 = {
      responsive: true,
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
      title: {
        display: false,
      },
    };
    this.cardChart1Data = [
      {
        label: "New Patients",
        data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62],
        borderWidth: 4,
        pointStyle: "circle",
        pointRadius: 4,
        borderColor: "rgba(103,119,239,.7)",
        pointBackgroundColor: "rgba(103,119,239,.2)",
        backgroundColor: "rgba(103,119,239,.2)",
        pointBorderColor: "transparent",
      },
    ];
    this.cardChart1Label = [
      "16-07-2018",
      "17-07-2018",
      "18-07-2018",
      "19-07-2018",
      "20-07-2018",
      "21-07-2018",
      "22-07-2018",
      "23-07-2018",
      "24-07-2018",
      "25-07-2018",
      "26-07-2018",
      "27-07-2018",
      "28-07-2018",
      "29-07-2018",
      "30-07-2018",
      "31-07-2018",
    ];
  }
  private smallChart2() {
    this.cardChart2 = {
      responsive: true,
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
      title: {
        display: false,
      },
    };
    this.cardChart2Data = [
      {
        label: "New Patients",
        data: [50, 61, 80, 50, 40, 93, 63, 50, 62, 72, 52, 60, 41, 30, 45, 70],
        borderWidth: 4,
        pointStyle: "circle",
        pointRadius: 4,
        borderColor: "rgba(253,126,20,.7)",
        pointBackgroundColor: "rgba(253,126,20,.2)",
        backgroundColor: "rgba(253,126,20,.2)",
        pointBorderColor: "transparent",
      },
    ];
    this.cardChart2Label = [
      "16-07-2018",
      "17-07-2018",
      "18-07-2018",
      "19-07-2018",
      "20-07-2018",
      "21-07-2018",
      "22-07-2018",
      "23-07-2018",
      "24-07-2018",
      "25-07-2018",
      "26-07-2018",
      "27-07-2018",
      "28-07-2018",
      "29-07-2018",
      "30-07-2018",
      "31-07-2018",
    ];
  }
  private smallChart3() {
    this.cardChart3 = {
      responsive: true,
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
      title: {
        display: false,
      },
    };
    this.cardChart3Data = [
      {
        label: "New Patients",
        data: [52, 60, 41, 30, 45, 70, 50, 61, 80, 50, 72, 40, 93, 63, 50, 62],
        borderWidth: 4,
        pointStyle: "circle",
        pointRadius: 4,
        borderColor: "rgba(40,167,69,.7)",
        pointBackgroundColor: "rgba(40,167,69,.2)",
        backgroundColor: "rgba(40,167,69,.2)",
        pointBorderColor: "transparent",
      },
    ];
    this.cardChart3Label = [
      "16-07-2018",
      "17-07-2018",
      "18-07-2018",
      "19-07-2018",
      "20-07-2018",
      "21-07-2018",
      "22-07-2018",
      "23-07-2018",
      "24-07-2018",
      "25-07-2018",
      "26-07-2018",
      "27-07-2018",
      "28-07-2018",
      "29-07-2018",
      "30-07-2018",
      "31-07-2018",
    ];
  }
  private smallChart4() {
    this.cardChart4 = {
      responsive: true,
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
      title: {
        display: false,
      },
    };
    this.cardChart4Data = [
      {
        label: "New Patients",
        data: [30, 45, 70, 40, 93, 63, 50, 62, 50, 61, 80, 50, 72, 52, 60, 41],
        borderWidth: 4,
        pointStyle: "circle",
        pointRadius: 4,
        borderColor: "rgba(0,123,255,.7)",
        pointBackgroundColor: "rgba(0,123,255,.2)",
        backgroundColor: "rgba(0,123,255,.2)",
        pointBorderColor: "transparent",
      },
    ];
    this.cardChart4Label = [
      "16-07-2018",
      "17-07-2018",
      "18-07-2018",
      "19-07-2018",
      "20-07-2018",
      "21-07-2018",
      "22-07-2018",
      "23-07-2018",
      "24-07-2018",
      "25-07-2018",
      "26-07-2018",
      "27-07-2018",
      "28-07-2018",
      "29-07-2018",
      "30-07-2018",
      "31-07-2018",
    ];
  }
  private chart1() {
    this.areaChartOptions = {
      series: [
        {
          name: "New Patients",
          data: [31, 40, 28, 51, 42, 85, 77],
        },
        {
          name: "Old Patients",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
        foreColor: "#9aa0ac",
      },
      colors: ["#407fe4", "#908e8e"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19",
          "2018-09-20",
          "2018-09-21",
          "2018-09-22",
          "2018-09-23",
          "2018-09-24",
          "2018-09-25",
        ],
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: 0,
      },

      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }
  private chart2() {
    this.barChartOptions = {
      series: [
        {
          name: "Colds and Flu",
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: "Headaches",
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: "Malaria",
          data: [11, 17, 15, 15, 21, 14],
        },
        {
          name: "Typhoid",
          data: [21, 7, 25, 13, 22, 8],
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        foreColor: "#9aa0ac",
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: "category",
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 0.8,
        colors: ["#01B8AA", "#374649", "#FD625E", "#F2C80F"],
      },
      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }
}
