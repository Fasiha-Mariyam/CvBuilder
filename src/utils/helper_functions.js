import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";


export const validateName = (name) => {
  const regex = /^(?![0-9])[a-zA-Z]+$/;
  return regex.test(String(name));
};

export const validateEmail = (email) => {
  var regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

export const getStorageItem = async (key) => {
  try {
    let item = await localStorage.getItem(key);
    return item ? JSON.parse(item) : item;
  } catch (e) {
    console.log("Error in getting key -->", e);
    return null;
  }
};

export const setStorageItem = async (key, value) => {
  try {
   await localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.log("Error in setting key -->", e);
    return null;
  }
};

export const downloadCV = (templateRef) => {
  console.log("working");
  if (templateRef.current) {
    html2canvas(templateRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg");

      const pdf = new jsPDF("p", "mm", "a4");
      const width = 210; // A4 width in mm
      const height = 297; // A4 height in mm
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.save("cv.pdf");
    });
  } else {
    console.error("No element found to capture");
  }
};