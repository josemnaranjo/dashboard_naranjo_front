import { Box, Button, Card, Flex, Text, Avatar } from "@radix-ui/themes";
import "./App.css";

function App() {
  return (
    <div className="grid h-screen place-items-center ">
      <h1 className="text-3xl font-bold underline ">Hola Mundo!</h1>
      <Button size="4" variant="classic">
        Botón
      </Button>
      <Card>
        <Flex gap={"3"} align={"center"}>
          <Avatar
            size="3"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="T"
          />
          <Box>
            <Text as="div" weight="bold" className="text-xl">
              Texto de prueba en Card
            </Text>
            <Text as="div" size="2" weight="gray">
              subtitulo
            </Text>
          </Box>
        </Flex>
      </Card>
      
    </div>
  );
}

export default App;
