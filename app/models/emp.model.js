var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EmployeeSch = new Schema({
  employee_id: String,
  first_name: String,
  middle_name: String,
  last_name: String,
  prior_last_name: String,
  suffix: String,
  address_1: String,
  address_2: String,
  city: String,
  state: String,
  zip_code: String,
  country: String,
  disability: String,
  ethnicity: String,
  gender: String,
  smoker: String,
  veteran: String,
  birth_date: Date,
  employee_status_effective_date: String,
  employee_status: String,
  hire_date: Date,
  rehire_date: Date,
  termination_date: String,
  user_account_deactivation_date: String,
  department: String,
  division: String,
  employment_type: String,
  is_supervisor_reviewer: String,
  job_title: String,
  position: String,
  is_deleted: Boolean,
  cost_code: Number,
  annual_salary: Number,
  eeo_class: Number
});
module.exports = mongoose.model('employees', EmployeeSch);