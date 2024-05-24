const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
app.use(express.json());

const FHIR_SERVER = "http://localhost:8080/fhir";

// สร้าง route สำหรับเพิ่มผู้ป่วย
app.post("/add-patient", async (req, res) => {
  const newPatient = req.body;

  try {
    const response = await axios.post(`${FHIR_SERVER}/Patient`, newPatient);
    console.log("Add Patient:", JSON.stringify(newPatient, null, 2));
    res.status(201).send(response.data);
  } catch (error) {
    console.error("Error adding patient:", error);
    res.status(500).send(error.response ? error.response.data : error.message);
  }
});

// สร้าง route สำหรับดึงข้อมูลผู้ป่วยทั้งหมด
app.get("/api/patients", async (req, res) => {
  try {
    const response = await axios.get(`${FHIR_SERVER}/Patient`);
    console.log("Fetch Patients:", JSON.stringify(response.data, null, 2));
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching patients:", error);
    res.status(500).send(error.response ? error.response.data : error.message);
  }
});

// สร้าง route สำหรับลบผู้ป่วย
app.delete("/api/patient/:id", async (req, res) => {
  const patientId = req.params.id;

  try {
    await axios.delete(`${FHIR_SERVER}/Patient/${patientId}`);
    console.log("Delete Patient:", patientId);
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting patient:", error);
    res.status(500).send(error.response ? error.response.data : error.message);
  }
});

// สร้าง route สำหรับสร้างคำร้องการตรวจและส่งไปยัง FHIR server
app.post("/api/orders", async (req, res) => {
  const orderData = req.body;

  try {
    const response = await axios.post(
      `${FHIR_SERVER}/ServiceRequest`,
      orderData
    );
    console.log(
      "Send Order to FHIR Server:",
      JSON.stringify(orderData, null, 2)
    );
    res.status(201).send(response.data);
  } catch (error) {
    console.error("Error sending order to FHIR Server:", error);
    res.status(500).send(error.response ? error.response.data : error.message);
  }
});

// Serve React app
app.use(express.static(path.join(__dirname, "../build")));

// React route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(3000, () => {
  console.log("Hospital server listening on port 3000");
});
