export class SiteReport {

  visit: number;

  visitDate: Date;

  website: string;

  constructor(visit: number, visitDate: Date, website: string) {
    this.visit = visit;
    this.visitDate = visitDate;
    this.website = website;
  }

}
