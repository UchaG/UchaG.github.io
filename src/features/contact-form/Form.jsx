import { Box, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

const initialValues = {
  name: "",
  message: "",
  email: "",
};

const userSchema = yup.object().shape({
  name: yup.string().required("required"),
  email: yup.string().email("Invalid email").required("required"),
  message: yup.string().required("required"),
});

export const Form = ({ setIsSubmited }) => {
  const handleFormSubmit = (data) => {
    emailjs
      .send("service_fvkjuiv", "template_3br4e8h", data, "AKLK6yk8n_wTBkc3-")
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsSubmited(true));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={userSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridGap: "30px",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              }}
            >
              <TextField
                fullwidth="true"
                variant="outlined"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{}}
              />
              <TextField
                fullwidth="true"
                variant="outlined"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
            </Box>
            <TextField
              fullwidth="true"
              multiline={true}
              rows={10}
              variant="outlined"
              type="text"
              label="Message"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.message}
              name="message"
              error={!!touched.message && !!errors.message}
              helperText={touched.message && errors.message}
              sx={{ marginTop: "30px" }}
            />
            <Button
              variant="outlined"
              type="submit"
              sx={{
                fontSize: "18px",
                borderRadius: "24px",
                height: "fit-content",
                marginTop: "30px",
                alignSelf: "center",
              }}
            >
              SUBMIT
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};
