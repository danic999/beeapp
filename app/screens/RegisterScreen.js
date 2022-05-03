import React from "react";
import { Formik } from "formik";
import { StyleSheet, Text, View, TextInput } from "react-native";

import Heading from "../components/Heading";
import ButtonBC from "../components/ButtonBC";
import Title from "../components/Title";
import ErrorMessage from "../components/ErrorMessage";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Prekratko!")
    .max(50, "Predugo!")
    .required("Unesite svoje ime!"),

  lastName: Yup.string()
    .min(2, "Prekratko!")
    .max(50, "Predugo!")
    .required("Unesite svoje prezime"),

  email: Yup.string().email().required("Unesite ispravan e-mail"),
  date: Yup.string().required("Unesite datum rođenja"),

  pin: Yup.string()
    .required("Unesite lozinku")
    .min(4, "Lozinka je prekratka, molimo unesite bar 4 karaktera"),
});

const RegisterScreen = () => {
  return (
    <View style={styles.body}>
      <Heading />
      <Title></Title>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          date: "",
          pin: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={SignUpSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <View style={styles.view3}>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("firstName")}
                placeholder="Ime"
                onBlur={() => setFieldTouched("firstName")}
              />
              <ErrorMessage
                error={errors.firstName}
                visible={touched.firstName}
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange("lastName")}
                onBlur={() => setFieldTouched("lastName")}
                placeholder="Prezime"
              />
              <ErrorMessage
                error={errors.lastName}
                visible={touched.lastName}
              />
              <TextInput
                style={styles.input}
                onBlur={() => setFieldTouched("email")}
                placeholder="Email"
                onChangeText={handleChange("email")}
              />
              <ErrorMessage error={errors.email} visible={touched.email} />

              <TextInput
                style={styles.input}
                placeholder="Datum rođenja"
                onBlur={() => setFieldTouched("date")}
                onChangeText={handleChange("date")}
              />
              <ErrorMessage error={errors.date} visible={touched.date} />

              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Pin"
                onBlur={() => setFieldTouched("pin")}
                onChangeText={handleChange("pin")}
              />
              <ErrorMessage error={errors.pin} visible={touched.pin} />
            </View>
            <View style={styles.button}>
              <ButtonBC title={"Registracija"} onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "relative",
    bottom: 120,
  },
  text: {
    color: "#0E0B26",
    fontSize: 60,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  text1: {
    fontSize: 15,
    margin: 20,
    paddingTop: 15,
    textAlign: "center",
  },
  view1: {
    paddingVertical: 20,
  },
  text2: {
    color: "#ffc600",
  },

  view3: {
    flex: 3,
  },
  input: {
    height: 48,
    width: 320,
    marginHorizontal: 20,
    marginVertical: 7,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#6c6a6a",
    paddingLeft: 15,
    marginBottom: 10,
  },
});

export default RegisterScreen;
