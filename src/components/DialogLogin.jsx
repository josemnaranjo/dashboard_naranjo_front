import { Button, Dialog, Flex } from "@radix-ui/themes";
import { BsBoxArrowInRight } from "react-icons/bs";
import Loginform from "../components/Loginform";

const DialogLogin = () => {
  const cardStyle = {
    backgroundColor: "rgba(55, 75, 229, 0.97)",
    color: "white",
    width: "fit-content",
    padding: "15px",
  };

  const handleSubmit = (values) => {console.log(values)};
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button variant="solid">
            <BsBoxArrowInRight />
            login
          </Button>
        </Dialog.Trigger>

        <Dialog.Content style={cardStyle}>
          <Loginform handleSubmit={handleSubmit} />
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default DialogLogin;
