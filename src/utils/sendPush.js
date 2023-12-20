export const sendPush = ({ title, onClick, options }) => {
  if (!('Notification' in window)) {
    console.warn('This browser does not support desktop notification');
    return;
  }
  const permission = Notification.permission;
  switch (permission) {
    case 'granted':
      const notification = new Notification(title, options);
      notification.onclick = onClick;
      break;
    case 'denied':
      console.warn('Permission for Notifications was denied');
      break;
    default:
      console.warn('Permission for Notifications was dismissed');
      break;
  }
};
