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
	const { userSelection } = req.body;
	const machineDraw = [1, 2, 3, 4, 5];

	if (userSelection.toString() !== machineDraw.toString()) {
		res.json({ message: "Sorry! better luck next time" });
		return;
	}

	res.json({ message: "Winner winner chicken dinner" });
});

app.get("/get_employees_department_data", async (req, res) => {
	try {
		const pipeline = [
			[
				{
					$group: {
						_id: "$departmentID",
						department_Count: {
							$count: {},
						},
						salary_sum: {
							$sum: "$salary",
						},
					},
				},
				{
					$sort: {
						documentID: 1,
					},
				},
			],
		];
		const getEmployeesDepartmentData = await Employees.aggregate(pipeline);
		res.json(getEmployeesDepartmentData);
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

app.listen(5173, () => {
	console.log(`Running on localhost:${5173}`);
});
