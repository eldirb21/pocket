const datas = {
  types: [
    {label: 'Income', value: '1'},
    {label: 'Expenses', value: '2'},
  ],
  categories: [
    {label: 'Penghasilan', value: '1'},
    {label: 'Belanja', value: '2'},
    {label: 'Ongkos', value: '3'},
    {label: 'Transfer', value: '4'},
    {label: 'Education', value: '5'},
  ],
  paymentMethod: [
    {label: 'Bank BCA', value: '1'},
    {label: 'Bank Jago', value: '2'},
    {label: 'Bank BRI', value: '3'},
    {label: 'Bank Permata', value: '4'},
    {label: 'Ovo', value: '5'},
    {label: 'Gopay', value: '6'},
    {label: 'Others', value: '7'},
  ],
  PayloadTransaction: {
    category: '',
    type: '',
    subject: '',
    desc: '',
    payment_method: '',
    payment_date: '',
    total_with_fee: '',
    fee_bank: '',
    nominal: '',
    date: new Date(),
  },
  PayloadBudget: {
    category: '',
    type: '',
    desc: '',
    nominal: 0,
    budgetExhausted: 0,
  },
};
export default datas;
