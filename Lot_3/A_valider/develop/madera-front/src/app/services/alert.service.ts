import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  constructor() { }

  tempAlert(msg: string, duration: number, type: string) {
    const el = document.createElement('div');
    const alertCssClasses = type + ' fixed-alert fixed-top alert fade show alert-heading';
    el.setAttribute('class', alertCssClasses);
    el.innerHTML = msg;
    setTimeout(() => {
        el.parentNode.removeChild(el);
    }, duration);
    document.body.appendChild(el);
  }

}
