import {doLogon} from '@pages/auth/auth.action';

const mapStateToProps = (state: any) => ({
  logon: state.authReducers,
});

const mapDispatchToProps = {
  doLogon,
};

export {mapStateToProps, mapDispatchToProps};
