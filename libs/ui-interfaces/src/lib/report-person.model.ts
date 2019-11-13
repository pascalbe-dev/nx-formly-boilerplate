export interface ReportPerson {
  name: string;
  email: string;
  phone?: string;
}

export type ReportPersonTestIdType = 'Name' | 'Email Address' | 'Phone Number';
