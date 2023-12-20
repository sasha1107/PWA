export const setBadge = (count) => {
  const isSupported =
    'setAppBadge' in navigator && 'clearAppBadge' in navigator;
  if (isSupported) {
    navigator
      .setAppBadge(count)
      .then(() => {
        console.log('Badge is set!');
      })
      .catch((err) => {
        navigator
          .clearAppBadge()
          .then(() => {
            console.log('Badge is cleared!');
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }
};
