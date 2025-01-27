import css from "../ContactList/ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div>
      <div className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            username={name}
            number={number}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
