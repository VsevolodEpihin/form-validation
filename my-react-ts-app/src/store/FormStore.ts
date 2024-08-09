import { makeAutoObservable, observable } from 'mobx';
import Yup from 'yup';

import { FormField } from '../types';
import validationSchema from '../helpers/validationSchema';

class FormStore {
  firstName = '';
  lastName = '';
  day = '';
  month = '';
  year = '';
  numberCard = '';
  cvv = '';
  phone = '';
  email = '';
  
  errors: Record<FormField, string> = observable({
    firstName: '',
    lastName: '',
    day: '',
    month: '',
    year: '',
    numberCard: '',
    cvv: '',
    phone: '',
    email: ''
  });

  constructor(){
    makeAutoObservable(this)
  }

  setInputValue(field: FormField, value: string) {
    console.log(this)
    if (field in this) {
      this[field] = value;
    } else {
      console.warn(`Field ${field} does not exist on FormStore.`);
    }
  }

  validateInputValue(field: FormField) {
    validationSchema.validateAt(field, { [field]: this[field] })
      .then(() => {
        this.errors[field] = '';
      })
      .catch((err: Yup.ValidationError) => {
        this.errors[field] = err.message
      })
  }

  reset() {
    this.firstName = '';
    this.lastName = '';
    this.day = '';
    this.month = '';
    this.year = '';
    this.numberCard = '';
    this.cvv = '';
    this.phone = '';
    this.email = '';
    this.errors = {
      firstName: '',
      lastName: '',
      day: '',
      month: '',
      year: '',
      numberCard: '',
      cvv: '',
      phone: '',
      email: ''
    };
  }
  
  isFormValid() {
    console.log(this)
    let errors = Object.values(this.errors).every(error => error === '');
    let emptyValues = Object.values({
      firstName: this.firstName,
      lastName: this.lastName,
      day: this.day,
      month: this.month,
      year: this.year,
      numberCard: this.numberCard,
      cvv: this.cvv,
      phone: this.phone,
      email: this.email,
    }).every(elem => elem !== '');

    return errors && emptyValues;
  }
}

export const formStore = new FormStore();
