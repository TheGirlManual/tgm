import React from 'react';
import { toast } from 'react-toastify';
import Notification from 'components/Notification';

export default function notify(type, options = {}) {
  toast(<Notification type={type} />, options);
}
