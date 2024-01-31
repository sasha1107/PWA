import { useState, useEffect } from 'react';
import { Support } from 'components';

const Contact = () => {
  const [support, setSupport] = useState(false);
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    if ('contacts' in navigator && 'ContactsManager' in window) {
      setSupport(true);
    }
  }, []);
  const onClickBtn = async () => {
    if ('contacts' in navigator && 'ContactsManager' in window) {
      const contacts = await navigator.contacts.select(
        ['name', 'email', 'tel'],
        {
          multiple: true
        }
      );
      setContacts(contacts);
    }
  };

  return (
    <div>
      <Support support={support} />

      <button onClick={onClickBtn}>연락처</button>
      <div>
        {contacts.map((contact) => (
          <div className="card flex justify-between" key={contact.name}>
            <div>{contact.name}</div>
            <div>
              <a href={`tel:+82${contact.tel}`}>{contact.tel}</a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
