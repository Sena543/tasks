const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const Employees = require("./model/employee");
const Department = require("./model/department");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
	.connect("mongodb+srv://senanu:senanu@employee.bpbvjng.mongodb.net/?retryWrites=true&w=majority", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Database connected");
	})
	.catch((err) => {
		console.log(err);
	});

app.get("/", (req, res) => {
	console.log(Employees);
	res.send("Hello there!");
});

app.post("/checkdraw", (req, res) => {
	// console.log(req.body)
	const { userSelection } = req.body;
	const machineDraw = [1, 2, 3, 4, 5];

	if (userSelection.toString() !== machineDraw.toString()) {
		res.json({ message: "Sorry! better luck next time" });
		return;
	}

	res.json({ message: "Winner winner chicken dinner" });
});

app.get("/get_employees", async (req, res) => {
	try {
		const getEmployees = await Employees.find().select("departmentID salary");
		res.json({ getEmployees, count: getEmployees.length });
	} catch (error) {
		console.log(error);
	}
});

app.get("/get_employees_department_data", async (req, res) => {
	try {
		const pipeline = [
			{ $group: { _id: "$_id", department_count: "$department_count", departmentID: { $sum: 1 } } },
		];
		const getEmployees = await Employees.aggregate(pipeline);
		res.json({ getEmployees });
	} catch (error) {
		console.log(error);
	}
});

app.get("/get_departments", async (req, res) => {
	try {
		const get_department = await Department.find();

		res.json(get_department);
	} catch (error) {
		console.log(error);
	}
});

app.post("/addemployee", async (req, res) => {
	const { employeeID, employeeName, departmentID, salary } = req.body;

	try {
		const createEmployee = await Employees.create({
			employeeID,
			employeeName,
			departmentID,
			salary,
		});
		await createEmployee.save();

		if (createEmployee) {
			res.json({ message: "Success" });
			return;
		}
	} catch (error) {
		console.error(error);
	}
});

app.post("/add_department", async (req, res) => {
	const { departmentName, departmentID, departmentLocation } = req.body;

	try {
		const createDepartment = await Department.create({
			departmentName,
			departmentID,
			departmentLocation,
		});
		await createDepartment.save();

		if (createDepartment) {
			res.json({ message: "Success", createDepartment });
			return;
		}
	} catch (error) {
		console.error(error);
	}
});

app.listen(3000, () => {
	console.log(`Running on localhost:${3000}`);
});