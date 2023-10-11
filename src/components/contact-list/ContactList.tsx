import { useSelector } from 'react-redux';
import { selectFilteredItems } from '../../redux/selectors';
import { deleteContact, fetchContacts, useAppDispatch } from '../../redux/contactsThunk';
import { useEffect } from 'react';
import Loader from '../loader/Loader';

const ContactList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, items: contacts } = useSelector(selectFilteredItems);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <ul>
        {contacts.length ? (
          contacts.map(({ id, name, number }) => {
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
          })
        ) : (
          <span>Not found</span>
        )}
      </ul>
    </>
  );
};

export default ContactList;
