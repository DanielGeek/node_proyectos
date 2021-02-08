// eslint-disable-next-line node/no-deprecated-api
import { UrlWithParsedQuery, parse } from 'url'

export class UrlLogin {
  public static parseUrl (url: string): UrlWithParsedQuery {
    return parse(url, true)
  }
}
