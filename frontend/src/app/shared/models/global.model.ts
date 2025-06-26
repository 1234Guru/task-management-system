//use common statuses everywhere
export type JobStatus = 'Applied' | 'Interview' | 'Rejected' | 'Offered' | 'On Hold';
export type StatusKey = 'total' | 'interview' | 'offered' | 'rejected' | 'onHold';


//define job interface
export interface Job {
  id?: number;
  company: string;
  position: string;
  status: JobStatus;
  notes?: string;
  applied_date?: string;
}


//define user interface
export interface User {
  id: number;
  name: string;
  email: string;
}
