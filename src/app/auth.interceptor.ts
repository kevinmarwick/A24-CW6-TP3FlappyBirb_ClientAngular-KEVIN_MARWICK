import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url != "https://localhost:7166/api/Users/Register" && req.url != "https://localhost:7166/api/Users/Login")
    req = req.clone({
      setHeaders: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem("token")
      }
    })

  return next(req);
};
