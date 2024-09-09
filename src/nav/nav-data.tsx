import Forgotpass from '../pages/auth/forgotpass';
import Signin from '../pages/auth/signin';
import Signup from '../pages/auth/signup';
import Splash from '../pages/auth/splash';
import OtpAuth from '@pages/auth/otpAuth';
import AuthEmail from '@pages/auth/authEmail';
import NavTabs from './nav-tab';
import Home from '@pages/home';
import Profile from '@pages/profile';
import Budget from '@pages/budget';
import Transaction from '@pages/transaction';
import Account from '@pages/profile/account';
import ProfileEdit from '@pages/profile/profileEdit';

const tabs = [
  {
    path: 'Home',
    component: Home,
  },
  {
    path: 'Transaction',
    component: Transaction,
  },
  {
    path: 'Budget',
    component: Budget,
  },
  {
    path: 'Profile',
    component: Profile,
  },
];

const nav = [
  // {
  //   path: 'Splash',
  //   component: Splash,
  // },
  // {
  //   path: 'Signin',
  //   component: Signin,
  // },
  // {
  //   path: 'Signup',
  //   component: Signup,
  // },
  // {
  //   path: 'Forgotpass',
  //   component: Forgotpass,
  // },
  // {
  //   path: 'OtpAuth',
  //   component: OtpAuth,
  // },
  {
    path: 'AuthEmail',
    component: AuthEmail,
  },
  {
    path: 'NavTabs',
    component: NavTabs,
  },
  {
    path: 'Account',
    component: Account,
  },
  {
    path: 'ProfileEdit',
    component: ProfileEdit,
  },
];

export {nav, tabs};
