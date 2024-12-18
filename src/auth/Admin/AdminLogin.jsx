import { useMutation } from '@tanstack/react-query';
import { Eye, EyeOff } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaLock } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from 'react-simple-captcha';
import { login } from '../../services/index/users';
import { userActions } from '../../store/reducers/userReducer';

const AdminLogin = ({handleForgotPassword}) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const [captchaValue, setCaptchaValue] = useState('');
  useEffect(() => {
    loadCaptchaEnginge(4, "rgb(255, 255, 255)");
  }, []);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem('adminAccount', JSON.stringify(data));
      toast.success('Admin logged in successfully');
      navigate('/dashboard');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { email: '', password: '' },
    mode: 'onChange',
  });

  const submitHandler = (data) => {
    if (!validateCaptcha(captchaValue)) {
      toast.error('Please complete the reCAPTCHA verification.');
      return;
    }

    toast.loading('Please wait...');
    const { email, password } = data;
    mutate({ email, password });
    toast.dismiss();
  };
  
    return (
        <div className='max-w-md mx-auto mt-18 pt-44'>
              <form onSubmit={handleSubmit(submitHandler)}>
                
                <div>
                  <label
                    htmlFor="email"
                    className="block gradient-text font-bold  "
                  >
                    Email:
                  </label>
                  <input
                    type='email'
                    id='email'
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Enter a valid email',
                      },
                    })}
                    className={`w-full border py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 ${
                      errors.email ? 'border-red-500  ' : 'border-gray-300'
                    }`}
              
                  />
                    {errors.email && (
                      <p className='text-red-500 text-xs mt-1'>
                        {errors.email.message}
                      </p>
                    )}
        
                </div>

                <div className="mb-6 relative">
  <label htmlFor="password" className="block gradient-text font-bold">
    Password:
  </label>
  <div className="relative mt-2">
    <input
      type={isVisible ? 'text' : 'password'}
      id="password"
      {...register('password', {
        required: 'Password is required',
        minLength: {
          value: 6,
          message: 'Password must be at least 6 characters',
        },
      })}
      placeholder="Password"
      className="w-full border border-gray-300 py-2 pl-3 pr-10 rounded outline-none focus:ring-indigo-600"
    />
    <button
      type="button"
      onClick={toggleVisibility}
      className="absolute right-3 top-1/2 transform -translate-y-1/2"
    >
      {isVisible ? (
        <Eye color="#0B4E38" />
      ) : (
        <EyeOff color="#0B4E38" />
      )}
    </button>
  </div>
</div>

                {errors.password && (
              <p className='text-red-500 text-xs mt-1'>
                {errors.password.message}
              </p>
            )}
                      <a
                    href="#"
                    onClick={handleForgotPassword}
                    className="   font-semibold hover:underline mt-2 inline-block text-indigo-600"
                  >
                    Forget Password
                  </a>
             {/* CAPTCHA */}
          <div>
            <LoadCanvasTemplate
              reloadText='Reload CAPTCHA'
              reloadColor='#0B4E38'
             className="bg-slate-400"
            />
            <input
              type='text'
              placeholder='Enter the CAPTCHA'
              className='border-2 rounded-md w-full px-2 h-10'
              value={captchaValue}
              onChange={(e) => setCaptchaValue(e.target.value)}
            />
          </div>

          {/* Submit Button */}
      
                <button    type='submit' 
                className={`cursor-pointer py-2 px-4 block mt-6   gradient-bg text-white font-bold w-full text-center rounded ${
              isLoading && 'opacity-50'
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Admin Login'}
                </button>
              </form>
            </div>
    );
}

export default AdminLogin;
