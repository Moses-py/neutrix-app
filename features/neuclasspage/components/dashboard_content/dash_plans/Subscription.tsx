import FreePlan from "./FreePlan";
import PremiumPlan from "./PremiumPlan";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface SubscriptionTabsProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function SubscriptionTabs(props: SubscriptionTabsProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function subscriptionTabProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Subscription = ({ data }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { courses } = data;
  const free = courses.filter((course) => {
    return course.status === "free";
  });
  const premium = courses.filter((course) => {
    return course.status === "premium";
  });
  return (
    <>
      <div className="header pb-[2rem]">
        <h1 className="text-d_main uppercase text-sm font-bold font-secondary">
          My Plans
        </h1>
      </div>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", paddingY: "1rem" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Free" {...subscriptionTabProps(0)}></Tab>
            <Tab label="Premium" {...subscriptionTabProps(1)} />
          </Tabs>
        </Box>
        <SubscriptionTabs value={value} index={0}>
          <FreePlan plans={free} />
        </SubscriptionTabs>
        <SubscriptionTabs value={value} index={1}>
          <PremiumPlan plans={premium} />
        </SubscriptionTabs>
      </Box>
    </>
  );
};

export default Subscription;
