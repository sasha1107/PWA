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
    <div className="flex flex-col gap-4">
      <Support support={support} />

      <button className="primary" onClick={onClickBtn}>
        연락처 가져오기
      </button>
      {contacts.length > 0 && (
        <div>
          {contacts.map((contact) => (
            <div className="card flex gap-4" key={contact.name}>
              <div className="text-semibold">{contact.name}</div>
              <div className="flex flex-grow flex-col gap-2">
                <a href={`tel:${contact.tel}`}>{contact.tel}</a>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Contact;
