import ContactForm from './contact-form/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contact-list/ContactList';
import Container from './container/Container';

const App = () => {
  return (
    <Container>
      <div className='flex w-[100%] flex-col items-center gap-2'>
        <div className='w-[100%] rounded-b-lg bg-black px-12 py-4'>
          <h1 className='text-center text-white'>
            <b>Phonebook</b>
          </h1>
        </div>
        <ContactForm />
      </div>
      <div className='m-2 mt-10 flex flex-col gap-4'>
        <div className='rounded-b-lg bg-black px-12 py-4'>
          <h2 className='text-center text-white'>
            <b>Contacts</b>
          </h2>
        </div>
        <div className='flex flex-col items-center'>
          <Filter />
          <ContactList />
        </div>
      </div>
    </Container>
  );
};

export default App;
