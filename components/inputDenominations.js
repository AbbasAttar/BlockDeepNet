import React, { useState } from "react";
import { Input, Dropdown } from "semantic-ui-react";

export default function InputDenomination(props) {
  const [denomination, setDenomination] = useState("ether");
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
        props.setValue(event.target.value, denomination);
      }}
      selection
      label={
        <Dropdown
          value={denomination}
          compact
          selection
          options={[
            {
              key: "ether",
              text: "ether",
              value: "ether",
              onClick: () => {
                setDenomination("ether");
                props.setValue(value, "ether");
              },
            },
            {
              key: "finney",
              text: "finney",
              value: "finney",
              onClick: () => {
                setDenomination("finney");
                props.setValue(value, "finney");
              },
            },
            {
              key: "gwei",
              text: "gwei",
              value: "gwei",
              onClick: () => {
                setDenomination("gwei");
                props.setValue(value, "gwei");
              },
            },
            {
              key: "wei",
              text: "wei",
              value: "wei",
              onClick: () => {
                setDenomination("wei");
                props.setValue(value, "wei");
              },
            },
          ]}
        />
      }
      labelPosition="right"
    />
  );
}
