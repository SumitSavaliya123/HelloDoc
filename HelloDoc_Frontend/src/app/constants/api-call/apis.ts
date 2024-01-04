export class ApiCallConstant {
  public static readonly BASE_URL = 'https://localhost:44306/api/';

  //Area name
  public static readonly AREA_DOCTOR = this.BASE_URL + 'doctors';
  public static readonly AREA_PATIENT = this.BASE_URL + 'patient';
  public static readonly AREA_LAB = this.BASE_URL + 'lab';
  public static readonly AREA_AUTHENTICATION = this.BASE_URL + 'authentication';
  public static readonly AREA_HEADER = this.BASE_URL + 'header';

  //for authentication
  public static readonly LOGIN_URL = this.AREA_AUTHENTICATION + '/login';

  public static readonly FORGOT_PASSWORD_URL =
    this.AREA_AUTHENTICATION + '/forgot-password';

  public static readonly RESET_PASSWORD_URL =
    this.AREA_AUTHENTICATION + '/reset-password';

  public static readonly REFRESH_TOKEN_URL =
    this.AREA_AUTHENTICATION + '/refresh-jwttoken';
}
