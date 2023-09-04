import { Button, Dialog, Flex, TextField } from "@radix-ui/themes";
import { BsBoxArrowInRight, BsBoxArrowInLeft } from "react-icons/bs";

const DialogLogin = ({ handleLogin }) => {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button variant="solid">
            <BsBoxArrowInRight />
            Login
          </Button>
        </Dialog.Trigger>

        <Dialog.Content
          style={{
            backgroundColor: "rgba(55, 75, 229, 0.97)",
            color: "white",
          }}
        >
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
                <TextField.Input />
              </label>
            </Flex>

            <Flex align="center" gap="3">
              <Dialog.Close>
                <Button
                  variant="outline"
                  style={{
                    color: "white",
                    borderColor: "rgba(34, 54, 214, 1)",
                  }}
                >
                  aceptar
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button style={{ backgroundColor: "rgba(255, 191, 26, 0.85)" }}>
                  cancelar
                </Button>
              </Dialog.Close>
            </Flex>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default DialogLogin;
