import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Doctors } from "./doctors.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { environment } from "src/environments/environment";
@Injectable()
export class DoctorsService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "assets/data/doctors.json";
  isTblLoading = false;
  dataChange: BehaviorSubject<Doctors[]> = new BehaviorSubject<Doctors[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Doctors[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllDoctors(): Observable<any> {
    return this.httpClient.post<Doctors[]>(`${environment.clinivaAuthUrl}/doctors`, {
      role: ""
    })
    // .subscribe(
    //   (data) => {
    //     this.isTblLoading = false;
    //     this.dataChange.next(data);
    //   },
    //   (error: HttpErrorResponse) => {
    //     this.isTblLoading = false;
    //     console.log(error.name + " " + error.message);
    //   }
    // );
  }
  addDoctors(doctors: Doctors): void {
    this.dialogData = doctors;

    /*  this.httpClient.post(this.API_URL, doctors).subscribe(data => {
      this.dialogData = doctors;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateDoctors(doctors: Doctors): void {
    this.dialogData = doctors;

    /* this.httpClient.put(this.API_URL + doctors.id, doctors).subscribe(data => {
      this.dialogData = doctors;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteDoctors(id: number): void {
    console.log(id);

    /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );*/
  }
}
