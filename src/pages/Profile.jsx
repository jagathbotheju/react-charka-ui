import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  chakra,
} from "@chakra-ui/react";
import {
  EmailIcon,
  ChatIcon,
  StarIcon,
  CheckCircleIcon,
  WarningIcon,
} from "@chakra-ui/icons";

const Profile = () => {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple" }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email : jagath@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Minim elit excepteur id veniam aute in laboris veniam enim
              adipisicing minim id minim incididunt.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Commodo non culpa aute consectetur nisi ipsum exercitation
              excepteur esse magna consequat commodo anim adipisicing.
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Enim consectetur velit commodo sit mollit laboris.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Enim consectetur velit commodo sit mollit laboris.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Enim consectetur velit commodo sit mollit laboris.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Enim consectetur velit commodo sit mollit laboris.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Profile;
