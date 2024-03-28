import { Field, Form, Formik } from 'formik';
import {
  BookingContainer,
  FormHeader,
  FormSecondaryText,
  InputsGroup,
  SendButton,
} from './Booking.styled';

const Booking = () => {
  const initialValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
  };

  const handleSubmit = values => {
    window.location.reload();
  };

  return (
    <BookingContainer>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form autoComplete="off" noValidate>
          <FormHeader>Book your campervan now</FormHeader>

          <FormSecondaryText>
            Stay connected! We are always ready to help you.
          </FormSecondaryText>

          <InputsGroup>
            <Field type="text" name="name" id="name" placeholder="Name" />

            <Field type="email" name="email" id="email" placeholder="Email" />

            <Field type="date" name="date" id="date" />

            <Field as="textarea" name="comment" id="comment" rows="5" />
          </InputsGroup>

          <SendButton type="submit">Send</SendButton>
        </Form>
      </Formik>
    </BookingContainer>
  );
};

export default Booking;
