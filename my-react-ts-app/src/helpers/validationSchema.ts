import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().min(2,'Too short,min = 2').max(40,'Too Long,Max = 40!').required('Required'),
  lastName: Yup.string().min(1,'Too short,min = 1').max(40, 'Too Long,Max = 40!').required('Required'),
  day: Yup.string().matches(/^\d{1,2}$/, 'Invalid day for current month').required('Required'),
  month: Yup.string().oneOf(['01','02','03','04','05','06','07','08','09','10','11','12'], `current month doesn't exist and use format '01'`).required('Required'),
  year: Yup.number().min(new Date().getFullYear()-100,'you died').max(new Date().getFullYear()-18, `you very little`).required('Required'),
  numberCard: Yup.string().matches(/^\d{4}-\d{4}-\d{4}-\d{4}$/, 'Invalid card Number'),
  cvv: Yup.string().matches(/^\d{3}$/, 'CVV length = 3'),
  phone: Yup.string().matches(/^\+?\d\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/, 'Invalid Phone Number'),
  email: Yup.string().email('Invalid Email').required('Required')
}).test('is-valid-date', 'Invalid date', (values) => {
  const {day,month,year} = values;
  const date = new Date(`${year}-${month}-${day}`)

  if(isNaN(date.getTime())) return false

  return (
    date.getDate() === parseInt(day) &&
    date.getMonth() + 1 === parseInt(month) &&
    date.getFullYear() === parseInt(String(year))
  )
})

export default validationSchema;
