import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import type { RootState } from '@types';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state: RootState) => state.contacts);
  const filter = useSelector((state: RootState) => state.filter);

  const filtered = ({ name }: { name: string }) =>
    name.toLowerCase().includes(filter.toLowerCase());

  return (
    <ul>
      {contacts.filter(filtered).map(({ id, name, number }) => {
        return (
          <li key={id} className='flex content-center gap-3'>
            <button
              className='m-1 bg-[#696969] px-1 text-white hover:bg-black'
              type='button'
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
            <span className='pb-3'>
              {name}: {number}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
