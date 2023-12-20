import { useEffect } from 'react';
import { requestPushPermission } from '../../utils';

const Permission = ({ children }) => {
  useEffect(() => {
    requestPushPermission();
  }, []);
  return <>{children}</>;
};

export default Permission;
