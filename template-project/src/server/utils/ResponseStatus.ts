class ResponseStatus {
  static readonly OK = new ResponseStatus(200, 'Ok');

  static readonly CREATED = new ResponseStatus(201, 'Created');

  static readonly NO_CONTENT = new ResponseStatus(204, 'No content');

  static readonly MOVED_PERMANENTLY = new ResponseStatus(301, 'Moved Permanently');

  static readonly TEMPORARY_PERMANENTLY = new ResponseStatus(307, 'Temporary Redirect');

  static readonly PERMANENT_REDIRECT = new ResponseStatus(308, 'Permanent Redirect');

  static readonly BAD_REQUEST = new ResponseStatus(400, 'Bad Request');

  static readonly UNAUTHORIZED = new ResponseStatus(401, 'Unauthorized');

  static readonly FORBIDDEN = new ResponseStatus(403, 'Forbidden');

  static readonly NOT_FOUND = new ResponseStatus(404, 'Not Found');

  static readonly METHOD_NOT_ALLOWED = new ResponseStatus(405, 'Method Not Allowed');

  static readonly REQUEST_TIMEOUT = new ResponseStatus(408, 'Request Timeout');

  static readonly CONFLIT = new ResponseStatus(409, 'Conflict');

  static readonly GONE = new ResponseStatus(410, 'Gone');

  static readonly UNSUPPORTED_MEDIA_TYPE = new ResponseStatus(415, 'Unsupported Media Type');

  static readonly TOO_MANY_REQUESTS = new ResponseStatus(429, 'Too Many Requests');

  static readonly INTERNAL_SERVER_ERROR = new ResponseStatus(500, 'Internal Server Error');

  static readonly SERVICE_UNAVAILABLE = new ResponseStatus(503, 'Service Unavailable');

  static readonly GETWAY_TIMEOUT = new ResponseStatus(504, 'Gateway Timeout');

  static readonly HTTP_VERSION_NOT_SUPPORTED = new ResponseStatus(505, 'HTTP Version Not Supported');

  private constructor(private key: number, public readonly message: any) {}

  toString() {
    return this.key;
  }
}

export default ResponseStatus;
