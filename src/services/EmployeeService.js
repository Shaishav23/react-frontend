import axios from "axios";

const EMPLOYEE_BASE_API_URL = "http://localhost:4000/api/employees";

class EmployeeService {
  getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_API_URL);
  }

  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_BASE_API_URL + "/" + employeeId);
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_BASE_API_URL, employee);
  }

  updateEmployee(employeeId, employee) {
    return axios.patch(EMPLOYEE_BASE_API_URL + "/" + employeeId, employee);
  }

  deleteEmployee(employeeId) {
    return axios.delete(EMPLOYEE_BASE_API_URL + "/" + employeeId);
  }
}

export default new EmployeeService();
