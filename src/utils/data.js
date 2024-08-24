const datas = {
  transaction: [
    {
      id: 1,
      category: 'Income', //Income|Expenses
      type: 'Gaji', //Shopee|Transfer|Tarik|Ovo|Gojek|Grab|Others|Gaji|Bonus|Insentif|Freelance
      subject: 'Gaji dari kantor',
      desc: 'Buy some grocery',
      nominal: 12000000,
      date: new Date(),
    },
    {
      id: 2,
      category: 'Expences',
      type: 'Grab',
      subject: 'Ongkos pulang dari kantor',
      desc: 'Buy some grocery',
      nominal: 25000,
      date: new Date(),
    },
  ],
  budget: [
    {
      id: 1,
      category: 'Transport',
      nominal: 12000000,
      budgetExhausted: 1000000,
    },
    {
      id: 2,
      category: 'Shopping',
      nominal: 25000,
      budgetExhausted: 30000,
    },
    {
      id: 3,
      category: 'Education',
      nominal: 752000,
      budgetExhausted: 752000,
    },
  ],
};
export default datas;
