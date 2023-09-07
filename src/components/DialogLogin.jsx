import { Button, Dialog, Flex, TextField } from "@radix-ui/themes";
import { BsBoxArrowInRight, BsBoxArrowInLeft } from "react-icons/bs";

const DialogLogin = ({ handleLogin }) => {
  const cardStyle = {
    backgroundColor: "rgba(55, 75, 229, 0.97)",
    color: "white",
  };

  const aceptButtonStyle = {
    color: "white",
  };
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
          <Flex gap="5">
            <Flex direction="column">
              <label>
                <p>rut</p>
                <TextField.Input />
              </label>
            </Flex>
            <Flex direction="column">
              <label>
                <p>constraseña</p>
                <TextField.Input type="password" />
              </label>
            </Flex>

            <Flex align="center" gap="3">
              <Dialog.Close>
                <Button color="amber" style={aceptButtonStyle}>
                  aceptar
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button >cancelar</Button>
              </Dialog.Close>
            </Flex>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default DialogLogin;
