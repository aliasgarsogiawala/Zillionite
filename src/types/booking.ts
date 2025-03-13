export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  sessionType: string;
  amount: number;
  status: 'pending' | 'confirmed';
  paymentId?: string;
}