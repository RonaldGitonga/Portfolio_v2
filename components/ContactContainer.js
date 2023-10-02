import { Container } from "@chakra-ui/react";

const ContactContainer = ({ children }) => {
  return (
    <Container textAlign="center" fontSize="2xl" p="1em">
      {children}
    </Container>
  );
};
export default ContactContainer;
