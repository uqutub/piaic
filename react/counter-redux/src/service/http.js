import { of } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
// https://xgrommx.github.io/rx-book/content/rxjs_bindings/dom/index.html#rxdomrequestgetjsonurl
// https://github.com/ReactiveX/rxjs/blob/master/src/observable/dom/AjaxObservable.ts

export class HttpService {
  static get(url, headers = { "Content-Type": "application/json" }) {
    return ajax({
      url,
      headers,
      method: "GET",
      // async: true,
      crossDomain: true,
      responseType: "json",
      createXHR: () => new XMLHttpRequest()
    }).pipe(catchError(({ response }) => of(response)));
  } // get

  // static post(url, body, headers = { "Content-Type": "application/json" }) {
  static post(url, body, headers = { "Content-Type": "application/x-www-form-urlencoded" }) {
    return ajax({
      url,
      method: "POST",
      body,
      headers,
      // async: true,
      crossDomain: true,
      responseType: "json",
      createXHR: () => new XMLHttpRequest()
    }).pipe(catchError((response) => of(response)));
  } // post

  static put(url, body, headers = { "Content-Type": "application/x-www-form-urlencoded" }) {
    return ajax({
      url,
      method: "PUT",
      body,
      headers,
      // async: true,
      crossDomain: true,
      responseType: "json",
      createXHR: () => new XMLHttpRequest()
    }).pipe(catchError(({ response }) => of(response)));
  } //put

  static delete(url, body, headers = { "Content-Type": "application/json" }) {
    return ajax({
      url,
      method: "DELETE",
      body,
      headers,
      // async: true,
      crossDomain: true,
      responseType: "json",
      createXHR: () => new XMLHttpRequest()
    }).pipe(catchError(({ response }) => of(response)));
  } //delete
}