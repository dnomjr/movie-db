import { Form, Link } from 'react-router-dom';
import FormInput from '../ui/FormInput';
import SubmitBtn from '../ui/SubmitBtn';
import Logo from '../ui/Logo';

const Login = () => {
  return (
    <div className='relative block min-h-screen items-center justify-center bg-register bg-cover text-white sm:flex sm:py-10'>
      <div className='absolute right-8 top-8 sm:left-6 md:left-10 lg:left-16 xl:left-32 2xl:left-52 '>
        <Logo height={16} smHeight={20} />
      </div>
      <Form
        method='POST'
        className=' h-screen bg-black bg-opacity-60 p-16 sm:h-fit sm:w-[28.125rem] sm:rounded-lg'
      >
        <h1 className='mb-10 text-5xl font-bold'>Sign in</h1>
        <div className='space-y-6'>
          <FormInput name='email' type='email' label='Email' />
          <FormInput name='password' type='password' label='Password' />
        </div>

        <div className='mt-8'>
          <SubmitBtn name='Sign in' />
        </div>
        <div className='mt-4 text-center'>
          <p>
            Already a member?&nbsp;
            <Link
              to='/register'
              className=' text-red-500 hover:border-b hover:border-b-red-500'
            >
              Register
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
};
export default Login;
