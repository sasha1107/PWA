import { useState, useEffect } from 'react';
import { Support } from 'components';

const Contact = () => {
  const [support, setSupport] = useState(false);

  useEffect(() => {
    if ('contacts' in navigator && 'ContactsManager' in window) {
      setSupport(true);
    }
  }, []);
  const onClickBtn = async () => {
    if ('contacts' in navigator && 'ContactsManager' in window) {
      const contacts = await navigator.contacts.select(['name', 'email'], {
        multiple: true
      });
      // const contacts = await navigator.contacts.select(props, {
      //   multiple: true
      // });
      console.log(contacts);
    }

    // showContacts(contacts);
  };
  return (
    <div>
      <Support support={support} />
      <button onClick={onClickBtn}>연락처</button>
    </div>
  );
};

export default Contact;
