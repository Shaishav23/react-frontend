import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

const AddUpdateEmployeeComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [hireDate, setHireDate] = useState("");

  const history = useNavigate();
  const { id } = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = {
      name,
      email,
      phone,
      position,
      company,
      department,
      salary,
      hireDate,
    };
    if (id) {
      EmployeeService.updateEmployee(id, employee)
        .then((response) => {
          window.location.href = "/employees";
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EmployeeService.createEmployee(employee)
        .then((response) => {
          console.log(response.data);
          history("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setPosition(response.data.position);
        setCompany(response.data.company);
        setDepartment(response.data.department);
        setSalary(response.data.salary);
        setHireDate(response.data.hireDate);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2>Update Employee</h2>;
    } else {
      return <h2> Add Employee</h2>;
    }
  };
  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Name :</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email :</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Phone-no :</label>
                  <input
                    type="number"
                    placeholder="Enter your phone number"
                    name="phone"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Position :</label>
                  <input
                    type="text"
                    placeholder="Enter your current Position"
                    name="position"
                    className="form-control"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Company :</label>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    name="companyName"
                    className="form-control"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Department :</label>
                  <input
                    type="text"
                    placeholder="Enter your Department"
                    name="department"
                    className="form-control"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Salary :</label>
                  <input
                    type="number"
                    placeholder="Enter your current salary"
                    name="salary"
                    className="form-control"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Hire Date :</label>
                  <input
                    type="date"
                    placeholder="Enter the date you were hired"
                    name="hideDate"
                    className="form-control"
                    value={hireDate}
                    onChange={(e) => setHireDate(e.target.value)}
                  ></input>
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateEmployee(e)}
                >
                  Submit
                </button>
                <Link to="/employees" className="btn btn-danger ms-2">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUpdateEmployeeComponent;
