import { Form } from 'react-router-dom';
import FormInput from '../ui/FormInput';
import SubmitBtn from '../ui/SubmitBtn';

const Register = () => {
  return (
    <div className='block h-screen items-center justify-center bg-register bg-cover text-white sm:flex '>
      <Form
        method='POST'
        className='h-full  bg-black bg-opacity-60 p-16 sm:h-fit sm:w-[28.125rem] sm:rounded-lg'
      >
        <h1 className='text-5xl font-bold mb-10'>Sign up</h1>
        <div className='space-y-6'>
          <FormInput name='username' type='text' label='Username' />
          <FormInput name='email' type='email' label='Email' />
          <FormInput name='password' type='password' label='Password' />
        </div>

        <div className='mt-16'>
          <SubmitBtn name='Sign in' />
        </div>
      </Form>
    </div>
  );
};
export default Register;
