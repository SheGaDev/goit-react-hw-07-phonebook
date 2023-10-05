import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const filterChange = (event: ChangeEvent) => {
    const { value }: { value: string } = event.target as HTMLInputElement;
    dispatch(changeFilter(value));
  };
  return (
    <>
      <label className='mb-[24px] flex w-[360px] flex-col items-center'>
        Find contacts by name:
        <input className='w-[360px]' type='text' onChange={filterChange} />
      </label>
    </>
  );
};

export default Filter;
