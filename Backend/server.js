const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());

app.use("/assets", express.static("assets"));


const jobsFilePath = path.join(__dirname, "jobs.json");
const usersFilePath = path.join(__dirname, "users.json");

const readJobs = () => {
    if (!fs.existsSync(jobsFilePath)) return [];
    const data = fs.readFileSync(jobsFilePath, "utf8");
    return JSON.parse(data);
};

const writeJobs = (jobs) => {
    fs.writeFileSync(jobsFilePath, JSON.stringify(jobs, null, 2), "utf8");
};

const readUsers = () => {
    if (!fs.existsSync(usersFilePath)) return [];
    const data = fs.readFileSync(usersFilePath, "utf8");
    return JSON.parse(data);
};

const writeUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), "utf8");
};

app.get("/", (req, res)=>{
    res.json({message: "Welcome to JOBACT", status: "Success"});
})


app.post("/register", (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            res.status(400);
            throw new Error("Username and password are required");
        }

        const users = readUsers();
        if (users.some(user => user.username === username)) {
            res.status(400);
            throw new Error("User already exists");
        }

        users.push({ username, password });
        writeUsers(users);

        res.json({ message: "Registration successful", status: "success" });
    } catch (error) {
        next(error);
    }
});


app.post("/signin", (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            res.status(400);
            throw new Error("Username and password are required");
        }

        const users = readUsers();
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            res.json({ message: "Sign-in successful", status: "success", token: "mock_token_123" });
        } else {
            res.status(401);
            throw new Error("Invalid credentials");
        }
    } catch (error) {
        next(error);
    }
});


app.get("/jobs", (req, res, next) => {
    try {
        const jobs = readJobs();
        if (!jobs.length) throw new Error("No job listings available");
        res.json(jobs);
    } catch (error) {
        next(error);
    }
});


app.get("/jobs/:id", (req, res) => {
    const jobId = parseInt(req.params.id);
    const jobs = readJobs();
    const job = jobs.find(job => job.id === jobId);

    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
});


app.post("/jobs", (req, res, next) => {
    try {
        const jobs = readJobs();
        const newJob = { id: jobs.length + 1, ...req.body };
        jobs.push(newJob);
        writeJobs(jobs);
        res.status(201).json(newJob);
    } catch (error) {
        next(error);
    }
});

app.delete("/jobs/:id", (req, res, next) => {
    try {
        let jobs = readJobs();
        const jobId = parseInt(req.params.id);
        jobs = jobs.filter(job => job.id !== jobId);
        writeJobs(jobs);
        res.json({ message: "Job deleted successfully" });
    } catch (error) {
        next(error);
    }
});


app.get("/about", (req, res, next) => {
    try {
        res.json({
            title: "About Us",
            description: "This is a job listing website where users can find their dream jobs.",
            contactEmail: "contact@jobportal.com",
        });
    } catch (error) {
        next(error);
    }
});

app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(res.statusCode === 200 ? 500 : res.statusCode).json({
        error: err.message || "Internal Server Error",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
