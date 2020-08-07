import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  navchange: EventEmitter<number> = new EventEmitter();

  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }

  log(message: any, values?: any) {
    if (!environment.production) {
      console.log(message, values);
    }
  }

  setLocalStore(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getLocalStore(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  clearStorageFor(key) {
    return localStorage.removeItem(key);
  }

  clearStorage() {
    return localStorage.clear();
  }

  showLoading() {
    this.spinner.show();
  }

  hideLoading() {
    this.spinner.hide();
  }

  showSuccessToast(msg) {
    this.toastr.success(msg);
  }

  showErrorToast(msg) {
    this.toastr.error(msg);
  }

  showInfoToast(msg) {
    this.toastr.info(msg);
  }

  showAlert(error) {
    this.showInfoToast(error);
  }

  downloadFile(url, fileName) {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
  }

  download(url, downloadName) {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = downloadName;
    a.click();
    document.body.removeChild(a);
  }

  getNavChangeEmitter() {
    return this.navchange;
  }
}
