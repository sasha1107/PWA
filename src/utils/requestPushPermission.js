export const requestPushPermission = async () => {
  if (!('Notification' in window)) {
    console.warn('This browser does not support desktop notification');
    return;
  }

  const permission = await Notification.requestPermission();

  switch (permission) {
    case 'granted':
      console.log('Permission for Notifications was granted');
      break;
    case 'denied':
      console.warn('Permission for Notifications was denied');
      break;
    default:
      console.warn('Permission for Notifications was dismissed');
      break;
  }
  return permission;
};
