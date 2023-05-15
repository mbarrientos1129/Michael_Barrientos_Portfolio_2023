import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import * as emailjs from "emailjs-com";
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";
import { useState } from "react";

const ContactMeSection = () => {
  const [buttonState, setButtonState] = useState('Send Message')
  const { onOpen, type, message, onClose } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      from_name: "", //user name
      to_name: process.env.YOUR_EMAIL, //email id of admin
      reply_to: "", //user email
      subject: "", //subject of email
      message: "" //message of email
    },

    validationSchema: Yup.object({
      from_name: Yup.string().required("* Name field is required."),
      reply_to: Yup.string().email("Invalid email address").required("Required"),
      subject: Yup.string().min(10, "* Must be at least 10 characters, and is required.").required("Required"),
      message: Yup.string().required("* Message field is required.")
    }),
    

    onSubmit: (values, { setSubmitting, resetForm }) => {

      try {
        emailjs.send(process.env.REACT_APP_FORMIK_SERVICE_ID, process.env.REACT_APP_FORMIK_TEMPLATE_ID, values, process.env.REACT_APP_FORMIK_USER_ID)
          .then(() => {
            sentMessage.classList.add('success');
            sentMessage.innerHTML = CONTACT_ERROR.success;
            setButtonState('Send Email'); 
            onOpen("success", "Message sent successfully!")
            setSubmitting(false);
            resetForm();
          });
      }
      catch {
        sentMessage.classList.add('error');
        sentMessage.innerHTML = CONTACT_ERROR.error;
        setButtonState('Send Email');
        onOpen("error", "Failed to send message. Please try again later.")
        setSubmitting(false);
      }
    },

  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={`expandable ${!!formik.errors.from_name && formik.touched.from_name ? 'show' : ''}`}>
                <FormLabel htmlFor="from_name">Name</FormLabel>
                <Input
                  id="from_name"
                  name="from_name"
                  type="text"
                  autoComplete="off"
                  placeHolder="YOUR NAME"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  // {...formik.getFieldProps("from_name")}
                />
                <FormErrorMessage>{formik.errors.from_name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={`expandable ${!!formik.errors.reply_to && formik.touched.reply_to ? 'show' : ''}`}>
                <FormLabel htmlFor="reply_to">Email Address</FormLabel>
                <Input
                  id="reply_to"
                  name="reply_to"
                  type="email"
                  placeHolder="YOUR EMAIL"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  value={formik.values.reply_to}
                  // {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.reply_to}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={`expandable ${!!formik.errors.subject && formik.touched.subject ? 'show' : ''}`}>
                <FormLabel htmlFor="subject">Email Subject</FormLabel>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  autoComplete="off"
                  placeHolder="SUBJECT"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                  // {...formik.getFieldProps("subject")}
                />
              </FormControl>
              <FormControl isInvalid={`expandable ${!!formik.errors.message && formik.touched.message ? 'show' : ''}`}>
                <FormLabel htmlFor="message">Your message</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  height={250}
                  placeHolder="YOUR MESSAGE"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  // {...formik.getFieldProps("message")}
                />
                <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
              </FormControl>
              
              <Button _disabled={formik.isSubmitting} type="submit" colorScheme="purple" width="full">
                <span>{buttonState}</span>
              </Button>
            </VStack>
          </form>
          {formik.isSubmitting && (
                <Alert status={type} varient="subtle" justifyContent="center" mb={4} rounded="md" onclose={onClose} color={"green"}>
                  <AlertIcon />
                  Message Sent!
                </Alert>
              )}
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;