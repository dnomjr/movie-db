/* eslint-disable react/prop-types */
import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ name }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type='submit'
      disabled={isSubmitting}
      className='w-full rounded-lg bg-red-500 px-2 py-4 '
    >
      {isSubmitting ? 'sending...' : name || 'submit'}
    </button>
  );
};
export default SubmitBtn;
