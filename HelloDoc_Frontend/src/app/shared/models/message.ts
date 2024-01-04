import { NotificationType } from 'src/app/constants/notification-type';

export interface IMessage {
  type: NotificationType;
  message: string;
  title?: string;
}
